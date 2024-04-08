<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.payment') }}

.flex.column-gap-2.mb-4(class="lg:column-gap-4")
	Button.flex-1.justify-content-around(
		v-if="$props.methods.creditCard.enabled"
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

	Button.flex-1.flex.flex-column.justify-content-around(
		v-if="$props.methods.bankSlip.enabled"
		outlined
		class="lg:py-4"
		:disabled="isExpired($props.methods.bankSlip?.expirationRule)"
		:severity="$route.name === `${$props.type}-method-bank-slip` ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: `${$props.type}-method-bank-slip`, query: $route.query })"
	)
		IconBankSlip
		.p-button-label {{ $t('payment.methods.bankSlip') }}
		.text-xs.text-center.font-light(
			v-if="isExpired($props.methods.bankSlip?.expirationRule)"
			severity="info"
		) {{ $t('general.unavailableAt', [$d(getExpirationDate($props.methods.bankSlip?.expirationRule), 'friendly')]) }}

	Button.flex-1.flex.flex-column.justify-content-around(
		v-if="$props.methods.pix.enabled"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:disabled="isExpired($props.methods.pix?.expirationRule)"
		:severity="$route.name === `${$props.type}-method-pix` ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="$router.push({ name: `${$props.type}-method-pix`, query: $route.query })"
	)
		IconPix
		.p-button-label {{ $t('payment.methods.pix') }}
		.text-xs.text-center.font-light(
			v-if="isExpired($props.methods.pix?.expirationRule)"
			severity="info"
		) {{ $t('general.unavailableAt', [$d(getExpirationDate($props.methods.pix?.expirationRule), 'friendly')]) }}
</template>

<script setup>
import { i18n } from '@/i18n';
import { useBreakpoints } from '@/composables/breakpoints';
import { useDate } from '@/composables/utils';

const props = defineProps({
	type: { type: String, required: true },
	methods: { type: Array, required: true }
});
const methodRoutes = {
	creditCard: `${props.type}-method-credit-card`,
	bankSlip: `${props.type}-method-bank-slip`,
	pix: `${props.type}-method-pix`
};
const invoice = inject('invoice');
const router = useRouter();
const route = useRoute();
const { largeScreen } = useBreakpoints();
const { isExpired, getExpirationDate } = useDate();
const isPossibleTab = (method) => method.enabled && !isExpired(method?.expirationRule);
const firstPossibleTab = ref((Object.entries(props.methods).find(([key, value]) => isPossibleTab(value)) || [])[0]);
const currentTab = computed(() => Object.keys(methodRoutes).find((tab) => methodRoutes[tab] === route.name));

if ((!route.name.includes('method') || !isPossibleTab(props.methods[currentTab.value])) && firstPossibleTab.value) {
	router.push({
		name: methodRoutes[firstPossibleTab.value],
		query: route.query
	});
} else {
	router.push({ name: props.type });
}
</script>

<style lang="stylus">
.p-button-label
	flex-grow 0
</style>
