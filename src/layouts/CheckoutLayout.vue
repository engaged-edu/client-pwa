<template lang="pug">
.layout.my-0.mx-auto.px-3.w-full.overflow-hidden.flex.flex-column
	ProgressSpinner.mt-8(v-if="loading")
	template(v-else)
		img.layout__logo.mx-auto.my-3(
			class="md:my-6"
			:src="organization.logoUrl"
		)
		section.layout__resume

		main.layout__container.flex-grow-1
			div(class="lg:col-8")
				section.layout__identity.mb-4
					Card(:pt="{content: {class: 'py-0 lg:flex lg:column-gap-2'}}")
						template(#content)
							.col-12.p-0(class="lg:col-6")
								.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('paymentLink.paymentResponsible') }}

								.text-xs(class="lg:text-sm")
									.flex.column-gap-2.mb-3
										.col-4.p-0.font-semibold {{ $t('general.fullName') }}
										.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis
											| {{ userProfile.name }}
									.flex.column-gap-2.mb-3
										.col-4.p-0.font-semibold {{ $t('general.email') }}
										.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis
											| {{ userProfile.email }}
									.flex.column-gap-2(v-if="userProfile.phone")
										.col-4.p-0.font-semibold {{ $t('general.phone') }}
										.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis
											| {{ userProfile.phone.number }}

							.col-12.mt-5.p-0(
								v-if="largeScreen || showBillingData"
								class="lg:col-6 lg:mt-0"
							)
								.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('paymentLink.billingTaxData') }}

								.text-xs(class="lg:text-sm")
									.flex.column-gap-2.mb-3
										.col-4.p-0.font-semibold {{ $t('general.companyName') }}
										.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis
											| {{ userProfile.businessName }}
									.flex.column-gap-2.mb-3
										.col-4.p-0.font-semibold {{ $t('general.cnpj') }}
										.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis
											| {{ formatText(userProfile.taxId.value, userProfile.taxId.type === 'BR_CPF' ? 'cpf' : 'cnpj') }}
									.flex.column-gap-2.mb-3
										.col-4.p-0.font-semibold {{ $t('general.country') }}
										.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis
											| {{ $t(`countries.${userProfile.country || 'BR'}`) }}
									.flex.column-gap-2
										.col-4.p-0.font-semibold {{ $t('general.address') }}
										.col-8.p-0
											| {{ userProfile.address }}

							.col-12.mt-4.p-0.flex.justify-content-center(v-if="!largeScreen")
								Button(
									text
									plain
									rounded
									size="small"
									severity="secondary"
									icon-pos="right"
									:icon="showBillingData ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
									:label="showBillingData ? $t('general.hideAllData') : $t('general.showAllData')"
									@click="showBillingData = !showBillingData"
								)

				section.layout__method
					Card(:pt="{content: {class: 'py-0'}}")
						template(#content)
							.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.payment') }}

			section.layout__summary(
				v-if="largeScreen"
				class="lg:col-4"
			)
				Card(:pt="{content: {class: 'py-0'}}")
					template(#content)
						.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('paymentLink.itemsSummary') }}

		footer.layout__footer.my-2.text-xs.text-center.text-gray-400(class="lg:my-5") {{ $t('general.poweredBy') }}
</template>

<script setup>
import {useQuery} from '@vue/apollo-composable';
import {useBreakpoints} from '@/composables/breakpoints';
import {useUtils} from '@/composables/utils';
import {useLogo} from '@/composables/logo';
import {publicFetchInvoicePaymentLink} from '@/graphql/queries/invoice';

const route = useRoute(),
	{largeScreen} = useBreakpoints(),
	{formatText} = useUtils(),
	logo = useLogo(),
	{result, loading} = useQuery(publicFetchInvoicePaymentLink, {accessToken: route.query.accessToken}),
	data = computed(() => result.value?.publicFetchInvoicePaymentLink),
	userProfile = computed(() => {
		const address = data.value?.invoice?.userPaymentProfile.address,
			taxIds = data.value?.invoice?.userPaymentProfile.taxIds;

		return {
			name: data.value?.invoice?.user.name,
			email: data.value?.invoice?.user.email,
			businessName: data.value?.invoice?.userPaymentProfile.name,
			country: data.value?.invoice?.userPaymentProfile.country,
			type: data.value?.invoice?.userPaymentProfile.type,
			taxId: taxIds.length ? taxIds[0] : null,
			address: address ? `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}` : null,
			phone: data.value?.phoneNumber ? {
				number: data.value?.phoneNumber,
				country: data.value?.phoneNumberCountry
			} : null
		};
	}),
	organization = computed(() => {
		const org = data.value?.organization;

		return {
			id: org?._id,
			name: org?.name,
			logoUrl: logo.getLogo(org?.appearance),
			color: org?.appearance?.primaryColor
		};
	}),
	showBillingData = ref(false);

</script>

<style lang="stylus">
.layout
	max-width unit($screens.xl, px)
	min-height 100dvh

	&__logo
		display block
		max-width 200px
		max-height 82px

	&__container
		@media $from.lg
			display flex
			flex-wrap wrap
</style>
