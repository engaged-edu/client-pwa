<template lang="pug">
CheckoutLayout(:loading="loading")
	template(#identity)
		IdentityComponent

	template(#method)
		MethodComponent

	template(#summary)
		.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('paymentLink.itemsSummary') }}
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import { useLogo } from '@/composables/utils';
import IdentityComponent from '@/components/IdentityComponent.vue';
import MethodComponent from '@/components/MethodComponent.vue';
import { publicFetchInvoicePaymentLink } from '@/graphql/queries/invoice';

const route = useRoute(),
	logo = useLogo(),
	{ result, loading } = useQuery(publicFetchInvoicePaymentLink, { accessToken: route.query.accessToken }),
	data = computed(() => result.value?.publicFetchInvoicePaymentLink),
	products = computed(() => data.value?.invoice?.items.map((item) => {
		const isProduct = item?.type === 'test';

		if (isProduct) {
			return {
				name: item.name,
				description: item.description,
				quantity: item.quantity,
				amount: item.prices.find((price) => price._id === data.productPrice)?.billingConfig.unitAmount * item.quantity
			};
		}

		return {
			name: item.name,
			quantity: item.quantity,
			amount: item.amount
		};
	}) || []),
	discounts = computed(() => data.value?.invoice?.discounts || []);

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

	function makeAddress() {
		if (!address) {
			return null;
		}

		if (address.complement) {
			return `${address.street}, ${address.number}, ${address.complement} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}`;
		}

		return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}`;
	}

	return {
		name: data.value?.invoice?.user.name,
		email: data.value?.invoice?.user.email,
		businessName: data.value?.invoice?.userPaymentProfile.name,
		country: data.value?.invoice?.userPaymentProfile.country,
		type: data.value?.invoice?.userPaymentProfile.type,
		taxId: taxIds.length ? taxIds[0] : null,
		address: makeAddress(),
		phone: data.value?.phoneNumber ? {
			number: data.value?.phoneNumber,
			country: data.value?.phoneNumberCountry
		} : null
	};
}));

provide('invoice', computed(() => {
	const amount = data.value?.amount || 0,
		subtotal = products.value.reduce((acc, product) => acc + product.amount, 0),
		total = subtotal - discounts.value.reduce((acc, discount) => acc + discount.amount, 0),
		content = {
			id: data.value?._id,
			createdAt: data.value?.createdAt,
			updatedAt: data.value?.updatedAt,
			status: data.value?.status,
			expirationDate: data.value?.expirationDate,
			methods: {
				creditCard: data.value?.creditCard.enabled || false,
				bankSlip: data.value?.bankSlip.enabled || false,
				pix: data.value?.pix.enabled || false
			},
			currency: data.value.invoice.currency,
			subtotal,
			total,
			amount
		};

	if (content.methods.creditCard) {
		content.creditCard = data.value?.creditCard;
	}

	if (content.methods.bankSlip) {
		content.bankSlip = data.value?.bankSlip;
	}

	return content;
}));
</script>
