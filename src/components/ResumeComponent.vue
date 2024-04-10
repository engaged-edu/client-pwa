<template lang="pug">
.flex.flex-column.align-items-center.gap-3.mb-4
	.text-base.font-bold {{ products[0].name }}
	.text-xs.text-center.ellipsis.ellipsis-3(v-if="products[0].description") {{ products[0].description }}
	Button.surface-card(
		v-if="products.length > 1"
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
const products = inject('products');

defineProps({
	handleShowSummary: {
		type: Function,
		required: true
	}
});

</script>
