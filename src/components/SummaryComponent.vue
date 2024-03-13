<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('payment.itemsSummary') }}

ScrollPanel(:pt="{ bary: 'hover:bg-primary-500 surface-300 opacity-100' }")
	.summary-list.w-full.relative
		.grid.flex-nowrap.text-sm(
			v-for="(item, index) in items"
			:key="index"
		)
			.col-fixed.vertical-align-top.border-bottom-1.surface-border.py-4.font-semibold
				i-mdi-sale(v-if="isDiscount(item)")
				span(v-else) {{ item.quantity }}x

			.col.vertical-align-top.border-bottom-1.surface-border.py-4.px-2(style="display: inline-grid")
				.font-semibold(v-if="isDiscount(item)") {{ $t('payment.discount') }}
				.font-semibold.white-space-nowrap.overflow-hidden.text-overflow-ellipsis(v-else-if="item.name") {{ item.name }}
				.font-light.ellipsis-2(
					v-if="item.description"
					:class="{ 'mt-2': isDiscount(item) || item.name }"
				) {{ item.description }}
			.col-fixed.vertical-align-top.border-bottom-1.surface-border.py-4.font-semibold.white-space-nowrap
				.text-right(
					:class="{ 'text-green-500': isDiscount(item) }"
				)
					span(v-if="isDiscount(item)") -
					span {{ $t('cur', [item.amount, invoice.currency]) }}

.grid.text-sm.my-2
	template(v-if="invoice.subtotal !== invoice.total")
		.col-6 {{ $t('payment.invoiceSubtotal') }}
		.col-6.text-right {{ $t('cur', [invoice.subtotal, invoice.currency]) }}
	template(v-if="invoice.discounts")
		.col-6 {{ $t('payment.discount') }}
		.col-6.text-right.text-green-500 -{{ $t('cur', [invoice.discounts, invoice.currency]) }}
	.col-6.font-bold {{ $t('payment.invoiceTotal') }}
	.col-6.text-right.font-bold {{ $t('cur', [invoice.amount, invoice.currency]) }}

Message.m-0(
	v-if="invoice.amount !== invoice.total"
	:closable="false"
)
	.text-sm.font-light {{ $t('payment.youArePayingInfo', [$t('cur', [invoice.amount, invoice.currency]), $t('cur', [invoice.total, invoice.currency])]) }}

template(v-if="largeScreen")
	Divider

	.text-sm
		.grid
			.col {{ $t('payment.paymentMethod') }}
			.col.text-right {{ $route.meta.name }}
		.text-bluegray-400.text-right.font-light(
			v-if="$route.name.includes('credit-card')"
			v-html="payment?._id ? $t('payment.installmentOption', [payment.installments, $n((payment.amount / payment.installments) / 100, payment.currency)]) : currentInstallment"
		)

	.grid.text-lg.font-bold.mt-2
		.col.pb-0.white-space-nowrap {{ $t('payment.totalPayment') }}
		.col.pb-0.text-right {{ $t('cur', [invoice.amount, invoice.currency]) }}
</template>

<script setup>
import { useBreakpoints } from '@/composables/breakpoints';
import { useCreditCardForm } from '@/composables/creditCard';
import { InvoiceDiscountType } from '@/gql.ts';

const route = useRoute();
const payment = inject('payment');
const invoice = inject('invoice');
const products = inject('products');
const discounts = inject('discounts');
const { largeScreen } = useBreakpoints();
const { currentInstallment } = useCreditCardForm(invoice);
const items = [...products.value, ...discounts.value];
const isDiscount = (item) => item.type === InvoiceDiscountType.Manual;

</script>

<style lang="stylus">
.p-scrollpanel
	max-height 45dvh

	@media $from.lg
		max-height 350px

	&-content
		max-height 43dvh
		background unquote('linear-gradient(var(--surface-card) 30%, rgba(255,255,255,0)), linear-gradient(rgba(255,255,255,0), var(--surface-card) 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.35), rgba(0,0,0,0)), radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.35), rgba(0,0,0,0)) 0 100%')
		background-repeat no-repeat
		background-size 100% 30px, 100% 30px, 100% 14px, 100% 14px
		background-attachment local, local, scroll, scroll

		@media $from.lg
			max-height 350px

	&-bar-y
		width 2px !important
		transform translateX(8px)
</style>
