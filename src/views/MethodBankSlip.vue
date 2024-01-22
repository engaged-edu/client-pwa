<template lang="pug">
.flex.flex-column.align-items-center
	.flex.justify-content-center.align-items-center.gap-4.my-5
		.flex.align-items-center.gap-2
			IconBankSlip
			span {{ $t('payment.methods.bankSlip') }}
		.text-sm {{ $t('payment.amount') }}:&nbsp;
			span.font-bold {{ $t('cur', [invoice.amount, invoice.currency]) }}

	.text-sm.text-color-secondary.max-w-30rem.text-center.line-height-3 {{ $t('payment.bankSlipInstructions') }}
</template>

<script setup>
const invoice = inject('invoice');

</script>
