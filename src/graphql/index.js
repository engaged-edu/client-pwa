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

export default graphQLClient;
