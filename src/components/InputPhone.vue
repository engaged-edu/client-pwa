<template lang="pug">
InputGroup
	InputCountry(
		v-model="modelValue.phoneNumberCountry"
		show-dial
		inset
	)
	InputMask(
		v-model="modelValue.phoneNumber"
		:mask="masks.phone(modelValue.phoneNumberCountry)"
		:placeholder="masks.phone(modelValue.phoneNumberCountry)"
	)
</template>

<script setup>
import InputGroup from 'primevue/inputgroup';
import { useCountries } from '@/composables/countries';
import { useMasks } from '@/composables/utils';
import { CountryIsoCode } from '@/gql.ts';

const { countries } = useCountries();
const { masks } = useMasks();
const [modelValue] = defineModel();

</script>
