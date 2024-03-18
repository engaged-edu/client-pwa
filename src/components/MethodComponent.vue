<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.payment') }}

.flex.column-gap-2.mb-4(class="lg:column-gap-4")
	Button.flex-1.justify-content-around(
		v-if="$props.methods.creditCard"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('payment.methods.creditCard')"
		:severity="$route.name === `${$props.type}-method-credit-card` ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: `${$props.type}-method-credit-card`, query: $route.query })"
	)
		template(#icon)
			IconCreditCard
	Button.flex-1.justify-content-around(
		v-if="$props.methods.bankSlip"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('payment.methods.bankSlip')"
		:severity="$route.name === `${$props.type}-method-bank-slip` ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: `${$props.type}-method-bank-slip`, query: $route.query })"
	)
		template(#icon)
			IconBankSlip
	Button.flex-1.justify-content-around(
		v-if="$props.methods.pix"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('payment.methods.pix')"
		:severity="$route.name === `${$props.type}-method-pix` ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: `${$props.type}-method-pix`, query: $route.query })"
	)
		template(#icon)
			IconPix
</template>

<script setup>
import { i18n } from '@/i18n';
import { useBreakpoints } from '@/composables/breakpoints';

const props = defineProps({
	type: { type: String, required: true },
	methods: { type: Array, required: true }
});
const router = useRouter();
const route = useRoute();
const { largeScreen } = useBreakpoints();
const methodRoutes = {
	creditCard: `${props.type}-method-credit-card`,
	bankSlip: `${props.type}-method-bank-slip`,
	pix: `${props.type}-method-pix`
};
const firstPossibleTab = ref(Object.entries(props.methods).find(([key, value]) => value)[0]);
const currentTab = computed(() => Object.keys(methodRoutes).find((tab) => methodRoutes[tab] === route.name));

if (!route.name.includes('method') || !props.methods[currentTab.value]) {
	router.push({
		name: methodRoutes[firstPossibleTab.value],
		query: route.query
	});
}
</script>

<style lang="stylus">
.p-button-label
	flex-grow 0
</style>
