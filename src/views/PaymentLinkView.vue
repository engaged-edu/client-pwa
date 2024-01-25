<template lang="pug">
CheckoutLayout(
	ref="$CheckoutLayout"
	:loading="loading"
)
	template(#resume)
		ResumeComponent(:handle-show-summary="$CheckoutLayout.showSummary")

	template(#identity)
		IdentityComponent

	template(#method)
		MethodComponent
		router-view

	template(#summary)
		SummaryComponent
</template>

<script setup>
import parsePhoneNumber from 'libphonenumber-js';
import { useQuery } from '@vue/apollo-composable';
import { useLogo } from '@/composables/utils';
import ResumeComponent from '@/components/ResumeComponent.vue';
import IdentityComponent from '@/components/IdentityComponent.vue';
import MethodComponent from '@/components/MethodComponent.vue';
import SummaryComponent from '@/components/SummaryComponent.vue';
import { publicFetchInvoicePaymentLink } from '@/graphql/queries/invoice';
import { InvoiceItemType } from '@/gql.ts';

const route = useRoute(),
	logo = useLogo(),
	{ result, loading } = useQuery(publicFetchInvoicePaymentLink, { accessToken: route.query.accessToken }),
	data = computed(() => result.value?.publicFetchInvoicePaymentLink),
	products = computed(() => data.value?.invoice?.items.map((item) => {
		const isProduct = item?.type === InvoiceItemType.Product;

		if (isProduct) {
			return {
				type: item.type,
				name: item.product.name,
				description: item.product.description,
				quantity: item.quantity,
				amount: item.product.prices.find((price) => price._id === item.productPrice)?.billingConfig.unitAmount * item.quantity
			};
		}

		return {
			type: item.type,
			name: item.name,
			quantity: item.quantity,
			amount: item.amount * item.quantity
		};
	}) || []),
	discounts = computed(() => data.value?.invoice?.discounts || []),
	$CheckoutLayout = ref();

provide('products', products);
provide('discounts', discounts);

provide('organization', computed(() => {
	const org = data.value?.organization;

	return {
		id: org?._id,
		name: org?.name,
		logoUrl: logo.getLogo(org?.appearance),
		color: org?.appearance?.primaryColor,
		softDescriptor: `Pg *Ed ${org?.payment?.creditCard.softDescriptor || ''}`
	};
}));

provide('userProfile', computed(() => {
	const address = data.value?.invoice?.userPaymentProfile.address,
		taxIds = data.value?.invoice?.userPaymentProfile.taxIds,
		user = data.value?.invoice?.user;

	function makeAddress() {
		if (!address) {
			return null;
		}

		if (address.complement) {
			return `${address.street}, ${address.number}, ${address.complement} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}`;
		}

		return `${address.street}, ${address.number} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zipcode}`;
	}

	function makePhone() {
		if (!user.phoneNumber) {
			return null;
		}

		const phone = parsePhoneNumber(user.phoneNumber || '', user.phoneNumberCountry);

		return {
			number: user.phoneNumber,
			country: user.phoneNumberCountry,
			parsed: phone.formatNational()
		};
	}

	return {
		name: data.value?.invoice?.user.name,
		email: data.value?.invoice?.user.email,
		businessName: data.value?.invoice?.userPaymentProfile.name,
		country: data.value?.invoice?.userPaymentProfile.country,
		type: data.value?.invoice?.userPaymentProfile.type,
		taxId: taxIds.length ? taxIds[0] : null,
		address: makeAddress(),
		phone: makePhone()
	};
}));

provide('invoice', computed(() => {
	const amount = data.value?.amount || 0,
		subtotal = products.value.reduce((acc, product) => acc + product.amount, 0),
		totalDiscount = discounts.value.reduce((acc, discount) => acc + discount.amount, 0),
		total = subtotal - totalDiscount,
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
			currency: data.value?.invoice?.currency,
			discounts: totalDiscount,
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
