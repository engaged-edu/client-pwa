<template lang="pug">
.card(:class="{'card--flip': props.flip}")
	.card__side.card__front
		.card__row.card__row--1
			img.card__front__flag(
				v-if="flag"
				:src="`/p/creditCards/${flag}.svg`"
			)
			IconCreditCard.card__front__flag.card__front__flag--no-brand(v-else)
		.card__row.card__row--2
			.card__front__number {{ formattedNumber }}
		.card__row.card__row--3
			.card__front__name {{ props.name || '&nbsp' }}
			.card__front__exp {{ props.exp || '&nbsp' }}
	.card__side.card__back
		.card__row.card__row--1
			.card__back__mag
		.card__row.card__row--2
			.card__back__cvv-title {{ $t('payment.creditCard.cvv') }}
			.card__back__cvv
				.card__back__cvv__number {{ props.cvv || '&nbsp;' }}
		.card__row.card__row--3
			img.card__back__flag(
				v-if="flag"
				:src="`/p/creditCards/${flag}.svg`"
			)
			IconCreditCard.card__back__flag.card__back__flag--no-brand(v-else)
</template>

<script setup>
import { useCreditCard } from '@/composables/utils';

const props = defineProps({
	number: { type: String, default: '' },
	name: { type: String, default: '' },
	exp: { type: String, default: '' },
	cvv: { type: String, default: '' },
	flip: { type: Boolean, default: false }
});
const { getCardFlagShort } = useCreditCard();
const cleanedNumber = computed(() => props.number.replace(/\D/gu, ''));
const formattedNumber = computed(() => cleanedNumber.value.match(/.{0,4}/gu)?.join(' ')
	.substring(0, 23));
const flag = computed(() => getCardFlagShort(cleanedNumber.value));

</script>

<style lang="stylus">
.card
	--perspective 2000px
	--rotate 0deg
	position relative
	aspect-ratio 8.5/5.5
	width 100%
	max-width 20rem
	font-family monospace
	color #fff
	transform-style preserve-3d
	transition 700ms ease
	transform perspective(var(--perspective)) rotateY(var(--rotate))

	&--flip
		--rotate 180deg

	&__front
	&__back
		position absolute
		top 0
		bottom 0
		left 0
		right 0
		display flex
		flex-direction column
		justify-content space-between
		background linear-gradient(80deg, var(--surface-600), var(--surface-400))
		border-radius .75rem
		box-shadow 0px 3px 5px rgba(0, 0, 0, 0.06), 0px 7px 9px rgba(0, 0, 0, 0.12), 0px 20px 25px -8px rgba(0, 0, 0, 0.18)
		backface-visibility hidden

		&__number
		&__name
		&__exp
		&__cvv-title
			filter drop-shadow(0 1px 1px rgba(0, 0, 0, .3))

		&__name
			text-transform uppercase

		&__flag
			margin-left auto
			height 2.5rem

			&--no-brand
				width 8.333333%

	&__front
		display flex
		flex-direction column
		justify-content space-between
		padding 1rem .75rem
		transform rotateY(0deg)

		& ^[0]__row
			&--1
			&--3
				display flex
				align-items flex-end
				justify-content space-between
				gap 1rem

			&--3
				font-size .875rem

		&__number
			font-size 1.25rem

	&__back
		transform rotateY(-180deg)

		& ^[0]__row
			&--2
				padding 0 .5rem
				font-size .875rem
				text-align right

			&--3
				display flex
				align-items flex-end
				justify-content space-between
				padding 0 .5rem

		&__mag
			margin-top 1rem
			height 2rem
			background #000

		&__cvv
			padding .5rem
			color #000
			background #fff
			border-radius .375rem

			&-title
				padding .5rem
</style>
