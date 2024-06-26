<template lang="pug">
.layout.my-0.mx-auto.w-full.overflow-hidden.flex.flex-column
	ProgressSpinner.mt-8(v-if="loading || !data")
	template(v-else)
		img.layout__logo.mx-auto.my-3(:src="organization.logoUrl")

		.surface-0.p-3.text-color-secondary.line-height-3(class="lg:p-6")
			.layout__box
				h1.font-bold.text-center.text-xl.text-green-500.my-0(class="lg:text-4xl") {{ $t('checkout.welcome.title', [data.user.name.split(' ')[0]]) }}

				template(v-if="hasAccesses")
					p.mt-3.mb-0 {{ $t('checkout.welcome.hero.access.p1') }}
					p.mt-3.mb-0 {{ $t('checkout.welcome.hero.access.p2') }}
					i18n-t.mt-3.mb-0(
						keypath="checkout.welcome.hero.access.p3"
						tag="p"
					)
						template(#email)
							span.font-bold {{ data.user.email }}

				i18n-t.mt-3.mb-0(
					v-else
					keypath="checkout.welcome.hero.other"
					tag="p"
				)
					template(#email)
						span.font-bold {{ data.user.email }}

				.block.mt-3.text-center(v-if="hasAccesses")
					a.no-underline(
						:href="accessUrl"
						:title="$t('checkout.welcome.accessContent')"
					)
						Button(:label="$t('checkout.welcome.accessContent')")

				i18n-t.mt-3.mb-0(
					v-if="hasAccesses"
					keypath="checkout.welcome.hero.access.p4"
					tag="p"
				)
					template(#email)
						span.font-bold {{ data.user.email }}

					template(#url)
						a.no-underline.text-primary(
							:href="accessUrl"
							:title="$t('checkout.welcome.accessContent')"
							class="hover:underline"
						) {{ data.organization.url }}

				p.mt-3.mb-0 {{ $t('checkout.welcome.hero.outro') }}

				.flex.flex-wrap.justify-content-center.gap-3.font-light.text-xs.mt-3(class="lg:mt-4")
					.flex.align-items-center.gap-1.white-space-nowrap.text-green-500
						i-mdi-check-circle-outline.text-lg
						| {{ $t('checkout.welcome.confirmedPurchase') }} #[span.font-bold \#{{ data.payment.purchase._id }}]
					.flex.align-items-center.gap-1.white-space-nowrap.text-blue-500(v-if="data.payment.paymentMethod === PaymentMethod.CreditCard")
						i-mdi-list-box-outline.text-lg
						| {{ $t('checkout.welcome.softDescriptor') }}: #[span.font-bold {{ organization.softDescriptor }}]

		.p-3(class="lg:p-6")
			.layout__box.grid
				.col-12.mx-auto(
					v-for="product in products"
					:key="product.id"
					class="md:col-6 lg:col-4"
				)
					Card(:pt="{body: {class: 'py-2 lg:p-3'}}")
						template(#content)
							.flex.align-items-center.justify-content-between
								h3.text-sm.font-bold.my-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis(class="lg:text-base") {{ product.quantity }}x {{ product.name }}
								Tag.block.text-center(
									v-if="!!product.accesses"
									severity="success"
								) {{ $t('general.available') }}
									template(v-if="product.expirationDate")
										br
										span {{ $t('general.until') }} {{ $d(product.expirationDate) }}

							p.text-sm.m-0.mt-3.ellipsis.ellipsis-3(v-if="product.description") {{ product.description }}

							ul.text-sm.font-semibold.line-height-3.p-0.pl-3.m-0.mt-3(v-if="!!product.accesses && product.showAccesses")
								li(
									v-for="access in product?.accesses"
									:key="access"
								) {{ access }}

							Button.surface-card.flex.mx-auto.mt-2(
								v-if="!!product.accesses"
								text
								size="small"
								severity="success"
								icon-pos="right"
								:icon="product.showAccesses ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
								:label="$t(product.showAccesses ? 'general.hideContent' : 'general.showContent')"
								@click="product.showAccesses = !product.showAccesses"
							)

		.surface-0.p-3.text-gray-600.line-height-3(
			v-if="hasAccesses"
			class="lg:p-6"
		)
			.layout__box
				h1.font-bold.text-center.text-xl.my-0(class="lg:text-4xl") {{ $t('checkout.welcome.steps.title') }}

				.grid.text-center.mt-3(class="lg:mt-6")
					.col-12.mx-auto(class="md:col-6 lg:col-4")
						.bg-green-100.text-green-600.flex.justify-center.w-5rem.h-5rem.p-3.mx-auto.border-circle
							i-mdi-monitor-cellphone-star.text-5xl

						h2.font-bold.text-lg.my-3(class="lg:text-xl") 1. {{ $t('checkout.welcome.steps.step1.title') }}

						p.text-sm.my-0.mx-auto.max-w-13rem(
							class="lg:text-base"
							v-html="$t('checkout.welcome.steps.step1.description', [$t('checkout.welcome.accessContent')])"
						)

					.col-12.mx-auto(class="md:col-6 lg:col-4")
						.bg-cyan-100.text-cyan-600.flex.justify-center.w-5rem.h-5rem.p-3.mx-auto.border-circle
							i-mdi-account-multiple-check.text-5xl

						h2.font-bold.text-lg.my-3(class="lg:text-xl") 2. {{ $t('checkout.welcome.steps.step2.title') }}

						p.text-sm.my-0.mx-auto.max-w-13rem(class="lg:text-base") {{ $t('checkout.welcome.steps.step2.description') }}

					.col-12.mx-auto(class="md:col-6 lg:col-4")
						.bg-blue-100.text-blue-600.flex.justify-center.w-5rem.h-5rem.p-3.mx-auto.border-circle
							i-mdi-cube-outline.text-5xl

						h2.font-bold.text-lg.my-3(class="lg:text-xl") 3. {{ $t('checkout.welcome.steps.step3.title') }}

						p.text-sm.my-0.mx-auto.max-w-13rem(class="lg:text-base") {{ $t('checkout.welcome.steps.step3.description') }}

				.block.mt-3.text-center(class="lg:mt-6")
					a.no-underline(
						:href="accessUrl"
						:title="$t('checkout.welcome.accessContent')"
					)
						Button(:label="$t('checkout.welcome.accessContent')")

	footer.layout__footer.mb-2.text-xs.text-center.text-gray-400(
		class="lg:mb-6"
		:class="hasAccesses && 'mt-2 lg:mt-6'"
	) {{ $t('general.poweredBy') }}&nbsp;
		a.no-underline.text-gray-400(
			href="https://engaged.com.br"
			target="_blank"
		) {{ $t('campli') }}
</template>

<script setup>
import { useLazyQuery } from '@vue/apollo-composable';
import { i18n } from '@/i18n';
import { useLogo, useHead } from '@/composables/utils';
import { publicFetchStudentCheckoutPurchase } from '@/graphql';
import {
	InvoiceItemType,
	ProductType,
	AccessExpirationRuleType,
	TimeUnit,
	PaymentMethod
} from '@/gql.ts';

const router = useRouter();
const route = useRoute();
const logo = useLogo();
const { setHead } = useHead();
const checkoutSharedId = computed(() => route.params.id);
const magicToken = ref();
const {
	load,
	result,
	loading,
	onResult,
	refetch
} = useLazyQuery(publicFetchStudentCheckoutPurchase);
const data = computed(() => result.value?.publicFetchStudentCheckoutPurchase);
const accessUrl = computed(() => `${data.value?.organization.url}/auth/sign-in?magicToken=${magicToken.value}`);
const organization = computed(() => {
	const org = data.value?.organization;

	return {
		id: org?._id,
		name: org?.name,
		logoUrl: logo.getLogo(org?.appearance),
		favicon: logo.getLogo32(org?.appearance),
		color: org?.appearance?.primaryColor,
		softDescriptor: `Pg *Ed ${org?.payment?.creditCard.softDescriptor || ''}`
	};
});
const paidAt = computed(() => data.value?.payment.statusAt);
const products = ref([]);
const hasAccesses = ref(false);

function getExpirationDate(expirationRule) {
	if (!expirationRule) {
		return false;
	}

	switch (expirationRule.type) {
		case AccessExpirationRuleType.FixedDate: {
			return expirationRule.date;
		}

		case AccessExpirationRuleType.Period: {
			const paidDate = new Date(paidAt.value);
			let addition;

			switch (expirationRule.unit) {
				case TimeUnit.Year: {
					addition = paidDate.setYear(paidDate.getFullYear() + expirationRule.amount);
					break;
				}

				case TimeUnit.Month: {
					addition = paidDate.setMonth(paidDate.getMonth() + expirationRule.amount);
					break;
				}

				case TimeUnit.Day: {
					addition = paidDate.setDate(paidDate.getDate() + expirationRule.amount);
					break;
				}
			}

			return new Date(addition).toISOString();
		}

		default: {
			return false;
		}
	}
}

onBeforeMount(async () => {
	const mt = route.query.magicToken;

	if (mt) {
		magicToken.value = mt;

		load(publicFetchStudentCheckoutPurchase, {
			checkoutSharedId: checkoutSharedId.value,
			magicToken: mt
		});

		return;
	}

	await nextTick();

	router.push({
		name: 'checkout',
		params: { id: checkoutSharedId.value }
	});
});

onResult((res) => {
	router.replace({ query: null });

	if (res.loading) {
		return;
	}

	const payload = res.data.publicFetchStudentCheckoutPurchase;

	if (!res.loading && !payload) {
		window.setTimeout(refetch, 3000);

		return;
	}

	products.value = payload.checkout.invoiceItems.map((item) => {
		const isProduct = item?.type === InvoiceItemType.Product;

		if (isProduct) {
			const product = {
				id: item.product._id,
				type: item.type,
				name: item.product.name,
				description: item.product.description,
				quantity: item.quantity
			};

			if (item.product.type === ProductType.Access) {
				hasAccesses.value = true;
				product.showAccesses = false;
				product.accesses = item.product.accesses.map((access) => `${access.course.name} - ${access.room.name}`);
			}

			product.expirationDate = getExpirationDate(item.product?.accessExpirationRule);

			return product;
		}

		return {
			id: performance.now(),
			type: item.type,
			name: item.name,
			quantity: item.quantity,
			amount: item.amount * item.quantity
		};
	}) || [];

	setHead({
		title: i18n.t('checkout.welcome.title', [data.value.user.name.split(' ')[0]]),
		favicon: organization.value.favicon
	});
});
</script>

<style lang="stylus">
#app
	background var(--bluegray-50)

.layout
	min-height 100dvh

	&__logo
		display block
		max-width 200px
		max-height 82px

	&__box
		margin-left auto
		margin-right auto
		max-width unit($screens.xl, px)
		width 100%
</style>
