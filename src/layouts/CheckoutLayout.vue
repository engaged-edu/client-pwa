<template lang="pug">
.layout.my-0.mx-auto.px-3.w-full.overflow-hidden.flex.flex-column
	ProgressSpinner.mt-8(v-if="$props.loading")
	template(v-else)
		img.layout__logo.mx-auto.my-3(:src="organization.logoUrl")
		section.layout__resume(v-if="!largeScreen")
			slot(name="resume")

		main.layout__container.flex-grow-1
			div(class="lg:col-7")
				template(v-if="$props.step === 'initial'")
					section.layout__identity.mb-3
						Card(:pt="{content: {class: 'py-0'}}")
							template(#content)
								slot(name="identity")

					section.layout__method
						Card(:pt="{content: {class: 'py-0'}}")
							template(#content)
								slot(name="method")

				section.layout__status(v-else)
					slot(name="status")

			section.layout__summary(
				v-if="largeScreen"
				class="lg:col-5"
			)
				Card.mb-3(:pt="{content: {class: 'py-0'}}")
					template(#content)
						slot(name="summary")

				Button.w-full.justify-content-center(
					v-if="$props.step === 'initial'"
					size="large"
					:label="$t('payment.finishPayment')"
					@click="handleSubmit"
				)
					template(#icon)
						IconCheck.p-button-icon-right

				.text-sm.text-color-secondary.text-center.my-3(v-html="$t('payment.terms', { name: organization.name })")
				.text-sm.text-green-500.mt-6.flex.align-items-center.justify-content-center
					IconSafe.mr-2
					| {{ $t('general.safeEnv') }}

		footer.layout__footer.my-2.text-xs.text-center.text-gray-400(class="lg:my-5") {{ $t('general.poweredBy') }}&nbsp;
			a.no-underline.text-gray-400(
				href="https://engaged.com.br"
				target="_blank"
			) {{ $t('campli') }}

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
					:label="$t('payment.hideSummary')"
					@click="summaryVisible = false"
				)
					template(#icon)
						IconDown.p-button-icon-right
			slot(name="summary")

			Button.w-full.justify-content-center(
				v-if="$props.step === 'initial'"
				:label="$t('payment.finishPayment')"
				@click="handleSubmit"
			)
				template(#icon)
					IconCheck.p-button-icon-right

Sidebar.border-round-top-lg(
	v-if="!largeScreen && invoice.total"
	visible
	position="bottom"
	style="height: auto"
	:pt="{ mask: { class: 'pointer-events-none', style: 'background: transparent !important' } }"
)
	template(#container)
		.p-3
			.text-sm.font-bold.flex.justify-content-between
				span {{ $t('payment.totalPayment') }}
				span.cursor-pointer.flex.align-items-center(@click="summaryVisible = true") {{ $t('cur', [invoice.amount, invoice.currency]) }}
					IconDown.ml-2

			Button.w-full.justify-content-center.mt-3(
				v-if="$props.step === 'initial'"
				:label="$t('payment.finishPayment')"
				@click="handleSubmit"
			)
				template(#icon)
					IconCheck.p-button-icon-right

Dialog(
	v-model:visible="dialogVisible"
	modal
	:closable="false"
	:pt="{ root: 'flex flex-column gap-3 w-22rem py-5 px-3 text-center' }"
)
	template(#container)
		IconSpinner.text-7xl(v-if="dialogContent.type === 'loading'")
		IconError.text-7xl.text-red-500(v-if="dialogContent.type === 'error'")
		IconOk.text-7xl.text-green-500(v-if="dialogContent.type === 'success'")

		.font-semibold.text-xs.text-600(v-if="dialogContent.title") {{ dialogContent.title }}
		.font-semibold.text-xs.text-color-secondary(v-if="dialogContent.description") {{ dialogContent.description }}
</template>

<script>
import { useBreakpoints } from '@/composables/breakpoints';
import { InvoicePaymentLinkStatus } from '@/gql.ts';

export default {
	props: {
		loading: {
			type: Boolean,
			required: true
		},
		step: {
			type: String,
			required: true
		}
	},
	emits: ['submit'],
	setup(props, { expose, emit }) {
		const { largeScreen } = useBreakpoints();
		const status = inject('status');
		const organization = inject('organization');
		const invoice = inject('invoice');
		const summaryVisible = ref(false);
		const dialogVisible = ref(false);
		const dialogContent = ref({
			type: '',
			title: '',
			description: ''
		});

		function showSummary(state = true) {
			summaryVisible.value = state;
		}

		function showDialog(state, content, timer) {
			dialogContent.value = content;
			dialogVisible.value = state;

			if (!timer) {
				return;
			}

			window.setTimeout(() => {
				dialogVisible.value = false;
			}, timer);
		}

		function handleSubmit() {
			summaryVisible.value = false;
			emit('submit');
		}

		expose({
			showSummary,
			showDialog
		});

		return {
			InvoicePaymentLinkStatus,
			largeScreen,
			organization,
			invoice,
			summaryVisible,
			dialogVisible,
			dialogContent,
			handleSubmit
		};
	}
};
</script>

<style lang="stylus">
#app
	background var(--bluegray-50)

.layout
	max-width unit($screens.xl, px)
	min-height 100dvh

	@media $to.lg
		padding-bottom 115px

	&__logo
		display block
		max-width 200px
		max-height 82px

	&__container
		@media $from.lg
			display flex
			flex-wrap wrap
</style>
