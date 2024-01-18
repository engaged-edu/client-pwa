<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('payment.itemsSummary') }}

.overflow-scroll
	table.w-full
		tr.text-sm(
			v-for="(item, index) in items"
			:key="index"
		)
			td.vertical-align-top.border-bottom-1.surface-border.py-4.font-semibold.w-min
				i-mdi-sale(v-if="isDiscount(item)")
				span(v-else) {{ item.quantity }}x

			td.vertical-align-top.border-bottom-1.surface-border.py-4.px-2
				.font-semibold(v-if="item.name") {{ item.name }}
				.font-light(
					v-if="item.description"
					:class="{ 'mt-2': item.name }"
				) {{ item.description }}
			td.vertical-align-top.border-bottom-1.surface-border.py-4.font-semibold.white-space-nowrap.w-min
				.text-right(
					:class="{ 'text-green-500': isDiscount(item) }"
				)
					span(v-if="isDiscount(item)") -
					| {{ $t('cur', [item.amount, invoice.currency]) }}

.grid.text-sm.my-2
	.col-6 {{ $t('payment.invoiceSubtotal') }}
	.col-6.text-right {{ $t('cur', [invoice.subtotal, invoice.currency]) }}
	template(v-if="invoice.discounts")
		.col-6 {{ $t('payment.discount') }}
		.col-6.text-right.text-green-500 -{{ $t('cur', [invoice.discounts, invoice.currency]) }}
	.col-6.font-bold {{ $t('payment.invoiceTotal') }}
	.col-6.text-right.font-bold {{ $t('cur', [invoice.total, invoice.currency]) }}

Message.m-0(:closable="false") {{ $t('payment.youArePayingInfo', [$t('cur', [invoice.amount, invoice.currency]), $t('cur', [invoice.total, invoice.currency])]) }}

template(v-if="largeScreen")
	Divider

	.text-sm
		.grid
			.col {{ $t('payment.paymentMethod') }}
			.col.text-right {{ $route.meta.name }}
		.text-color-secondary.text-right(
			v-if="$route.name === 'payment-link-method-credit-card'"
			v-html="currentInstallment"
		)

	.grid.text-lg.font-bold.mt-4
		.col.pb-0.white-space-nowrap {{ $t('payment.totalPayment') }}
		.col.pb-0.text-right {{ $t('cur', [invoice.total, invoice.currency]) }}
</template>

<script setup>
import { useBreakpoints } from '@/composables/breakpoints';
import { useCreditCardForm } from '@/composables/creditCard';
import { InvoiceDiscountType } from '@/gql.ts';

const route = useRoute(),
	invoice = inject('invoice'),
	products = inject('products'),
	discounts = inject('discounts'),
	{ largeScreen } = useBreakpoints(),
	{ currentInstallment } = useCreditCardForm(invoice),
	items = [...products.value, ...discounts.value],
	isDiscount = (item) => item.type === InvoiceDiscountType.Manual;

</script>

<style lang="stylus">
.overflow-scroll
	max-height 60dvh

	@media $from.lg
		max-height 530px
</style>
