<template lang="pug">
ConfirmDialog

CheckoutLayout(
	ref="$CheckoutLayout"
	:loading="isLoading"
	:step="currentStep"
	@submit="handleSubmit"
)
	template(#resume)
		ResumeComponent(:handle-show-summary="$CheckoutLayout.showSummary")

	template(#identity)
		PayerComponent(
			ref="$PayerComponent"
			:handle-check-purchase="checkEmail"
		)

	template(#method)
		MethodComponent(
			type="checkout"
			:methods="invoice.methods"
		)
		router-view

	template(#summary)
		SummaryComponent

	template(#status)
		PaymentStatusComponent(
			v-if="payment?._id || currentStep === 'unavailable'"
			:handle-cancel-payment="handleCancelPayment"
			:handle-payment-expired="handlePaymentExpired"
		)
</template>

<script setup>
import parsePhoneNumber from 'libphonenumber-js';
import { useConfirm } from 'primevue/useconfirm';
import ConfirmDialog from 'primevue/confirmdialog';
import { useMutation, useQuery, useLazyQuery } from '@vue/apollo-composable';
import { i18n } from '@/i18n';
import { useLogo, useWatchPix } from '@/composables/utils';
import { useCreditCard, useCreditCardForm } from '@/composables/creditCard';
import { useValidations } from '@/composables/validations';
import ResumeComponent from '@/components/ResumeComponent.vue';
import PayerComponent from '@/components/PayerComponent.vue';
import MethodComponent from '@/components/MethodComponent.vue';
import SummaryComponent from '@/components/SummaryComponent.vue';
import PaymentStatusComponent from '@/components/PaymentStatusComponent.vue';
import {
	publicFetchCheckout,
	publicCreateCheckoutPayment,
	publicCancelCheckoutPayment,
	publicFetchStudentCheckoutPurchase
} from '@/graphql';
import {
	CheckoutStatus,
	CountryIsoCode,
	InvoiceItemType,
	LegalPersonType,
	PaymentMethod,
	PaymentStatus,
	PurchaseStatus,
	TaxIdType
} from '@/gql.ts';

const $CheckoutLayout = ref();
const $PayerComponent = ref();
const router = useRouter();
const route = useRoute();
const logo = useLogo();
const confirmDialog = useConfirm();
const { validateForm } = useValidations();
const { getCardHash } = useCreditCard();
const checkoutSharedId = computed(() => route.params.id);
const methods = {
	'checkout-method-credit-card': PaymentMethod.CreditCard,
	'checkout-method-bank-slip': PaymentMethod.BankSlip,
	'checkout-method-pix': PaymentMethod.Pix
};
const currentPaymentMethod = computed(() => methods[route.name]);
const magicToken = ref();

// Fetch Checkout
const {
	result: checkoutResult,
	loading: loadingCheckout,
	onResult: onFetchCheckout,
	refetch: refetchCheckout
} = useQuery(publicFetchCheckout, { checkoutSharedId: checkoutSharedId.value });
const status = ref(null);
const payment = ref(null);
const paymentMethodsConfig = ref(null);
const checkoutData = computed(() => checkoutResult.value?.publicFetchCheckout);
const products = computed(() => checkoutData.value.invoiceItems.map((item) => {
	const isProduct = item?.type === InvoiceItemType.Product;

	if (isProduct) {
		return {
			type: item.type,
			name: item.product.name,
			description: item.product.description,
			quantity: item.quantity,
			amount: item.product.prices.find((price) => price._id === item.productPrice)?.billingConfig.unitAmount * item.quantity
		};
	}

	return {
		type: item.type,
		name: item.name,
		quantity: item.quantity,
		amount: item.amount * item.quantity
	};
}) || []);
const discounts = computed(() => checkoutData.value?.invoiceDiscounts || []);
const invoice = computed(() => {
	const amount = checkoutData.value?.invoiceTotalAmount || 0;
	const subtotal = checkoutData.value?.invoiceItemsAmount || 0;
	const totalDiscount = checkoutData.value?.invoiceDiscountedAmount || 0;
	const total = checkoutData.value?.invoiceTotalAmount || 0;
	const content = {
		id: checkoutData.value?._id,
		createdAt: checkoutData.value?.sharedCreatedAt,
		updatedAt: checkoutData.value?.updatedAt,
		status: checkoutData.value?.status,
		expirationDate: checkoutData.value?.expirationDate,
		methods: paymentMethodsConfig.value || {
			creditCard: checkoutData.value?.paymentMethodsConfig.creditCard,
			bankSlip: checkoutData.value?.paymentMethodsConfig.bankSlip,
			pix: checkoutData.value?.paymentMethodsConfig.pix
		},
		currency: checkoutData.value?.currency,
		discounts: totalDiscount,
		subtotal,
		total,
		amount
	};

	if (content.methods.creditCard) {
		content.creditCard = checkoutData.value?.paymentMethodsConfig.creditCard;
	}

	if (content.methods.bankSlip) {
		content.bankSlip = checkoutData.value?.paymentMethodsConfig.bankSlip;
	}

	return content;
});

// Create Payment
const {
	addCard,
	saveCard,
	form: formCreditCard,
	$v: $vCreditCard
} = useCreditCardForm(invoice.value);
const {
	mutate: createPayment,
	loading: loadingCreatePayment,
	onDone: onCreatedPayment,
	onError: onPaymentFail
} = useMutation(publicCreateCheckoutPayment);

// Cancel Payment
const {
	mutate: cancelPayment,
	loading: loadingCancelPayment
} = useMutation(publicCancelCheckoutPayment);

// General
const allowLoader = ref(true);
const isLoading = computed(() => allowLoader.value && (loadingCheckout.value || loadingCreatePayment.value || loadingCancelPayment.value));
const currentStep = ref('initial');

// Purchase
const {
	load: loadPurchase,
	refetch: refetchPurchase,
	onResult: onResultPurchase
} = useLazyQuery(publicFetchStudentCheckoutPurchase);
const { watchPix, clearPixWatcher } = useWatchPix(refetchPurchase, allowLoader);
const pixWatcher = ref();
const emailChecked = ref();

async function handleSubmit() {
	const {
		form: formPayer,
		$v: $vPayer
	} = $PayerComponent.value.getForm();
	const params = {
		checkoutSharedId: checkoutSharedId.value,
		paymentCreationArgs: { paymentMethod: currentPaymentMethod.value },
		upsertStudentUserArgs: {
			name: formPayer.name,
			email: formPayer.email,
			phoneNumberCountry: formPayer.phone.phoneNumberCountry
		},
		upsertUserPaymentProfileArgs: {
			country: formPayer.country,
			type: formPayer.legal,
			currency: invoice.value.currency,
			name: formPayer.legal === LegalPersonType.Individual ? formPayer.name : formPayer.companyName
		}
	};

	if (formPayer.country === CountryIsoCode.Br) {
		params.upsertUserPaymentProfileArgs.taxIds = [
			{
				country: formPayer.country,
				type: formPayer.legal === LegalPersonType.Individual ? TaxIdType.BrCpf : TaxIdType.BrCnpj,
				value: (formPayer.legal === LegalPersonType.Individual ? formPayer.cpf : formPayer.cnpj).replace(/\D/gu, '')
			}
		];
	}

	$CheckoutLayout.value.showDialog(true, {
		type: 'loading',
		title: i18n.t('general.waitDontLeave'),
		description: i18n.t('payment.processingPurchase')
	});

	try {
		await validateForm($vPayer);

		params.upsertStudentUserArgs.phoneNumber = parsePhoneNumber(formPayer.phone.phoneNumber, formPayer.phone.phoneNumberCountry).number;
	} catch (e) {
		$CheckoutLayout.value.showDialog(false);
		document.querySelector('.p-invalid').focus();

		return;
	}

	if (currentPaymentMethod.value === PaymentMethod.CreditCard) {
		try {
			await validateForm($vCreditCard);
		} catch (e) {
			$CheckoutLayout.value.showDialog(true, {
				type: 'error',
				title: i18n.t('general.fillFormCorrectly'),
				description: i18n.t('payment.errorAtField', [i18n.t(`payment.creditCard.${$vCreditCard.value.$errors[0].$property}`)])
			}, 3000);

			return;
		}

		params.paymentCreationArgs = {
			...params.paymentCreationArgs,
			saveUserCard: saveCard.value,
			installments: formCreditCard.installments,
			cardToken: await getCardHash(
				formCreditCard.number,
				formCreditCard.name,
				formCreditCard.expiration,
				formCreditCard.cvv
			)
		};
	}

	allowLoader.value = false;

	await createPayment({ ...params });

	allowLoader.value = true;
}

function handleCancelPayment() {
	confirmDialog.require({
		header: i18n.t('payment.confirmCancelPayment'),
		message: i18n.t('payment.confirmCancelPaymentDescription'),
		accept: () => {
			clearPixWatcher();

			cancelPayment({
				checkoutSharedId: checkoutSharedId.value,
				paymentId: payment.value._id
			}).then(() => {
				status.value = PaymentStatus.Pending;
				payment.value = null;
				currentStep.value = 'initial';
			});
		},
		acceptLabel: i18n.t('general.yes'),
		rejectLabel: i18n.t('general.no'),
		rejectClass: 'p-button-secondary p-button-outlined',
		acceptClass: 'p-button-danger'
	});
}

function handlePaymentExpired() {
	currentStep.value = 'initial';
}

async function setPayment(currentPayment) {
	if (!currentPayment || payment.value?.updatedAt > currentPayment.updatedAt) {
		return;
	}

	if (currentPayment.status === PaymentStatus.Paid) {
		router.push({
			name: 'checkout-welcome',
			params: { id: checkoutSharedId.value },
			query: { magicToken: magicToken.value }
		});

		return;
	}

	payment.value = currentPayment;

	if (currentPayment.paymentMethod !== PaymentMethod.Pix) {
		return;
	}

	await nextTick();

	watchPix(currentPayment);
}

function checkEmail() {
	const { form: formPayer } = $PayerComponent.value.getForm();

	emailChecked.value = false;

	if (loadPurchase(publicFetchStudentCheckoutPurchase, {
		checkoutSharedId: checkoutSharedId.value,
		studentUserEmail: formPayer.email
	})) {
		return;
	}

	refetchPurchase();
}

function checkPurchase(purchase) {
	emailChecked.value = true;

	if (!purchase) {
		return;
	}

	if ([PurchaseStatus.Open, PurchaseStatus.Late].includes(purchase.status) && purchase.payment.status === PaymentStatus.WaitingPayment) {
		const goToFeedback = async () => {
			router.push({
				name: Object.keys(methods).find((key) => methods[key] === purchase.payment.paymentMethod),
				params: { id: checkoutSharedId.value }
			});

			await nextTick();

			// Yeah, it's necessary
			window.setTimeout(() => {
				setPayment(purchase.payment);
				currentStep.value = 'feedback';
			}, 100);
		};

		confirmDialog.require({
			header: i18n.t('payment.pendingPurchaseTitle'),
			message: i18n.t('payment.pendingPurchaseDescription'),
			accept: goToFeedback,
			onHide: goToFeedback,
			acceptLabel: i18n.t('general.ok'),
			rejectClass: 'hidden',
			acceptClass: 'p-button-primary'
		});
	} else if ([PurchaseStatus.Paid, PurchaseStatus.PartiallyRefunded].includes(purchase.status)) {
		confirmDialog.require({
			header: i18n.t('payment.purchaseCompletedTitle'),
			message: i18n.t('payment.purchaseCompletedDescription'),
			acceptLabel: i18n.t('general.ok'),
			rejectClass: 'hidden',
			acceptClass: 'p-button-primary'
		});
	}
}

onFetchCheckout((result) => {
	if (result.loading) {
		return;
	}

	const data = result.data.publicFetchCheckout;

	status.value = data.status;

	if (data.status === CheckoutStatus.Inactive) {
		currentStep.value = 'unavailable';
	}
});

onResultPurchase((result) => {
	if (result.loading) {
		return;
	}

	const purchase = result.data.publicFetchStudentCheckoutPurchase;
	const currentPayment = purchase ? purchase.payment : payment.value;

	if (!emailChecked.value) {
		checkPurchase(purchase);

		return;
	}

	setPayment(currentPayment);
});

onCreatedPayment(async (result) => {
	if (result.loading) {
		return;
	}

	const data = result.data.publicCreateCheckoutPayment;

	if (data.payment.status === PaymentStatus.Refused) {
		$CheckoutLayout.value.showDialog(true, {
			type: 'error',
			title: i18n.t(`enums.PaymentStatus.${data.payment.status}`),
			description: i18n.t('payment.errorMessage', [data.payment.failCode, data.payment.failMessage])
		}, 3000);

		return;
	}

	magicToken.value = data.magicToken;
	paymentMethodsConfig.value = data.checkout.paymentMethodsConfig;

	await setPayment(data.payment);

	status.value = data.checkout.status;
	currentStep.value = 'feedback';

	$CheckoutLayout.value.showDialog(false);
});

onPaymentFail((result) => {
	$CheckoutLayout.value.showDialog(true, {
		type: 'error',
		title: i18n.t(`errors.${result.graphQLErrors[0].extensions.exception.code}`),
		description: `code: ${result.graphQLErrors[0].extensions.exception.code}, message: ${result.message}`
	}, 3000);
});

provide('status', status);
provide('invoice', invoice);
provide('payment', payment);
provide('products', products);
provide('discounts', discounts);
provide('organization', computed(() => {
	const org = checkoutData.value?.organization;

	return {
		id: org?._id,
		name: org?.name,
		logoUrl: logo.getLogo(org?.appearance),
		logo32Url: logo.getLogo32(org?.appearance),
		logo256Url: logo.getLogo256(org?.appearance),
		color: org?.appearance?.primaryColor,
		softDescriptor: `Pg *Ed ${org?.payment?.creditCard.softDescriptor || ''}`.trim()
	};
}));
</script>
