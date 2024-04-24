<template lang="pug">
Teleport(to="head")
	meta(property="og:type" content="website")
	meta(name="twitter:card" content="summary_large_image")

	template(v-if="head?.title")
		title {{ head.title }}
		meta(property="og:title" :content="head.title")
		meta(name="twitter:title" :content="head.title")

	template(v-if="head?.description")
		meta(name="description" :content="head.description")
		meta(property="og:description" :content="head.description")
		meta(name="twitter:description" :content="head.description")

	template(v-if="head?.favicon")
		link(rel="icon" type="image/png" sizes="32x32" :href="head.favicon")
		link(rel="icon" type="image/png" sizes="256x256" :href="head.favicon")

	template(v-if="head?.image")
		meta(property="og:image" :content="head.image")
		meta(name="twitter:image" :content="head.image")

RouterView
</template>

<script setup>
import { ApolloClients } from '@vue/apollo-composable';
import { useTitle } from '@vueuse/core';
import { useHead } from '@/composables/utils';
import graphQLClient from '@/graphql';

const route = useRoute();
const { head } = useHead();

provide(ApolloClients, { default: graphQLClient });
</script>
