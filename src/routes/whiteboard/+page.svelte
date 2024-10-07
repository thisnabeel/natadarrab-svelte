<script>
	import { onMount } from 'svelte';

	let mainCanvas, tempCanvas;
	let ctx, tempCtx;
	let isDrawing = false;
	let lastX = 0;
	let lastY = 0;
	let lastPressure = 0;

	let pages = [{ id: 1, content: null, images: [] }];
	let currentPageIndex = 0;

	let draggedImage = null;
	let resizingImage = null;
	let resizeHandle = null;

	const HANDLE_SIZE = 10;
	const SNAP_THRESHOLD = 10;

	let currentColor = '#000000';
	let brushSize = 2;
	let minWidth = 0.5;
	let maxWidth = 20;
	let isEraser = false; // New variable to track eraser mode

	onMount(() => {
		setupCanvas();
		window.addEventListener('resize', handleResize);
	});

	function setupCanvas() {
		mainCanvas.width = tempCanvas.width = window.innerWidth;
		mainCanvas.height = tempCanvas.height = window.innerHeight - 50;
		ctx = mainCanvas.getContext('2d');
		tempCtx = tempCanvas.getContext('2d');
		updateBrushStyle();

		loadPageContent();
	}

	function updateBrushStyle() {
		ctx.strokeStyle = isEraser ? '#FFFFFF' : currentColor; // Use white for eraser
		ctx.lineJoin = 'round';
		ctx.lineCap = 'round';
	}

	function loadPageContent() {
		ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
		if (pages[currentPageIndex].content) {
			const img = new Image();
			img.onload = () => {
				ctx.drawImage(img, 0, 0);
				pages[currentPageIndex].images.forEach(drawImageOnMain);
			};
			img.src = pages[currentPageIndex].content;
		} else {
			pages[currentPageIndex].images.forEach(drawImageOnMain);
		}
	}

	function handleResize() {
		const imageData = ctx.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
		setupCanvas();
		ctx.putImageData(imageData, 0, 0);
	}

	function getCursorPosition(event) {
		const rect = mainCanvas.getBoundingClientRect();
		const scaleX = mainCanvas.width / rect.width;
		const scaleY = mainCanvas.height / rect.height;
		return {
			x: (event.clientX - rect.left) * scaleX,
			y: (event.clientY - rect.top) * scaleY
		};
	}

	function startDrawing(event) {
		const { x: mouseX, y: mouseY } = getCursorPosition(event);
		const pressure = event.pressure !== undefined ? event.pressure : 1;

		const clickedImage = pages[currentPageIndex].images.find(
			(img) =>
				mouseX >= img.x - HANDLE_SIZE &&
				mouseX <= img.x + img.width + HANDLE_SIZE &&
				mouseY >= img.y - HANDLE_SIZE &&
				mouseY <= img.y + img.height + HANDLE_SIZE
		);

		if (clickedImage) {
			draggedImage = clickedImage;
			resizingImage = null;
			if (
				mouseX >= clickedImage.x + clickedImage.width - HANDLE_SIZE &&
				mouseY >= clickedImage.y + clickedImage.height - HANDLE_SIZE
			) {
				resizingImage = clickedImage;
				resizeHandle = 'bottom-right';
			} else if (mouseX <= clickedImage.x + HANDLE_SIZE && mouseY <= clickedImage.y + HANDLE_SIZE) {
				resizingImage = clickedImage;
				resizeHandle = 'top-left';
			}
			// Store the original dimensions and aspect ratio
			if (resizingImage) {
				resizingImage.originalWidth = resizingImage.width;
				resizingImage.originalHeight = resizingImage.height;
				resizingImage.aspectRatio = resizingImage.width / resizingImage.height;
			}
		} else {
			isDrawing = true;
			[lastX, lastY] = [mouseX, mouseY];
			lastPressure = pressure;
		}
	}

	function draw(event) {
		const { x: mouseX, y: mouseY } = getCursorPosition(event);
		const pressure = event.pressure !== undefined ? event.pressure : 1;

		if (draggedImage) {
			// ... [existing image dragging code]
		} else if (isDrawing) {
			const width = minWidth + (maxWidth - minWidth) * pressure;

			ctx.beginPath();
			ctx.moveTo(lastX, lastY);
			ctx.lineWidth = width;

			if (isEraser) {
				ctx.globalCompositeOperation = 'destination-out';
			} else {
				ctx.globalCompositeOperation = 'source-over';
			}

			ctx.lineTo(mouseX, mouseY);
			ctx.stroke();

			lastX = mouseX;
			lastY = mouseY;
			lastPressure = pressure;
		}
	}

	function stopDrawing() {
		if (draggedImage) {
			ctx.drawImage(tempCanvas, 0, 0);
			tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
		}
		isDrawing = false;
		draggedImage = null;
		resizingImage = null;
		saveCurrentPage();
		ctx.globalCompositeOperation = 'source-over';
	}

	function saveCurrentPage() {
		pages[currentPageIndex].content = mainCanvas.toDataURL();
	}

	function addNewPage() {
		pages = [...pages, { id: pages.length + 1, content: null, images: [] }];
		switchPage(pages.length - 1);
	}

	function switchPage(index) {
		saveCurrentPage();
		currentPageIndex = index;
		loadPageContent();
	}

	function handleDrop(event) {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const img = new Image();
				img.onload = () => {
					const aspectRatio = img.width / img.height;
					const newWidth = Math.min(300, mainCanvas.width / 2);
					const newHeight = newWidth / aspectRatio;
					pages[currentPageIndex].images.push({
						src: e.target.result,
						x: snapToGrid(mainCanvas.width / 2 - newWidth / 2),
						y: snapToGrid(mainCanvas.height / 2 - newHeight / 2),
						width: snapToGrid(newWidth),
						height: snapToGrid(newHeight),
						aspectRatio: aspectRatio
					});
					loadPageContent();
				};
				img.src = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	}

	function drawImageOnMain(img) {
		const image = new Image();
		image.onload = () => {
			ctx.drawImage(image, img.x, img.y, img.width, img.height);
		};
		image.src = img.src;
	}

	function drawImageWithHandles(img, context) {
		const image = new Image();
		image.onload = () => {
			context.drawImage(image, img.x, img.y, img.width, img.height);

			// Draw handles
			context.fillStyle = 'rgba(0, 0, 255, 0.5)';
			context.fillRect(img.x - HANDLE_SIZE / 2, img.y - HANDLE_SIZE / 2, HANDLE_SIZE, HANDLE_SIZE);
			context.fillRect(
				img.x + img.width - HANDLE_SIZE / 2,
				img.y + img.height - HANDLE_SIZE / 2,
				HANDLE_SIZE,
				HANDLE_SIZE
			);
		};
		image.src = img.src;
	}

	function renderTempCanvas() {
		tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
		tempCtx.drawImage(mainCanvas, 0, 0);
		pages[currentPageIndex].images.forEach((img) => {
			if (img === draggedImage) {
				drawImageWithHandles(img, tempCtx);
			} else {
				drawImageOnMain(img);
			}
		});
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	function snapToGrid(value) {
		const gridSize = 20; // You can adjust this value to change the grid size
		return Math.round(value / gridSize) * gridSize;
	}

	function handleColorChange(event) {
		currentColor = event.target.value;
		updateBrushStyle();
	}

	function handleBrushSizeChange(event) {
		maxWidth = parseInt(event.target.value);
		minWidth = maxWidth * 0.25;
	}

	function toggleEraser() {
		isEraser = !isEraser;
		updateBrushStyle();
	}
</script>

<div class="canvas-container">
	<canvas
		bind:this={mainCanvas}
		on:pointerdown={startDrawing}
		on:pointermove={draw}
		on:pointerup={stopDrawing}
		on:pointerout={stopDrawing}
		on:drop={handleDrop}
		on:dragover={handleDragOver}
	/>
	<canvas bind:this={tempCanvas} style="pointer-events: none;" />
</div>

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
		<button on:click={addNewPage}>+ <i class="fa fa-file" /></button>
	</div>
	<div class="drawing-controls">
		<input type="color" value={currentColor} on:input={handleColorChange} disabled={isEraser} />
		<input type="range" min="1" max="40" value={maxWidth} on:input={handleBrushSizeChange} />
		<button on:click={toggleEraser} class={isEraser ? 'active' : ''}>
			{isEraser ? 'Eraser' : 'Brush'}
		</button>
	</div>
</nav>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	.canvas-container {
		position: relative;
		width: 100%;
		height: calc(100vh - 50px);
	}
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		touch-action: none;
	}
	nav {
		position: fixed;
		bottom: 0;
		left: 52px;
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
	.drawing-controls {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	input[type='color'] {
		width: 40px;
		height: 40px;
		padding: 0;
		border: none;
		cursor: pointer;
	}
	input[type='range'] {
		width: 100px;
	}

	.drawing-controls button {
		padding: 5px 10px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.drawing-controls button.active {
		background-color: #28a745;
	}
</style>
