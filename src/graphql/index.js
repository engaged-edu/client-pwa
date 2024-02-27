import {
	ApolloClient,
	createHttpLink,
	InMemoryCache
} from '@apollo/client/core';

const httpLink = createHttpLink({ uri: import.meta.env.VITE_API_URL });
const cache = new InMemoryCache();
const graphQLClient = new ApolloClient({
	link: httpLink,
	cache
});

export { publicFetchInvoicePaymentLink } from './queries/invoice.graphql';
export { publicFetchCheckout } from './queries/checkout.graphql';
export {
	publicCreatePaymentFromInvoicePaymentLink,
	publicCancelInvoicePaymentLinkPayment
} from './mutations/invoice.graphql';
export default graphQLClient;
