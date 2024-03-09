<template lang="pug">
InputMask(
	:auto-clear="false"
	@focus="handleFocus"
)
</template>

<script setup>
async function handleFocus(event) {
	const $el = event.target;

	if ($el.value) {
		return;
	}

	await nextTick();

	window.setTimeout(() => {
		$el.focus();
		$el.setSelectionRange(0, 0);
	}, 100);
}
</script>
