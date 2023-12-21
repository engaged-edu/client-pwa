<template lang="pug">
.layout.my-0.mx-auto.px-3.w-full.overflow-hidden.flex.flex-column
	ProgressSpinner.mt-8(v-if="loading")
	template(v-else)
		img.layout__logo.mx-auto.my-3(
			class="md:my-6"
			:src="organization.logoUrl"
		)
		section.layout__resume
			slot(name="resume")

		main.layout__container.flex-grow-1
			div(class="lg:col-8")
				section.layout__identity.mb-4
					Card(:pt="{content: {class: 'py-0'}}")
						template(#content)
							slot(name="identity")

				section.layout__method
					Card(:pt="{content: {class: 'py-0'}}")
						template(#content)
							slot(name="method")

			section.layout__summary(
				v-if="largeScreen"
				class="lg:col-4"
			)
				Card(:pt="{content: {class: 'py-0'}}")
					template(#content)
						slot(name="summary")

		footer.layout__footer.my-2.text-xs.text-center.text-gray-400(class="lg:my-5") {{ $t('general.poweredBy') }}
</template>

<script setup>
const organization = inject('organization');

defineProps({
	loading: {
		type: Boolean,
		required: true
	}
});
</script>

<style lang="stylus">
.layout
	max-width unit($screens.xl, px)
	min-height 100dvh

	&__logo
		display block
		max-width 200px
		max-height 82px

	&__container
		@media $from.lg
			display flex
			flex-wrap wrap
</style>
