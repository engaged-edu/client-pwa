import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { unheadVueComposablesImports } from '@unhead/vue';

const globalStyl = path.resolve(__dirname, 'src/styles/global.styl');

// https://vitejs.dev/config/
export default defineConfig({
	resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
	plugins: [
		vue(),
		Components({
			dirs: [
				'./src/layouts',
				'./src/views',
				'./src/components'
			],
			resolvers: [
				PrimeVueResolver(),
				IconsResolver({ enabledCollections: ['mdi'] })
			]
		}),
		Icons({ compiler: 'vue3' }),
		AutoImport({
			imports: [
				unheadVueComposablesImports,
				'vue',
				'vue-router'
			]
		})
	],
	css: { preprocessorOptions: { stylus: { additionalData: `@import "${globalStyl}"` } } }
});
