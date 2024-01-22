<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.payment') }}

.flex.column-gap-2.mb-4(class="lg:column-gap-4")
	Button.flex-1.justify-content-around(
		v-if="invoice.methods.creditCard"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('payment.methods.creditCard')"
		:severity="$route.name === 'payment-link-method-credit-card' ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: 'payment-link-method-credit-card', query: $route.query })"
	)
		template(#icon)
			IconCreditCard
	Button.flex-1.justify-content-around(
		v-if="invoice.methods.bankSlip"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('payment.methods.bankSlip')"
		:severity="$route.name === 'payment-link-method-bank-slip' ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: 'payment-link-method-bank-slip', query: $route.query })"
	)
		template(#icon)
			IconBankSlip
	Button.flex-1.justify-content-around(
		v-if="invoice.methods.pix"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('payment.methods.pix')"
		:severity="$route.name === 'payment-link-method-pix' ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: 'payment-link-method-pix', query: $route.query })"
	)
		template(#icon)
			IconPix
</template>

<script setup>
import { i18n } from '@/i18n';
import { useBreakpoints } from '@/composables/breakpoints';

const router = useRouter(),
	route = useRoute(),
	{ largeScreen } = useBreakpoints(),
	invoice = inject('invoice'),
	currentTab = ref(Object.entries(invoice.value.methods).find(([key, value]) => value)[0]),
	methodRoutes = {
		creditCard: 'payment-link-method-credit-card',
		bankSlip: 'payment-link-method-bank-slip',
		pix: 'payment-link-method-pix'
	};

if (route.name === 'payment-link') {
	router.push({
		name: methodRoutes[currentTab.value],
		query: route.query
	});
}
</script>

<style lang="stylus">
.p-button-label
	flex-grow 0
</style>
