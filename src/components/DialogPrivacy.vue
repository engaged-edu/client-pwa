<template lang="pug">
Dialog.w-full(
	modal
	class="lg:w-10 xl:w-6"
	:header="$t('terms.privacy')"
	:draggable="false"
)
	template(
		v-for="content in $tm('terms.privacyContent')"
		:key="content.title"
	)
		h1.font-semibold.text-xl(
			v-if="content.title"
			v-html="$rt(content.title)"
		)
		h2.font-semibold.text-lg.text-color-secondary(
			v-if="content.subtitle"
			v-html="$rt(content.subtitle)"
		)
		p(
			v-for="p in content.paragraphs"
			:key="p"
			v-html="$rt(p, {organization: organization.name})"
		)
</template>

<script setup>
const organization = inject('organization');

</script>
