import adapter from '@sveltejs/adapter-vercel';
import preprocessReact from 'svelte-preprocess-react/preprocessReact';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Vercel adapter options
			runtime: 'nodejs22.x'
		})
	},

	preprocess: [preprocessReact()]
};

export default config;
