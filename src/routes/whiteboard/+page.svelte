<script>
	import { onMount } from 'svelte';
	import ExcalidrawWrapper from '$lib/components/WhiteBoard/ExcaliDraw.svelte';

	let excalidrawAPI;
	let pages = [{ id: 1, content: null }];
	let currentPageIndex = 0;

	function handleReady(event) {
		excalidrawAPI = event.detail;
		loadPageContent();
	}

	function loadPageContent() {
		if (pages[currentPageIndex].content) {
			excalidrawAPI.updateScene(JSON.parse(pages[currentPageIndex].content));
		} else {
			excalidrawAPI.updateScene({ elements: [], appState: {} });
		}
	}

	async function saveCurrentPage() {
		if (excalidrawAPI) {
			const elements = excalidrawAPI.getSceneElements();
			const appState = excalidrawAPI.getAppState();
			const scene = { elements, appState };
			pages[currentPageIndex].content = JSON.stringify(scene);
			pages = pages;
		}
	}

	function addNewPage() {
		saveCurrentPage();
		pages = [...pages, { id: pages.length + 1, content: null }];
		currentPageIndex = pages.length - 1;
	}

	function switchPage(index) {
		saveCurrentPage();
		currentPageIndex = index;
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
			link.download = `excalidraw-page-${currentPageIndex + 1}.png`;
			link.click();
		}
	}
</script>

{#each pages as page, index}
	<div class="excalidraw-container" class:hidden={currentPageIndex !== index}>
		<ExcalidrawWrapper on:ready={handleReady} />
	</div>
{/each}

<nav>
	<div class="pages">
		{#each pages as page, index}
			<button
				class="page-button {currentPageIndex === index ? 'active' : ''}"
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
