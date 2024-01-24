<script setup>
import { ApolloClients } from '@vue/apollo-composable';
import graphQLClient from '@/graphql';

const route = useRoute();

watch(() => route.meta.title, (title) => {
	if (title) {
		useHead({ title });
	}
});

provide(ApolloClients, { default: graphQLClient });
</script>

<template lang="pug">
RouterView
</template>
