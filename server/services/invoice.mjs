import { fetchGQL } from '#server/services/index.mjs';
import { publicFetchInvoicePaymentLink } from '#server/graphql/invoice.mjs';

export default {
	async getPaymentLink(req) {
		const response = await fetchGQL(publicFetchInvoicePaymentLink, { accessToken: req.query.accessToken });
		const data = response.data.publicFetchInvoicePaymentLink;
		const [ product ] = data.invoice.items;
		const { appearance } = data.organization;

		return {
			title: `${data.organization.name} - ${product?.product?.name || product.name}`,
			description: product?.description,
			favicon: appearance?.squareLogo32?.url,
			image: appearance?.logo?.url || appearance?.squareLogo256?.url
		};
	}
};
