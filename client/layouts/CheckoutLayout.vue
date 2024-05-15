<template lang="pug">
ConfirmDialog

.layout.my-0.mx-auto.px-3.w-full.overflow-hidden.flex.flex-column(:class="stepUnavailable || 'layout--lg-bottom'")
	ProgressSpinner.mt-8(v-if="$props.loading")
	template(v-else)
		img.layout__logo.mx-auto.my-3(:src="organization.logoUrl")
		section.layout__resume(v-if="!largeScreen && !stepUnavailable")
			slot(name="resume")

		main.layout__container.flex-grow-1
			div(:class="stepUnavailable ? 'col-12 flex align-items-center justify-content-center' : 'lg:col-7'")
				template(v-if="stepInitial")
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
				v-if="largeScreen && !stepUnavailable"
				class="lg:col-5"
			)
				Card.mb-3(:pt="{content: {class: 'py-0'}}")
					template(#content)
						slot(name="summary")

				Button.w-full.justify-content-center(
					v-if="stepInitial"
					size="large"
					:label="$t('payment.finishPayment')"
					@click="handleSubmit"
				)
					template(#icon)
						IconCheck.p-button-icon-right

				i18n-t.text-sm.text-color-secondary.text-center.my-3(
					tag="div"
					keypath="payment.terms"
				)
					span {{ organization.name }}
					br
					span.font-bold.cursor-pointer(
						class="hover:underline"
						@click="dialogTerms = true"
					) {{ $t('terms.terms') }}
					span.font-bold.cursor-pointer(
						class="hover:underline"
						@click="dialogPrivacy = true"
					) {{ $t('terms.privacy') }}
					span.font-bold.cursor-pointer(
						class="hover:underline"
						@click="dialogCookies = true"
					) {{ $t('terms.cookies') }}
				.text-sm.text-green-500.mt-6.flex.align-items-center.justify-content-center
					IconSafe.mr-2
					| {{ $t('general.safeEnv') }}

		footer.layout__footer.my-2.text-xs.text-center.text-gray-400(class="lg:my-5") {{ $t('general.poweredBy') }}&nbsp;
			a.no-underline.text-gray-400(
				class="hover:underline"
				href="https://engaged.com.br"
				target="_blank"
			) {{ $t('campli') }}

template(v-if="!stepUnavailable")
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

				Button.w-full.justify-content-center.mt-3(
					v-if="stepInitial"
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
					v-if="stepInitial"
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
			ProgressSpinner.text-7xl(v-if="dialogContent.type === 'loading'")
			IconError.text-7xl.text-red-500(v-if="dialogContent.type === 'error'")
			IconOk.text-7xl.text-green-500(v-if="dialogContent.type === 'success'")

			.font-semibold.text-xs.text-600(v-if="dialogContent.title") {{ dialogContent.title }}
			.font-semibold.text-xs.text-color-secondary(v-if="dialogContent.description") {{ dialogContent.description }}

	DialogTerms(v-model:visible="dialogTerms")
	DialogPrivacy(v-model:visible="dialogPrivacy")
	DialogCookies(v-model:visible="dialogCookies")
</template>

<script>
import { useConfirm } from 'primevue/useconfirm';
import ConfirmDialog from 'primevue/confirmdialog';
import { i18n } from '@/i18n';
import { useLogo, useHead } from '@/composables/utils';
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
		const route = useRoute();
		const logo = useLogo();
		const { setHead } = useHead();
		const { largeScreen } = useBreakpoints();
		const confirmDialog = useConfirm();
		const status = inject('status');
		const organization = inject('organization');
		const invoice = inject('invoice');
		const products = inject('products');
		const summaryVisible = ref(false);
		const dialogVisible = ref(false);
		const dialogContent = ref({
			type: '',
			title: '',
			description: ''
		});
		const dialogTerms = ref(false);
		const dialogPrivacy = ref(false);
		const dialogCookies = ref(false);

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
			if (!route.name.includes('method')) {
				confirmDialog.require({
					header: i18n.t('payment.unavailableMethodsTitle'),
					message: i18n.t('payment.unavailableMethodsDescription'),
					acceptLabel: i18n.t('general.ok'),
					rejectClass: 'hidden',
					acceptClass: 'p-button-primary'
				});

				return;
			}

			summaryVisible.value = false;
			emit('submit');
		}

		expose({
			showSummary,
			showDialog
		});

		watch(organization, (org) => {
			if (!('id' in org)) {
				return;
			}

			if (org.color) {
				document.querySelector('[name="theme-color"]').setAttribute('content', org.color);
			}

			setHead({
				title: `${org.name} - ${products.value[0].name}`,
				description: products.value[0]?.description,
				favicon: org.logo32Url,
				image: org.logo256Url
			});
		});

		return {
			InvoicePaymentLinkStatus,
			largeScreen,
			organization,
			invoice,
			summaryVisible,
			dialogVisible,
			dialogContent,
			dialogTerms,
			dialogPrivacy,
			dialogCookies,
			handleSubmit,
			stepInitial: computed(() => props.step === 'initial'),
			stepUnavailable: computed(() => props.step === 'unavailable')
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

	&--lg-bottom
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
