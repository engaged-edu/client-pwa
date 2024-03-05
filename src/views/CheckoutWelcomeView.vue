<template lang="pug">
.layout.my-0.mx-auto.w-full.overflow-hidden.flex.flex-column
	ProgressSpinner.mt-8(v-if="loading")
	template(v-else)
		img.layout__logo.mx-auto.my-3(:src="organization.logoUrl")

		.surface-0.p-3.text-color-secondary.line-height-3(class="lg:p-6")
			.layout__container
				h1.font-bold.text-center.text-xl.text-green-500.my-0(class="lg:text-4xl") {{ data.user.name }}, parabéns sua compra foi aprovada!

				p.text-color-secondary.mt-3.mb-0 Ficamos muito felizes em compartilhar esse momento com você!
				p.mt-3.mb-0 Algumas informações são importantes compartilhar contigo:
				ul.m-0.p-0.pl-3
					li A cobrança aparecerá em sua fatura como: #[span.font-bold XYZ.com];
					li A cobrança aparecerá em sua fatura como: #[span.font-bold XYZ.com];
					li A cobrança aparecerá em sua fatura como: #[span.font-bold XYZ.com];
					li A cobrança aparecerá em sua fatura como: #[span.font-bold XYZ.com];
				p.text-color-secondary.mt-3.mb-0 Logo aqui abaixo listamos os itens que você adquiriu;

				Button.block.mx-auto.mt-3(
					class="lg:mt-6"
					label="Acessar conteúdo"
				)

		.p-3(class="lg:p-6")
			.layout__container.grid
				.col-12.mx-auto(class="md:col-6 lg:col-4")
					Card(:pt="{body: {class: 'py-2 lg:p-3'}}")
						template(#content)
							h3.text-sm.font-bold.my-0.flex.align-items-center.justify-content-between(class="lg:text-base") 1x Nome do produto
								Tag.text-center(severity="success") Disponível

							p.text-sm.m-0.mt-3.ellipsis.ellipsis-3 Descrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda descDescrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda desc

							Button.surface-card.block.mx-auto.mt-2(
								text
								rounded
								size="small"
								severity="success"
								label="Mostrar conteúdo"
							)

				.col-12.mx-auto(class="md:col-6 lg:col-4")
					Card(:pt="{body: {class: 'py-2 lg:p-3'}}")
						template(#content)
							h3.text-sm.font-bold.my-0.flex.align-items-center.justify-content-between(class="lg:text-base") 1x Nome do produto
								Tag.text-center(severity="success") Disponível

							p.text-sm.m-0.mt-3.ellipsis.ellipsis-3 Descrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda descDescrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda desc

							Button.surface-card.block.mx-auto.mt-2(
								text
								rounded
								size="small"
								severity="success"
								label="Mostrar conteúdo"
							)

				.col-12.mx-auto(class="md:col-6 lg:col-4")
					Card(:pt="{body: {class: 'py-2 lg:p-3'}}")
						template(#content)
							h3.text-sm.font-bold.my-0.flex.align-items-center.justify-content-between(class="lg:text-base") 1x Nome do produto
								Tag.text-center(severity="success") Disponível #[br] até 28/Jul/24

							p.text-sm.m-0.mt-3.ellipsis.ellipsis-3 Descrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda descDescrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda desc

							Button.surface-card.block.mx-auto.mt-2(
								text
								rounded
								size="small"
								severity="success"
								label="Mostrar conteúdo"
							)

				.col-12.mx-auto(class="md:col-6 lg:col-4")
					Card(:pt="{body: {class: 'py-2 lg:p-3'}}")
						template(#content)
							h3.text-sm.font-bold.my-0.flex.align-items-center.justify-content-between(class="lg:text-base") 1x Nome do produto
								Tag.text-center(severity="primary") Disponível #[br] até 28/Jul/24

							p.text-sm.m-0.mt-3.ellipsis.ellipsis-3 Descrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda descDescrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda desc

							Button.surface-card.block.mx-auto.mt-2(
								text
								rounded
								size="small"
								severity="primary"
								label="Mostrar conteúdo"
							)

				.col-12.mx-auto(class="md:col-6 lg:col-4")
					Card(:pt="{body: {class: 'py-2 lg:p-3'}}")
						template(#content)
							h3.text-sm.font-bold.my-0.flex.align-items-center.justify-content-between(class="lg:text-base") 1x Nome do produto
								Tag.text-center(severity="success") Disponível

							p.text-sm.m-0.mt-3.ellipsis.ellipsis-3 Descrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda descDescrição do produto que terá no máximo 3 linhas, e o restante que não couber ficará em ellipsis com tooltip ao passar o mouse no hover mostrando toda desc

							Button.surface-card.block.mx-auto.mt-2(
								text
								rounded
								size="small"
								severity="success"
								label="Mostrar conteúdo"
							)

		.surface-0.p-3.text-gray-600.line-height-3(class="lg:p-6")
			.layout__container
				h1.font-bold.text-center.text-xl.my-0(class="lg:text-4xl") Confira os próximos passos

				.grid.text-center.mt-3(class="lg:mt-6")
					.col-12.mx-auto(class="md:col-6 lg:col-4")
						.bg-green-100.text-green-600.flex.justify-center.w-5rem.h-5rem.p-3.mx-auto.border-circle
							i-mdi-monitor-cellphone-star.text-5xl

						h2.font-bold.text-lg.my-3(class="lg:text-xl") 1. Acesso à plataforma

						p.text-sm.my-0.mx-auto.max-w-13rem(class="lg:text-base") Clique no botão abaixo #[br] “Acessar conteúdo”

					.col-12.mx-auto(class="md:col-6 lg:col-4")
						.bg-cyan-100.text-cyan-600.flex.justify-center.w-5rem.h-5rem.p-3.mx-auto.border-circle
							i-mdi-account-multiple-check.text-5xl

						h2.font-bold.text-lg.my-3(class="lg:text-xl") 2. Área de membros

						p.text-sm.my-0.mx-auto.max-w-13rem(class="lg:text-base") Você será direcionado para a nossa área de membros

					.col-12.mx-auto(class="md:col-6 lg:col-4")
						.bg-blue-100.text-blue-600.flex.justify-center.w-5rem.h-5rem.p-3.mx-auto.border-circle
							i-mdi-cube-outline.text-5xl

						h2.font-bold.text-lg.my-3(class="lg:text-xl") 3. Vitrine

						p.text-sm.my-0.mx-auto.max-w-13rem(class="lg:text-base") Navegue até a seção “Vitrine” para acessar todo o conteúdo adquirido

				Button.block.mx-auto.mt-3(
					class="lg:mt-6"
					label="Acessar conteúdo"
				)

	footer.layout__footer.my-2.text-xs.text-center.text-gray-400(class="lg:my-6") {{ $t('general.poweredBy') }}&nbsp;
		a.no-underline.text-gray-400(
			href="https://engaged.com.br"
			target="_blank"
		) {{ $t('campli') }}
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import { useLogo } from '@/composables/utils';
import { publicFetchStudentCheckoutPurchase } from '@/graphql';

const route = useRoute();
const logo = useLogo();
const checkoutSharedId = computed(() => route.params.id);
const studentUserId = computed(() => route.params.user);
const {
	result,
	loading
} = useQuery(publicFetchStudentCheckoutPurchase, {
	checkoutSharedId: checkoutSharedId.value,
	studentUserId: studentUserId.value
});
const data = computed(() => result.value?.publicFetchStudentCheckoutPurchase);
const organization = computed(() => {
	const org = data.value?.organization;

	return {
		id: org?._id,
		name: org?.name,
		logoUrl: logo.getLogo(org?.appearance),
		color: org?.appearance?.primaryColor,
		softDescriptor: `Pg *Ed ${org?.payment?.creditCard.softDescriptor || ''}`
	};
});

</script>

<style lang="stylus">
#app
	background var(--bluegray-50)

.layout
	min-height 100dvh

	&__logo
		display block
		max-width 200px
		max-height 82px

	&__container
		margin-left auto
		margin-right auto
		max-width unit($screens.xl, px)
		width 100%
</style>
