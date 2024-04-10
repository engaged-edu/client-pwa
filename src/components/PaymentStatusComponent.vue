<template lang="pug">
Toast
ConfirmDialog

.payment-status.border-round-xl.shadow-1.relative.mt-5.py-5.px-3(
	class="lg:py-7 lg:px-8"
	:class="{ 'surface-0 border-700': !payment?._id, 'bg-yellow-50 border-yellow-500': isStatus(PaymentStatus.WaitingPayment), 'bg-green-50 border-green-500': isStatus(PaymentStatus.Paid), 'bg-gray-50 border-gray-800': isStatus(PaymentStatus.Expired) }"
)
	.payment-status__icon.border-circle.text-white.w-3rem.h-3rem.flex.justify-content-center.align-items-center.absolute.top-0.left-50(
		class="lg:w-5rem lg:h-5rem"
		:class="{ 'surface-700': !payment?._id, 'bg-yellow-500': isStatus(PaymentStatus.WaitingPayment), 'bg-green-500': isStatus(PaymentStatus.Paid), 'bg-gray-800': isStatus(PaymentStatus.Expired) }"
	)
		IconOk.text-5xl(
			v-if="isStatus(PaymentStatus.Paid)"
			class="lg:text-7xl"
		)
		IconWaiting.text-5xl(
			v-else-if="isStatus(PaymentStatus.WaitingPayment)"
			class="lg:text-7xl"
		)
		IconCancel.text-5xl(
			v-else
			class="lg:text-7xl"
		)

	.flex.flex-column.gap-4.text-gray-600
		template(v-if="!payment?._id")
			.flex.flex-column.gap-2.text-center
				.font-bold {{ $t('payment.unavailableLink') }}
				.font-light {{ $t('payment.unavailableLinkDescription') }}

		template(v-else)
			.flex.flex-column.gap-2.text-center
				.font-bold {{ $t(`enums.PaymentStatus.${payment.status}`) }}
				.font-light \#{{ payment._id }}

			.flex.justify-content-evenly.align-items-center.gap-2
				.flex.align-items-center.gap-2.flex-wrap(v-if="isMethod(PaymentMethod.CreditCard)")
					img.w-4rem(:src="`/p/creditCards/${payment.brand}.svg`")
					.flex.flex-column.gap-2.text-right.white-space-nowrap {{ $t(`enums.PaymentMethod.${payment.paymentMethod}`) }}
						.text-sm **** {{ payment.lastDigits }}

				.flex.align-items-center.gap-2(v-else)
					IconBankSlip.text-2xl(v-if="isMethod(PaymentMethod.BankSlip)")
					IconPix.text-2xl(v-if="isMethod(PaymentMethod.Pix)")
					div {{ $t(`enums.PaymentMethod.${payment.paymentMethod}`) }}

				.flex.flex-column.gap-2.text-sm.white-space-nowrap
					div {{ $t('payment.amount') }}:&nbsp;
						span.font-bold {{ $t('cur', [payment.amount, payment.currency]) }}
					.text-sm(
						v-if="isMethod(PaymentMethod.CreditCard)"
						v-html="$t('payment.installmentOption', [payment.installments, $n((payment.amount / payment.installments) / 100, payment.currency)])"
					)
					div(v-if="isStatus(PaymentStatus.WaitingPayment) || isStatus(PaymentStatus.Expired)") {{ $t('payment.expiration') }}: {{ $d(payment.expirationDate, 'short') }}
						div(v-if="isMethod(PaymentMethod.Pix) && invoice.methods.pix?.expirationRule.type === InvoicePaymentLinkExpirationRuleType.MinutesAfterCreation") {{ $t('general.atTime') }} {{ $d(payment.expirationDate, 'time') }}&nbsp;
							span.font-semibold(v-if="!isStatus(PaymentStatus.Expired)") (#[TimeLeft.font-semibold(:time="payment.expirationDate")])
					div(v-else-if="isStatus(PaymentStatus.Paid)") {{ $t('payment.paidAt') }}: {{ $d(payment.updatedAt, 'short') }}

			template(v-if="isStatus(PaymentStatus.WaitingPayment)")
				template(v-if="isMethod(PaymentMethod.BankSlip)")
					.flex.flex-column.gap-2
						label.text-xs {{ $t('payment.barCode') }}
						InputText(
							v-model="payment.code"
							readonly
							:size="largeScreen || 'small'"
							@focus="$event.target.select()"
						)
						.flex.justify-content-between.gap-2
							Button(
								v-if="copyIsSupported"
								severity="primary"
								:size="largeScreen || 'small'"
								:label="$t('payment.copyBarCode')"
								@click="handleCopyCode(payment.code)"
							)
								template(#icon)
									IconCopy.p-button-icon-left
							Button(
								outlined
								severity="secondary"
								:size="largeScreen || 'small'"
								:label="$t('payment.printBankSlip')"
								@click="handleOpenBankSlip"
							)
								template(#icon)
									IconPrint.p-button-icon-left

					.flex.align-items-center.gap-2
						div
							IconInfo.text-primary
						.text-sm.font-light {{ $t('payment.bankSlipInfo') }}

				template(v-if="isMethod(PaymentMethod.Pix)")
					.flex.justify-content-center
						.text-sm.text-color-secondary.flex.flex-column.max-w-30rem.gap-2
							.flex.align-items-center
								i-mdi-numeric-1-circle.w-1.h-2rem.p-1
								.w-11 {{ $t('payment.pixInstructions[1]') }}
							.flex.align-items-center
								i-mdi-numeric-2-circle.w-1.h-2rem.p-1
								.w-11 {{ $t('payment.pixInstructions[2]') }}
							.flex.align-items-center
								i-mdi-numeric-3-circle.w-1.h-2rem.p-1
								.w-11 {{ $t('payment.pixInstructions[3]') }}

					.text-center(v-if="largeScreen")
						img.w-12em.h-12rem(:src="payment.qrCodeUrl")

					.flex.flex-column.gap-2
						label.text-xs {{ $t('payment.pixCode') }}
						Textarea(
							v-model="payment.code"
							readonly
							auto-resize
							:size="largeScreen || 'small'"
							@focus="$event.target.select()"
						)
					.flex.justify-content-center
						Button(
							v-if="copyIsSupported"
							severity="primary"
							:size="largeScreen || 'small'"
							:label="$t('payment.copyPixCode')"
							@click="handleCopyCode(payment.code)"
						)
							template(#icon)
								IconCopy.p-button-icon-left

				.text-center
					Button(
						outlined
						severity="primary"
						:size="largeScreen || 'small'"
						:label="$t('payment.useOtherMethod')"
						@click="$props.handleCancelPayment"
					)
						template(#icon)
							IconLeft.p-button-icon-left

			.flex.flex-column.gap-2(v-if="$route.name.includes('payment-link')")
				.font-bold {{ $t('payment.invoicePaymentProgress') }}
				.font-light.text-sm {{ $t('payment.invoicePaymentProgressInfo') }}
				.flex.justify-content-between.text-xs.mt-2
					div
						span.font-bold {{ $t('cur', [invoice.paid, invoice.currency]) }}
						span.lowercase &nbsp;{{ $t('payment.paid') }}
					.flex.align-items-center.gap-2
						div
							span.font-bold {{ $t('cur', [invoice.total, invoice.currency]) }}
							span.lowercase &nbsp;{{ $t('payment.invoiceTotal') }}
						IconCheck.text-green-500(v-if="percentage >= 100")
				ProgressBar(
					:show-value="false"
					:value="percentage"
					:pt="{ value: { class: percentage < 100 || 'bg-green-500' } }"
					style="height: 6px"
				)
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import { useClipboard } from '@vueuse/core';
import Toast from 'primevue/toast';
import ConfirmDialog from 'primevue/confirmdialog';
import { i18n } from '@/i18n';
import { useBreakpoints } from '@/composables/breakpoints';
import { useCreditCardForm } from '@/composables/creditCard';
import {
	PaymentMethod,
	PaymentStatus,
	InvoicePaymentLinkExpirationRuleType
} from '@/gql.ts';

const props = defineProps({
	handleCancelPayment: {
		type: Function,
		required: true
	},
	handlePaymentExpired: {
		type: Function,
		required: true
	}
});
const toast = useToast();
const confirmDialog = useConfirm();
const { largeScreen } = useBreakpoints();
const invoice = inject('invoice');
const payment = inject('payment');
const percentage = computed(() => invoice.value.paid / invoice.value.total * 100);
const { currentInstallment } = useCreditCardForm(invoice);
const {
	copy: copyCode,
	copied: codeCopied,
	isSupported: copyIsSupported
} = useClipboard({
	source: payment.value?.code,
	legacy: true
});
const expiredDialog = ref(false);

function isMethod(paymentMethod) {
	return payment.value.paymentMethod === paymentMethod;
}

function isStatus(paymentStatus) {
	return payment.value?.status === paymentStatus;
}

function handleOpenBankSlip() {
	window.open(payment.value?.pdfUrl, '_blank');
}

function handleCopyCode(value) {
	copyCode(value);

	if (codeCopied) {
		toast.add({
			severity: 'success',
			summary: i18n.t('general.copied'),
			life: 3000
		});
	}
}

watch(() => payment.value?.status, (newStatus, oldStatus) => {
	if (newStatus === oldStatus || expiredDialog.value) {
		return;
	}

	if (isStatus(PaymentStatus.Expired) && isMethod(PaymentMethod.Pix)) {
		expiredDialog.value = true;

		confirmDialog.require({
			header: i18n.t('payment.pixExpiredTitle'),
			message: i18n.t('payment.pixExpiredDescription'),
			accept: props.handlePaymentExpired,
			onHide: props.handlePaymentExpired,
			acceptLabel: i18n.t('general.ok'),
			rejectClass: 'hidden',
			acceptClass: 'p-button-primary'
		});
	}
});
</script>

<style lang="stylus">
.payment-status
	border-top-style solid
	border-top-width 15px

	&__icon
		transform translate(-50%, -70%)

		@media $from.lg
			transform translate(-50%, -60%)
</style>
