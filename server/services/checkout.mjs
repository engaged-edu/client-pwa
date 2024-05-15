import { fetchGQL } from '#server/services/index.mjs';
import { publicFetchCheckout } from '#server/graphql/checkout.mjs';

export function setContent(organization, product) {
	const { appearance } = organization;

	return {
		title: `${organization.name} - ${product?.product?.name || product.name}`,
		description: product?.product?.description,
		favicon: appearance?.squareLogo32?.url,
		image: appearance?.logo?.url || appearance?.squareLogo256?.url
	};
}

export default {
	async getCheckout(req) {
		const response = await fetchGQL(publicFetchCheckout, { checkoutSharedId: req.params.id });
		const data = response.data.publicFetchCheckout;
		const [ product ] = data.invoiceItems;

		return setContent(data.organization, product);
	}
};
