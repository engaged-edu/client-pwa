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
export {
	publicFetchCheckout,
	publicFetchStudentCheckoutPurchase
} from './queries/checkout.graphql';
export {
	publicCreatePaymentFromInvoicePaymentLink,
	publicCancelInvoicePaymentLinkPayment
} from './mutations/invoice.graphql';
export {
	publicCreateCheckoutPayment,
	publicCancelCheckoutPayment
} from './mutations/checkout.graphql';

export {
	publicCallFacebookPixelViewContentEvent,
	publicCallFacebookPixelInitiateCheckoutEvent,
	publicCallFacebookPixelLeadEvent
} from './mutations/facebookPixel.graphql';

export default graphQLClient;
