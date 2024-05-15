<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.typeYourInfo') }}

.formgrid.grid
	.field.col-12(class="lg:col-6")
		label(for="full-name") {{ $t('general.identity.name') }}:
		InputText#full-name.w-full(
			v-model="$v.name.$model"
			:class="{ 'p-invalid': $v.name.$invalid }"
		)
		FieldError(:field="$v.name")

	.field.col-12(class="lg:col-6")
		label(for="email") {{ $t('general.identity.email') }}:
		InputText#email.w-full(
			v-model="$v.email.$model"
			type="email"
			inputmode="email"
			:class="{ 'p-invalid': $v.email.$invalid }"
			@blur="handleCheckEmail"
		)
		FieldError(:field="$v.email")

	.field.col-12(class="lg:col-6")
		label(for="confirm-email") {{ $t('general.identity.confirmEmail') }}:
		InputText#confirm-email.w-full(
			v-model="$v.confirmEmail.$model"
			type="email"
			inputmode="email"
			:class="{ 'p-invalid': $v.confirmEmail.$invalid }"
			@blur="handleCheckEmail"
		)
		FieldError(:field="$v.confirmEmail")

	.field.col-12(class="lg:col-6")
		label(for="country") {{ $t('general.identity.country') }}:
		InputCountry#country.w-full(
			v-model="$v.country.$model"
			:class="{ 'p-invalid': $v.country.$invalid }"
			@change="handleCountry"
		)

	.field.col-12(class="lg:col-6")
		label(for="phone") {{ $t('general.identity.phoneNumber') }}:
		InputPhone(
			v-model="$v.phone.$model"
			inputmode="tel"
			:class="{ 'p-invalid': $v.phone.$invalid }"
			@input="$v.phone.$touch()"
		)
		FieldError(:field="$v.phone")

	.field.col-12(class="lg:col-6")
		label(for="legal") {{ $t('general.identity.legal') }}:
		InputLegalPerson#legal.w-full(
			v-model="$v.legal.$model"
			:class="{ 'p-invalid': $v.legal.$invalid }"
		)

	.field.col-12(
		v-if="form.country === CountryIsoCode.Br && form.legal === LegalPersonType.Individual"
		class="lg:col-6"
	)
		label(for="cpf") {{ $t('general.identity.cpf') }}:
		InputTextMask#cpf.w-full(
			v-model="$v.cpf.$model"
			inputmode="numeric"
			:mask="masks.cpf"
			:class="{ 'p-invalid': $v.cpf.$invalid }"
		)
		FieldError(:field="$v.cpf")

	.field.col-12(
		v-if="form.legal !== LegalPersonType.Individual"
		class="lg:col-6"
	)
		label(for="company-name") {{ $t('general.identity.companyName') }}:
		InputText#company-name.w-full(
			v-model="$v.companyName.$model"
			:class="{ 'p-invalid': $v.companyName.$invalid }"
		)
		FieldError(:field="$v.companyName")

	.field.col-12(
		v-if="form.country === CountryIsoCode.Br && form.legal !== LegalPersonType.Individual"
		class="lg:col-6"
	)
		label(for="cnpj") {{ $t('general.identity.cnpj') }}:
		InputTextMask#cnpj.w-full(
			v-model="$v.cnpj.$model"
			inputmode="numeric"
			:mask="masks.cnpj"
			:class="{ 'p-invalid': $v.cnpj.$invalid }"
		)
		FieldError(:field="$v.cnpj")
</template>

<script setup>
import { usePayerForm } from '@/composables/payer';
import { useMasks } from '@/composables/utils';
import { CountryIsoCode, LegalPersonType } from '@/gql.ts';

const props = defineProps({
	handleCheckPurchase: {
		type: Function,
		required: true
	}
});
const { masks } = useMasks();
const {
	form,
	$v,
	handleCountry
} = usePayerForm();

function handleCheckEmail() {
	const $confirmEmail = $v.value.confirmEmail;

	if (!($confirmEmail.$anyDirty && !$confirmEmail.$error)) {
		return;
	}

	props.handleCheckPurchase();
}

defineExpose({
	getForm() {
		return { form, $v };
	}
});
</script>
