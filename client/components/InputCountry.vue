<template lang="pug">
mixin line(type)
	.flex.align-items-center.gap-2.w-full&attributes(attributes)
		img(
			style="width: 1.5rem"
			:alt=`slotProps.${type}.name`
			:src=`\`/p/flags/$\{slotProps.${type}.code}.svg\``
		)
		.white-space-nowrap.overflow-hidden.text-overflow-ellipsis {{ slotProps.#{type}.name }}
		.w-min.ml-auto.text-color-secondary.text-xs(v-if=type === "option" ? "showDial" : "showDial && !inset") +{{ slotProps.#{type}.dial }}

Dropdown(
	v-model="modelValue"
	filter
	option-label="name"
	:options="countries"
	:class="{ 'max-w-4rem': inset }"
	:pt="pt"
)
	// eslint-disable
	template(#option="slotProps")
		// eslint-enable
		+line('option')

	// eslint-disable
	template(#value="slotProps")
		// eslint-enable
		+line('value')(v-if="slotProps.value")
</template>

<script setup>
import { useCountries } from '@/composables/countries';

const { countries } = useCountries();
const { showDial, inset } = defineProps({
	showDial: {
		type: Boolean,
		default: false
	},
	inset: {
		type: Boolean,
		default: false
	}
});
const [modelValue, modelModifiers] = defineModel({
	get: (value) => countries.find((country) => country.code === value),
	set: (value) => value?.code
});
const pt = computed(() => {
	let value = { panel: 'max-w-full' };

	if (inset) {
		value = {
			...value,
			panel: 'max-w-full',
			root: { style: 'border-right: none' },
			trigger: { style: 'width: .5rem; transform: translateX(-100%)' }
		};
	}

	return value;
});

</script>
