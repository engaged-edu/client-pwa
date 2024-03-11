<template lang="pug">
Dialog.w-full(
	modal
	class="lg:w-10 xl:w-6"
	:header="$t('terms.terms')"
)
	template(
		v-for="content in $tm('terms.termsContent')"
		:key="content.title"
	)
		h1.font-semibold.text-lg(v-html="$rt(content.title)")
		p(
			v-for="p in content.paragraphs"
			:key="p"
			v-html="p"
		)
</template>
