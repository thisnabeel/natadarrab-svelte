import { c as create_ssr_component, v as validate_component, e as each, d as escape } from "../../../chunks/ssr.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
const css$1 = {
  code: ".top-nav.svelte-1epg30x.svelte-1epg30x{padding:16px 16px 16px 40px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;background-color:rgb(255, 255, 255);border-bottom:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-right-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}.top-nav.svelte-1epg30x .head.svelte-1epg30x{height:48px;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.5rem;line-height:1.4;font-family:'Avenir Next', sans-serif;margin-right:16px;cursor:pointer}.hori-divider.svelte-1epg30x.svelte-1epg30x{padding-left:16px;margin-top:-16px;margin-bottom:-16px;height:74px;border-right:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-bottom-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n<\/script>\\n\\n<div class=\\"top-nav\\">\\n\\t<div class=\\"head\\">\\n\\t\\t<span>Labs</span>\\n\\t</div>\\n\\n\\t<div class=\\"hori-divider\\" />\\n</div>\\n\\n<style>\\n\\t.top-nav {\\n\\t\\tpadding: 16px 16px 16px 40px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\t-webkit-box-pack: justify;\\n\\t\\tjustify-content: space-between;\\n\\t\\tbackground-color: rgb(255, 255, 255);\\n\\t\\tborder-bottom: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-right-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t}\\n\\n\\t.top-nav .head {\\n\\t\\theight: 48px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tline-height: 1.4;\\n\\t\\tfont-family: 'Avenir Next', sans-serif;\\n\\t\\tmargin-right: 16px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.left-arrow {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tpadding: 4px;\\n\\t}\\n\\n\\t.left-arrow > div {\\n\\t\\tline-height: 0;\\n\\t\\twidth: 20px;\\n\\t\\theight: 20px;\\n\\t}\\n\\n\\t.arrow-space {\\n\\t\\tpadding-left: 4px;\\n\\t\\tpadding-right: 4px;\\n\\t}\\n\\n\\t.right-arrow {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tpadding: 4px;\\n\\t}\\n\\n\\t.right-arrow > div {\\n\\t\\tline-height: 0;\\n\\t\\twidth: 20px;\\n\\t\\theight: 20px;\\n\\t}\\n\\n\\t.hori-divider {\\n\\t\\tpadding-left: 16px;\\n\\t\\tmargin-top: -16px;\\n\\t\\tmargin-bottom: -16px;\\n\\t\\theight: 74px;\\n\\t\\tborder-right: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-bottom-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t}\\n\\n\\t.arrow:hover {\\n\\t\\tbackground-color: rgb(250, 250, 250);\\n\\t\\tborder-color: rgb(231, 232, 234);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,sCAAS,CACR,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CACzB,eAAe,CAAE,aAAa,CAC9B,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC3C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,kBAAkB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACtC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CAEA,uBAAQ,CAAC,oBAAM,CACd,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,aAAa,CAAC,CAAC,UAAU,CACtC,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,OACT,CAmCA,2CAAc,CACb,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,mBAAmB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACvC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC"}`
};
const Index$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="top-nav svelte-1epg30x" data-svelte-h="svelte-1k656yn"><div class="head svelte-1epg30x"><span>Labs</span></div> <div class="hori-divider svelte-1epg30x"></div> </div>`;
});
const css = {
  code: ".cards.svelte-sht6f8{display:flex}.card.svelte-sht6f8{margin:10px}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from '$app/navigation';\\n\\timport Nav from './Nav/Index.svelte';\\n\\tlet cards = [\\n\\t\\t{\\n\\t\\t\\ttitle: 'Sarf Lab',\\n\\t\\t\\tdescription: 'Practice Conjugating different Verbs',\\n\\t\\t\\turl: '/labs/arabic/verbs/conjugator'\\n\\t\\t},\\n\\t\\t// {\\n\\t\\t// \\ttitle: 'Baabs Lab',\\n\\t\\t// \\tdescription: 'Practice Identifying different Baabs',\\n\\t\\t// \\turl: '/labs/arabic/sarf/forms'\\n\\t\\t// },\\n\\t\\t{\\n\\t\\t\\ttitle: 'Baabs Quiz',\\n\\t\\t\\tdescription: 'Practice Identifying different Baabs',\\n\\t\\t\\turl: '/labs/arabic/sarf/verse_forms'\\n\\t\\t}\\n\\t];\\n<\/script>\\n\\n<Nav />\\n\\n<div class=\\"cards\\">\\n\\t{#each cards as card}\\n\\t\\t<div class=\\"card\\" style=\\"width: 18rem;\\">\\n\\t\\t\\t<div class=\\"card-body\\">\\n\\t\\t\\t\\t<h5 class=\\"card-title\\">{card.title}</h5>\\n\\t\\t\\t\\t<!-- <h6 class=\\"card-subtitle mb-2 text-muted\\">Card subtitle</h6> -->\\n\\t\\t\\t\\t<p class=\\"card-text\\">\\n\\t\\t\\t\\t\\t{card.description}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<button on:click={() => goto(card.url)} class=\\"card-link btn btn-outline-primary\\"\\n\\t\\t\\t\\t\\t>Visit</button\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.cards {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.card {\\n\\t\\tmargin: 10px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0CC,oBAAO,CACN,OAAO,CAAE,IACV,CAEA,mBAAM,CACL,MAAM,CAAE,IACT"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [
    {
      title: "Sarf Lab",
      description: "Practice Conjugating different Verbs",
      url: "/labs/arabic/verbs/conjugator"
    },
    // {
    // 	title: 'Baabs Lab',
    // 	description: 'Practice Identifying different Baabs',
    // 	url: '/labs/arabic/sarf/forms'
    // },
    {
      title: "Baabs Quiz",
      description: "Practice Identifying different Baabs",
      url: "/labs/arabic/sarf/verse_forms"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Index$1, "Nav").$$render($$result, {}, {}, {})} <div class="cards svelte-sht6f8">${each(cards, (card) => {
    return `<div class="card svelte-sht6f8" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${escape(card.title)}</h5>  <p class="card-text">${escape(card.description)}</p> <button class="card-link btn btn-outline-primary" data-svelte-h="svelte-bgfq5t">Visit</button></div> </div>`;
  })} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Labs").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
