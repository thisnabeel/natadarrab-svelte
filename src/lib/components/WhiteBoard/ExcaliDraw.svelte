<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import {whiteboardActive, currentWhiteboardIndex, importVerse} from "$lib/stores/whiteboard"
	import { showSpotlight } from '$lib/stores/spotlight';

  let container;
  const excalidrawAPI = writable(null);

  const initialElements = [];

  let makeElement;
  let Excalidraw;
  export let index


  importVerse.subscribe(verse => {
    if (!verse) return;
    console.log(verse)
    console.log($currentWhiteboardIndex, index)
    if ($currentWhiteboardIndex === index){
      console.log("good")
      addArabicText(verse.arabic)
    }
  })

  onMount(async () => {
    const module = await import('@excalidraw/excalidraw/dist/excalidraw.production.min.js');
    Excalidraw = module.Excalidraw;
    makeElement = module.convertToExcalidrawElements;
    
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(Excalidraw, {
      initialData: {
        elements: makeElement(initialElements),
        appState: {
          viewBackgroundColor: "#FFFFFF",
        }
      },
      excalidrawAPI: (api) => excalidrawAPI.set(api)
    }));
    whiteboardActive.set(true);

    return () => {
      if (container._reactRootContainer) {
        ReactDOM.unmountComponentAtNode(container);
      }
    };
  });

  function addArabicText(verse) {
    excalidrawAPI.update(api => {
      if (api) {
        const arabicText = verse;
        const newElement = makeElement([
          { type: "text", x: 600, y: 300, text: arabicText, fontSize: 20, textAlign: "right", direction: "rtl" }
        ]);
        api.updateScene({ 
          elements: [...api.getSceneElements(), ...newElement] 
        });
        console.log("Arabic text added");
        showSpotlight.set(false)
      } else {
        console.log("Excalidraw API not available yet");
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
</style>