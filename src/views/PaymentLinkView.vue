<template lang="pug">
CheckoutLayout(:loading="loading")
	template(#identity)
		IdentityComponent

	template(#method)
		.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.payment') }}

	template(#summary)
		.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('paymentLink.itemsSummary') }}
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import { useLogo } from '@/composables/logo';
import IdentityComponent from '@/components/IdentityComponent.vue';
import { publicFetchInvoicePaymentLink } from '@/graphql/queries/invoice';

const route = useRoute(),
	logo = useLogo(),
	{ result, loading } = useQuery(publicFetchInvoicePaymentLink, { accessToken: route.query.accessToken }),
	data = computed(() => result.value?.publicFetchInvoicePaymentLink);

provide('organization', computed(() => {
	const org = data.value?.organization;

	return {
		id: org?._id,
		name: org?.name,
		logoUrl: logo.getLogo(org?.appearance),
		color: org?.appearance?.primaryColor
	};
}));

provide('userProfile', computed(() => {
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
}));
</script>
