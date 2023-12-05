<script>
	import API from '$lib/api/api';
	import { onMount, onDestroy } from 'svelte';
	import thirteen_liner from '$lib/functions/thirteen_liner';

	let imageSrc = '/L246.gif';
	let canvas;
	let context;
	let isDrawing = false;
	let undoStack = [];
	let redoStack = [];
	let debugMode = false;
	let showPaths = true; // New variable to toggle path visibility
	let drawnPaths = [];
	let img; // Declare img as a global variable

	// let highlightTransparency = 0.9; // Adjust the value as needed
	// let highlightColor = `rgba(0, 0, 0, ${highlightTransparency})`;

	let highlightTransparency = 0.3; // Adjust the value as needed
	let highlightColor = `rgba(255, 255, 0, ${highlightTransparency})`;

	let pageNumber = '246';

	let touchId; // To track the touch ID for drawing
	let touchPos; // To store the touch position

	onMount(() => {
		beginPage();
	});

	onDestroy(() => {
		closePage();
	});

	function beginPage() {
		img = new Image();
		img.src = imageSrc;

		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			context = canvas.getContext('2d');
			context.drawImage(img, 0, 0, img.width, img.height);
			saveToUndoStack();
		};

		// Setup the event listener when the component is mounted
		if (typeof document !== 'undefined') {
			// document.addEventListener('click', handleDebugClick);
			canvas.addEventListener('touchstart', handleTouchStart);
			canvas.addEventListener('touchmove', handleTouchMove);
			canvas.addEventListener('touchend', handleTouchEnd);
		}
	}

	function closePage() {
		if (typeof document !== 'undefined') {
			// document.removeEventListener('click', handleDebugClick);
			canvas.removeEventListener('touchstart', handleTouchStart);
			canvas.removeEventListener('touchmove', handleTouchMove);
			canvas.removeEventListener('touchend', handleTouchEnd);
		}
	}

	function handleTouchStart(event) {
		event.preventDefault();
		const touch = event.touches[0];

		// Check if the touch is within an existing path
		clickedIndex = getClickedPathIndex(getTouchPos(touch));

		if (debugMode && clickedIndex !== -1) {
			// If in debug mode and touched an existing path, remove it
			drawnPaths.splice(clickedIndex, 1);
			redrawCanvas();
		} else {
			// If not in debug mode or didn't touch an existing path, start drawing
			isDrawing = true;
			touchId = touch.identifier;
			touchPos = getTouchPos(touch);
			drawnPaths.push([{ x: touchPos.x, y: touchPos.y, color: highlightColor }]);
		}
	}

	function handleTouchMove(event) {
		event.preventDefault();
		const touch = getTouchById(event, touchId);
		if (touch && isDrawing) {
			touchPos = getTouchPos(touch);
			drawnPaths[drawnPaths.length - 1].push({
				x: touchPos.x,
				y: touchPos.y,
				color: highlightColor
			});
			redrawCanvas();
		}
	}

	function handleTouchEnd(event) {
		const touch = getTouchById(event, touchId);
		if (touch) {
			if (isDrawing) {
				// If drawing, save the path
				isDrawing = false;
				saveToUndoStack();
			}
		}
	}

	function getTouchPos(touch) {
		const rect = canvas.getBoundingClientRect();
		return {
			x: touch.clientX - rect.left,
			y: touch.clientY - rect.top
		};
	}

	function getTouchById(event, id) {
		for (let i = 0; i < event.changedTouches.length; i++) {
			if (event.changedTouches[i].identifier === id) {
				return event.changedTouches[i];
			}
		}
		return null;
	}

	async function getPage() {
		imageSrc = thirteen_liner(pageNumber - 2);
		closePage();
		beginPage();
	}

	function getMousePos(event) {
		const rect = canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		};
	}

	function saveToUndoStack() {
		undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
		redoStack = [];
	}

	function handleMouseDown(event) {
		isDrawing = true;
		const pos = getMousePos(event);
		drawnPaths.push([{ x: pos.x, y: pos.y, color: highlightColor }]); // Default color is yellow
	}

	function handleMouseMove(event) {
		if (!isDrawing) return;
		if (debugMode) return;
		const pos = getMousePos(event);
		drawnPaths[drawnPaths.length - 1].push({
			x: pos.x,
			y: pos.y,
			color: highlightColor
		});
		redrawCanvas();
	}

	function handleMouseUp() {
		if (isDrawing) {
			isDrawing = false;
			saveToUndoStack();
		}
	}

	function undo() {
		if (undoStack.length > 1) {
			redoStack.push(undoStack.pop());
			context.putImageData(undoStack[undoStack.length - 1], 0, 0);
			if (!debugMode) {
				drawnPaths.pop(); // Remove the last drawn path when undoing
			}
		}
	}

	function redo() {
		if (redoStack.length > 0) {
			undoStack.push(redoStack.pop());
			context.putImageData(undoStack[undoStack.length - 1], 0, 0);
			if (!debugMode) {
				// Save the current path to the array
				drawnPaths.push([]);
			}
		}
	}

	function toggleDebugMode() {
		debugMode = !debugMode;
		if (debugMode) {
			document.addEventListener('click', handleDebugClick);
		} else {
			document.removeEventListener('click', handleDebugClick);
		}
	}

	let clickedIndex = -1; // Initialize clickedIndex

	function getClickedPathIndex(mousePos) {
		let clickThreshold = 10; // Adjust the threshold as needed

		for (let i = 0; i < drawnPaths.length; i++) {
			const path = drawnPaths[i];
			for (let j = 0; j < path.length - 1; j++) {
				const start = path[j];
				const end = path[j + 1];

				// Calculate the distance from the mouse to the line segment defined by start and end points
				const distToSegment = getDistanceToSegment(mousePos, start, end);

				if (distToSegment < clickThreshold) {
					console.log('Clicked on drawn path:', i);
					return i;
				}
			}
		}

		console.log('No path found');
		return -1;
	}

	// Function to calculate the distance from a point to a line segment
	function getDistanceToSegment(point, start, end) {
		const dx = end.x - start.x;
		const dy = end.y - start.y;
		const dotProduct =
			((point.x - start.x) * dx + (point.y - start.y) * dy) /
			Math.pow(getLength({ x: dx, y: dy }), 2);

		const closestX = start.x + dotProduct * dx;
		const closestY = start.y + dotProduct * dy;

		if (dotProduct < 0) {
			return getDistance(point, start); // Closest point is the start of the segment
		} else if (dotProduct > 1) {
			return getDistance(point, end); // Closest point is the end of the segment
		}

		return getDistance(point, { x: closestX, y: closestY });
	}

	// Function to calculate the Euclidean distance between two points
	function getDistance(point1, point2) {
		const dx = point2.x - point1.x;
		const dy = point2.y - point1.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	// Function to calculate the length of a vector
	function getLength(vector) {
		return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	}

	function handleDebugClick(event) {
		if (!debugMode) return;

		event.preventDefault(); // Prevent the default click behavior

		// Use the appropriate event coordinates based on the event type
		const pos = event.type === 'click' ? getMousePos(event) : getTouchPos(event.changedTouches[0]);
		clickedIndex = getClickedPathIndex(pos);

		if (clickedIndex !== -1) {
			console.log('Clicked on drawn path:', drawnPaths[clickedIndex]);
			// Remove the clicked path
			drawnPaths.splice(clickedIndex, 1);
			redrawCanvas();
		}
	}

	function redrawCanvas() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(img, 0, 0, img.width, img.height);

		// Draw paths only if showPaths is true
		if (showPaths) {
			drawnPaths.forEach((path) => {
				if (path.length > 1) {
					context.beginPath();
					context.moveTo(path[0].x, path[0].y);
					path.forEach((point) => {
						context.lineTo(point.x, point.y);
						context.strokeStyle = point.color;
						// context.globalAlpha = highlightTransparency;
					});
					context.lineWidth = 24;
					context.lineCap = 'round';
					context.lineJoin = 'round';
					context.stroke();
				}
			});
		}
	}

	function saveDrawingToDatabase() {
		const drawingData = JSON.stringify(drawnPaths);
		// Now, you can save `drawingData` to your database
		console.log('Drawing saved to database:', drawingData);
	}
</script>

<div>
	<canvas
		bind:this={canvas}
		on:mousedown={handleMouseDown}
		on:mousemove={handleMouseMove}
		on:mouseup={handleMouseUp}
	/>

	<br />
	<!-- <button on:click={undo}>Undo</button>
	<button on:click={redo}>Redo</button> -->
	<button on:click={toggleDebugMode}>{debugMode ? 'Eraser' : 'Pen'} Mode</button>
	<button
		on:click={() => {
			showPaths = !showPaths;
			redrawCanvas();
		}}>Toggle Show Paths</button
	>

	<button on:click={saveDrawingToDatabase}>Save Drawing</button>

	<br />
	<input type="number" class="form-control" bind:value={pageNumber} on:change={getPage} />
	<span
		class="btn btn-info"
		on:click={() => {
			pageNumber = pageNumber - 1;
			getPage();
		}}><i class="fa fa-arrow-left" /></span
	>
	<span class="btn btn-info" on:click={getPage}>Go To Page</span>
	<span
		class="btn btn-info"
		on:click={() => {
			pageNumber = pageNumber + 1;
			getPage();
		}}><i class="fa fa-arrow-right" /></span
	>
</div>

<style>
	canvas {
		border: 1px solid #000;
	}
</style>
