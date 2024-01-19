<template lang="pug">
.layout.my-0.mx-auto.px-3.w-full.overflow-hidden.flex.flex-column
	ProgressSpinner.mt-8(v-if="$props.loading")
	template(v-else)
		img.layout__logo.mx-auto.my-3(
			class="md:my-6"
			:src="organization.logoUrl"
		)
		section.layout__resume(v-if="!largeScreen")
			slot(name="resume")

		main.layout__container.flex-grow-1
			div(class="lg:col-8")
				section.layout__identity.mb-3
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
				Card.mb-3(:pt="{content: {class: 'py-0'}}")
					template(#content)
						slot(name="summary")

				Button.w-full.justify-content-center(
					size="large"
					icon-pos="right"
					icon="pi pi-lock"
					:label="$t('payment.finishPayment')"
				)

				.text-sm.text-color-secondary.text-center.my-3(v-html="$t('payment.terms', { name: organization.name })")
				.text-sm.text-green-500.mt-6.flex.align-items-center.justify-content-center
					i.pi.pi-lock.mr-2
					| {{ $t('general.safeEnv') }}

		footer.layout__footer.my-2.text-xs.text-center.text-gray-400(class="lg:my-5") {{ $t('general.poweredBy') }}

Sidebar.border-round-top-lg(
	v-if="!largeScreen"
	v-model:visible="summaryVisible"
	position="bottom"
	style="height: auto"
)
	template(#container)
		.p-3
			.flex.justify-content-center.mb-2
				Button(
					text
					plain
					rounded
					size="small"
					severity="secondary"
					icon-pos="right"
					icon="pi pi-chevron-down"
					:label="$t('payment.hideSummary')"
					@click="summaryVisible = false"
				)
			slot(name="summary")

Sidebar.border-round-top-lg(
	v-if="!largeScreen && invoice.total"
	visible
	position="bottom"
	style="height: auto"
	:pt="{ mask: { class: 'pointer-events-none', style: 'background: transparent !important' } }"
)
	template(#container)
		.p-3
			.text-sm.font-bold.flex.justify-content-between.mb-3
				span {{ $t('payment.totalPayment') }}
				span.cursor-pointer.flex.align-items-center(@click="summaryVisible = true") {{ $t('cur', [invoice.total, invoice.currency]) }}
					i.pi.pi-chevron-down.ml-2
			Button.w-full.justify-content-center(
				icon-pos="right"
				icon="pi pi-lock"
				:label="$t('payment.finishPayment')"
			)
</template>

<script>
import { useBreakpoints } from '@/composables/breakpoints';

export default {
	props: {
		loading: {
			type: Boolean,
			required: true
		}
	},
	setup(props, { expose }) {
		const { largeScreen } = useBreakpoints(),
			organization = inject('organization'),
			invoice = inject('invoice'),
			summaryVisible = ref(false);

		function showSummary(state = true) {
			summaryVisible.value = state;
		}

		expose({ showSummary });

		return {
			largeScreen,
			organization,
			invoice,
			summaryVisible
		};
	}
};
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
