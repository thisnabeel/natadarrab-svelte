import { c as create_ssr_component, e as each, d as escape } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/api.js";
import "sweetalert2";
const css = {
  code: ".combos.svelte-1654ii6.svelte-1654ii6{text-align:center;direction:rtl}.combos.svelte-1654ii6>li.svelte-1654ii6{display:inline-block;padding:10px;margin:10px;border:1px solid #ccc;border-radius:10px;font-size:28px}.example.svelte-1654ii6.svelte-1654ii6{font-size:34px;text-align:center;margin:1.5em 0}.masdar.svelte-1654ii6.svelte-1654ii6{background-color:#f3f3f3;border-radius:10px;margin-top:10px;font-size:26px;color:#874d9f}.wrong.svelte-1654ii6.svelte-1654ii6{background-color:#ff6a6a}.correct.svelte-1654ii6.svelte-1654ii6{background-color:#b4ff5f}.litForms.svelte-1654ii6.svelte-1654ii6,.litTag.svelte-1654ii6.svelte-1654ii6{background-color:#faff9c}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\t// @ts-nocheck\\n\\n\\timport API from '$lib/api/api';\\n\\timport { onMount } from 'svelte';\\n\\timport Swal from 'sweetalert2';\\n\\n\\tlet words = [];\\n\\tlet selected = [];\\n\\tlet fala_mode = false;\\n\\tlet tags = {\\n\\t\\tI: [],\\n\\t\\tII: ['Shaddah in the middle', 'Present begins with YU'],\\n\\t\\tIII: ['Present begins with YU'],\\n\\t\\tIV: ['Present begins with YU'],\\n\\t\\tV: ['Shaddah in the middle', 'Present begins with YA'],\\n\\t\\tVI: ['Present begins with YA'],\\n\\t\\tVII: ['Starts with IN', 'Starts with YAN', 'Present begins with YA'],\\n\\t\\tVIII: ['Present begins with YA'],\\n\\t\\tIX: ['Present begins with YA'],\\n\\t\\tX: ['Present begins with YA']\\n\\t};\\n\\tlet tagsToFind = [];\\n\\n\\t$: litForms = highlightTags(...tagsToFind);\\n\\n\\tfunction highlightTags(...tagsToFind) {\\n\\t\\tif (tagsToFind.length < 1) return [];\\n\\t\\tlet matchingKeys = [];\\n\\n\\t\\tfor (let key in tags) {\\n\\t\\t\\tif (tagsToFind.every((tag) => tags[key].includes(tag))) {\\n\\t\\t\\t\\tmatchingKeys.push(key);\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tconsole.log(matchingKeys);\\n\\t\\treturn matchingKeys;\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tgetExamples();\\n\\t});\\n\\n\\tasync function getExamples() {\\n\\t\\tconst examples = await API.get('/words/forms/sample.json');\\n\\t\\twords = examples;\\n\\t\\tselected = [];\\n\\t\\ttagsToFind = [];\\n\\t}\\n\\n\\tfunction selectAnswer(passing, index = -1) {\\n\\t\\tselected = [...selected, index];\\n\\n\\t\\tif (passing) {\\n\\t\\t\\tSwal.fire('Perfect!', 'You Passed This Quiz', 'success');\\n\\t\\t\\tgetExamples();\\n\\t\\t}\\n\\t}\\n\\n\\tfunction starter(html) {\\n\\t\\t// Create a temporary DOM element\\n\\t\\tconst temp = document.createElement('div');\\n\\t\\ttemp.innerHTML = html;\\n\\n\\t\\t// Find the span with class 'auu'\\n\\t\\tconst auuSpan = temp.querySelector('.auu');\\n\\n\\t\\tif (auuSpan) {\\n\\t\\t\\t// Get the text content of the span\\n\\t\\t\\tconst text = auuSpan.textContent;\\n\\n\\t\\t\\t// Extract the first three characters\\n\\t\\t\\tconst firstThree = text.slice(0, 2);\\n\\n\\t\\t\\treturn firstThree;\\n\\t\\t} else {\\n\\t\\t\\treturn null; // or return an appropriate value if the span is not found\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<h1>Sarf</h1>\\n\\n<div\\n\\tclass=\\"fa fa-refresh text-center\\"\\n\\tstyle=\\"font-size: 34px; display:block; color: #ccc\\"\\n\\ton:click={getExamples}\\n/>\\n{#each words as word}\\n\\t<div class=\\"examples\\">\\n\\t\\t{#each word.examples as example}\\n\\t\\t\\t<div class=\\"example\\">\\n\\t\\t\\t\\t<div class=\\"ayah_html\\">\\n\\t\\t\\t\\t\\t{@html example.ayah_html}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n\\t<div class=\\"parts\\">\\n\\t\\t<!-- <div class=\\"btn btn-outline-warning\\">Starter: {starter(word.examples[0].ayah_html)}</div> -->\\n\\t\\t<div class=\\"part-2\\">\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t{#each [...new Set(Object.values(tags).flat())] as tag}\\n\\t\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\t\\tclass:litTag={tagsToFind.includes(tag)}\\n\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\tconst tagSet = new Set(tagsToFind);\\n\\n\\t\\t\\t\\t\\t\\t\\tif (tagSet.has(tag)) {\\n\\t\\t\\t\\t\\t\\t\\t\\ttagSet.delete(tag);\\n\\t\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\t\\ttagSet.add(tag);\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\t\\ttagsToFind = Array.from(tagSet);\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{tag}\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t\\t<div class=\\"part-1\\">\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<i\\n\\t\\t\\t\\tclass=\\"fa\\"\\n\\t\\t\\t\\tclass:fa-toggle-on={!fala_mode}\\n\\t\\t\\t\\tclass:fa-toggle-off={fala_mode}\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tfala_mode = !fala_mode;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t/>\\n\\t\\t\\t<div class=\\"combos clean-list\\">\\n\\t\\t\\t\\t{#each word.forms_past_present as form, index}\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\t\\tclass:litForms={litForms.includes(form.form)}\\n\\t\\t\\t\\t\\t\\tclass:wrong={selected.includes(index)}\\n\\t\\t\\t\\t\\t\\tclass:correct={form.form === word.form && selected.includes(index)}\\n\\t\\t\\t\\t\\t\\ton:click={() => selectAnswer(form.form === word.form, index)}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{#if !fala_mode}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"past_present\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{form.products[0][0]} / {form.products[1][0]}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"masdar\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{form.products[2][0]}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"past_present\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{form.products[0][1]} / {form.products[1][1]}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"masdar\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{form.products[2][1]}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n{/each}\\n\\n<style>\\n\\t.combos {\\n\\t\\ttext-align: center;\\n\\t\\tdirection: rtl;\\n\\t}\\n\\t.combos > li {\\n\\t\\tdisplay: inline-block;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin: 10px;\\n\\t\\tborder: 1px solid #ccc;\\n\\t\\tborder-radius: 10px;\\n\\t\\tfont-size: 28px;\\n\\t}\\n\\n\\t.example {\\n\\t\\tfont-size: 34px;\\n\\t\\t/* line-height: 24px; */\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 1.5em 0;\\n\\t}\\n\\n\\t.masdar {\\n\\t\\tbackground-color: #f3f3f3;\\n\\t\\tborder-radius: 10px;\\n\\t\\tmargin-top: 10px;\\n\\t\\tfont-size: 26px;\\n\\t\\tcolor: #874d9f;\\n\\t}\\n\\n\\t.wrong {\\n\\t\\tbackground-color: #ff6a6a;\\n\\t}\\n\\n\\t.correct {\\n\\t\\tbackground-color: #b4ff5f;\\n\\t}\\n\\n\\t.litForms,\\n\\t.litTag {\\n\\t\\tbackground-color: #faff9c;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqKC,qCAAQ,CACP,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,GACZ,CACA,sBAAO,CAAG,iBAAG,CACZ,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IACZ,CAEA,sCAAS,CACR,SAAS,CAAE,IAAI,CAEf,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,KAAK,CAAC,CACf,CAEA,qCAAQ,CACP,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OACR,CAEA,oCAAO,CACN,gBAAgB,CAAE,OACnB,CAEA,sCAAS,CACR,gBAAgB,CAAE,OACnB,CAEA,uCAAS,CACT,qCAAQ,CACP,gBAAgB,CAAE,OACnB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let litForms;
  let words = [];
  let selected = [];
  let tags = {
    I: [],
    II: ["Shaddah in the middle", "Present begins with YU"],
    III: ["Present begins with YU"],
    IV: ["Present begins with YU"],
    V: ["Shaddah in the middle", "Present begins with YA"],
    VI: ["Present begins with YA"],
    VII: ["Starts with IN", "Starts with YAN", "Present begins with YA"],
    VIII: ["Present begins with YA"],
    IX: ["Present begins with YA"],
    X: ["Present begins with YA"]
  };
  let tagsToFind = [];
  function highlightTags(...tagsToFind2) {
    if (tagsToFind2.length < 1) return [];
    let matchingKeys = [];
    for (let key in tags) {
      if (tagsToFind2.every((tag) => tags[key].includes(tag))) {
        matchingKeys.push(key);
      }
    }
    console.log(matchingKeys);
    return matchingKeys;
  }
  $$result.css.add(css);
  litForms = highlightTags(...tagsToFind);
  return `<h1 data-svelte-h="svelte-1hteq9w">Sarf</h1> <div class="fa fa-refresh text-center" style="font-size: 34px; display:block; color: #ccc"></div> ${each(words, (word) => {
    return `<div class="examples">${each(word.examples, (example) => {
      return `<div class="example svelte-1654ii6"><div class="ayah_html"><!-- HTML_TAG_START -->${example.ayah_html}<!-- HTML_TAG_END --></div> </div>`;
    })}</div> <div class="parts"> <div class="part-2"><ul>${each([...new Set(Object.values(tags).flat())], (tag) => {
      return `<li class="${["svelte-1654ii6", tagsToFind.includes(tag) ? "litTag" : ""].join(" ").trim()}">${escape(tag)} </li>`;
    })} </ul></div> <div class="part-1"> <i class="${[
      "fa",
      "fa-toggle-on "
    ].join(" ").trim()}"></i> <div class="combos clean-list svelte-1654ii6">${each(word.forms_past_present, (form, index) => {
      return ` <li class="${[
        "svelte-1654ii6",
        (litForms.includes(form.form) ? "litForms" : "") + " " + (selected.includes(index) ? "wrong" : "") + " " + (form.form === word.form && selected.includes(index) ? "correct" : "")
      ].join(" ").trim()}">${`<div class="past_present">${escape(form.products[0][0])} / ${escape(form.products[1][0])}</div> <div class="masdar svelte-1654ii6">${escape(form.products[2][0])} </div>`} </li>`;
    })} </div></div> </div>`;
  })}`;
});
export {
  Page as default
};
