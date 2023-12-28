<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.payment') }}

.flex.column-gap-2.mb-4(class="lg:column-gap-4")
	Button.flex-1.justify-content-around(
		v-if="invoice.methods.creditCard"
		outlined
		class="lg:py-4"
		icon="pi pi-credit-card"
		icon-pos="top"
		:label="$t('paymentLink.methods.creditCard')"
		:severity="currentTab === methods.CreditCard ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="currentTab = methods.CreditCard"
	)
	Button.flex-1.justify-content-around(
		v-if="invoice.methods.bankSlip"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('paymentLink.methods.bankSlip')"
		:severity="currentTab === methods.BankSlip ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="currentTab = methods.BankSlip"
	)
		template(#icon)
			i-mdi-barcode
	Button.flex-1.justify-content-around(
		v-if="invoice.methods.pix"
		outlined
		class="lg:py-4"
		icon-pos="top"
		:label="$t('paymentLink.methods.pix')"
		:severity="currentTab === methods.Pix ? 'primary' : 'secondary'"
		:size="largeScreen || 'small'"
		@click="currentTab = methods.Pix"
	)
		template(#icon)
			div(v-html="pixIcon")

template(v-if="currentTab === methods.CreditCard")
	form.formgrid(v-if="addCard")
		.field
			label(for="name") {{ $t('paymentLink.creditCard.name') }}:
			InputText#name.w-full(
				v-model="$v.name.$model"
				:class="{ 'p-invalid': $v.name.$invalid }"
				@focus="flip = false"
			)
		.field
			label(for="number") {{ $t('paymentLink.creditCard.number') }}:
			.p-input-icon-right.w-full
				i.pi.pi-credit-card
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
						label(for="expiration") {{ $t('paymentLink.creditCard.expiration') }}:
						InputMask#expiration.w-full(
							v-model="$v.expiration.$model"
							:class="{ 'p-invalid': $v.expiration.$invalid }"
							:mask="masks.ccExp"
							@focus="flip = false"
						)
					.field.col
						label(for="cvv") {{ $t('paymentLink.creditCard.cvv') }}:
						InputMask#cvv.w-full(
							v-model="$v.cvv.$model"
							:class="{ 'p-invalid': $v.cvv.$invalid }"
							:mask="masks.cvv"
							@focus="flip = true"
							@blur="flip = false"
						)

				.field
					label(for="installments") {{ $t('paymentLink.creditCard.selectInstallments') }}:
					Dropdown#installments.w-full(
						v-model="$v.installments.$model"
						option-label="name"
						option-value="value"
						:class="{ 'p-invalid': $v.installments.$invalid }"
						:options="installments"
						@focus="flip = false"
					)

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
			label(for="save-card") {{ $t('paymentLink.creditCard.saveCard') }}

		.font-light.text-blue-500
			.field.flex.align-items-center.gap-2
				i-mdi-shield-lock.text-xl
				.col.p-0.text-xs {{ $t('paymentLink.cryptoSafe') }}

			.flex.align-items-center.gap-2
				i-mdi-list-box-outline.text-xl
				.col.p-0.text-xs(v-html="$t('paymentLink.chargeName', { domain: 'CAMPLI.COM' })")
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { i18n } from '@/i18n';
import { useBreakpoints } from '@/composables/breakpoints';
import { useMasks, useValidations } from '@/composables/utils';
import pixIcon from '/icons/pix.svg?raw';
import CreditCardComponent from '@/components/CreditCardComponent.vue';



const { largeScreen } = useBreakpoints(),
	{ masks } = useMasks(),
	{
		required,
		minLength,
		ccNumber,
		ccExpiration,
		ccCVV
	} = useValidations(),
	methods = {
		CreditCard: 'creditCard',
		BankSlip: 'bankSlip',
		Pix: 'pix'
	},
	invoice = inject('invoice'),
	currentTab = ref(Object.entries(invoice.value.methods).find(([key, value]) => value)[0]),
	addCard = ref(true),
	saveCard = ref(true),
	formInitialState = {
		name: '',
		number: '',
		expiration: '',
		cvv: '',
		installments: null
	},
	form = reactive({ ...formInitialState }),
	$v = useVuelidate({
		name: {
			required: required(),
			minLength: minLength(5)
		},
		number: {
			required: required(),
			ccNumber: ccNumber()
		},
		expiration: {
			required: required(),
			ccExpiration: ccExpiration()
		},
		cvv: {
			required: required(),
			ccCVV: ccCVV()
		},
		installments: { required: required() }
	}, form, { $lazy: true }),
	flip = ref(false),
	makeInstallmentsArray = (ins) => ins.map((i) => ({
		name: i18n.t('paymentLink.installmentOption', [i, i18n.n((invoice.value.amount || 0) / i / 100, invoice.value.currency)]),
		value: i
	})),
	installments = computed(() => {
		if (!invoice.value.creditCard?.enabled) {
			return [];
		}

		const installmentsRule = invoice.value?.creditCard.installmentsRule,
			installmentsArray = installmentsRule?.type === 'UP_TO' ? makeInstallmentsArray(Array.from({ length: installmentsRule.upTo }, (_, i) => i + 1)) : makeInstallmentsArray(installmentsRule?.installments);

		if (installmentsArray.length) {
			form.installments = installmentsArray[0].value;
		}
		console.log(invoice.value);

		return installmentsArray;
	});

</script>

<style lang="stylus">
.p-button-label
	flex-grow 0
</style>
