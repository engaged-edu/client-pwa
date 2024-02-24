<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.typeYourInfo') }}

.formgrid.grid
	.field.col-12(class="lg:col-6")
		label(for="full-name") {{ $t('general.identity.fullName') }}:
		InputText#full-name.w-full(
			v-model="$v.name.$model"
			:class="{ 'p-invalid': $v.name.$invalid }"
		)
	.field.col-12(class="lg:col-6")
		label(for="email") {{ $t('general.identity.email') }}:
		InputText#email.w-full(
			v-model="$v.email.$model"
			:class="{ 'p-invalid': $v.email.$invalid }"
		)
	.field.col-12(class="lg:col-6")
		label(for="confirm-email") {{ $t('general.identity.confirmEmail') }}:
		InputText#confirm-email.w-full(
			v-model="$v.confirmEmail.$model"
			:class="{ 'p-invalid': $v.confirmEmail.$invalid }"
		)
	.field.col-12(class="lg:col-6")
		label(for="country") {{ $t('general.identity.country') }}:
		InputCountry#country.w-full(
			v-model="$v.country.$model"
			:class="{ 'p-invalid': $v.country.$invalid }"
			@change="handleCountry"
		)
	.field.col-12(class="lg:col-6")
		label(for="phone") {{ $t('general.identity.phone') }}:
		InputPhone(
			v-model="$v.phone.$model"
			:class="{ 'p-invalid': $v.phone.$invalid }"
			@input="$v.phone.phoneNumber.$touch()"
		)
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
		InputMask#cpf.w-full(
			v-model="$v.cpf.$model"
			:mask="masks.cpf"
			:class="{ 'p-invalid': $v.cpf.$invalid }"
		)
	.field.col-12(
		v-if="form.country !== CountryIsoCode.Br || form.country === CountryIsoCode.Br && form.legal !== LegalPersonType.Individual"
		class="lg:col-6"
	)
		label(for="company-name") {{ $t('general.identity.companyName') }}:
		InputText#company-name.w-full(
			v-model="$v.companyName.$model"
			:class="{ 'p-invalid': $v.companyName.$invalid }"
		)
	.field.col-12(
		v-if="form.country === CountryIsoCode.Br && form.legal !== LegalPersonType.Individual"
		class="lg:col-6"
	)
		label(for="cnpj") {{ $t('general.identity.cnpj') }}:
		InputMask#cnpj.w-full(
			v-model="$v.cnpj.$model"
			:mask="masks.cnpj"
			:class="{ 'p-invalid': $v.cnpj.$invalid }"
		)
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { useMasks, useValidations } from '@/composables/utils';
import { CountryIsoCode, LegalPersonType } from '@/gql.ts';

const { masks } = useMasks();
const {
	required,
	minLength,
	sameAs,
	email,
	phone
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
		required,
		minLength: minLength(5)
	},
	email: {
		required: required(),
		email: email()
	},
	confirmEmail: { sameAsEmail: sameAs(computed(() => form.email)) },
	country: { required: required() },
	phone: {
		phoneNumber: { required: required() },
		phoneNumberCountry: { required: required() }
	},
	legal: { required: required() },
	cpf: { required: required() },
	cnpj: { required: required() },
	companyName: {
		required: required(),
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
</script>
