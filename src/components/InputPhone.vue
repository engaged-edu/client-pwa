<template lang="pug">
InputGroup
	InputCountry(
		v-model="modelValue.phoneNumberCountry"
		show-dial
		inset
		@change="emit('change', $event)"
	)
	InputTextMask(
		v-model="modelValue.phoneNumber"
		v-bind="$attrs"
		:mask="masks.phone(modelValue.phoneNumberCountry)"
		:placeholder="masks.phone(modelValue.phoneNumberCountry)"
		@update:model-value="emit('input', $event)"
	)
</template>

<script setup>
import InputGroup from 'primevue/inputgroup';
import { useCountries } from '@/composables/countries';
import { useMasks } from '@/composables/utils';
import { CountryIsoCode } from '@/gql.ts';

const emit = defineEmits(['change', 'input']);
const { countries } = useCountries();
const { masks } = useMasks();
const [modelValue] = defineModel();

</script>
