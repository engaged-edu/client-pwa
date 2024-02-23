<template lang="pug">
.text-sm.font-bold.mb-4(class="lg:text-xl") {{ $t('general.typeYourInfo') }}

.formgrid.grid
	.field.col-12(class="lg:col-6")
		label(for="full-name") {{ $t('general.identity.fullName') }}:
		InputText#full-name.w-full
	.field.col-12(class="lg:col-6")
		label(for="email") {{ $t('general.identity.email') }}:
		InputText#email.w-full
	.field.col-12(class="lg:col-6")
		label(for="confirm-email") {{ $t('general.identity.confirmEmail') }}:
		InputText#confirm-email.w-full
	.field.col-12(class="lg:col-6")
		label(for="country") {{ $t('general.identity.country') }}:
		InputCountry#country.w-full(v-model="test")
	.field.col-12(class="lg:col-6")
		label(for="phone") {{ $t('general.identity.phone') }}:
		InputPhone.w-full(v-model="phone")
	.field.col-12(class="lg:col-6")
		label(for="legal") {{ $t('general.identity.legal') }}:
		Dropdown#legal.w-full

	//- .field.col-12(class="lg:col-6")
	//- 	label(for="company-name") {{ $t('general.identity.companyName') }}:
	//- 	InputText#company-name.w-full
	//- .field.col-12(class="lg:col-6")
	//- 	label(for="cnpj") {{ $t('general.identity.cnpj') }}:
	//- 	InputText#cnpj.w-full
	.field.col-12(class="lg:col-6")
		label(for="cpf") {{ $t('general.identity.cpf') }}:
		InputText#cpf.w-full
</template>

<script setup>
import { CountryIsoCode, LegalPersonType } from '@/gql.ts';

const test = ref(CountryIsoCode.Br);
const phone = ref({
	phoneNumber: '',
	phoneNumberCountry: CountryIsoCode.Br
});

</script>
