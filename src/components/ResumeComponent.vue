<template lang="pug">
.flex.flex-column.align-items-center.gap-3.mb-4
	.text-xs {{ $t('payment.youArePaying') }}
	.text-base.font-bold {{ $t('cur', [invoice.amount, invoice.currency]) }}
	.text-xs(v-if="$route.name.includes('payment-link')") {{ $t('payment.ofTotal', [$t('cur', [invoice.total, invoice.currency])]) }}
	Button.surface-card(
		text
		plain
		raised
		size="small"
		severity="secondary"
		:label="$t('payment.showSummary')"
		@click="handleShowSummary"
	)
		template(#icon)
			IconDown.p-button-icon-right
</template>

<script setup>
const invoice = inject('invoice');

defineProps({
	handleShowSummary: {
		type: Function,
		required: true
	}
});

</script>
