import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [
				PrimeVueResolver(),
				IconsResolver({enabledCollections: ['mdi']})
			]
		}),
		Icons({compiler: 'vue3'})
	],
	resolve: {alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}}
});
