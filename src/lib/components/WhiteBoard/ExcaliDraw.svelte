<script>
	import { onMount } from 'svelte';
	import React from 'react';
	import ReactDOM from 'react-dom/client';

	let container;

	onMount(function () {
		// Import the browser-specific Excalidraw build
		import('@excalidraw/excalidraw/dist/excalidraw.production.min.js').then((module) => {
			const { Excalidraw } = module;

			const root = ReactDOM.createRoot(container);
			root.render(React.createElement(Excalidraw));
		});

		return () => {
			if (container._reactRootContainer) {
				ReactDOM.unmountComponentAtNode(container);
			}
		};
	});
</script>

<div bind:this={container} />
