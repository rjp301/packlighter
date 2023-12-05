import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ fallback: '200.html' }),
		alias: {
			$components: './src/components',
			$utils: './src/utils',
			$stores: './src/stores',
			$styles: './src/styles',
			$assets: './src/assets',
			$pages: './src/pages',
			$layouts: './src/layouts',
			$services: './src/services',
			$hooks: './src/hooks',
			$types: './src/types',
			$constants: './src/constants'
		}
	}
};

export default config;
