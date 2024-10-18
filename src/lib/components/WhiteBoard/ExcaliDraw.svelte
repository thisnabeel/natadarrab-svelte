<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import { whiteboardActive, currentWhiteboardIndex, importVerse } from '$lib/stores/whiteboard';
	import { showSpotlight } from '$lib/stores/spotlight';

	let container;
	const excalidrawAPI = writable(null);

	const initialElements = [];

	let makeElement;
	let Excalidraw;
	export let index;

	importVerse.subscribe((verse) => {
		if (!verse) return;
		console.log(verse);
		console.log($currentWhiteboardIndex, index);
		if ($currentWhiteboardIndex === index) {
			console.log('good');
			addArabicText(verse);
		}
	});

	onMount(async () => {
		const module = await import('@excalidraw/excalidraw/dist/excalidraw.production.min.js');
		Excalidraw = module.Excalidraw;
		makeElement = module.convertToExcalidrawElements;

		const root = ReactDOM.createRoot(container);
		root.render(
			React.createElement(Excalidraw, {
				initialData: {
					elements: makeElement(initialElements),
					appState: {
						viewBackgroundColor: '#FFFFFF'
					}
				},
				excalidrawAPI: (api) => excalidrawAPI.set(api)
			})
		);
		whiteboardActive.set(true);

		return () => {
			if (container._reactRootContainer) {
				ReactDOM.unmountComponentAtNode(container);
			}
		};
	});

	function sanitizeLines(text, maxLineLength = 50) {
		const words = text.split(' ');
		let lines = [];
		let currentLine = '';

		for (let word of words) {
			if (currentLine.length + word.length > maxLineLength && currentLine.length > 0) {
				lines.push(currentLine.trim());
				currentLine = '';
			}
			currentLine += (currentLine.length > 0 ? ' ' : '') + word;
		}

		if (currentLine.trim()) {
			lines.push(currentLine.trim());
		}

		return lines.join('\n');
	}

	function addArabicText(verse) {
		excalidrawAPI.update((api) => {
			if (api) {
				const startX = 1000;
				const startY = 200;
				const lineSpacing = 60;
				const translationSpacing = 40;

				const arabicLines = sanitizeLines(verse.arabic, 60);
				const englishLines = sanitizeLines(verse.translation.english, 60);
				const urduLines = sanitizeLines(verse.translation.urdu, 60);

				const newElement = makeElement([
					{
						type: 'text',
						x: startX,
						y: startY,
						text: arabicLines + ' - ' + verse.item.ref,
						fontSize: 32,
						textAlign: 'right',
						direction: 'rtl',
						width: 800,
						height: arabicLines.split('\n').length * lineSpacing
					},
					// English translation
					{
						type: 'text',
						x: startX - 800, // Align left edge with Arabic text
						y: startY + arabicLines.split('\n').length * lineSpacing + translationSpacing,
						text: englishLines,
						fontSize: 18,
						textAlign: 'left',
						direction: 'ltr',
						fontFamily: 'Helvetica',
						width: 800,
						height: englishLines.split('\n').length * (lineSpacing / 2)
					},
					// Urdu translation
					{
						type: 'text',
						x: startX, // Align left edge with Arabic text
						y: startY + arabicLines.split('\n').length * lineSpacing + translationSpacing,
						text: urduLines,
						fontSize: 18,
						textAlign: 'right', // Align right for Urdu
						direction: 'rtl', // Right-to-left for Urdu
						fontFamily: 'Helvetica',
						width: 800,
						height: urduLines.split('\n').length * (lineSpacing / 2)
					}
				]);
				api.updateScene({
					elements: [...api.getSceneElements(), ...newElement]
				});
				console.log('Arabic text added');
				showSpotlight.set(false);
			} else {
				console.log('Excalidraw API not available yet');
			}
			return api;
		});
	}
</script>

<div bind:this={container} />

<style>
	button {
		z-index: 9999999;
		right: 200px;
		position: absolute;
	}

	:global(.excalidraw .popover) {
		position: absolute;
		z-index: 10;
		padding: 5px 0 5px;
		outline: none;
		height: auto !important;
		width: auto;
		border: 0;
	}
</style>
