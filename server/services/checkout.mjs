import { fetchGQL } from '#server/services/index.mjs';
import { publicFetchCheckout } from '#server/graphql/checkout.mjs';

export default {
	async getCheckout(req) {
		const response = await fetchGQL(publicFetchCheckout, { checkoutSharedId: req.params.id });
		const data = response.data.publicFetchCheckout;
		const [ product ] = data.invoiceItems;
		const { appearance } = data.organization;

		return {
			title: `${data.organization.name} - ${product?.product?.name || product.name}`,
			description: product?.description,
			favicon: appearance?.squareLogo32?.url,
			image: appearance?.logo?.url || appearance?.squareLogo256?.url
		};
	}
};
