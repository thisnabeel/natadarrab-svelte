import { c as create_ssr_component, a as subscribe, f as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
import "react";
import "react-dom/client";
import { c as currentWhiteboardIndex, i as importVerse } from "./whiteboard.js";
import { s as showSpotlight } from "./spotlight.js";
const css = {
  code: ".excalidraw .popover{position:absolute;z-index:10;padding:5px 0 5px;outline:none;height:auto !important;width:auto;border:0}",
  map: `{"version":3,"file":"ExcaliDraw.svelte","sources":["ExcaliDraw.svelte"],"sourcesContent":["<script>\\n\\timport { onMount } from 'svelte';\\n\\timport { writable } from 'svelte/store';\\n\\timport React from 'react';\\n\\timport ReactDOM from 'react-dom/client';\\n\\timport { whiteboardActive, currentWhiteboardIndex, importVerse } from '$lib/stores/whiteboard';\\n\\timport { showSpotlight } from '$lib/stores/spotlight';\\n\\n\\tlet container;\\n\\tconst excalidrawAPI = writable(null);\\n\\n\\tconst initialElements = [];\\n\\n\\tlet makeElement;\\n\\tlet Excalidraw;\\n\\texport let index;\\n\\n\\timportVerse.subscribe((verse) => {\\n\\t\\tif (!verse) return;\\n\\t\\tconsole.log(verse);\\n\\t\\tconsole.log($currentWhiteboardIndex, index);\\n\\t\\tif ($currentWhiteboardIndex === index) {\\n\\t\\t\\tconsole.log('good');\\n\\t\\t\\taddArabicText(verse);\\n\\t\\t}\\n\\t});\\n\\n\\tonMount(async () => {\\n\\t\\tconst module = await import('@excalidraw/excalidraw/dist/excalidraw.production.min.js');\\n\\t\\tExcalidraw = module.Excalidraw;\\n\\t\\tmakeElement = module.convertToExcalidrawElements;\\n\\n\\t\\tconst root = ReactDOM.createRoot(container);\\n\\t\\troot.render(\\n\\t\\t\\tReact.createElement(Excalidraw, {\\n\\t\\t\\t\\tinitialData: {\\n\\t\\t\\t\\t\\telements: makeElement(initialElements),\\n\\t\\t\\t\\t\\tappState: {\\n\\t\\t\\t\\t\\t\\tviewBackgroundColor: '#FFFFFF'\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\texcalidrawAPI: (api) => excalidrawAPI.set(api)\\n\\t\\t\\t})\\n\\t\\t);\\n\\t\\twhiteboardActive.set(true);\\n\\n\\t\\treturn () => {\\n\\t\\t\\tif (container._reactRootContainer) {\\n\\t\\t\\t\\tReactDOM.unmountComponentAtNode(container);\\n\\t\\t\\t}\\n\\t\\t};\\n\\t});\\n\\n\\tfunction sanitizeLines(text, maxLineLength = 50) {\\n\\t\\tconst words = text.split(' ');\\n\\t\\tlet lines = [];\\n\\t\\tlet currentLine = '';\\n\\n\\t\\tfor (let word of words) {\\n\\t\\t\\tif (currentLine.length + word.length > maxLineLength && currentLine.length > 0) {\\n\\t\\t\\t\\tlines.push(currentLine.trim());\\n\\t\\t\\t\\tcurrentLine = '';\\n\\t\\t\\t}\\n\\t\\t\\tcurrentLine += (currentLine.length > 0 ? ' ' : '') + word;\\n\\t\\t}\\n\\n\\t\\tif (currentLine.trim()) {\\n\\t\\t\\tlines.push(currentLine.trim());\\n\\t\\t}\\n\\n\\t\\treturn lines.join('\\\\n');\\n\\t}\\n\\n\\tfunction addArabicText(verse) {\\n\\t\\texcalidrawAPI.update((api) => {\\n\\t\\t\\tif (api) {\\n\\t\\t\\t\\tconst startX = 1000;\\n\\t\\t\\t\\tconst startY = 200;\\n\\t\\t\\t\\tconst lineSpacing = 60;\\n\\t\\t\\t\\tconst translationSpacing = 40;\\n\\n\\t\\t\\t\\tconst arabicLines = sanitizeLines(verse.arabic, 60);\\n\\t\\t\\t\\tconst englishLines = sanitizeLines(verse.translation.english, 60);\\n\\t\\t\\t\\tconst urduLines = sanitizeLines(verse.translation.urdu, 60);\\n\\n\\t\\t\\t\\tconst newElement = makeElement([\\n\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\ttype: 'text',\\n\\t\\t\\t\\t\\t\\tx: startX,\\n\\t\\t\\t\\t\\t\\ty: startY,\\n\\t\\t\\t\\t\\t\\ttext: arabicLines + ' - ' + verse.item.ref,\\n\\t\\t\\t\\t\\t\\tfontSize: 32,\\n\\t\\t\\t\\t\\t\\ttextAlign: 'right',\\n\\t\\t\\t\\t\\t\\tdirection: 'rtl',\\n\\t\\t\\t\\t\\t\\twidth: 800,\\n\\t\\t\\t\\t\\t\\theight: arabicLines.split('\\\\n').length * lineSpacing\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t// English translation\\n\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\ttype: 'text',\\n\\t\\t\\t\\t\\t\\tx: startX - 800, // Align left edge with Arabic text\\n\\t\\t\\t\\t\\t\\ty: startY + arabicLines.split('\\\\n').length * lineSpacing + translationSpacing,\\n\\t\\t\\t\\t\\t\\ttext: englishLines,\\n\\t\\t\\t\\t\\t\\tfontSize: 18,\\n\\t\\t\\t\\t\\t\\ttextAlign: 'left',\\n\\t\\t\\t\\t\\t\\tdirection: 'ltr',\\n\\t\\t\\t\\t\\t\\tfontFamily: 'Helvetica',\\n\\t\\t\\t\\t\\t\\twidth: 800,\\n\\t\\t\\t\\t\\t\\theight: englishLines.split('\\\\n').length * (lineSpacing / 2)\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t// Urdu translation\\n\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\ttype: 'text',\\n\\t\\t\\t\\t\\t\\tx: startX, // Align left edge with Arabic text\\n\\t\\t\\t\\t\\t\\ty: startY + arabicLines.split('\\\\n').length * lineSpacing + translationSpacing,\\n\\t\\t\\t\\t\\t\\ttext: urduLines,\\n\\t\\t\\t\\t\\t\\tfontSize: 18,\\n\\t\\t\\t\\t\\t\\ttextAlign: 'right', // Align right for Urdu\\n\\t\\t\\t\\t\\t\\tdirection: 'rtl', // Right-to-left for Urdu\\n\\t\\t\\t\\t\\t\\tfontFamily: 'Helvetica',\\n\\t\\t\\t\\t\\t\\twidth: 800,\\n\\t\\t\\t\\t\\t\\theight: urduLines.split('\\\\n').length * (lineSpacing / 2)\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t]);\\n\\t\\t\\t\\tapi.updateScene({\\n\\t\\t\\t\\t\\telements: [...api.getSceneElements(), ...newElement]\\n\\t\\t\\t\\t});\\n\\t\\t\\t\\tconsole.log('Arabic text added');\\n\\t\\t\\t\\tshowSpotlight.set(false);\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tconsole.log('Excalidraw API not available yet');\\n\\t\\t\\t}\\n\\t\\t\\treturn api;\\n\\t\\t});\\n\\t}\\n<\/script>\\n\\n<div bind:this={container} />\\n\\n<style>\\n\\tbutton {\\n\\t\\tz-index: 9999999;\\n\\t\\tright: 200px;\\n\\t\\tposition: absolute;\\n\\t}\\n\\n\\t:global(.excalidraw .popover) {\\n\\t\\tposition: absolute;\\n\\t\\tz-index: 10;\\n\\t\\tpadding: 5px 0 5px;\\n\\t\\toutline: none;\\n\\t\\theight: auto !important;\\n\\t\\twidth: auto;\\n\\t\\tborder: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAkJS,oBAAsB,CAC7B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,UAAU,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CACT"}`
};
function sanitizeLines(text, maxLineLength = 50) {
  const words = text.split(" ");
  let lines = [];
  let currentLine = "";
  for (let word of words) {
    if (currentLine.length + word.length > maxLineLength && currentLine.length > 0) {
      lines.push(currentLine.trim());
      currentLine = "";
    }
    currentLine += (currentLine.length > 0 ? " " : "") + word;
  }
  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }
  return lines.join("\n");
}
const ExcaliDraw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentWhiteboardIndex, $$unsubscribe_currentWhiteboardIndex;
  $$unsubscribe_currentWhiteboardIndex = subscribe(currentWhiteboardIndex, (value) => $currentWhiteboardIndex = value);
  let container;
  const excalidrawAPI = writable(null);
  let makeElement;
  let { index } = $$props;
  importVerse.subscribe((verse) => {
    if (!verse) return;
    console.log(verse);
    console.log($currentWhiteboardIndex, index);
    if ($currentWhiteboardIndex === index) {
      console.log("good");
      addArabicText(verse);
    }
  });
  function addArabicText(verse) {
    excalidrawAPI.update((api) => {
      if (api) {
        const startX = 1e3;
        const startY = 200;
        const lineSpacing = 60;
        const translationSpacing = 40;
        const arabicLines = sanitizeLines(verse.arabic, 60);
        const englishLines = sanitizeLines(verse.translation.english, 60);
        const urduLines = sanitizeLines(verse.translation.urdu, 60);
        const newElement = makeElement([
          {
            type: "text",
            x: startX,
            y: startY,
            text: arabicLines + " - " + verse.item.ref,
            fontSize: 32,
            textAlign: "right",
            direction: "rtl",
            width: 800,
            height: arabicLines.split("\n").length * lineSpacing
          },
          // English translation
          {
            type: "text",
            x: startX - 800,
            // Align left edge with Arabic text
            y: startY + arabicLines.split("\n").length * lineSpacing + translationSpacing,
            text: englishLines,
            fontSize: 18,
            textAlign: "left",
            direction: "ltr",
            fontFamily: "Helvetica",
            width: 800,
            height: englishLines.split("\n").length * (lineSpacing / 2)
          },
          // Urdu translation
          {
            type: "text",
            x: startX,
            // Align left edge with Arabic text
            y: startY + arabicLines.split("\n").length * lineSpacing + translationSpacing,
            text: urduLines,
            fontSize: 18,
            textAlign: "right",
            // Align right for Urdu
            direction: "rtl",
            // Right-to-left for Urdu
            fontFamily: "Helvetica",
            width: 800,
            height: urduLines.split("\n").length * (lineSpacing / 2)
          }
        ]);
        api.updateScene({
          elements: [...api.getSceneElements(), ...newElement]
        });
        console.log("Arabic text added");
        showSpotlight.set(false);
      } else {
        console.log("Excalidraw API not available yet");
      }
      return api;
    });
  }
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css);
  $$unsubscribe_currentWhiteboardIndex();
  return `<div${add_attribute("this", container, 0)}></div>`;
});
export {
  ExcaliDraw as E
};
