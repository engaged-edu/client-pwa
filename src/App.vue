<script setup>
import {useDarkMode} from '@/composables/darkMode';

const {initTheme} = useDarkMode();

initTheme();
</script>

<template lang="pug">
h1 {{ $t('test') }}
RouterView
</template>
