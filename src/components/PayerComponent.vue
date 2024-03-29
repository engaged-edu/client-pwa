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
		)
		FieldError(:field="$v.email")

	.field.col-12(class="lg:col-6")
		label(for="confirm-email") {{ $t('general.identity.confirmEmail') }}:
		InputText#confirm-email.w-full(
			v-model="$v.confirmEmail.$model"
			type="email"
			inputmode="email"
			:class="{ 'p-invalid': $v.confirmEmail.$invalid }"
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
import { useVuelidate } from '@vuelidate/core';
import { i18n } from '@/i18n';
import { useMasks, useValidations } from '@/composables/utils';
import { CountryIsoCode, LegalPersonType } from '@/gql.ts';

const { masks } = useMasks();
const {
	required,
	requiredIf,
	minLength,
	sameAs,
	email,
	phone,
	cpf,
	cnpj
} = useValidations();
const formInitialState = {
	name: '',
	email: '',
	confirmEmail: '',
	country: CountryIsoCode.Br,
	phone: {
		phoneNumber: '',
		phoneNumberCountry: CountryIsoCode.Br
	},
	legal: LegalPersonType.Individual,
	cpf: '',
	cnpj: '',
	companyName: ''
};
const form = reactive({ ...formInitialState });
const $v = useVuelidate({
	name: {
		required: required(),
		minLength: minLength(5, i18n.t('validations.fullName'))
	},
	email: {
		required: required(),
		email: email()
	},
	confirmEmail: {
		required: required(),
		email: email(),
		sameAsEmail: sameAs(computed(() => form.email), i18n.t('validations.confirmEmail'))
	},
	country: { required: required() },
	phone: { phone: phone() },
	legal: { required: required() },
	cpf: {
		required: requiredIf(computed(() => form.country === CountryIsoCode.Br && form.legal === LegalPersonType.Individual)),
		cpf: cpf()
	},
	cnpj: {
		required: requiredIf(computed(() => form.country === CountryIsoCode.Br && form.legal !== LegalPersonType.Individual)),
		cnpj: cnpj()
	},
	companyName: {
		required: requiredIf(form.legal !== LegalPersonType.Individual),
		minLength: minLength(5)
	}
}, form, { $lazy: true });

function handleCountry(event) {
	const phoneModel = $v.value.phone.$model;

	if (phoneModel.phoneNumber) {
		return;
	}

	phoneModel.phoneNumberCountry = event.value.code;
}

defineExpose({
	getForm() {
		return { form, $v };
	}
});
</script>
