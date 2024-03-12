<template lang="pug">
.flex.flex-column.align-items-center
	.flex.justify-content-center.align-items-center.gap-4.my-5
		.flex.align-items-center.gap-2
			IconPix
			span {{ $t('payment.methods.pix') }}
		.text-sm {{ $t('payment.amount') }}:&nbsp;
			span.font-bold {{ $t('cur', [invoice.amount, invoice.currency]) }}

	.text-sm.text-color-secondary.flex.flex-column.max-w-30rem.gap-4
		.flex.align-items-center
			i-mdi-numeric-1-circle.w-1.h-2rem.p-1
			.w-9(v-html="$t('payment.pixInstructions[0]')")
		.flex.align-items-center
			i-mdi-numeric-2-circle.w-1.h-2rem.p-1
			.w-9 {{ $t('payment.pixInstructions[1]') }}
		.flex.align-items-center
			i-mdi-numeric-3-circle.w-1.h-2rem.p-1
			.w-9 {{ $t('payment.pixInstructions[2]') }}
		.flex.align-items-center
			i-mdi-numeric-4-circle.w-1.h-2rem.p-1
			.w-9 {{ $t('payment.pixInstructions[3]') }}
</template>

<script setup>
const invoice = inject('invoice');

</script>
