import {
	ApolloClient,
	createHttpLink,
	InMemoryCache
} from '@apollo/client/core';

const httpLink = createHttpLink({uri: import.meta.env.VITE_API_URL}),
	cache = new InMemoryCache(),
	graphQLClient = new ApolloClient({
		link: httpLink,
		cache
	});

export default graphQLClient;
