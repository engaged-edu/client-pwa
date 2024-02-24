<template lang="pug">
form.formgrid(v-if="addCard")
	.field
		label(for="name") {{ $t('payment.creditCard.name') }}:
		InputText#name.w-full(
			v-model="$v.name.$model"
			:class="{ 'p-invalid': $v.name.$invalid }"
			@focus="flip = false"
		)
	.field
		label(for="number") {{ $t('payment.creditCard.number') }}:
		.p-input-icon-right.w-full
			IconCreditCard
			InputMask#number.w-full(
				v-model="$v.number.$model"
				:class="{ 'p-invalid': $v.number.$invalid }"
				:mask="masks.ccNumber"
				@focus="flip = false"
			)

	.formgrid.grid
		.field.col
			.formgrid.grid
				.field.col
					label(for="expiration") {{ $t('payment.creditCard.expiration') }}:
					InputMask#expiration.w-full(
						v-model="$v.expiration.$model"
						:class="{ 'p-invalid': $v.expiration.$invalid }"
						:mask="masks.ccExp"
						@focus="flip = false"
					)
				.field.col
					label(for="cvv") {{ $t('payment.creditCard.cvv') }}:
					InputMask#cvv.w-full(
						v-model="$v.cvv.$model"
						:class="{ 'p-invalid': $v.cvv.$invalid }"
						:mask="masks.cvv"
						@focus="flip = true"
						@blur="flip = false"
					)

			.field
				label(for="installments") {{ $t('payment.creditCard.selectInstallments') }}:
				Dropdown#installments.w-full(
					v-model="$v.installments.$model"
					option-label="name"
					option-value="value"
					:class="{ 'p-invalid': $v.installments.$invalid }"
					:options="installments"
					@focus="flip = false"
				)
					template(#value)
						div(v-html="currentInstallment")

					template(#option="slotProps")
						div(v-html="slotProps.option.name")

		.field.col.flex.justify-content-end(v-if="largeScreen")
			CreditCardComponent(
				:name="form.name"
				:number="form.number"
				:exp="form.expiration"
				:cvv="form.cvv"
				:flip="flip"
			)

	.field-checkbox
		Checkbox(
			v-model="saveCard"
			input-id="save-card"
			binary
		)
		label(for="save-card") {{ $t('payment.creditCard.saveCard') }}

	.font-light.text-blue-500
		.field.flex.align-items-center.gap-2
			i-mdi-shield-lock.text-xl
			.col.p-0.text-xs {{ $t('payment.cryptoSafe') }}

		.flex.align-items-center.gap-2
			i-mdi-list-box-outline.text-xl
			.col.p-0.text-xs(v-html="$t('payment.chargeName', { domain: organization.softDescriptor })")

</template>

<script setup>
import { useBreakpoints } from '@/composables/breakpoints';
import { useCreditCardForm } from '@/composables/creditCard';
import CreditCardComponent from '@/components/CreditCardComponent.vue';

const { largeScreen } = useBreakpoints();
const organization = inject('organization');
const invoice = inject('invoice');
const flip = ref(false);
const {
	addCard,
	saveCard,
	masks,
	form,
	$v,
	installments,
	currentInstallment
} = useCreditCardForm(invoice);

</script>
