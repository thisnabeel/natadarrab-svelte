import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		hmr: false
	},
	ssr: {
		noExternal: [
			'@splidejs/svelte-splide',
			'@svelte-web-fonts/google',
			'cl-editor',
			'sv-bootstrap-modal',
			'svelte-carousel',
			'@splidejs/splide'
		]
	}
});
