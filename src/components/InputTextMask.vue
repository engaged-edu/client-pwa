<template lang="pug">
InputMask(@focus="handleFocus")
</template>

<script setup>
async function handleFocus(event) {
	const $el = event.target;

	await nextTick();
	$el.focus();
	$el.setSelectionRange(0, 0);
}
</script>
