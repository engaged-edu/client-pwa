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
		IdentityComponent

	template(#method)
		MethodComponent(
			type="payment-link"
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
import { useMutation, useQuery } from '@vue/apollo-composable';
import { i18n } from '@/i18n';
import { useLogo, useWatchPix } from '@/composables/utils';
import { useCreditCard, useCreditCardForm } from '@/composables/creditCard';
import { useValidations } from '@/composables/validations';
import ResumeComponent from '@/components/ResumeComponent.vue';
import IdentityComponent from '@/components/IdentityComponent.vue';
import MethodComponent from '@/components/MethodComponent.vue';
import SummaryComponent from '@/components/SummaryComponent.vue';
import PaymentStatusComponent from '@/components/PaymentStatusComponent.vue';
import {
	publicFetchInvoicePaymentLink,
	publicCreatePaymentFromInvoicePaymentLink,
	publicCancelInvoicePaymentLinkPayment
} from '@/graphql';
import {
	InvoiceItemType,
	InvoicePaymentLinkStatus,
	PaymentMethod,
	PaymentStatus
} from '@/gql.ts';

const route = useRoute();
const logo = useLogo();
const confirmDialog = useConfirm();
const { validateForm } = useValidations();
const { getCardHash } = useCreditCard();
const { accessToken } = route.query;
const currentPaymentMethod = computed(() => {
	const methods = {
		'payment-link-method-credit-card': PaymentMethod.CreditCard,
		'payment-link-method-bank-slip': PaymentMethod.BankSlip,
		'payment-link-method-pix': PaymentMethod.Pix
	};

	return methods[route.name];
});
const $CheckoutLayout = ref();

// Fetch Payment Link
const {
	result: paymentLinkResult,
	loading: loadingPaymentLink,
	onResult: onFetchPaymentLink,
	refetch: refetchPaymentLink
} = useQuery(publicFetchInvoicePaymentLink, { accessToken });
const status = ref(null);
const payment = ref(null);
const paymentMethodsConfig = ref(null);
const paymentLinkData = computed(() => paymentLinkResult.value?.publicFetchInvoicePaymentLink);
const products = computed(() => paymentLinkData.value?.invoice?.items.map((item) => {
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
const discounts = computed(() => paymentLinkData.value?.invoice?.discounts || []);
const paidAmount = ref(0);
const invoice = computed(() => {
	const amount = paymentLinkData.value?.amount || 0;
	const subtotal = products.value.reduce((acc, product) => acc + product.amount, 0);
	const totalDiscount = discounts.value.reduce((acc, discount) => acc + discount.amount, 0);
	const total = subtotal - totalDiscount;
	const paid = paidAmount.value || paymentLinkData.value?.invoice.paidAmount || 0;
	const content = {
		id: paymentLinkData.value?._id,
		createdAt: paymentLinkData.value?.createdAt,
		updatedAt: paymentLinkData.value?.updatedAt,
		status: paymentLinkData.value?.status,
		expirationDate: paymentLinkData.value?.expirationDate,
		methods: paymentMethodsConfig.value || {
			creditCard: paymentLinkData.value?.creditCard,
			bankSlip: paymentLinkData.value?.bankSlip,
			pix: paymentLinkData.value?.pix
		},
		currency: paymentLinkData.value?.invoice?.currency,
		discounts: totalDiscount,
		paid,
		subtotal,
		total,
		amount
	};

	if (content.methods.creditCard) {
		content.creditCard = paymentLinkData.value?.creditCard;
	}

	if (content.methods.bankSlip) {
		content.bankSlip = paymentLinkData.value?.bankSlip;
	}

	return content;
});

// Create Payment
const {
	addCard,
	saveCard,
	form,
	$v
} = useCreditCardForm(invoice.value);
const {
	mutate: createPayment,
	loading: loadingCreatePayment,
	onDone: onCreatedPayment,
	onError: onPaymentFail
} = useMutation(publicCreatePaymentFromInvoicePaymentLink);

// Cancel Payment
const {
	mutate: cancelPayment,
	loading: loadingCancelPayment
} = useMutation(publicCancelInvoicePaymentLinkPayment, { variables: { accessToken } });

// General
const allowLoader = ref(true);
const isLoading = computed(() => allowLoader.value && (loadingPaymentLink.value || loadingCreatePayment.value || loadingCancelPayment.value));
const currentStep = ref('initial');
const { watchPix } = useWatchPix(refetchPaymentLink, allowLoader);

async function handleSubmit() {
	let params = {
		accessToken,
		paymentMethod: currentPaymentMethod.value
	};

	$CheckoutLayout.value.showDialog(true, {
		type: 'loading',
		title: i18n.t('general.waitDontLeave'),
		description: i18n.t('payment.processingPurchase')
	});

	if (currentPaymentMethod.value === PaymentMethod.CreditCard) {
		try {
			await validateForm($v);
		} catch (e) {
			$CheckoutLayout.value.showDialog(true, {
				type: 'error',
				title: i18n.t('general.fillFormCorrectly'),
				description: i18n.t('payment.errorAtField', [i18n.t(`payment.creditCard.${$v.value.$errors[0].$property}`)])
			}, 3000);

			return;
		}

		params = {
			...params,
			saveUserCard: saveCard.value,
			installments: form.installments,
			cardToken: await getCardHash(
				form.number,
				form.name,
				form.expiration,
				form.cvv
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
		accept: async () => {
			await cancelPayment();

			status.value = PaymentStatus.Pending;
			payment.value = null;
			currentStep.value = 'initial';
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

	payment.value = currentPayment;

	await nextTick();

	watchPix(currentPayment);
}

onFetchPaymentLink((result) => {
	if (result.loading) {
		return;
	}

	const data = result.data.publicFetchInvoicePaymentLink;

	if ([InvoicePaymentLinkStatus.Canceled, InvoicePaymentLinkStatus.Expired].includes(data.status)) {
		currentStep.value = 'unavailable';

		return;
	}

	status.value = data.status;
	paidAmount.value = data.invoice.paidAmount;
	currentStep.value = status.value === PaymentStatus.Pending ? 'initial' : 'feedback';

	if (data.status === PaymentStatus.Pending) {
		return;
	}

	setPayment([...data.payments].pop());
});

onCreatedPayment(async (result) => {
	if (result.loading) {
		return;
	}

	const data = result.data.publicCreatePaymentFromInvoicePaymentLink;

	if (data.payment.status === PaymentStatus.Refused) {
		$CheckoutLayout.value.showDialog(true, {
			type: 'error',
			title: i18n.t(`enums.PaymentStatus.${data.payment.status}`),
			description: i18n.t('payment.errorMessage', [data.payment.failCode, data.payment.failMessage])
		}, 3000);

		return;
	}

	paymentMethodsConfig.value = {
		creditCard: data.invoicePaymentLink.creditCard,
		bankSlip: data.invoicePaymentLink.bankSlip,
		pix: data.invoicePaymentLink.pix
	};

	await setPayment(data.payment);

	status.value = data.invoicePaymentLink.status;
	paidAmount.value = data.invoice.paidAmount;
	currentStep.value = 'feedback';

	$CheckoutLayout.value.showDialog(false);
});

onPaymentFail((result) => {
	$CheckoutLayout.value.showDialog(true, {
		type: 'error',
		title: result.message
	}, 3000);
});

provide('status', status);
provide('invoice', invoice);
provide('payment', payment);
provide('products', products);
provide('discounts', discounts);

provide('organization', computed(() => {
	const org = paymentLinkData.value?.organization;

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

provide('userProfile', computed(() => {
	const address = paymentLinkData.value?.invoice?.userPaymentProfile.address;
	const taxIds = paymentLinkData.value?.invoice?.userPaymentProfile.taxIds;
	const user = paymentLinkData.value?.invoice?.user;

	function makeAddress() {
		if (!address) {
			return null;
		}

		if (address.complement) {
			return `${address.street}, ${address.number}, ${address.complement} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}`;
		}

		return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}`;
	}

	function makePhone() {
		if (!user.phoneNumber) {
			return null;
		}

		const phone = parsePhoneNumber(user.phoneNumber || '', user.phoneNumberCountry);

		return {
			number: user.phoneNumber,
			country: user.phoneNumberCountry,
			parsed: phone.formatNational()
		};
	}

	return {
		name: paymentLinkData.value?.invoice?.user.name,
		email: paymentLinkData.value?.invoice?.user.email,
		businessName: paymentLinkData.value?.invoice?.userPaymentProfile.name,
		country: paymentLinkData.value?.invoice?.userPaymentProfile.country,
		type: paymentLinkData.value?.invoice?.userPaymentProfile.type,
		taxId: taxIds.length ? taxIds[0] : null,
		address: makeAddress(),
		phone: makePhone()
	};
}));
</script>
