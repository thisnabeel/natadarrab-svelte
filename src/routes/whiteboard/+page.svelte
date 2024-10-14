<script>
	import { onMount } from 'svelte';
	import ExcalidrawWrapper from '$lib/components/WhiteBoard/ExcaliDraw.svelte';
	import {currentWhiteboardIndex} from "$lib/stores/whiteboard";

	let excalidrawAPI;
	let pages = [{ id: 1, content: null }];

	function handleReady(event) {
		excalidrawAPI = event.detail;
		loadPageContent();
	}

	function loadPageContent() {
		if (pages[$currentWhiteboardIndex].content) {
			excalidrawAPI.updateScene(JSON.parse(pages[$currentWhiteboardIndex].content));
		} else {
			excalidrawAPI.updateScene({ elements: [], appState: {} });
		}
	}

	async function saveCurrentPage() {
		if (excalidrawAPI) {
			const elements = excalidrawAPI.getSceneElements();
			const appState = excalidrawAPI.getAppState();
			const scene = { elements, appState };
			pages[$currentWhiteboardIndex].content = JSON.stringify(scene);
			pages = pages;
		}
	}

	function addNewPage() {
		saveCurrentPage();
		pages = [...pages, { id: pages.length + 1, content: null }];
		currentWhiteboardIndex.set(pages.length - 1);
	}

	function switchPage(index) {
		saveCurrentPage();
		currentWhiteboardIndex.set(index);
		loadPageContent();
	}

	async function exportToPNG() {
		if (excalidrawAPI) {
			const blob = await excalidrawAPI.exportToBlob({
				elements: excalidrawAPI.getSceneElements(),
				mimeType: 'image/png',
				appState: excalidrawAPI.getAppState()
			});
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = `excalidraw-page-${$currentWhiteboardIndex + 1}.png`;
			link.click();
		}
	}
</script>

{#each pages as page, index}
	<div class="excalidraw-container" class:hidden={$currentWhiteboardIndex !== index}>
		<ExcalidrawWrapper {index} on:ready={handleReady} />
	</div>
{/each}

<nav>
	<div class="pages">
		{#each pages as page, index}
			<button
				class="page-button {$currentWhiteboardIndex === index ? 'active' : ''}"
				on:click={() => switchPage(index)}
			>
				{page.id}
			</button>
		{/each}
		<button on:click={addNewPage}>+</button>
	</div>
	<div class="controls">
		<button on:click={exportToPNG}>Export to PNG</button>
	</div>
</nav>

<style>
	.excalidraw-container {
		height: calc(100vh - 50px);
		width: 100%;
	}

	:global(.excalidraw-container > div) {
		height: 100%;
	}

	:global(.dropdown-menu) {
		position: absolute;
		z-index: 1000;
		/* display: none; */
		border: none;
		min-width: 10rem;
		/* padding: .5rem 0; */
		margin: 0;
		font-size: 1rem;
		color: #212529;
		text-align: left;
		list-style: none;
		/* background-color: #fff; */
		background-clip: padding-box;
		border: 1px solid rgba(0, 0, 0, .15);
		border-radius: .25rem;
	}

	nav {
		position: fixed;
		bottom: 0;
		left: 60px;
		right: 0;
		height: 50px;
		background-color: #f0f0f0;
		display: flex;
		align-items: center;
		padding: 0 10px;
		box-sizing: border-box;
		justify-content: space-between;
	}

	button {
		margin-right: 10px;
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}

	.page-button {
		background-color: #6c757d;
	}

	.page-button.active {
		background-color: #28a745;
	}
</style>
