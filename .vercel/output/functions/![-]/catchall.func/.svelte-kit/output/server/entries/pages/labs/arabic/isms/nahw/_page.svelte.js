import { c as create_ssr_component, e as each, d as escape } from "../../../../../../chunks/ssr.js";
const css = {
  code: ".inline-list.svelte-1i1u9fd{display:flex;align-items:center;padding:20px}.word.svelte-1i1u9fd{margin-right:4rem;position:relative;display:flex;align-items:center}.arrow.svelte-1i1u9fd{position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);width:60px;height:30px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\texport let words = ['apple', 'orange', 'banana'];\\n<\/script>\\n\\n<div class=\\"inline-list\\">\\n\\t{#each words as word, index}\\n\\t\\t<div class=\\"word\\">\\n\\t\\t\\t{word}\\n\\t\\t\\t{#if index < words.length - 1}\\n\\t\\t\\t\\t<svg class=\\"arrow\\" viewBox=\\"0 0 60 30\\">\\n\\t\\t\\t\\t\\t<path d=\\"M 0 0 Q 30 30 60 0\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"transparent\\" />\\n\\t\\t\\t\\t\\t<path\\n\\t\\t\\t\\t\\t\\td=\\"M 55 -5 L 60 0 L 55 5\\"\\n\\t\\t\\t\\t\\t\\tstroke=\\"currentColor\\"\\n\\t\\t\\t\\t\\t\\tstroke-width=\\"2\\"\\n\\t\\t\\t\\t\\t\\tfill=\\"currentColor\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</svg>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.inline-list {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 20px;\\n\\t}\\n\\n\\t.word {\\n\\t\\tmargin-right: 4rem; /* Adjust spacing as needed */\\n\\t\\tposition: relative;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.arrow {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: -20px; /* Adjust positioning as needed */\\n\\t\\tleft: 50%; /* Position arrow in the center of the word */\\n\\t\\ttransform: translateX(-50%);\\n\\t\\twidth: 60px; /* Width of the arrow */\\n\\t\\theight: 30px; /* Height of the arrow */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwBC,2BAAa,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IACV,CAEA,oBAAM,CACL,YAAY,CAAE,IAAI,CAClB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACd,CAEA,qBAAO,CACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { words = ["apple", "orange", "banana"] } = $$props;
  if ($$props.words === void 0 && $$bindings.words && words !== void 0) $$bindings.words(words);
  $$result.css.add(css);
  return `<div class="inline-list svelte-1i1u9fd">${each(words, (word, index) => {
    return `<div class="word svelte-1i1u9fd">${escape(word)} ${index < words.length - 1 ? `<svg class="arrow svelte-1i1u9fd" viewBox="0 0 60 30"><path d="M 0 0 Q 30 30 60 0" stroke="currentColor" stroke-width="2" fill="transparent"></path><path d="M 55 -5 L 60 0 L 55 5" stroke="currentColor" stroke-width="2" fill="currentColor"></path></svg>` : ``} </div>`;
  })} </div>`;
});
export {
  Page as default
};
