import { c as create_ssr_component, o as onDestroy, f as add_attribute, d as escape } from "../../../chunks/ssr.js";
import "../../../chunks/api.js";
const css = {
  code: "canvas.svelte-1l7ihl3{border:1px solid #000}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport { onMount, onDestroy } from 'svelte';\\n\\timport thirteen_liner from '$lib/functions/thirteen_liner';\\n\\n\\tlet imageSrc = '/L246.gif';\\n\\tlet canvas;\\n\\tlet context;\\n\\tlet isDrawing = false;\\n\\tlet undoStack = [];\\n\\tlet redoStack = [];\\n\\tlet debugMode = false;\\n\\tlet showPaths = true; // New variable to toggle path visibility\\n\\tlet drawnPaths = [];\\n\\tlet img; // Declare img as a global variable\\n\\n\\t// let highlightTransparency = 0.9; // Adjust the value as needed\\n\\t// let highlightColor = \`rgba(0, 0, 0, \${highlightTransparency})\`;\\n\\n\\tlet highlightTransparency = 0.3; // Adjust the value as needed\\n\\tlet highlightColor = \`rgba(255, 255, 0, \${highlightTransparency})\`;\\n\\n\\tlet pageNumber = '246';\\n\\n\\tlet touchId; // To track the touch ID for drawing\\n\\tlet touchPos; // To store the touch position\\n\\n\\tonMount(() => {\\n\\t\\tbeginPage();\\n\\t});\\n\\n\\tonDestroy(() => {\\n\\t\\tclosePage();\\n\\t});\\n\\n\\tfunction beginPage() {\\n\\t\\timg = new Image();\\n\\t\\timg.src = imageSrc;\\n\\n\\t\\timg.onload = () => {\\n\\t\\t\\tcanvas.width = img.width;\\n\\t\\t\\tcanvas.height = img.height;\\n\\t\\t\\tcontext = canvas.getContext('2d');\\n\\t\\t\\tcontext.drawImage(img, 0, 0, img.width, img.height);\\n\\t\\t\\tsaveToUndoStack();\\n\\t\\t};\\n\\n\\t\\t// Setup the event listener when the component is mounted\\n\\t\\tif (typeof document !== 'undefined') {\\n\\t\\t\\t// document.addEventListener('click', handleDebugClick);\\n\\t\\t\\tcanvas.addEventListener('touchstart', handleTouchStart);\\n\\t\\t\\tcanvas.addEventListener('touchmove', handleTouchMove);\\n\\t\\t\\tcanvas.addEventListener('touchend', handleTouchEnd);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction closePage() {\\n\\t\\tif (typeof document !== 'undefined') {\\n\\t\\t\\t// document.removeEventListener('click', handleDebugClick);\\n\\t\\t\\tcanvas.removeEventListener('touchstart', handleTouchStart);\\n\\t\\t\\tcanvas.removeEventListener('touchmove', handleTouchMove);\\n\\t\\t\\tcanvas.removeEventListener('touchend', handleTouchEnd);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleTouchStart(event) {\\n\\t\\tevent.preventDefault();\\n\\t\\tconst touch = event.touches[0];\\n\\n\\t\\t// Check if the touch is within an existing path\\n\\t\\tclickedIndex = getClickedPathIndex(getTouchPos(touch));\\n\\n\\t\\tif (debugMode && clickedIndex !== -1) {\\n\\t\\t\\t// If in debug mode and touched an existing path, remove it\\n\\t\\t\\tdrawnPaths.splice(clickedIndex, 1);\\n\\t\\t\\tredrawCanvas();\\n\\t\\t} else {\\n\\t\\t\\t// If not in debug mode or didn't touch an existing path, start drawing\\n\\t\\t\\tisDrawing = true;\\n\\t\\t\\ttouchId = touch.identifier;\\n\\t\\t\\ttouchPos = getTouchPos(touch);\\n\\t\\t\\tdrawnPaths.push([{ x: touchPos.x, y: touchPos.y, color: highlightColor }]);\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleTouchMove(event) {\\n\\t\\tevent.preventDefault();\\n\\t\\tconst touch = getTouchById(event, touchId);\\n\\t\\tif (touch && isDrawing) {\\n\\t\\t\\ttouchPos = getTouchPos(touch);\\n\\t\\t\\tdrawnPaths[drawnPaths.length - 1].push({\\n\\t\\t\\t\\tx: touchPos.x,\\n\\t\\t\\t\\ty: touchPos.y,\\n\\t\\t\\t\\tcolor: highlightColor\\n\\t\\t\\t});\\n\\t\\t\\tredrawCanvas();\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleTouchEnd(event) {\\n\\t\\tconst touch = getTouchById(event, touchId);\\n\\t\\tif (touch) {\\n\\t\\t\\tif (isDrawing) {\\n\\t\\t\\t\\t// If drawing, save the path\\n\\t\\t\\t\\tisDrawing = false;\\n\\t\\t\\t\\tsaveToUndoStack();\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\tfunction getTouchPos(touch) {\\n\\t\\tconst rect = canvas.getBoundingClientRect();\\n\\t\\treturn {\\n\\t\\t\\tx: touch.clientX - rect.left,\\n\\t\\t\\ty: touch.clientY - rect.top\\n\\t\\t};\\n\\t}\\n\\n\\tfunction getTouchById(event, id) {\\n\\t\\tfor (let i = 0; i < event.changedTouches.length; i++) {\\n\\t\\t\\tif (event.changedTouches[i].identifier === id) {\\n\\t\\t\\t\\treturn event.changedTouches[i];\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn null;\\n\\t}\\n\\n\\tasync function getPage() {\\n\\t\\timageSrc = thirteen_liner(pageNumber - 2);\\n\\t\\tclosePage();\\n\\t\\tbeginPage();\\n\\t}\\n\\n\\tfunction getMousePos(event) {\\n\\t\\tconst rect = canvas.getBoundingClientRect();\\n\\t\\treturn {\\n\\t\\t\\tx: event.clientX - rect.left,\\n\\t\\t\\ty: event.clientY - rect.top\\n\\t\\t};\\n\\t}\\n\\n\\tfunction saveToUndoStack() {\\n\\t\\tundoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));\\n\\t\\tredoStack = [];\\n\\t}\\n\\n\\tfunction handleMouseDown(event) {\\n\\t\\tisDrawing = true;\\n\\t\\tconst pos = getMousePos(event);\\n\\t\\tdrawnPaths.push([{ x: pos.x, y: pos.y, color: highlightColor }]); // Default color is yellow\\n\\t}\\n\\n\\tfunction handleMouseMove(event) {\\n\\t\\tif (!isDrawing) return;\\n\\t\\tif (debugMode) return;\\n\\t\\tconst pos = getMousePos(event);\\n\\t\\tdrawnPaths[drawnPaths.length - 1].push({\\n\\t\\t\\tx: pos.x,\\n\\t\\t\\ty: pos.y,\\n\\t\\t\\tcolor: highlightColor\\n\\t\\t});\\n\\t\\tredrawCanvas();\\n\\t}\\n\\n\\tfunction handleMouseUp() {\\n\\t\\tif (isDrawing) {\\n\\t\\t\\tisDrawing = false;\\n\\t\\t\\tsaveToUndoStack();\\n\\t\\t}\\n\\t}\\n\\n\\tfunction undo() {\\n\\t\\tif (undoStack.length > 1) {\\n\\t\\t\\tredoStack.push(undoStack.pop());\\n\\t\\t\\tcontext.putImageData(undoStack[undoStack.length - 1], 0, 0);\\n\\t\\t\\tif (!debugMode) {\\n\\t\\t\\t\\tdrawnPaths.pop(); // Remove the last drawn path when undoing\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\tfunction redo() {\\n\\t\\tif (redoStack.length > 0) {\\n\\t\\t\\tundoStack.push(redoStack.pop());\\n\\t\\t\\tcontext.putImageData(undoStack[undoStack.length - 1], 0, 0);\\n\\t\\t\\tif (!debugMode) {\\n\\t\\t\\t\\t// Save the current path to the array\\n\\t\\t\\t\\tdrawnPaths.push([]);\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\tfunction toggleDebugMode() {\\n\\t\\tdebugMode = !debugMode;\\n\\t\\tif (debugMode) {\\n\\t\\t\\tdocument.addEventListener('click', handleDebugClick);\\n\\t\\t} else {\\n\\t\\t\\tdocument.removeEventListener('click', handleDebugClick);\\n\\t\\t}\\n\\t}\\n\\n\\tlet clickedIndex = -1; // Initialize clickedIndex\\n\\n\\tfunction getClickedPathIndex(mousePos) {\\n\\t\\tlet clickThreshold = 10; // Adjust the threshold as needed\\n\\n\\t\\tfor (let i = 0; i < drawnPaths.length; i++) {\\n\\t\\t\\tconst path = drawnPaths[i];\\n\\t\\t\\tfor (let j = 0; j < path.length - 1; j++) {\\n\\t\\t\\t\\tconst start = path[j];\\n\\t\\t\\t\\tconst end = path[j + 1];\\n\\n\\t\\t\\t\\t// Calculate the distance from the mouse to the line segment defined by start and end points\\n\\t\\t\\t\\tconst distToSegment = getDistanceToSegment(mousePos, start, end);\\n\\n\\t\\t\\t\\tif (distToSegment < clickThreshold) {\\n\\t\\t\\t\\t\\tconsole.log('Clicked on drawn path:', i);\\n\\t\\t\\t\\t\\treturn i;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tconsole.log('No path found');\\n\\t\\treturn -1;\\n\\t}\\n\\n\\t// Function to calculate the distance from a point to a line segment\\n\\tfunction getDistanceToSegment(point, start, end) {\\n\\t\\tconst dx = end.x - start.x;\\n\\t\\tconst dy = end.y - start.y;\\n\\t\\tconst dotProduct =\\n\\t\\t\\t((point.x - start.x) * dx + (point.y - start.y) * dy) /\\n\\t\\t\\tMath.pow(getLength({ x: dx, y: dy }), 2);\\n\\n\\t\\tconst closestX = start.x + dotProduct * dx;\\n\\t\\tconst closestY = start.y + dotProduct * dy;\\n\\n\\t\\tif (dotProduct < 0) {\\n\\t\\t\\treturn getDistance(point, start); // Closest point is the start of the segment\\n\\t\\t} else if (dotProduct > 1) {\\n\\t\\t\\treturn getDistance(point, end); // Closest point is the end of the segment\\n\\t\\t}\\n\\n\\t\\treturn getDistance(point, { x: closestX, y: closestY });\\n\\t}\\n\\n\\t// Function to calculate the Euclidean distance between two points\\n\\tfunction getDistance(point1, point2) {\\n\\t\\tconst dx = point2.x - point1.x;\\n\\t\\tconst dy = point2.y - point1.y;\\n\\t\\treturn Math.sqrt(dx * dx + dy * dy);\\n\\t}\\n\\n\\t// Function to calculate the length of a vector\\n\\tfunction getLength(vector) {\\n\\t\\treturn Math.sqrt(vector.x * vector.x + vector.y * vector.y);\\n\\t}\\n\\n\\tfunction handleDebugClick(event) {\\n\\t\\tif (!debugMode) return;\\n\\n\\t\\tevent.preventDefault(); // Prevent the default click behavior\\n\\n\\t\\t// Use the appropriate event coordinates based on the event type\\n\\t\\tconst pos = event.type === 'click' ? getMousePos(event) : getTouchPos(event.changedTouches[0]);\\n\\t\\tclickedIndex = getClickedPathIndex(pos);\\n\\n\\t\\tif (clickedIndex !== -1) {\\n\\t\\t\\tconsole.log('Clicked on drawn path:', drawnPaths[clickedIndex]);\\n\\t\\t\\t// Remove the clicked path\\n\\t\\t\\tdrawnPaths.splice(clickedIndex, 1);\\n\\t\\t\\tredrawCanvas();\\n\\t\\t}\\n\\t}\\n\\n\\tfunction redrawCanvas() {\\n\\t\\tcontext.clearRect(0, 0, canvas.width, canvas.height);\\n\\t\\tcontext.drawImage(img, 0, 0, img.width, img.height);\\n\\n\\t\\t// Draw paths only if showPaths is true\\n\\t\\tif (showPaths) {\\n\\t\\t\\tdrawnPaths.forEach((path) => {\\n\\t\\t\\t\\tif (path.length > 1) {\\n\\t\\t\\t\\t\\tcontext.beginPath();\\n\\t\\t\\t\\t\\tcontext.moveTo(path[0].x, path[0].y);\\n\\t\\t\\t\\t\\tpath.forEach((point) => {\\n\\t\\t\\t\\t\\t\\tcontext.lineTo(point.x, point.y);\\n\\t\\t\\t\\t\\t\\tcontext.strokeStyle = point.color;\\n\\t\\t\\t\\t\\t\\t// context.globalAlpha = highlightTransparency;\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\tcontext.lineWidth = 24;\\n\\t\\t\\t\\t\\tcontext.lineCap = 'round';\\n\\t\\t\\t\\t\\tcontext.lineJoin = 'round';\\n\\t\\t\\t\\t\\tcontext.stroke();\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\t\\t}\\n\\t}\\n\\n\\tfunction saveDrawingToDatabase() {\\n\\t\\tconst drawingData = JSON.stringify(drawnPaths);\\n\\t\\t// Now, you can save \`drawingData\` to your database\\n\\t\\tconsole.log('Drawing saved to database:', drawingData);\\n\\t}\\n<\/script>\\n\\n<div>\\n\\t<canvas\\n\\t\\tbind:this={canvas}\\n\\t\\ton:mousedown={handleMouseDown}\\n\\t\\ton:mousemove={handleMouseMove}\\n\\t\\ton:mouseup={handleMouseUp}\\n\\t/>\\n\\n\\t<br />\\n\\t<!-- <button on:click={undo}>Undo</button>\\n\\t<button on:click={redo}>Redo</button> -->\\n\\t<button on:click={toggleDebugMode}>{debugMode ? 'Eraser' : 'Pen'} Mode</button>\\n\\t<button\\n\\t\\ton:click={() => {\\n\\t\\t\\tshowPaths = !showPaths;\\n\\t\\t\\tredrawCanvas();\\n\\t\\t}}>Toggle Show Paths</button\\n\\t>\\n\\n\\t<button on:click={saveDrawingToDatabase}>Save Drawing</button>\\n\\n\\t<br />\\n\\t<input type=\\"number\\" class=\\"form-control\\" bind:value={pageNumber} on:change={getPage} />\\n\\t<span\\n\\t\\tclass=\\"btn btn-info\\"\\n\\t\\ton:click={() => {\\n\\t\\t\\tpageNumber = pageNumber - 1;\\n\\t\\t\\tgetPage();\\n\\t\\t}}><i class=\\"fa fa-arrow-left\\" /></span\\n\\t>\\n\\t<span class=\\"btn btn-info\\" on:click={getPage}>Go To Page</span>\\n\\t<span\\n\\t\\tclass=\\"btn btn-info\\"\\n\\t\\ton:click={() => {\\n\\t\\t\\tpageNumber = pageNumber + 1;\\n\\t\\t\\tgetPage();\\n\\t\\t}}><i class=\\"fa fa-arrow-right\\" /></span\\n\\t>\\n</div>\\n\\n<style>\\n\\tcanvas {\\n\\t\\tborder: 1px solid #000;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2VC,qBAAO,CACN,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB"}`
};
let highlightTransparency = 0.3;
function getTouchById(event, id) {
  for (let i = 0; i < event.changedTouches.length; i++) {
    if (event.changedTouches[i].identifier === id) {
      return event.changedTouches[i];
    }
  }
  return null;
}
function getDistanceToSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const dotProduct = ((point.x - start.x) * dx + (point.y - start.y) * dy) / Math.pow(getLength({ x: dx, y: dy }), 2);
  const closestX = start.x + dotProduct * dx;
  const closestY = start.y + dotProduct * dy;
  if (dotProduct < 0) {
    return getDistance(point, start);
  } else if (dotProduct > 1) {
    return getDistance(point, end);
  }
  return getDistance(point, { x: closestX, y: closestY });
}
function getDistance(point1, point2) {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
function getLength(vector) {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canvas;
  let context;
  let isDrawing = false;
  let undoStack = [];
  let drawnPaths = [];
  let img;
  let highlightColor = `rgba(255, 255, 0, ${highlightTransparency})`;
  let pageNumber = "246";
  let touchId;
  let touchPos;
  onDestroy(() => {
    closePage();
  });
  function closePage() {
    if (typeof document !== "undefined") {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    }
  }
  function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    clickedIndex = getClickedPathIndex(getTouchPos(touch));
    {
      isDrawing = true;
      touchId = touch.identifier;
      touchPos = getTouchPos(touch);
      drawnPaths.push([
        {
          x: touchPos.x,
          y: touchPos.y,
          color: highlightColor
        }
      ]);
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
  function saveToUndoStack() {
    undoStack.push(context.getImageData(0, 0, canvas.width, canvas.height));
  }
  let clickedIndex = -1;
  function getClickedPathIndex(mousePos) {
    let clickThreshold = 10;
    for (let i = 0; i < drawnPaths.length; i++) {
      const path = drawnPaths[i];
      for (let j = 0; j < path.length - 1; j++) {
        const start = path[j];
        const end = path[j + 1];
        const distToSegment = getDistanceToSegment(mousePos, start, end);
        if (distToSegment < clickThreshold) {
          console.log("Clicked on drawn path:", i);
          return i;
        }
      }
    }
    console.log("No path found");
    return -1;
  }
  function redrawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, img.width, img.height);
    {
      drawnPaths.forEach((path) => {
        if (path.length > 1) {
          context.beginPath();
          context.moveTo(path[0].x, path[0].y);
          path.forEach((point) => {
            context.lineTo(point.x, point.y);
            context.strokeStyle = point.color;
          });
          context.lineWidth = 24;
          context.lineCap = "round";
          context.lineJoin = "round";
          context.stroke();
        }
      });
    }
  }
  $$result.css.add(css);
  return `<div><canvas class="svelte-1l7ihl3"${add_attribute("this", canvas, 0)}></canvas> <br>  <button>${escape("Pen")} Mode</button> <button data-svelte-h="svelte-i38xk0">Toggle Show Paths</button> <button data-svelte-h="svelte-1jhe0uw">Save Drawing</button> <br> <input type="number" class="form-control"${add_attribute("value", pageNumber, 0)}> <span class="btn btn-info" data-svelte-h="svelte-1egp9ox"><i class="fa fa-arrow-left"></i></span> <span class="btn btn-info" data-svelte-h="svelte-1iy9e1p">Go To Page</span> <span class="btn btn-info" data-svelte-h="svelte-1mxhbf8"><i class="fa fa-arrow-right"></i></span> </div>`;
});
export {
  Page as default
};
