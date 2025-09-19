import { c as create_ssr_component, d as escape, f as add_attribute, o as onDestroy, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/api.js";
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verb } = $$props;
  if ($$props.verb === void 0 && $$bindings.verb && verb !== void 0) $$bindings.verb(verb);
  return `<div class="row"><div class="col-lg-4"><span style="font-size: 34px">${escape(verb.v_word)}</span></div> <div class="col-lg-8">${escape(verb.v_translation)} <div class="row"><div class="col-md-4"><label for="" data-svelte-h="svelte-1xf0ilj">Past English Base:</label> <input type="text" class="form-control"${add_attribute("value", verb.past_english_base, 0)}></div> <div class="col-md-4"><label for="" data-svelte-h="svelte-1ezhzhk">Present English Base:</label> <input type="text" class="form-control"${add_attribute("value", verb.present_english_base, 0)}></div> <div class="col-md-4"><label for="" data-svelte-h="svelte-1bqz8ie">Infinitive English Base:</label> <input type="text" class="form-control"${add_attribute("value", verb.infinitive_english_base, 0)}></div></div></div></div>`;
});
const css = {
  code: ".verbs.svelte-4ln7hc.svelte-4ln7hc{list-style:none;padding:0}.verbs.svelte-4ln7hc li.svelte-4ln7hc{margin:0.5em 0;padding:0.5em;background:#f0f0f0;border:1px solid #ddd}#scroll-anchor.svelte-4ln7hc.svelte-4ln7hc{height:20px}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { onMount, onDestroy } from 'svelte';\\n\\timport API from '$lib/api/api';\\n\\timport Verb from '$lib/components/Arabic/Verbs/Verb/ListItem.svelte';\\n\\n\\tlet verbs = [];\\n\\tlet page = 1;\\n\\tconst limit = 100; // Number of verbs to fetch per batch\\n\\tlet loading = false;\\n\\tlet endOfList = false;\\n\\n\\tonMount(() => {\\n\\t\\tfetchVerbs();\\n\\t});\\n\\n\\tasync function fetchVerbs() {\\n\\t\\tif (loading || endOfList) return;\\n\\t\\tloading = true;\\n\\n\\t\\ttry {\\n\\t\\t\\tconst data = await API.get(\`/verbs.json?page=\${page}\`);\\n\\n\\t\\t\\tif (data.length < limit) {\\n\\t\\t\\t\\tendOfList = true;\\n\\t\\t\\t}\\n\\n\\t\\t\\tverbs = [...verbs, ...data];\\n\\t\\t\\tpage++;\\n\\t\\t} catch (error) {\\n\\t\\t\\tconsole.error('Error fetching verbs:', error);\\n\\t\\t} finally {\\n\\t\\t\\tloading = false;\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleIntersection(entries) {\\n\\t\\tif (entries[0].isIntersecting) {\\n\\t\\t\\tfetchVerbs();\\n\\t\\t}\\n\\t}\\n\\n\\tlet observer;\\n\\tonMount(() => {\\n\\t\\tobserver = new IntersectionObserver(handleIntersection, {\\n\\t\\t\\troot: null,\\n\\t\\t\\trootMargin: '0px',\\n\\t\\t\\tthreshold: 1.0\\n\\t\\t});\\n\\t\\tconst target = document.querySelector('#scroll-anchor');\\n\\t\\tobserver.observe(target);\\n\\t});\\n\\n\\tonDestroy(() => {\\n\\t\\tif (observer) {\\n\\t\\t\\tobserver.disconnect();\\n\\t\\t}\\n\\t});\\n<\/script>\\n\\n<h1>Arabic:</h1>\\n\\n<ul class=\\"verbs\\">\\n\\t{#each verbs as verb}\\n\\t\\t<li>\\n\\t\\t\\t<Verb {verb} />\\n\\t\\t</li>\\n\\t{/each}\\n</ul>\\n\\n<div id=\\"scroll-anchor\\" />\\n\\n<style>\\n\\t/* Add some basic styling */\\n\\t.verbs {\\n\\t\\tlist-style: none;\\n\\t\\tpadding: 0;\\n\\t}\\n\\t.verbs li {\\n\\t\\tmargin: 0.5em 0;\\n\\t\\tpadding: 0.5em;\\n\\t\\tbackground: #f0f0f0;\\n\\t\\tborder: 1px solid #ddd;\\n\\t}\\n\\t#scroll-anchor {\\n\\t\\theight: 20px; /* Height of the div to be intersected */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyEC,kCAAO,CACN,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,CACV,CACA,oBAAM,CAAC,gBAAG,CACT,MAAM,CAAE,KAAK,CAAC,CAAC,CACf,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CACA,0CAAe,CACd,MAAM,CAAE,IACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let verbs = [];
  onDestroy(() => {
  });
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-aqcvno">Arabic:</h1> <ul class="verbs svelte-4ln7hc">${each(verbs, (verb) => {
    return `<li class="svelte-4ln7hc">${validate_component(ListItem, "Verb").$$render($$result, { verb }, {}, {})} </li>`;
  })}</ul> <div id="scroll-anchor" class="svelte-4ln7hc"></div>`;
});
export {
  Page as default
};
