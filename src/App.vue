<script setup>
import {useDarkMode} from '@/composables/darkMode';

const {initTheme} = useDarkMode();

initTheme();
</script>

<template lang="pug">
RouterView
</template>
