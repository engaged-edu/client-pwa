<template lang="pug">
small.text-red-500(v-if="$props.field.$invalid") {{ $props.field.$errors[0].$message }}
</template>

<script setup>
defineProps(['field']);
</script>
