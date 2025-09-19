import { c as create_ssr_component, f as add_attribute, e as each, d as escape, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/api.js";
const css$1 = {
  code: ".printed-verse.svelte-1y7py8p{padding:12px;background-color:aliceblue;margin:10px auto;font-size:24px;text-align:right}.ref.svelte-1y7py8p{margin-bottom:30px}",
  map: `{"version":3,"file":"Ref.svelte","sources":["Ref.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\n\\texport let ref;\\n\\tlet printed = [];\\n\\n\\tasync function getVerse() {\\n\\t\\tprinted = await API.get('/quran/verses/' + ref + '.json');\\n\\t\\tconsole.log({ printed });\\n\\t}\\n<\/script>\\n\\n<div class=\\"ref\\">\\n\\t<input class=\\"form-control\\" bind:value={ref} />\\n\\t<i class=\\"fa fa-refresh\\" on:click={getVerse} />\\n\\t{#if printed}\\n\\t\\t{#each printed as verse}\\n\\t\\t\\t<div class=\\"printed-verse\\">\\n\\t\\t\\t\\t{verse.arabic}\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t{/if}\\n\\t<div>\\n\\t\\t<textarea name=\\"\\" class=\\"form-control\\" />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.printed-verse {\\n\\t\\tpadding: 12px;\\n\\t\\tbackground-color: aliceblue;\\n\\t\\tmargin: 10px auto;\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: right;\\n\\t}\\n\\n\\t.ref {\\n\\t\\tmargin-bottom: 30px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,6BAAe,CACd,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,SAAS,CAC3B,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KACb,CAEA,mBAAK,CACJ,aAAa,CAAE,IAChB"}`
};
const Ref = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ref } = $$props;
  let printed = [];
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0) $$bindings.ref(ref);
  $$result.css.add(css$1);
  return `<div class="ref svelte-1y7py8p"><input class="form-control"${add_attribute("value", ref, 0)}> <i class="fa fa-refresh"></i> ${printed ? `${each(printed, (verse) => {
    return `<div class="printed-verse svelte-1y7py8p">${escape(verse.arabic)} </div>`;
  })}` : ``} <div data-svelte-h="svelte-1k134sp"><textarea name="" class="form-control"></textarea></div> </div>`;
});
const css = {
  code: ".wrapper.svelte-e8ynl4{max-width:350px;display:block;margin:0 auto}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport Ref from './Ref.svelte';\\n\\tlet verseRefs = [];\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<h1>Sketch</h1>\\n\\n\\t<div class=\\"verses\\">\\n\\t\\t<i class=\\"fa fa-plus\\" on:click={() => (verseRefs = [...verseRefs, '1:1'])} />\\n\\t\\t{#each verseRefs as ref}\\n\\t\\t\\t<Ref {ref} />\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tmax-width: 350px;\\n\\t\\tdisplay: block;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiBC,sBAAS,CACR,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CAAC,CAAC,IACX"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let verseRefs = [];
  $$result.css.add(css);
  return `<div class="wrapper svelte-e8ynl4"><h1 data-svelte-h="svelte-1so2wxc">Sketch</h1> <div class="verses"><i class="fa fa-plus"></i> ${each(verseRefs, (ref) => {
    return `${validate_component(Ref, "Ref").$$render($$result, { ref }, {}, {})}`;
  })}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Sketcher").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
