<template lang="pug">
vue-countdown(
	v-slot="{ minutes, seconds }"
	:time="diff"
) {{ $t('general.withinTime') }}&nbsp;
	template(v-if="minutes") {{ $tc('general.minute', minutes) }}
	template(v-else) {{ $tc('general.second', seconds) }}
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';

const props = defineProps({
	time: {
		type: Date,
		required: true
	}
});
const diff = computed(() => Date.parse(props.time) - Date.parse(new Date()));

</script>
