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
		PayerComponent

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
	publicFetchInvoicePaymentLink,
	publicCreatePaymentFromInvoicePaymentLink,
	publicCancelInvoicePaymentLinkPayment
} from '@/graphql';
import {
	PaymentMethod,
	PaymentStatus,
	InvoiceItemType
} from '@/gql.ts';

const $CheckoutLayout = ref();
const route = useRoute();
const logo = useLogo();
const confirmDialog = useConfirm();
const { validateForm } = useValidations();
const { getCardHash } = useCreditCard();
const { accessToken } = route.query;
const checkoutSharedId = computed(() => route.params.id);
const currentPaymentMethod = computed(() => {
	const methods = {
		'payment-link-method-credit-card': PaymentMethod.CreditCard,
		'payment-link-method-bank-slip': PaymentMethod.BankSlip,
		'payment-link-method-pix': PaymentMethod.Pix
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
			creditCard: checkoutData.value?.paymentMethodsConfig.creditCard.enabled || false,
			bankSlip: checkoutData.value?.paymentMethodsConfig.bankSlip.enabled || false,
			pix: checkoutData.value?.paymentMethodsConfig.pix.enabled || false
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
const isLoading = computed(() => loadingCheckout.value || loadingCreatePayment.value || loadingCancelPayment.value);
const currentStep = ref('payment');

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
			installments: form.installments,
			cardToken: await getCardHash(
				form.number,
				form.name,
				form.expiration,
				form.cvv
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
			await cancelPayment();
			status.value = PaymentStatus.Pending;
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

	const data = result.data.publicCreatePaymentFromInvoicePaymentLink;

	status.value = data.invoicePaymentLink.status;
	payment.value = data.payment;

	$CheckoutLayout.value.showDialog(false);
});

onPaymentFail((result) => {
	$CheckoutLayout.value.showDialog(true, {
		type: 'error',
		title: result.message
	}, 3000);
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
