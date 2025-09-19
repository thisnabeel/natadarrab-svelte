import { c as create_ssr_component, e as each, d as escape, v as validate_component, a as subscribe, f as add_attribute } from "../../../../../chunks/ssr.js";
import "@sveltejs/kit/internal";
import "../../../../../chunks/exports.js";
import "../../../../../chunks/utils.js";
import "../../../../../chunks/state.svelte.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/api.js";
import { V as VerseSliced } from "../../../../../chunks/VerseSliced.js";
/* empty css                                                         */
/* empty css                                                       */
import "sweetalert2";
/* empty css                                                         */
const css$2 = {
  code: ".selectors.svelte-gtcqrb li.svelte-gtcqrb{background-color:#eee;padding:10px;margin:10px;border-radius:14px;border:1px solid #ccc}.selectors.svelte-gtcqrb li.active.svelte-gtcqrb{background-color:#c2ebff}.flex.svelte-gtcqrb.svelte-gtcqrb{display:flex}.flex.svelte-gtcqrb .category.svelte-gtcqrb{flex:1 1}",
  map: `{"version":3,"file":"Options.svelte","sources":["Options.svelte"],"sourcesContent":["<script>\\n\\texport let saveManifest;\\n\\tlet selection = {};\\n\\n\\tlet selectionOptions = {\\n\\t\\ttense: ['Past', 'Present', 'Command', 'Forbidding'],\\n\\t\\tgender: ['Masculine', 'Feminine', 'Neutral'],\\n\\t\\tperson: ['3rd Person (He/She/They)', '2nd Person (You)', '1st Person (I/We)'],\\n\\t\\tnumber: ['Singular', 'Dual', 'Plural'],\\n\\t\\trnj: ['Rafa', 'Nasb', 'Jarr']\\n\\t};\\n\\n\\tlet categoryOptions = {\\n\\t\\tFil: ['tense', 'gender', 'person', 'number'],\\n\\t\\tIsm: ['gender', 'number', 'rnj']\\n\\t};\\n\\n\\t$: sanitizeSelection(selection);\\n\\n\\tfunction sanitizeSelection() {\\n\\t\\tif (!selection['word_type']) return;\\n\\t\\tsaveManifest(selection);\\n\\t\\tconsole.log(selection);\\n\\t}\\n\\n\\tfunction removeKeysNotInArray(obj, keysArray) {\\n\\t\\t// Get the keys of the object\\n\\t\\tconst objKeys = Object.keys(obj);\\n\\t\\tconsole.log({ objKeys });\\n\\t\\t// Iterate over the object keys\\n\\t\\tfor (let key of objKeys) {\\n\\t\\t\\t// If the key is not in the array, delete it from the object\\n\\t\\t\\tif (!keysArray.includes(key)) {\\n\\t\\t\\t\\tdelete obj[key];\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<div class=\\"selectors\\">\\n\\t<div class=\\"row\\">\\n\\t\\t{#each ['Ism', 'Fil', 'Harf'] as category}\\n\\t\\t\\t<div class=\\"col-lg-4\\">\\n\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\tclass:active={selection['word_type'] === category}\\n\\t\\t\\t\\t\\ton:click={() => (selection['word_type'] = category)}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{category}\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n\\t{#if selection['word_type']}\\n\\t\\t<div class=\\"flex\\">\\n\\t\\t\\t{#each categoryOptions[selection['word_type']] as category}\\n\\t\\t\\t\\t<div class=\\"category\\">\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each selectionOptions[category] as cat}\\n\\t\\t\\t\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\t\\t\\t\\tclass:active={selection[category] === cat}\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => (selection[category] = cat)}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{cat}\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.selectors li {\\n\\t\\tbackground-color: #eee;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin: 10px;\\n\\t\\tborder-radius: 14px;\\n\\t\\tborder: 1px solid #ccc;\\n\\t}\\n\\n\\t.selectors li.active {\\n\\t\\tbackground-color: #c2ebff;\\n\\t}\\n\\n\\t.flex {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.flex .category {\\n\\t\\tflex: 1 1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyEC,wBAAU,CAAC,gBAAG,CACb,gBAAgB,CAAE,IAAI,CACtB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CAEA,wBAAU,CAAC,EAAE,qBAAQ,CACpB,gBAAgB,CAAE,OACnB,CAEA,iCAAM,CACL,OAAO,CAAE,IACV,CAEA,mBAAK,CAAC,uBAAU,CACf,IAAI,CAAE,CAAC,CAAC,CACT"}`
};
const Options = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { saveManifest } = $$props;
  let selection = {};
  let selectionOptions = {
    tense: ["Past", "Present", "Command", "Forbidding"],
    gender: ["Masculine", "Feminine", "Neutral"],
    person: ["3rd Person (He/She/They)", "2nd Person (You)", "1st Person (I/We)"],
    number: ["Singular", "Dual", "Plural"],
    rnj: ["Rafa", "Nasb", "Jarr"]
  };
  let categoryOptions = {
    Fil: ["tense", "gender", "person", "number"],
    Ism: ["gender", "number", "rnj"]
  };
  function sanitizeSelection() {
    if (!selection["word_type"]) return;
    saveManifest(selection);
    console.log(selection);
  }
  if ($$props.saveManifest === void 0 && $$bindings.saveManifest && saveManifest !== void 0) $$bindings.saveManifest(saveManifest);
  $$result.css.add(css$2);
  {
    sanitizeSelection();
  }
  return `<div class="selectors svelte-gtcqrb"><div class="row">${each(["Ism", "Fil", "Harf"], (category) => {
    return `<div class="col-lg-4"><li class="${["svelte-gtcqrb", selection["word_type"] === category ? "active" : ""].join(" ").trim()}">${escape(category)}</li> </div>`;
  })}</div> ${selection["word_type"] ? `<div class="flex svelte-gtcqrb">${each(categoryOptions[selection["word_type"]], (category) => {
    return `<div class="category svelte-gtcqrb"><ul>${each(selectionOptions[category], (cat) => {
      return `<li class="${["svelte-gtcqrb", selection[category] === cat ? "active" : ""].join(" ").trim()}">${escape(cat)} </li>`;
    })}</ul> </div>`;
  })}</div>` : ``} </div>`;
});
const css$1 = {
  code: ".verse.svelte-1n2fmjt.svelte-1n2fmjt{margin:14px;background-color:#f4f4f4}.ref.svelte-1n2fmjt.svelte-1n2fmjt{font-size:34px;position:relative}.ref.svelte-1n2fmjt .status.svelte-1n2fmjt{position:absolute;right:10px;top:10px}.ref.svelte-1n2fmjt.svelte-1n2fmjt{padding:0.4em}.ref.ready.svelte-1n2fmjt.svelte-1n2fmjt{background-color:#aeff86}.ref.unready.svelte-1n2fmjt.svelte-1n2fmjt{background-color:#ffc8c8}[data-word-type='Ism']{background-color:#aeff86}[data-word-type='Fil']{background-color:#f9dcff}",
  map: `{"version":3,"file":"Edit.svelte","sources":["Edit.svelte"],"sourcesContent":["<script>\\n\\timport VerseSliced from './VerseSliced.svelte';\\n\\timport { openModal } from 'svelte-modals';\\n\\timport Modal from '$lib/components/Modal/Index.svelte';\\n\\timport { onMount } from 'svelte';\\n\\timport { closeModal } from 'svelte-modals';\\n\\timport Options from './Options.svelte';\\n\\texport let verse;\\n\\n\\tlet selectedSlice;\\n\\tlet selectedSliceIndex;\\n\\n\\tfunction selectSlice(payload) {\\n\\t\\tselectedSlice = payload.slice;\\n\\t\\tselectedSliceIndex = payload.index;\\n\\t}\\n\\n\\tfunction getAttributesAsArray(element) {\\n\\t\\tconst attributesArray = Array.from(element.attributes);\\n\\n\\t\\tconst attributesObjectArray = attributesArray.map((attribute) => {\\n\\t\\t\\tlet value = attribute.value;\\n\\n\\t\\t\\tif (value.indexOf('{') === 0) {\\n\\t\\t\\t\\tvalue = value.replaceAll('=>', ':');\\n\\t\\t\\t\\tconsole.log({ value });\\n\\t\\t\\t\\tconst jsonParsed = JSON.parse(value);\\n\\t\\t\\t\\tconsole.log({ jsonParsed });\\n\\t\\t\\t\\tvalue = jsonParsed;\\n\\t\\t\\t}\\n\\n\\t\\t\\treturn {\\n\\t\\t\\t\\tname: attribute.name,\\n\\t\\t\\t\\tvalue: value\\n\\t\\t\\t};\\n\\t\\t});\\n\\n\\t\\tconsole.log({ attributesObjectArray });\\n\\n\\t\\treturn attributesObjectArray;\\n\\t}\\n\\n\\tfunction testQuiz() {\\n\\t\\topenModal(Modal, {\\n\\t\\t\\tiraaber_game_verse: verse.item.ref,\\n\\t\\t\\tpreventOutClick: false\\n\\t\\t});\\n\\t}\\n\\n\\tfunction saveManifest(payload) {\\n\\t\\tconsole.log({ payload });\\n\\t\\tconsole.log({ selectedSlice });\\n\\t\\tselectedSlice.dataset.manifest = JSON.stringify(payload);\\n\\t\\tselectedSlice.dataset.wordType = payload.word_type;\\n\\t}\\n<\/script>\\n\\n<div class=\\"verse\\">\\n\\t<div class=\\"ref\\" class:ready={verse.item.ready} class:unready={!verse.item.ready}>\\n\\t\\t{verse.item.ref}\\n\\t\\t<div class=\\"status\\">\\n\\t\\t\\t<span\\n\\t\\t\\t\\tclass=\\"btn\\"\\n\\t\\t\\t\\tclass:btn-outline-success={!verse.item.ready}\\n\\t\\t\\t\\tclass:btn-success={verse.item.ready}>Ready</span\\n\\t\\t\\t>\\n\\t\\t\\t<span\\n\\t\\t\\t\\tclass=\\"btn\\"\\n\\t\\t\\t\\tclass:btn-outline-danger={verse.item.ready}\\n\\t\\t\\t\\tclass:btn-danger={!verse.item.ready}>Unready</span\\n\\t\\t\\t>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"content\\">\\n\\t\\t<div>\\n\\t\\t\\t{verse.version}\\n\\t\\t\\t<div class=\\"btn btn-warning float-end\\" on:click={testQuiz}>Test Quiz</div>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"iraab\\" style=\\"padding: 1em;\\">\\n\\t\\t\\t<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />\\n\\t\\t</div>\\n\\n\\t\\t{#if selectedSlice}\\n\\t\\t\\t<Options {saveManifest} />\\n\\t\\t\\t<div class=\\"slice_details\\">\\n\\t\\t\\t\\t<table class=\\"table\\">\\n\\t\\t\\t\\t\\t<thead>\\n\\t\\t\\t\\t\\t\\t<td>Name</td>\\n\\t\\t\\t\\t\\t\\t<td>Value</td>\\n\\t\\t\\t\\t\\t</thead>\\n\\t\\t\\t\\t\\t<tbody>\\n\\t\\t\\t\\t\\t\\t{#each getAttributesAsArray(selectedSlice) as attr}\\n\\t\\t\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t\\t\\t<td>{attr.name}</td>\\n\\t\\t\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if typeof attr.value === 'object'}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each Object.entries(attr.value) as [key, value]}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div>{key}: {value}</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{attr.value}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</tbody>\\n\\t\\t\\t\\t</table>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.verse {\\n\\t\\tmargin: 14px;\\n\\t\\tbackground-color: #f4f4f4;\\n\\t}\\n\\n\\t.ref {\\n\\t\\tfont-size: 34px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.ref .status {\\n\\t\\tposition: absolute;\\n\\t\\tright: 10px;\\n\\t\\ttop: 10px;\\n\\t}\\n\\n\\t.ref {\\n\\t\\tpadding: 0.4em;\\n\\t}\\n\\n\\t.ref.ready {\\n\\t\\tbackground-color: #aeff86;\\n\\t}\\n\\n\\t.ref.unready {\\n\\t\\tbackground-color: #ffc8c8;\\n\\t}\\n\\n\\t:global([data-word-type='Ism']) {\\n\\t\\tbackground-color: #aeff86;\\n\\t}\\n\\n\\t:global([data-word-type='Fil']) {\\n\\t\\tbackground-color: #f9dcff;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmHC,oCAAO,CACN,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OACnB,CAEA,kCAAK,CACJ,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,QACX,CAEA,mBAAI,CAAC,sBAAQ,CACZ,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IACN,CAEA,kCAAK,CACJ,OAAO,CAAE,KACV,CAEA,IAAI,oCAAO,CACV,gBAAgB,CAAE,OACnB,CAEA,IAAI,sCAAS,CACZ,gBAAgB,CAAE,OACnB,CAEQ,sBAAwB,CAC/B,gBAAgB,CAAE,OACnB,CAEQ,sBAAwB,CAC/B,gBAAgB,CAAE,OACnB"}`
};
function getAttributesAsArray(element) {
  const attributesArray = Array.from(element.attributes);
  const attributesObjectArray = attributesArray.map((attribute) => {
    let value = attribute.value;
    if (value.indexOf("{") === 0) {
      value = value.replaceAll("=>", ":");
      console.log({ value });
      const jsonParsed = JSON.parse(value);
      console.log({ jsonParsed });
      value = jsonParsed;
    }
    return { name: attribute.name, value };
  });
  console.log({ attributesObjectArray });
  return attributesObjectArray;
}
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verse } = $$props;
  let selectedSlice;
  function selectSlice(payload) {
    selectedSlice = payload.slice;
    payload.index;
  }
  function saveManifest(payload) {
    console.log({ payload });
    console.log({ selectedSlice });
    selectedSlice.dataset.manifest = JSON.stringify(payload);
    selectedSlice.dataset.wordType = payload.word_type;
  }
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0) $$bindings.verse(verse);
  $$result.css.add(css$1);
  return `<div class="verse svelte-1n2fmjt"><div class="${[
    "ref svelte-1n2fmjt",
    (verse.item.ready ? "ready" : "") + " " + (!verse.item.ready ? "unready" : "")
  ].join(" ").trim()}">${escape(verse.item.ref)} <div class="status svelte-1n2fmjt"><span class="${[
    "btn",
    (!verse.item.ready ? "btn-outline-success" : "") + " " + (verse.item.ready ? "btn-success" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1qvrvd">Ready</span> <span class="${[
    "btn",
    (verse.item.ready ? "btn-outline-danger" : "") + " " + (!verse.item.ready ? "btn-danger" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1jf2w3u">Unready</span></div></div> <div class="content"><div>${escape(verse.version)} <div class="btn btn-warning float-end" data-svelte-h="svelte-1j9ydqy">Test Quiz</div></div> <div class="iraab" style="padding: 1em;">${validate_component(VerseSliced, "VerseSliced").$$render(
    $$result,
    {
      selectSlice,
      lineHeight: "2.5em",
      html: verse.iraab
    },
    {},
    {}
  )}</div> ${selectedSlice ? `${validate_component(Options, "Options").$$render($$result, { saveManifest }, {}, {})} <div class="slice_details"><table class="table"><thead data-svelte-h="svelte-1gxiu1n"><td>Name</td> <td>Value</td></thead> <tbody>${each(getAttributesAsArray(selectedSlice), (attr) => {
    return `<tr><td>${escape(attr.name)}</td> <td>${typeof attr.value === "object" ? `${each(Object.entries(attr.value), ([key, value]) => {
      return `<div>${escape(key)}: ${escape(value)}</div>`;
    })}` : `${escape(attr.value)}`}</td> </tr>`;
  })}</tbody></table></div>` : ``}</div> </div>`;
});
const css = {
  code: ".wrapper.svelte-zij2qp.svelte-zij2qp{padding:1em}.searcher.svelte-zij2qp.svelte-zij2qp{display:flex;width:350px}.searcher.svelte-zij2qp>input.svelte-zij2qp{flex:1 1 60%}.searcher.svelte-zij2qp>.btn.svelte-zij2qp{flex:1 1 40%}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport { afterNavigate, goto } from '$app/navigation';\\n\\timport { page } from '$app/stores';\\n\\timport API from '$lib/api/api';\\n\\timport { onMount } from 'svelte';\\n\\timport EditVerse from './Verse/Edit.svelte';\\n\\tlet verses = [];\\n\\tlet inputVerses = $page.params.verses;\\n\\tafterNavigate(async function () {\\n\\t\\tif (inputVerses) {\\n\\t\\t\\tgetVerses();\\n\\t\\t}\\n\\t});\\n\\n\\tasync function getVerses() {\\n\\t\\tverses = await API.get(\`/quran/verses/\${inputVerses}.json\`);\\n\\t\\tconsole.log({ verses });\\n\\t}\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<div class=\\"searcher\\">\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\tplaceholder=\\"Enter Verses...\\"\\n\\t\\t\\tbind:value={inputVerses}\\n\\t\\t/>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"btn btn-primary\\"\\n\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\tgoto('/quran/verses/' + inputVerses);\\n\\t\\t\\t}}\\n\\t\\t>\\n\\t\\t\\t<i class=\\"fa fa-search\\" />\\n\\t\\t</div>\\n\\t</div>\\n\\t{#if verses}\\n\\t\\t{#each verses as verse}\\n\\t\\t\\t<EditVerse {verse} />\\n\\t\\t{/each}\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tpadding: 1em;\\n\\t}\\n\\n\\t.searcher {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 350px;\\n\\t}\\n\\n\\t.searcher > input {\\n\\t\\tflex: 1 1 60%;\\n\\t}\\n\\n\\t.searcher > .btn {\\n\\t\\tflex: 1 1 40%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6CC,oCAAS,CACR,OAAO,CAAE,GACV,CAEA,qCAAU,CACT,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KACR,CAEA,uBAAS,CAAG,mBAAM,CACjB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GACX,CAEA,uBAAS,CAAG,kBAAK,CAChB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GACX"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let verses = [];
  let inputVerses = $page.params.verses;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="wrapper svelte-zij2qp"><div class="searcher svelte-zij2qp"><input type="text" class="form-control svelte-zij2qp" placeholder="Enter Verses..."${add_attribute("value", inputVerses, 0)}> <div class="btn btn-primary svelte-zij2qp" data-svelte-h="svelte-y1bd0e"><i class="fa fa-search"></i></div></div> ${verses ? `${each(verses, (verse) => {
    return `${validate_component(Edit, "EditVerse").$$render($$result, { verse }, {}, {})}`;
  })}` : ``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Verses").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
