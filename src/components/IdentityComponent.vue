<template lang="pug">
div(class="lg:flex lg:column-gap-2")
	.col-12.p-0(class="lg:col-6")
		.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('payment.paymentResponsible') }}

		.text-xs(class="lg:text-sm")
			.flex.column-gap-2.mb-3
				.col-4.p-0.font-semibold {{ $t('general.fullName') }}
				.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ userProfile.name }}
			.flex.column-gap-2.mb-3
				.col-4.p-0.font-semibold {{ $t('general.email') }}
				.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ userProfile.email }}
			.flex.column-gap-2(v-if="userProfile.phone")
				.col-4.p-0.font-semibold {{ $t('general.phone') }}
				.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ userProfile.phone.number }}

	.col-12.mt-5.p-0(
		v-if="largeScreen || showBillingData"
		class="lg:col-6 lg:mt-0"
	)
		.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('payment.billingTaxData') }}

		.text-xs(class="lg:text-sm")
			.flex.column-gap-2.mb-3
				.col-4.p-0.font-semibold {{ userProfile.taxId.type === TaxIdType.BrCpf ? $t('general.fullName') : $t('general.companyName') }}
				.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ userProfile.businessName }}
			.flex.column-gap-2.mb-3
				.col-4.p-0.font-semibold {{ $t(`enums.TaxIdType.${userProfile.taxId.type}`) }}
				.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ formatText(userProfile.taxId.value, userProfile.taxId.type) }}
			.flex.column-gap-2.mb-3
				.col-4.p-0.font-semibold {{ $t('general.country') }}
				.col-8.p-0.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ $t(`countries.${userProfile.country || 'BR'}`) }}
			.flex.column-gap-2(v-if="userProfile.address")
				.col-4.p-0.font-semibold {{ $t('general.address') }}
				.col-8.p-0 {{ userProfile.address }}

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
</template>

<script setup>
import { useBreakpoints } from '@/composables/breakpoints';
import { useFormatText } from '@/composables/utils';
import { TaxIdType } from '@/gql.ts';

const { largeScreen } = useBreakpoints(),
	{ formatText } = useFormatText(),
	showBillingData = ref(false),
	userProfile = inject('userProfile');

</script>
