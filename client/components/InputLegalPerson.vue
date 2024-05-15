<template lang="pug">
Dropdown(
	option-label="label"
	option-value="value"
	:options="options"
)
</template>

<script setup>
import { i18n } from '@/i18n';
import { LegalPersonType } from '@/gql.ts';

const options = ref([
	LegalPersonType.Individual,
	LegalPersonType.Company,
	LegalPersonType.GovernmentEntity,
	LegalPersonType.NonProfit
].map((type) => ({
	label: i18n.t(`enums.LegalPersonType.${type}`),
	value: type
})));

</script>
