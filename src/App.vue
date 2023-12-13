<script setup>
import {ApolloClients} from '@vue/apollo-composable';
import {useDarkMode} from '@/composables/darkMode';
import graphQLClient from '@/graphql';

const {initTheme} = useDarkMode(),
	route = useRoute();

initTheme();

watch(() => route.meta.title, (title) => {
	if (title) {
		useHead({title});
	}
});

provide(ApolloClients, {default: graphQLClient});
</script>

<template lang="pug">
RouterView
</template>
