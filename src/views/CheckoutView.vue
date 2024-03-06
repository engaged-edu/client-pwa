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
		PayerComponent(ref="$PayerComponent")

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
			v-if="payment?._id"
			:handle-cancel-payment="handleCancelPayment"
		)
</template>

<script setup>
import parsePhoneNumber from 'libphonenumber-js';
import { useConfirm } from 'primevue/useconfirm';
import ConfirmDialog from 'primevue/confirmdialog';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { i18n } from '@/i18n';
import { useLogo } from '@/composables/utils';
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
	publicCancelCheckoutPayment
} from '@/graphql';
import {
	CountryIsoCode,
	InvoiceItemType,
	LegalPersonType,
	PaymentMethod,
	PaymentStatus,
	TaxIdType
} from '@/gql.ts';

const $CheckoutLayout = ref();
const $PayerComponent = ref();
const route = useRoute();
const logo = useLogo();
const confirmDialog = useConfirm();
const { validateForm } = useValidations();
const { getCardHash } = useCreditCard();
const { accessToken } = route.query;
const checkoutSharedId = computed(() => route.params.id);
const currentPaymentMethod = computed(() => {
	const methods = {
		'checkout-method-credit-card': PaymentMethod.CreditCard,
		'checkout-method-bank-slip': PaymentMethod.BankSlip,
		'checkout-method-pix': PaymentMethod.Pix
	};

	return methods[route.name];
});

// Fetch Payment Link
const {
	result: checkoutResult,
	loading: loadingCheckout,
	onResult: onFetchCheckout
} = useQuery(publicFetchCheckout, { checkoutSharedId: checkoutSharedId.value });
const status = ref(null);
const payment = ref(null);
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
		createdAt: checkoutData.value?.createdAt,
		updatedAt: checkoutData.value?.updatedAt,
		status: checkoutData.value?.status,
		expirationDate: checkoutData.value?.expirationDate,
		methods: {
			creditCard: checkoutData.value?.paymentMethodsConfig.creditCard?.enabled || false,
			bankSlip: checkoutData.value?.paymentMethodsConfig.bankSlip?.enabled || false,
			pix: checkoutData.value?.paymentMethodsConfig.pix?.enabled || false
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
const isLoading = computed(() => loadingCheckout.value || loadingCreatePayment.value || loadingCancelPayment.value);
const currentStep = ref('initial');

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
			phoneNumber: parsePhoneNumber(formPayer.phone.phoneNumber, formPayer.phone.phoneNumberCountry).formatInternational(),
			phoneNumberCountry: formPayer.phone.phoneNumberCountry
		},
		upsertUserPaymentProfileArgs: {
			country: formPayer.country,
			type: formPayer.legal,
			currency: invoice.value.currency
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

	if (formPayer.country !== CountryIsoCode.Br || formPayer.country === CountryIsoCode.Br && formPayer.legal !== LegalPersonType.Individual) {
		params.upsertUserPaymentProfileArgs.name = formPayer.companyName;
	} else {
		params.upsertUserPaymentProfileArgs.name = formPayer.name;
	}

	$CheckoutLayout.value.showDialog(true, {
		type: 'loading',
		title: i18n.t('general.waitDontLeave'),
		description: i18n.t('payment.processingPurchase')
	});

	try {
		await validateForm($vPayer);
	} catch (e) {
		$CheckoutLayout.value.showDialog(true, {
			type: 'error',
			title: i18n.t('general.fillFormCorrectly'),
			description: i18n.t('payment.errorAtField', [i18n.t(`general.identity.${$vPayer.value.$errors[0].$property}`)])
		}, 3000);

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
			installments: formCreditCard.installments,
			cardToken: await getCardHash(
				formCreditCard.number,
				formCreditCard.name,
				formCreditCard.expiration,
				formCreditCard.cvv
			)
		};
	}

	createPayment({ ...params });
}

function handleCancelPayment() {
	confirmDialog.require({
		header: i18n.t('payment.confirCancelPayment'),
		message: i18n.t('payment.confirCancelPaymentDescription'),
		accept: async () => {
			await cancelPayment({
				checkoutSharedId: checkoutSharedId.value,
				paymentId: payment.value._id
			});
			status.value = PaymentStatus.Pending;
			currentStep.value = 'initial';
		},
		acceptLabel: i18n.t('general.yes'),
		rejectLabel: i18n.t('general.no'),
		rejectClass: 'p-button-secondary p-button-outlined',
		acceptClass: 'p-button-danger'
	});
}

onCreatedPayment((result) => {
	if (result.loading) {
		return;
	}

	const data = result.data.publicCreateCheckoutPayment;

	status.value = data.checkout.status;
	payment.value = data.payment;
	currentStep.value = 'feedback';

	$CheckoutLayout.value.showDialog(false);
});

onPaymentFail((result) => {
	$CheckoutLayout.value.showDialog(true, {
		type: 'error',
		title: i18n.t(`errors.${result.graphQLErrors[0].extensions.exception.code}`),
		description: `code: ${result.graphQLErrors[0].extensions.exception.code}, message: ${result.message}`
	}, 5000);
});

onFetchCheckout((result) => {
	if (result.loading) {
		return;
	}

	const data = result.data.publicFetchCheckout;

	status.value = data.status;
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
		color: org?.appearance?.primaryColor,
		softDescriptor: `Pg *Ed ${org?.payment?.creditCard.softDescriptor || ''}`
	};
}));
</script>
