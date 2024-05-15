import { fetchGQL } from '#server/services/index.mjs';
import { setContent } from '#server/services/checkout.mjs';
import { publicFetchInvoicePaymentLink } from '#server/graphql/invoice.mjs';

export default {
	async getPaymentLink(req) {
		const response = await fetchGQL(publicFetchInvoicePaymentLink, { accessToken: req.query.accessToken });
		const data = response.data.publicFetchInvoicePaymentLink;
		const [ product ] = data.invoice.items;

		return setContent(data.organization, product);
	}
};
