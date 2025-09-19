import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, e as each, f as add_attribute } from "./ssr.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "./state.svelte.js";
import { A as API } from "./api.js";
import { V as VerseSliced } from "./VerseSliced.js";
import { t as translation } from "./store.js";
import { d as device } from "./device.js";
/* empty css                                     */
import { V as Verse$1 } from "./Verse.js";
import { w as whiteboardActive } from "./whiteboard.js";
const css$3 = {
  code: ".mobile.verse.svelte-6pozpw .iraab.svelte-6pozpw{padding:0}.mobile.verse.svelte-6pozpw.svelte-6pozpw{font-size:19px;line-height:2.5em;text-align:right;padding:0;border:0;margin:0}.inline.svelte-6pozpw > div{display:inline;unicode-bidi:bidi-override}.verse.svelte-6pozpw.svelte-6pozpw{padding:20px;font-size:24px;line-height:44px;text-align:right;background:white;margin:8px 4px;border:1px solid #eee;border-radius:10px}.translation.svelte-6pozpw.svelte-6pozpw{font-size:18px;line-height:24px;text-align:left;padding:10px;border-bottom:1px solid #ccc;margin-top:20px;padding-top:20px;font-family:Arial, sans-serif;color:#35281e}.inline.svelte-6pozpw .translation.svelte-6pozpw{display:block;text-align:left;font-size:24px;line-height:34px}.inline.svelte-6pozpw .ref.svelte-6pozpw{font-size:24px;color:#86aece;background:#f8f6f6;padding:10px;position:relative;text-align:center;display:inline-block;margin:0 8px}.inline.svelte-6pozpw .toggle-translate.svelte-6pozpw{position:absolute;bottom:-10px;left:0;right:0;font-size:15px;left:50%;transform:translateX(-50%)}.iraab.svelte-6pozpw.svelte-6pozpw{position:relative}.iraab.svelte-6pozpw .expand.svelte-6pozpw{position:absolute;right:-60px;bottom:50%;background-color:rgb(238, 216, 235);padding:10px}",
  map: `{"version":3,"file":"Verse.svelte","sources":["Verse.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport VerseSliced from '$lib/components/Quran/Verses/Verse/VerseSliced.svelte';\\n\\n\\timport { gopher, grid, translation } from '$lib/components/QuranFlow/store';\\n\\timport { device } from '$lib/utils/device';\\n\\n\\texport let verse;\\n\\texport let trans = null;\\n\\texport let sliced = true;\\n\\texport let inline = false;\\n\\texport let wordHandler;\\n\\texport let expandable = false;\\n\\n\\tlet showTranslation = false;\\n\\n\\t$: findEng = (ref) => {\\n\\t\\tconst [c, v] = ref.split(':');\\n\\n\\t\\tgetVerseText(Number(c), Number(v));\\n\\t};\\n\\n\\tfunction getVerseText(chapterNumber, verseNumber) {\\n\\t\\tif (!trans) return '';\\n\\t\\tconst arr = Array.from(trans);\\n\\t\\tconsole.log('trans', { arr });\\n\\t\\tfor (let i = 0; i < arr.length; i++) {\\n\\t\\t\\tconst verse = trans.quran[i];\\n\\t\\t\\tif (verse.chapter === chapterNumber && verse.verse === verseNumber) {\\n\\t\\t\\t\\treturn verse.text;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn '';\\n\\t}\\n\\n\\tasync function selectSlice(item) {\\n\\t\\t// console.log({ slice });\\n\\t\\tconsole.log({ item });\\n\\t\\tconst triggerId = item.slice.getAttribute('data-trigger-id');\\n\\t\\tlet triggerType = item.triggerType;\\n\\t\\tconsole.log({ triggerType });\\n\\n\\t\\twordHandler(await getWord(triggerId, triggerType));\\n\\t}\\n\\n\\tasync function getWord(triggerId, triggerType) {\\n\\t\\tconst res = await API.get(\`/\${triggerType}/\${triggerId}.json\`);\\n\\t\\treturn {\\n\\t\\t\\tkind: 'word',\\n\\t\\t\\titem: res,\\n\\t\\t\\tverse: verse\\n\\t\\t};\\n\\t}\\n\\n\\t$: trans_ref = Number(verse.item.ref.split(':')[1] - 1);\\n\\t// $: translation = trans ? (trans[trans_ref] ? trans[trans_ref].text : null) : null;\\n\\t$: getTrans(trans);\\n\\n\\tfunction getTrans(item) {\\n\\t\\tif ($translation) {\\n\\t\\t\\ttrans = $translation.quran.find(\\n\\t\\t\\t\\t(obj) =>\\n\\t\\t\\t\\t\\tobj.chapter === Number(verse.item.ref.split(':')[0]) &&\\n\\t\\t\\t\\t\\tobj.verse === Number(verse.item.ref.split(':')[1])\\n\\t\\t\\t);\\n\\t\\t}\\n\\t}\\n\\tfunction toggleTranslation() {\\n\\t\\tconsole.log('clicked', trans);\\n\\t\\tshowTranslation = !showTranslation;\\n\\t}\\n<\/script>\\n\\n{#if inline}\\n\\t<span class=\\"iraab inline\\" class:mobile={$device === 'mobile'} class:showTranslation>\\n\\t\\t<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />\\n\\t\\t<span class=\\"ref\\" on:click={toggleTranslation}\\n\\t\\t\\t>{verse.item.ref.split(':')[1]}\\n\\t\\t\\t<i class=\\"fa fa-language toggle-translate\\" />\\n\\t\\t</span>\\n\\t\\t{#if showTranslation}\\n\\t\\t\\t<div class=\\"translation\\">\\n\\t\\t\\t\\t{verse.translation.english}\\n\\t\\t\\t\\t<hr />\\n\\t\\t\\t\\t{verse.translation.urdu}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t{#if showTranslation && expandable}\\n\\t\\t\\t<i\\n\\t\\t\\t\\tclass=\\"fa fa-arrow-right expand\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tgrid.set('default');\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t{/if}\\n\\t</span>\\n{:else}\\n\\t<li class=\\"verse\\" class:mobile={$device === 'mobile'}>\\n\\t\\t{#if sliced}\\n\\t\\t\\t<div class=\\"iraab\\" style=\\"padding: 1em;\\">\\n\\t\\t\\t\\t<VerseSliced {selectSlice} lineHeight={'2.5em'} html={verse.iraab} />\\n\\t\\t\\t\\t<span class=\\"ref\\">{verse.item.ref} </span>\\n\\t\\t\\t\\t<i on:click={toggleTranslation} class=\\"fa fa-language\\" />\\n\\t\\t\\t</div>\\n\\t\\t{:else}\\n\\t\\t\\t{verse.arabic} <span class=\\"ref\\">{verse.item.ref}</span>\\n\\t\\t{/if}\\n\\t\\t{#if showTranslation}\\n\\t\\t\\t<div class=\\"translation\\">\\n\\t\\t\\t\\t{verse.translation.english}\\n\\t\\t\\t\\t<hr />\\n\\t\\t\\t\\t{verse.translation.urdu}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</li>\\n{/if}\\n\\n<style>\\n\\t.mobile.verse .iraab {\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.mobile.verse {\\n\\t\\tfont-size: 19px;\\n\\t\\tline-height: 2.5em;\\n\\t\\ttext-align: right;\\n\\t\\tpadding: 0;\\n\\t\\tborder: 0;\\n\\t\\tmargin: 0;\\n\\t}\\n\\t.inline :global(> div) {\\n\\t\\tdisplay: inline;\\n\\t\\tunicode-bidi: bidi-override;\\n\\t}\\n\\t.verse {\\n\\t\\tpadding: 20px;\\n\\t\\tfont-size: 24px;\\n\\t\\tline-height: 44px;\\n\\t\\ttext-align: right;\\n\\t\\tbackground: white;\\n\\t\\tmargin: 8px 4px;\\n\\t\\tborder: 1px solid #eee;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\t.translation {\\n\\t\\tfont-size: 18px;\\n\\t\\tline-height: 24px;\\n\\t\\ttext-align: left;\\n\\t\\tpadding: 10px;\\n\\t\\tborder-bottom: 1px solid #ccc;\\n\\t\\tmargin-top: 20px;\\n\\t\\tpadding-top: 20px;\\n\\t\\tfont-family: Arial, sans-serif;\\n\\t\\tcolor: #35281e;\\n\\t}\\n\\n\\t.inline .translation {\\n\\t\\tdisplay: block;\\n\\t\\ttext-align: left;\\n\\t\\tfont-size: 24px;\\n\\t\\tline-height: 34px;\\n\\t}\\n\\n\\t.inline .ref {\\n\\t\\tfont-size: 24px;\\n\\t\\tcolor: #86aece;\\n\\t\\tbackground: #f8f6f6;\\n\\t\\tpadding: 10px;\\n\\t\\tposition: relative;\\n\\t\\ttext-align: center;\\n\\t\\tdisplay: inline-block;\\n\\t\\tmargin: 0 8px;\\n\\t}\\n\\n\\t.inline .toggle-translate {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: -10px;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\n\\t\\tfont-size: 15px;\\n\\t\\tleft: 50%;\\n\\t\\ttransform: translateX(-50%);\\n\\t}\\n\\n\\t.inline.showTranslation {\\n\\t\\t/* display: block; */\\n\\t}\\n\\n\\t.iraab {\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.iraab .expand {\\n\\t\\tposition: absolute;\\n\\t\\tright: -60px;\\n\\t\\tbottom: 50%;\\n\\t\\tbackground-color: rgb(238, 216, 235);\\n\\t\\tpadding: 10px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsHC,OAAO,oBAAM,CAAC,oBAAO,CACpB,OAAO,CAAE,CACV,CAEA,OAAO,kCAAO,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,KAAK,CAClB,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,CACT,CACA,qBAAO,CAAS,KAAO,CACtB,OAAO,CAAE,MAAM,CACf,YAAY,CAAE,aACf,CACA,kCAAO,CACN,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,GAAG,CAAC,GAAG,CACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,IAChB,CAEA,wCAAa,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC7B,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,CACjB,WAAW,CAAE,KAAK,CAAC,CAAC,UAAU,CAC9B,KAAK,CAAE,OACR,CAEA,qBAAO,CAAC,0BAAa,CACpB,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACd,CAEA,qBAAO,CAAC,kBAAK,CACZ,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,YAAY,CACrB,MAAM,CAAE,CAAC,CAAC,GACX,CAEA,qBAAO,CAAC,+BAAkB,CACzB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CAER,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,WAAW,IAAI,CAC3B,CAMA,kCAAO,CACN,QAAQ,CAAE,QACX,CAEA,oBAAM,CAAC,qBAAQ,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,IACV"}`
};
const Verse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $translation, $$unsubscribe_translation;
  let $device, $$unsubscribe_device;
  $$unsubscribe_translation = subscribe(translation, (value) => $translation = value);
  $$unsubscribe_device = subscribe(device, (value) => $device = value);
  let { verse } = $$props;
  let { trans = null } = $$props;
  let { sliced = true } = $$props;
  let { inline = false } = $$props;
  let { wordHandler } = $$props;
  let { expandable = false } = $$props;
  async function selectSlice(item) {
    console.log({ item });
    const triggerId = item.slice.getAttribute("data-trigger-id");
    let triggerType = item.triggerType;
    console.log({ triggerType });
    wordHandler(await getWord(triggerId, triggerType));
  }
  async function getWord(triggerId, triggerType) {
    const res = await API.get(`/${triggerType}/${triggerId}.json`);
    return { kind: "word", item: res, verse };
  }
  function getTrans(item) {
    if ($translation) {
      trans = $translation.quran.find((obj) => obj.chapter === Number(verse.item.ref.split(":")[0]) && obj.verse === Number(verse.item.ref.split(":")[1]));
    }
  }
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0) $$bindings.verse(verse);
  if ($$props.trans === void 0 && $$bindings.trans && trans !== void 0) $$bindings.trans(trans);
  if ($$props.sliced === void 0 && $$bindings.sliced && sliced !== void 0) $$bindings.sliced(sliced);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0) $$bindings.inline(inline);
  if ($$props.wordHandler === void 0 && $$bindings.wordHandler && wordHandler !== void 0) $$bindings.wordHandler(wordHandler);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0) $$bindings.expandable(expandable);
  $$result.css.add(css$3);
  Number(verse.item.ref.split(":")[1] - 1);
  {
    getTrans();
  }
  $$unsubscribe_translation();
  $$unsubscribe_device();
  return `${inline ? `<span class="${[
    "iraab inline svelte-6pozpw",
    ($device === "mobile" ? "mobile" : "") + " "
  ].join(" ").trim()}">${validate_component(VerseSliced, "VerseSliced").$$render(
    $$result,
    {
      selectSlice,
      lineHeight: "2.5em",
      html: verse.iraab
    },
    {},
    {}
  )} <span class="ref svelte-6pozpw">${escape(verse.item.ref.split(":")[1])} <i class="fa fa-language toggle-translate svelte-6pozpw"></i></span> ${``} ${``}</span>` : `<li class="${["verse svelte-6pozpw", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${sliced ? `<div class="iraab svelte-6pozpw" style="padding: 1em;">${validate_component(VerseSliced, "VerseSliced").$$render(
    $$result,
    {
      selectSlice,
      lineHeight: "2.5em",
      html: verse.iraab
    },
    {},
    {}
  )} <span class="ref">${escape(verse.item.ref)}</span> <i class="fa fa-language"></i></div>` : `${escape(verse.arabic)} <span class="ref">${escape(verse.item.ref)}</span>`} ${``}</li>`}`;
});
const css$2 = {
  code: ".rootWords.svelte-13tvqyk li.svelte-13tvqyk{display:inline-block;font-size:26px;padding:10px;background-color:#eee;border:1px solid #ccc;margin:10px;border-radius:8px;text-align:center}.rootWords.svelte-13tvqyk ul.svelte-13tvqyk{overflow-x:scroll;margin:20px;margin-top:-22px;height:-moz-max-content;height:max-content;padding:20px 0;text-wrap:nowrap}.close.svelte-13tvqyk.svelte-13tvqyk{position:absolute;top:2px;left:2px;font-size:24px;color:#ccc}article.svelte-13tvqyk.svelte-13tvqyk{background-color:#fff1de;display:flex;flex-direction:column;height:100%;z-index:999999999}.top-row.svelte-13tvqyk.svelte-13tvqyk{flex:0 1 80%;overflow:scroll}.bottom-row.svelte-13tvqyk.svelte-13tvqyk{flex:0 1 20%}.root.svelte-13tvqyk.svelte-13tvqyk{font-size:24px;text-align:right}.word.svelte-13tvqyk.svelte-13tvqyk{font-size:42px}.def.svelte-13tvqyk.svelte-13tvqyk{font-size:32px;text-align:center}.word-container.svelte-13tvqyk.svelte-13tvqyk{position:relative;border-top:1px solid #ccc}",
  map: `{"version":3,"file":"Word.svelte","sources":["Word.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport { gopher } from '$lib/components/QuranFlow/store';\\n\\texport let word;\\n\\texport let verse = null;\\n\\tconsole.log({ word });\\n\\t$: base = word.v_word || word.nv_word;\\n\\t$: root = word.nv_root || word.v_root;\\n\\t$: translation = word.nv_translation || word.v_translation;\\n\\tlet rootWords = [];\\n\\n\\tlet deeperWord = null;\\n\\n\\texport let handleClose;\\n\\n\\tasync function findMoreRoot() {\\n\\t\\trootWords = await API.post(\`/qf/find_root_words.json\`, {\\n\\t\\t\\troot: root\\n\\t\\t});\\n\\t\\tconsole.log({ rootWords });\\n\\t}\\n\\n\\tasync function findWord(category, id) {\\n\\t\\tdeeperWord = await API.get('/' + category + '/' + id + '.json');\\n\\t}\\n<\/script>\\n\\n<article>\\n\\t{#if rootWords && (rootWords.non_verbs || rootWords.verbs)}\\n\\t\\t<div class=\\"rootWords top-row\\">\\n\\t\\t\\t<div class=\\"flex\\">\\n\\t\\t\\t\\t<div class=\\"left-col\\">\\n\\t\\t\\t\\t\\t<small>NonVerbs:</small>\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each rootWords.non_verbs || [] as non_verb}\\n\\t\\t\\t\\t\\t\\t\\t<li on:click={() => findWord('non_verbs', non_verb.id)}>\\n\\t\\t\\t\\t\\t\\t\\t\\t{non_verb.nv_word} <br /><small>{non_verb.nv_translation}</small>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\n\\t\\t\\t\\t\\t<small>Verbs:</small>\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each rootWords.verbs || [] as verb}\\n\\t\\t\\t\\t\\t\\t\\t<li on:click={() => findWord('verbs', verb.id)}>\\n\\t\\t\\t\\t\\t\\t\\t\\t{verb.v_word} <br /><small>{verb.v_translation}</small>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"right-col\\">\\n\\t\\t\\t\\t\\t{#if deeperWord}\\n\\t\\t\\t\\t\\t\\t<div class=\\"deeper\\">\\n\\t\\t\\t\\t\\t\\t\\t<h1>{deeperWord.nv_word || deeperWord.v_word}</h1>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t<div class=\\"word-container bottom-row\\">\\n\\t\\t{#if root}\\n\\t\\t\\t<h1 class=\\"root\\" on:click={() => findMoreRoot()}>{root}</h1>\\n\\t\\t{/if}\\n\\t\\t<h1 class=\\"def\\">\\n\\t\\t\\t<div class=\\"word\\">{base}</div>\\n\\t\\t\\t<br />{translation}\\n\\t\\t</h1>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"close\\"\\n\\t\\t\\ton:click={() =>\\n\\t\\t\\t\\tgopher.set({\\n\\t\\t\\t\\t\\tkind: null,\\n\\t\\t\\t\\t\\titem: null\\n\\t\\t\\t\\t})}\\n\\t\\t>\\n\\t\\t\\t<i class=\\"fa fa-times close\\" on:click={handleClose} />\\n\\t\\t</div>\\n\\t</div>\\n</article>\\n\\n<style>\\n\\t.rootWords li {\\n\\t\\tdisplay: inline-block;\\n\\t\\tfont-size: 26px;\\n\\t\\tpadding: 10px;\\n\\t\\tbackground-color: #eee;\\n\\t\\tborder: 1px solid #ccc;\\n\\t\\tmargin: 10px;\\n\\t\\tborder-radius: 8px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.rootWords ul {\\n\\t\\toverflow-x: scroll;\\n\\t\\tmargin: 20px;\\n\\t\\tmargin-top: -22px;\\n\\t\\theight: -moz-max-content;\\n\\t\\theight: max-content;\\n\\t\\tpadding: 20px 0;\\n\\t\\ttext-wrap: nowrap;\\n\\t}\\n\\t.close {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 2px;\\n\\t\\tleft: 2px;\\n\\t\\tfont-size: 24px;\\n\\t\\tcolor: #ccc;\\n\\t}\\n\\tarticle {\\n\\t\\tbackground-color: #fff1de;\\n\\t\\t/* width: 100%;\\n\\t\\tdisplay: block;\\n\\t\\tposition: relative;\\n\\t\\tpadding-bottom: 32px; */\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\theight: 100%;\\n\\t\\tz-index: 999999999;\\n\\t}\\n\\n\\t.top-row {\\n\\t\\tflex: 0 1 80%;\\n\\t\\toverflow: scroll;\\n\\t\\t/* background-color: lightblue; */\\n\\t}\\n\\t.bottom-row {\\n\\t\\tflex: 0 1 20%;\\n\\t\\t/* background-color: lightcoral; */\\n\\t}\\n\\t/* article > div {\\n\\t\\tpadding: 10px;\\n\\t} */\\n\\n\\t.root {\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: right;\\n\\t}\\n\\t.word {\\n\\t\\tfont-size: 42px;\\n\\t}\\n\\t.def {\\n\\t\\tfont-size: 32px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\t.word-container {\\n\\t\\tposition: relative;\\n\\t\\tborder-top: 1px solid #ccc;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmFC,yBAAU,CAAC,iBAAG,CACb,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MACb,CAEA,yBAAU,CAAC,iBAAG,CACb,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,MAAM,CAAE,gBAAgB,CACxB,MAAM,CAAE,WAAW,CACnB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,SAAS,CAAE,MACZ,CACA,oCAAO,CACN,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IACR,CACA,qCAAQ,CACP,gBAAgB,CAAE,OAAO,CAKzB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,SACV,CAEA,sCAAS,CACR,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACb,QAAQ,CAAE,MAEX,CACA,yCAAY,CACX,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GAEX,CAKA,mCAAM,CACL,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KACb,CACA,mCAAM,CACL,SAAS,CAAE,IACZ,CACA,kCAAK,CACJ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACb,CACA,6CAAgB,CACf,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IACvB"}`
};
const Word = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let base;
  let root;
  let translation2;
  let { word } = $$props;
  let { verse = null } = $$props;
  console.log({ word });
  let rootWords = [];
  let { handleClose } = $$props;
  if ($$props.word === void 0 && $$bindings.word && word !== void 0) $$bindings.word(word);
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0) $$bindings.verse(verse);
  if ($$props.handleClose === void 0 && $$bindings.handleClose && handleClose !== void 0) $$bindings.handleClose(handleClose);
  $$result.css.add(css$2);
  base = word.v_word || word.nv_word;
  root = word.nv_root || word.v_root;
  translation2 = word.nv_translation || word.v_translation;
  return `<article class="svelte-13tvqyk">${rootWords && (rootWords.non_verbs || rootWords.verbs) ? `<div class="rootWords top-row svelte-13tvqyk"><div class="flex"><div class="left-col"><small data-svelte-h="svelte-zfemsx">NonVerbs:</small> <ul class="svelte-13tvqyk">${each(rootWords.non_verbs || [], (non_verb) => {
    return `<li class="svelte-13tvqyk">${escape(non_verb.nv_word)} <br><small>${escape(non_verb.nv_translation)}</small> </li>`;
  })}</ul> <small data-svelte-h="svelte-e4gzpc">Verbs:</small> <ul class="svelte-13tvqyk">${each(rootWords.verbs || [], (verb) => {
    return `<li class="svelte-13tvqyk">${escape(verb.v_word)} <br><small>${escape(verb.v_translation)}</small> </li>`;
  })}</ul></div> <div class="right-col">${``}</div></div></div>` : ``} <div class="word-container bottom-row svelte-13tvqyk">${root ? `<h1 class="root svelte-13tvqyk">${escape(root)}</h1>` : ``} <h1 class="def svelte-13tvqyk"><div class="word svelte-13tvqyk">${escape(base)}</div> <br>${escape(translation2)}</h1> <div class="close svelte-13tvqyk"><i class="fa fa-times close svelte-13tvqyk"></i></div></div> </article>`;
});
const css$1 = {
  code: ".mobile.svelte-og6b64{max-width:97vw}.gopher{position:absolute;top:50px;right:-200px;width:234px}.mobile.svelte-og6b64 .gopher{position:static;width:100%}.gopher > article{padding:30px;border-radius:12px}li.svelte-og6b64{max-width:50vw;display:block;margin:0 auto;padding:20px;background:#fff;border-radius:4px;margin-top:2px;text-align:right;position:relative}.add-to-whiteboard.svelte-og6b64{position:absolute;right:10px;top:10px;z-index:99999}",
  map: `{"version":3,"file":"Show.svelte","sources":["Show.svelte"],"sourcesContent":["<script>\\n\\timport ArabicVerse from '$lib/components/QuranFlow/Verse/Verse.svelte';\\n\\timport BibleVerse from '$lib/components/BibleFlow/Verse/Verse.svelte';\\n\\n\\timport GopherBlock from '$lib/components/QuranFlow/Gopher/Word.svelte';\\n\\timport { gopher } from '$lib/components/QuranFlow/store';\\n\\timport { device } from '$lib/utils/device';\\n\\timport {importVerse, whiteboardActive} from \\"$lib/stores/whiteboard\\"\\n\\texport let verse;\\n\\n\\tlet selectedWord;\\n\\tfunction wordHandler(payload) {\\n\\t\\t// console.log({ payload });\\n\\t\\tselectedWord = payload;\\n\\t}\\n\\n\\tfunction checkScriptDominance(text) {\\n\\t\\tif (!text || !text['original']) return;\\n\\t\\ttext = text['original'];\\n\\t\\tlet greekCount = 0;\\n\\t\\tlet hebrewCount = 0;\\n\\n\\t\\tfor (let i = 0; i < text.length; i++) {\\n\\t\\t\\tlet char = text[i];\\n\\t\\t\\tlet codePoint = char.codePointAt(0);\\n\\n\\t\\t\\t// Greek Unicode block: U+0370 to U+03FF\\n\\t\\t\\tif (codePoint >= 0x0370 && codePoint <= 0x03ff) {\\n\\t\\t\\t\\tgreekCount++;\\n\\t\\t\\t}\\n\\t\\t\\t// Hebrew Unicode block: U+0590 to U+05FF\\n\\t\\t\\telse if (codePoint >= 0x0590 && codePoint <= 0x05ff) {\\n\\t\\t\\t\\thebrewCount++;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tlet totalCount = greekCount + hebrewCount;\\n\\t\\tif (totalCount === 0) {\\n\\t\\t\\treturn 'Neither Greek nor Hebrew characters dominate.';\\n\\t\\t}\\n\\n\\t\\tlet greekRatio = greekCount / totalCount;\\n\\t\\tlet hebrewRatio = hebrewCount / totalCount;\\n\\n\\t\\tif (greekRatio > 0.7) {\\n\\t\\t\\treturn 'greek';\\n\\t\\t} else if (hebrewRatio > 0.7) {\\n\\t\\t\\treturn 'hebrew';\\n\\t\\t} else {\\n\\t\\t\\treturn null;\\n\\t\\t}\\n\\t}\\n\\n\\t// $: console.log(checkScriptDominance(verse));\\n<\/script>\\n\\n{#if verse && verse['arabic']}\\n\\t<li class:mobile={$device === 'mobile'}>\\n\\t\\t<ArabicVerse {verse} {wordHandler} />\\n\\n\\t\\t{#if whiteboardActive}\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<span class=\\"btn btn-outline-primary add-to-whiteboard\\" on:click={() => importVerse.set(verse)}>Add to Whiteboard</span>\\n\\t\\t{/if}\\n\\n\\t\\t{#if selectedWord}\\n\\t\\t\\t<div class=\\"gopher\\">\\n\\t\\t\\t\\t<GopherBlock word={selectedWord.item} handleClose={() => (selectedWord = null)} />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</li>\\n{:else if verse && verse['original']}\\n\\t<li class:mobile={$device === 'mobile'}>\\n\\t\\t<BibleVerse {verse} lang={checkScriptDominance(verse)} />\\n\\t</li>\\n{/if}\\n\\n<style>\\n\\t.mobile {\\n\\t\\tmax-width: 97vw;\\n\\t}\\n\\t:global(.gopher) {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 50px;\\n\\t\\tright: -200px;\\n\\t\\twidth: 234px;\\n\\t}\\n\\n\\t.mobile :global(.gopher) {\\n\\t\\tposition: static;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t:global(.gopher > article) {\\n\\t\\tpadding: 30px;\\n\\t\\tborder-radius: 12px;\\n\\t}\\n\\n\\tli {\\n\\t\\tmax-width: 50vw;\\n\\t\\tdisplay: block;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 20px;\\n\\t\\tbackground: #fff;\\n\\t\\tborder-radius: 4px;\\n\\t\\tmargin-top: 2px;\\n\\t\\ttext-align: right;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.add-to-whiteboard {\\n\\t\\tposition: absolute;\\n\\t\\tright: 10px;\\n\\t\\ttop: 10px;\\n\\t\\tz-index: 99999;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8EC,qBAAQ,CACP,SAAS,CAAE,IACZ,CACQ,OAAS,CAChB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,MAAM,CACb,KAAK,CAAE,KACR,CAEA,qBAAO,CAAS,OAAS,CACxB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IACR,CAEQ,iBAAmB,CAC1B,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAChB,CAEA,gBAAG,CACF,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QACX,CAEA,gCAAmB,CAClB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,KACV"}`
};
function checkScriptDominance(text) {
  if (!text || !text["original"]) return;
  text = text["original"];
  let greekCount = 0;
  let hebrewCount = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let codePoint = char.codePointAt(0);
    if (codePoint >= 880 && codePoint <= 1023) {
      greekCount++;
    } else if (codePoint >= 1424 && codePoint <= 1535) {
      hebrewCount++;
    }
  }
  let totalCount = greekCount + hebrewCount;
  if (totalCount === 0) {
    return "Neither Greek nor Hebrew characters dominate.";
  }
  let greekRatio = greekCount / totalCount;
  let hebrewRatio = hebrewCount / totalCount;
  if (greekRatio > 0.7) {
    return "greek";
  } else if (hebrewRatio > 0.7) {
    return "hebrew";
  } else {
    return null;
  }
}
const Show = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $device, $$unsubscribe_device;
  $$unsubscribe_device = subscribe(device, (value) => $device = value);
  let { verse } = $$props;
  let selectedWord;
  function wordHandler(payload) {
    selectedWord = payload;
  }
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0) $$bindings.verse(verse);
  $$result.css.add(css$1);
  $$unsubscribe_device();
  return `${verse && verse["arabic"] ? `<li class="${["svelte-og6b64", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${validate_component(Verse, "ArabicVerse").$$render($$result, { verse, wordHandler }, {}, {})} ${whiteboardActive ? ` <span class="btn btn-outline-primary add-to-whiteboard svelte-og6b64" data-svelte-h="svelte-1h5el31">Add to Whiteboard</span>` : ``} ${selectedWord ? `<div class="gopher">${validate_component(Word, "GopherBlock").$$render(
    $$result,
    {
      word: selectedWord.item,
      handleClose: () => selectedWord = null
    },
    {},
    {}
  )}</div>` : ``}</li>` : `${verse && verse["original"] ? `<li class="${["svelte-og6b64", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${validate_component(Verse$1, "BibleVerse").$$render($$result, { verse, lang: checkScriptDominance(verse) }, {}, {})}</li>` : ``}`}`;
});
const css = {
  code: ".error.svelte-17chtbo.svelte-17chtbo{max-width:628px;background:#c52e2e;color:#fff;font-size:24px;text-align:left;margin:0 auto;padding:10px}.word.svelte-17chtbo.svelte-17chtbo{max-width:628px;margin:0 auto;padding:0.9em;font-size:34px;background:#fbffd7;border-bottom:2px dashed;background:#f0f3d7;border:0.1em dashed #dee2c1;display:inline-block;font-size:20px;border-radius:4px;text-align:center}.word.non_verb.svelte-17chtbo.svelte-17chtbo{background:#beffb3}.word.verb.svelte-17chtbo.svelte-17chtbo{background:#ffedfe}.word.svelte-17chtbo.svelte-17chtbo:hover{background:#e0e3c7;border:0.1em dashed #dee2c1;padding:0.9em;cursor:pointer}.spotlight.svelte-17chtbo.svelte-17chtbo{border-radius:6px;margin:0 auto;display:block;padding:10px;width:50%}input.mobile.svelte-17chtbo.svelte-17chtbo{font-size:42px;width:80%;margin-left:10px}.close-search.svelte-17chtbo.svelte-17chtbo{top:4px;right:21%;position:absolute}.close-search.mobile.svelte-17chtbo.svelte-17chtbo{position:absolute;top:0%;right:11px;width:13%;height:81px;font-size:46px}.results.svelte-17chtbo.svelte-17chtbo{max-height:55vh;overflow-y:scroll;max-width:50vw;margin:0 auto}.details.svelte-17chtbo.svelte-17chtbo{max-width:50vw}.verses.svelte-17chtbo.svelte-17chtbo{overflow-y:scroll;max-height:522px;margin-top:6px}.word.selected.svelte-17chtbo.svelte-17chtbo{display:block}.details.svelte-17chtbo.svelte-17chtbo{background:#fff;padding:30px;margin:10px 0;margin:0 auto}.details.svelte-17chtbo .examples.svelte-17chtbo{list-style:none;padding:10px;text-align:right;direction:rtl}.examples.svelte-17chtbo li.svelte-17chtbo{line-height:36px}.mobile.verses.svelte-17chtbo.svelte-17chtbo{max-height:77vh}.mobile.details.svelte-17chtbo.svelte-17chtbo{max-width:100vw}.mobile.results.svelte-17chtbo.svelte-17chtbo{max-width:100vw;margin:0 auto;max-height:88vh}",
  map: `{"version":3,"file":"Search.svelte","sources":["Search.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from '$app/navigation';\\n\\timport API from '$lib/api/api';\\n\\timport { onMount } from 'svelte';\\n\\n\\timport Verse from './Verses/Show.svelte';\\n\\texport let deliver;\\n\\n\\texport let searchInput = '';\\n\\tlet searchElement = null;\\n\\tlet error = '';\\n\\tlet suggesting = false;\\n\\n\\texport let words = [];\\n\\texport let autostart;\\n\\texport let autoid;\\n\\tlet rows = [];\\n\\texport let verses = [];\\n\\tlet selectedWord = {};\\n\\n\\tonMount(async () => {\\n\\t\\tif (autostart && autostart.length > 1) {\\n\\t\\t\\tsearchInput = autostart;\\n\\t\\t\\tawait findArabicWordsByRoot();\\n\\n\\t\\t\\tif (words) {\\n\\t\\t\\t\\tawait deliver({\\n\\t\\t\\t\\t\\taction: 'word',\\n\\t\\t\\t\\t\\tquery: searchInput,\\n\\t\\t\\t\\t\\tword: words.find((w) => w.id === autoid)\\n\\t\\t\\t\\t});\\n\\t\\t\\t\\trows = [];\\n\\t\\t\\t\\twords = [];\\n\\t\\t\\t\\tsuggesting = false;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\tfetchJsonData();\\n\\t});\\n\\n\\tasync function findArabicWordsByRoot() {\\n\\t\\t// console.log(convertRomanToArabic(searchInput));\\n\\t\\tconst root = convertRomanToArabic(searchInput);\\n\\t\\tconst res = await API.post('/qf/find_by_root.json', {\\n\\t\\t\\ttype: 'verb',\\n\\t\\t\\troot: root\\n\\t\\t});\\n\\t\\tconsole.log({ res });\\n\\t\\twords = res;\\n\\t\\tif (res.length === 0) error = 'No Words for ' + searchInput;\\n\\t\\trows = [];\\n\\t\\tverses = [];\\n\\t}\\n\\n\\tlet selectedWordExamples;\\n\\n\\timport { translation } from '$lib/components/QuranFlow/store.js';\\n\\timport { device } from '$lib/utils/device';\\n\\timport { closeModal } from 'svelte-modals';\\n\\timport { showSpotlight } from '$lib/stores/spotlight';\\n\\n\\tasync function selectWord(wordType, id) {\\n\\t\\tselectedWord = { wordType: wordType, id: id };\\n\\t\\tselectedWordExamples = await API.get(\`\${wordType}/examples/\${id}.json\`);\\n\\t}\\n\\n\\tconst fetchJsonData = async () => {\\n\\t\\ttry {\\n\\t\\t\\tconst response = await fetch('/translations/english/eng-abdelhaleem.json');\\n\\n\\t\\t\\tif (!response.ok) {\\n\\t\\t\\t\\tthrow new Error('Failed to fetch JSON data');\\n\\t\\t\\t}\\n\\t\\t\\ttranslation.set(await response.json());\\n\\t\\t\\tconsole.log('translation');\\n\\t\\t\\tconsole.log($translation);\\n\\t\\t} catch (error) {\\n\\t\\t\\tconsole.error(error);\\n\\t\\t}\\n\\t};\\n\\n\\tlet findingVerses = false;\\n\\tasync function findVerse() {\\n\\t\\tfindingVerses = true;\\n\\t\\tconsole.log({ searchInput });\\n\\t\\tconst res = await API.post('/revelations/search.json', {\\n\\t\\t\\tverses: searchInput\\n\\t\\t});\\n\\t\\tconsole.log({ res });\\n\\t\\tverses = res;\\n\\t\\twords = [];\\n\\t\\tfindingVerses = false;\\n\\n\\t\\t// rows = [];\\n\\t\\t// suggesting = false;\\n\\t\\t// const root = convertRomanToArabic(searchInput);\\n\\t\\t// const res = await API.post('/qf/find_by_root.json', {\\n\\t\\t// \\ttype: 'verb',\\n\\t\\t// \\troot: root\\n\\t\\t// });\\n\\t\\t// console.log({ res });\\n\\t\\t// words = res;\\n\\t\\t// if (res.length === 0) error = 'No Words for ' + searchInput;\\n\\t\\t// rows = [];\\n\\t}\\n\\n\\tfunction convertRomanToArabic(letters) {\\n\\t\\tconst hash = {\\n\\t\\t\\ta: ['ا', 'أ', 'ء', 'ع'],\\n\\t\\t\\t\\"'a\\": ['ا', 'أ', 'ء', 'ع'],\\n\\t\\t\\tb: 'ب',\\n\\t\\t\\tt: ['ت', 'ط'],\\n\\t\\t\\tth: ['ث', 'ذ'],\\n\\t\\t\\tj: 'ج',\\n\\t\\t\\tH: 'ح',\\n\\t\\t\\tkh: 'خ',\\n\\t\\t\\td: ['د', 'ض'],\\n\\t\\t\\tz: ['ذ', 'ز', 'ظ'],\\n\\t\\t\\tr: 'ر',\\n\\t\\t\\ts: ['س', 'ث', 'ص'],\\n\\t\\t\\tsh: 'ش',\\n\\t\\t\\t3: 'ع',\\n\\t\\t\\tgh: 'غ',\\n\\t\\t\\tg: ['غ', 'ج'],\\n\\t\\t\\tf: 'ف',\\n\\t\\t\\tq: 'ق',\\n\\t\\t\\tk: 'ك',\\n\\t\\t\\tl: 'ل',\\n\\t\\t\\tm: 'م',\\n\\t\\t\\tn: 'ن',\\n\\t\\t\\tw: 'و',\\n\\t\\t\\tv: 'و',\\n\\t\\t\\th: ['ه', 'ح', 'خ'],\\n\\t\\t\\ty: 'ي',\\n\\t\\t\\ti: 'ي'\\n\\t\\t};\\n\\n\\t\\tlet combos = {\\n\\t\\t\\tr1: [],\\n\\t\\t\\tr2: [],\\n\\t\\t\\tr3: [],\\n\\t\\t\\tr4: []\\n\\t\\t};\\n\\n\\t\\tlet word = '';\\n\\n\\t\\tletters = letters.split('').filter((l) => l !== ' ');\\n\\t\\t// Go through each letter\\n\\t\\tfor (let i = 0; i < letters.length; i++) {\\n\\t\\t\\tconsole.log(i, letters[i]);\\n\\t\\t\\tconst l = letters[i];\\n\\t\\t\\tif (Array.isArray(hash[l])) {\\n\\t\\t\\t\\t// Go through each l in array\\n\\t\\t\\t\\thash[l].forEach((item) => {\\n\\t\\t\\t\\t\\tcombos['r' + (i + 1)].push(item);\\n\\t\\t\\t\\t});\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tcombos['r' + (i + 1)].push(hash[l]);\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tconsole.log(combos);\\n\\t\\tlet car;\\n\\t\\tif (combos['r4'].length > 0) {\\n\\t\\t\\tcar = cartesian(combos['r1'], combos['r2'], combos['r3'], combos['r4']);\\n\\t\\t} else {\\n\\t\\t\\tcar = cartesian(combos['r1'], combos['r2'], combos['r3']);\\n\\t\\t}\\n\\n\\t\\tlet roots = [];\\n\\t\\tcar.forEach((item) => {\\n\\t\\t\\tword = '';\\n\\t\\t\\titem.forEach((r) => {\\n\\t\\t\\t\\tword += r + ' ';\\n\\t\\t\\t});\\n\\t\\t\\troots.push(word.trim());\\n\\t\\t});\\n\\n\\t\\tconsole.log(roots);\\n\\t\\treturn roots;\\n\\t}\\n\\n\\tfunction cartesian() {\\n\\t\\tvar r = [],\\n\\t\\t\\targ = arguments,\\n\\t\\t\\tmax = arg.length - 1;\\n\\t\\tfunction helper(arr, i) {\\n\\t\\t\\tfor (var j = 0, l = arg[i].length; j < l; j++) {\\n\\t\\t\\t\\tvar a = arr.slice(0); // clone arr\\n\\t\\t\\t\\ta.push(arg[i][j]);\\n\\t\\t\\t\\tif (i == max) r.push(a);\\n\\t\\t\\t\\telse helper(a, i + 1);\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\thelper([], 0);\\n\\t\\treturn r;\\n\\t}\\n\\n\\tfunction isRoot(str) {\\n\\t\\treturn /^[a-zA-Z\\\\s]+$/.test(str);\\n\\t}\\n\\n\\tfunction isVerse(str) {\\n\\t\\treturn /^[0-9:-]+$/.test(str);\\n\\t}\\n\\n\\t$: tryRootSearch(searchInput);\\n\\n\\tfunction debounceSearch(func, delay) {\\n\\t\\tlet debounceTimer;\\n\\t\\treturn function (...args) {\\n\\t\\t\\tclearTimeout(debounceTimer);\\n\\t\\t\\tdebounceTimer = setTimeout(() => {\\n\\t\\t\\t\\tfunc;\\n\\t\\t\\t}, delay);\\n\\t\\t};\\n\\t}\\n\\n\\t// function debounceSearch(func, delay) {\\n\\t// \\tlet timeoutId;\\n\\n\\t// \\treturn function(...args) {\\n\\t// \\t\\tclearTimeout(timeoutId);\\n\\n\\t// \\t\\ttimeoutId = setTimeout(() => {\\n\\t// \\t\\tfunc.apply(this, args);\\n\\t// \\t\\t}, delay);\\n\\t// \\t};\\n\\t// }\\n\\n\\tfunction tryRootSearch(input) {\\n\\t\\t// Strip whitespace from the input\\n\\t\\tconst strippedInput = input.replace(/\\\\s/g, '');\\n\\n\\t\\t// Check if the input is exactly 3 characters long and consists of only English or Arabic letters\\n\\t\\tif (\\n\\t\\t\\t(strippedInput.length === 3 || 4) &&\\n\\t\\t\\t/^(?:[a-zA-Z]{3}|[\\\\u0600-\\\\u06FF]{3})$/.test(strippedInput)\\n\\t\\t) {\\n\\t\\t\\tconsole.log('Input is 3 English or Arabic letters', strippedInput);\\n\\t\\t\\tdebounceSearch(findArabicWordsByRoot(), 500);\\n\\t\\t} else if (input.includes(':')) {\\n\\t\\t\\tdebounceSearch(findVerse(), 500);\\n\\t\\t} else {\\n\\t\\t\\t// Optionally, you can handle the case when the input doesn't meet the criteria\\n\\t\\t\\twords = [];\\n\\t\\t\\tconsole.log('Input must be exactly 3 English or Arabic letters', strippedInput);\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<input\\n\\tautocomplete=\\"off\\"\\n\\tautocorrect=\\"off\\"\\n\\tautocapitalize=\\"off\\"\\n\\tspellcheck=\\"false\\"\\n\\ttype=\\"text\\"\\n\\tid=\\"spotlight\\"\\n\\tclass=\\"spotlight\\"\\n\\tclass:mobile={$device === 'mobile'}\\n\\tplaceholder=\\"Search ...\\"\\n\\tbind:value={searchInput}\\n\\tbind:this={searchElement}\\n\\ton:keyup={() => {\\n\\t\\trows = [];\\n\\t\\terror = '';\\n\\t\\tsuggesting = true;\\n\\t}}\\n/>\\n\\n<div\\n\\tclass=\\"close-search btn btn-outline-danger\\"\\n\\tclass:mobile={$device === 'mobile'}\\n\\ton:click={() => showSpotlight.set(null)}\\n>\\n\\t<i class=\\"fa fa-times\\" />\\n</div>\\n\\n{#if findingVerses}\\n\\t<div class=\\"word\\">Loading Verses...</div>\\n{/if}\\n\\n{#if verses.length > 0}\\n\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t<ul class=\\"verses clean-list\\" class:mobile={$device === 'mobile'}>\\n\\t\\t{#each verses as verse}\\n\\t\\t\\t<Verse {verse} />\\n\\t\\t{/each}\\n\\t</ul>\\n{/if}\\n\\n{#if Object.keys(selectedWord).length > 0}\\n\\t<div class=\\"details\\" class:mobile={$device === 'mobile'}>\\n\\t\\t{#if selectedWordExamples}\\n\\t\\t\\t<div class=\\"examples\\">\\n\\t\\t\\t\\t{#each selectedWordExamples as example}\\n\\t\\t\\t\\t\\t<li>{@html example.ayah_html} - {example.verse_position}</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n{#if words}\\n\\t<div class=\\"results\\" class:mobile={$device === 'mobile'}>\\n\\t\\t{#each words['non_verbs'] || [] as word}\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"word non_verb\\"\\n\\t\\t\\t\\tclass:selected={selectedWord.id === word.id && selectedWord.wordType === 'nv'}\\n\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\tselectWord('nv', word.id);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{word.nv_word} <br />{word.nv_translation}\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t\\t<br />\\n\\t\\t{#each words['verbs'] || [] as word}\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"word verb\\"\\n\\t\\t\\t\\tclass:selected={selectedWord.id === word.id && selectedWord.wordType === 'v'}\\n\\t\\t\\t\\ton:click={async () => {\\n\\t\\t\\t\\t\\tselectWord('v', word.id);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{word.v_word} <br />{word.v_translation}\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n{/if}\\n\\n{#if error.length > 0}\\n\\t<div class=\\"error\\">\\n\\t\\t{error}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.query {\\n\\t\\tmax-width: 628px;\\n\\t\\tbackground: #a7ffd2;\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: left;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\n\\t.error {\\n\\t\\tmax-width: 628px;\\n\\t\\tbackground: #c52e2e;\\n\\t\\tcolor: #fff;\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: left;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\t.bgFiller {\\n\\t\\tbackground-color: #00000041;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tdisplay: block;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tz-index: 99999999;\\n\\t}\\n\\n\\t#desc {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 35%;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 0 40%;\\n\\t\\t-moz-box-sizing: border-box;\\n\\t\\t-webkit-box-sizing: border-box;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tfont-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\\n\\t\\t\\t'Lucida Grande', sans-serif;\\n\\t\\tfont-size: 1.4rem;\\n\\t\\tline-height: 1.5;\\n\\t\\tcolor: #666666;\\n\\t}\\n\\n\\t.word {\\n\\t\\tmax-width: 628px;\\n\\t\\tmargin: 0 auto;\\n\\t\\t/* padding: 1em; */\\n\\t\\tpadding: 0.9em;\\n\\t\\tfont-size: 34px;\\n\\t\\tbackground: #fbffd7;\\n\\t\\tborder-bottom: 2px dashed;\\n\\t\\tbackground: #f0f3d7;\\n\\t\\tborder: 0.1em dashed #dee2c1;\\n\\t\\tdisplay: inline-block;\\n\\t\\tfont-size: 20px;\\n\\t\\tborder-radius: 4px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.word.non_verb {\\n\\t\\tbackground: #beffb3;\\n\\t}\\n\\n\\t.word.verb {\\n\\t\\tbackground: #ffedfe;\\n\\t}\\n\\n\\t.word:hover {\\n\\t\\tbackground: #e0e3c7;\\n\\t\\tborder: 0.1em dashed #dee2c1;\\n\\t\\tpadding: 0.9em;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.spotlight {\\n\\t\\tborder-radius: 6px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tdisplay: block;\\n\\t\\tpadding: 10px;\\n\\t\\twidth: 50%;\\n\\t}\\n\\n\\tinput.mobile {\\n\\t\\tfont-size: 42px;\\n\\t\\twidth: 80%;\\n\\t\\tmargin-left: 10px;\\n\\t}\\n\\n\\t.close-search {\\n\\t\\ttop: 4px;\\n\\t\\tright: 21%;\\n\\t\\tposition: absolute;\\n\\t}\\n\\t.close-search.mobile {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0%;\\n\\t\\tright: 11px;\\n\\t\\twidth: 13%;\\n\\t\\theight: 81px;\\n\\t\\tfont-size: 46px;\\n\\t}\\n\\n\\t.results {\\n\\t\\tmax-height: 55vh;\\n\\t\\toverflow-y: scroll;\\n\\t\\tmax-width: 50vw;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t.details {\\n\\t\\tmax-width: 50vw;\\n\\t}\\n\\n\\t.verses {\\n\\t\\toverflow-y: scroll;\\n\\t\\tmax-height: 522px;\\n\\t\\tmargin-top: 6px;\\n\\t}\\n\\n\\t.word.selected {\\n\\t\\tdisplay: block;\\n\\t}\\n\\t.details {\\n\\t\\tbackground: #fff;\\n\\t\\tpadding: 30px;\\n\\t\\tmargin: 10px 0;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t.details .examples {\\n\\t\\tlist-style: none;\\n\\t\\tpadding: 10px;\\n\\t\\ttext-align: right;\\n\\t\\tdirection: rtl;\\n\\t}\\n\\n\\t.examples li {\\n\\t\\tline-height: 36px;\\n\\t}\\n\\n\\t.mobile.verses {\\n\\t\\tmax-height: 77vh;\\n\\t}\\n\\n\\t.mobile.details {\\n\\t\\tmax-width: 100vw;\\n\\t}\\n\\n\\t.mobile.results {\\n\\t\\tmax-width: 100vw;\\n\\t\\tmargin: 0 auto;\\n\\t\\tmax-height: 88vh;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4VC,oCAAO,CACN,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IACV,CA6BA,mCAAM,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CAEd,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAAC,MAAM,CACzB,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,KAAK,CAAC,MAAM,CAAC,OAAO,CAC5B,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MACb,CAEA,KAAK,uCAAU,CACd,UAAU,CAAE,OACb,CAEA,KAAK,mCAAM,CACV,UAAU,CAAE,OACb,CAEA,mCAAK,MAAO,CACX,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,KAAK,CAAC,MAAM,CAAC,OAAO,CAC5B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,OACT,CAEA,wCAAW,CACV,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,KAAK,CACd,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,GACR,CAEA,KAAK,qCAAQ,CACZ,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,IACd,CAEA,2CAAc,CACb,GAAG,CAAE,GAAG,CACR,KAAK,CAAE,GAAG,CACV,QAAQ,CAAE,QACX,CACA,aAAa,qCAAQ,CACpB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,EAAE,CACP,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IACZ,CAEA,sCAAS,CACR,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,sCAAS,CACR,SAAS,CAAE,IACZ,CAEA,qCAAQ,CACP,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,GACb,CAEA,KAAK,uCAAU,CACd,OAAO,CAAE,KACV,CACA,sCAAS,CACR,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,uBAAQ,CAAC,wBAAU,CAClB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,GACZ,CAEA,wBAAS,CAAC,iBAAG,CACZ,WAAW,CAAE,IACd,CAEA,OAAO,qCAAQ,CACd,UAAU,CAAE,IACb,CAEA,OAAO,sCAAS,CACf,SAAS,CAAE,KACZ,CAEA,OAAO,sCAAS,CACf,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,IACb"}`
};
function convertRomanToArabic(letters) {
  const hash = {
    a: ["ا", "أ", "ء", "ع"],
    "'a": ["ا", "أ", "ء", "ع"],
    b: "ب",
    t: ["ت", "ط"],
    th: ["ث", "ذ"],
    j: "ج",
    H: "ح",
    kh: "خ",
    d: ["د", "ض"],
    z: ["ذ", "ز", "ظ"],
    r: "ر",
    s: ["س", "ث", "ص"],
    sh: "ش",
    3: "ع",
    gh: "غ",
    g: ["غ", "ج"],
    f: "ف",
    q: "ق",
    k: "ك",
    l: "ل",
    m: "م",
    n: "ن",
    w: "و",
    v: "و",
    h: ["ه", "ح", "خ"],
    y: "ي",
    i: "ي"
  };
  let combos = { r1: [], r2: [], r3: [], r4: [] };
  let word = "";
  letters = letters.split("").filter((l) => l !== " ");
  for (let i = 0; i < letters.length; i++) {
    console.log(i, letters[i]);
    const l = letters[i];
    if (Array.isArray(hash[l])) {
      hash[l].forEach((item) => {
        combos["r" + (i + 1)].push(item);
      });
    } else {
      combos["r" + (i + 1)].push(hash[l]);
    }
  }
  console.log(combos);
  let car;
  if (combos["r4"].length > 0) {
    car = cartesian(combos["r1"], combos["r2"], combos["r3"], combos["r4"]);
  } else {
    car = cartesian(combos["r1"], combos["r2"], combos["r3"]);
  }
  let roots = [];
  car.forEach((item) => {
    word = "";
    item.forEach((r) => {
      word += r + " ";
    });
    roots.push(word.trim());
  });
  console.log(roots);
  return roots;
}
function cartesian() {
  var r = [], arg = arguments, max = arg.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = arg[i].length; j < l; j++) {
      var a = arr.slice(0);
      a.push(arg[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}
function debounceSearch(func, delay) {
  let debounceTimer;
  return function(...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(
      () => {
      },
      delay
    );
  };
}
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_translation;
  let $device, $$unsubscribe_device;
  $$unsubscribe_translation = subscribe(translation, (value) => value);
  $$unsubscribe_device = subscribe(device, (value) => $device = value);
  let { deliver } = $$props;
  let { searchInput = "" } = $$props;
  let searchElement = null;
  let error = "";
  let { words = [] } = $$props;
  let { autostart } = $$props;
  let { autoid } = $$props;
  let { verses = [] } = $$props;
  let selectedWord = {};
  async function findArabicWordsByRoot() {
    const root = convertRomanToArabic(searchInput);
    const res = await API.post("/qf/find_by_root.json", { type: "verb", root });
    console.log({ res });
    words = res;
    if (res.length === 0) error = "No Words for " + searchInput;
    verses = [];
  }
  let findingVerses = false;
  async function findVerse() {
    findingVerses = true;
    console.log({ searchInput });
    const res = await API.post("/revelations/search.json", { verses: searchInput });
    console.log({ res });
    verses = res;
    words = [];
    findingVerses = false;
  }
  function tryRootSearch(input) {
    const strippedInput = input.replace(/\s/g, "");
    if ((strippedInput.length === 3 || 4) && /^(?:[a-zA-Z]{3}|[\u0600-\u06FF]{3})$/.test(strippedInput)) {
      console.log("Input is 3 English or Arabic letters", strippedInput);
      debounceSearch(findArabicWordsByRoot(), 500);
    } else if (input.includes(":")) {
      debounceSearch(findVerse(), 500);
    } else {
      words = [];
      console.log("Input must be exactly 3 English or Arabic letters", strippedInput);
    }
  }
  if ($$props.deliver === void 0 && $$bindings.deliver && deliver !== void 0) $$bindings.deliver(deliver);
  if ($$props.searchInput === void 0 && $$bindings.searchInput && searchInput !== void 0) $$bindings.searchInput(searchInput);
  if ($$props.words === void 0 && $$bindings.words && words !== void 0) $$bindings.words(words);
  if ($$props.autostart === void 0 && $$bindings.autostart && autostart !== void 0) $$bindings.autostart(autostart);
  if ($$props.autoid === void 0 && $$bindings.autoid && autoid !== void 0) $$bindings.autoid(autoid);
  if ($$props.verses === void 0 && $$bindings.verses && verses !== void 0) $$bindings.verses(verses);
  $$result.css.add(css);
  {
    tryRootSearch(searchInput);
  }
  $$unsubscribe_translation();
  $$unsubscribe_device();
  return `<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" id="spotlight" class="${["spotlight svelte-17chtbo", $device === "mobile" ? "mobile" : ""].join(" ").trim()}" placeholder="Search ..."${add_attribute("value", searchInput, 0)}${add_attribute("this", searchElement, 0)}> <div class="${[
    "close-search btn btn-outline-danger svelte-17chtbo",
    $device === "mobile" ? "mobile" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-g68y7o"><i class="fa fa-times"></i></div> ${findingVerses ? `<div class="word svelte-17chtbo" data-svelte-h="svelte-tg3pjd">Loading Verses...</div>` : ``} ${verses.length > 0 ? ` <ul class="${["verses clean-list svelte-17chtbo", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${each(verses, (verse) => {
    return `${validate_component(Show, "Verse").$$render($$result, { verse }, {}, {})}`;
  })}</ul>` : ``} ${Object.keys(selectedWord).length > 0 ? `<div class="${["details svelte-17chtbo", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${``}</div>` : ``} ${words ? `<div class="${["results svelte-17chtbo", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${each(words["non_verbs"] || [], (word) => {
    return ` <div class="${[
      "word non_verb svelte-17chtbo",
      selectedWord.id === word.id && selectedWord.wordType === "nv" ? "selected" : ""
    ].join(" ").trim()}">${escape(word.nv_word)} <br>${escape(word.nv_translation)} </div>`;
  })} <br> ${each(words["verbs"] || [], (word) => {
    return ` <div class="${[
      "word verb svelte-17chtbo",
      selectedWord.id === word.id && selectedWord.wordType === "v" ? "selected" : ""
    ].join(" ").trim()}">${escape(word.v_word)} <br>${escape(word.v_translation)} </div>`;
  })}</div>` : ``} ${error.length > 0 ? `<div class="error svelte-17chtbo">${escape(error)}</div>` : ``}`;
});
export {
  Search as S,
  Verse as V
};
