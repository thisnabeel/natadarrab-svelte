import { c as create_ssr_component, d as escape, e as each, j as null_to_empty } from "../../../../../../chunks/ssr.js";
const css = {
  code: ".rtl.svelte-1ob9mkf.svelte-1ob9mkf{direction:rtl}.sticker.svelte-1ob9mkf.svelte-1ob9mkf{font-size:34px;display:inline-block;padding:10px;background:#eee;border-radius:100%;width:74px;height:74px;text-align:center;margin:6px}.sticker.svelte-1ob9mkf.svelte-1ob9mkf:hover{background-color:yellow}.stickers.svelte-1ob9mkf.svelte-1ob9mkf{width:max-content;margin:0 auto;text-align:center}.flex.svelte-1ob9mkf.svelte-1ob9mkf{display:flex}.flex.svelte-1ob9mkf ul.svelte-1ob9mkf{flex:1 1 33%}.built.svelte-1ob9mkf.svelte-1ob9mkf{text-align:center}.chosen.svelte-1ob9mkf.svelte-1ob9mkf{padding:12px;font-size:38px}.inputted.svelte-1ob9mkf.svelte-1ob9mkf{display:block;margin:0 auto;width:max-content;position:relative}.inputted.svelte-1ob9mkf .clear.svelte-1ob9mkf{position:absolute;right:-80px;bottom:0;color:#ffdcdc;font-size:34px;border:1px solid #eee;padding:20px;border-radius:10px}.chosen.svelte-1ob9mkf>h1.svelte-1ob9mkf{background:#f2ffda;display:block;width:max-content;margin:0 auto;padding:20px;border-radius:20px}.inputted.svelte-1ob9mkf h1.svelte-1ob9mkf{font-size:76px;color:#4c77ff}.popup.svelte-1ob9mkf.svelte-1ob9mkf{position:absolute;bottom:-166px;width:-moz-max-conten;width:180px;left:-70%;padding:10px}.popup.svelte-1ob9mkf button.svelte-1ob9mkf{margin:2px;font-size:32px;width:52px;padding:10px;z-index:9999}.sticker.svelte-1ob9mkf.svelte-1ob9mkf{position:relative}.suffix.svelte-1ob9mkf.svelte-1ob9mkf,.prefix.svelte-1ob9mkf.svelte-1ob9mkf{color:#a24c09}.page-title.svelte-1ob9mkf.svelte-1ob9mkf{font-size:34px}.chosenSuffix.svelte-1ob9mkf.svelte-1ob9mkf,.chosenPrefix.svelte-1ob9mkf.svelte-1ob9mkf{background:#a24c09;color:#fff}.root-letter.svelte-1ob9mkf.svelte-1ob9mkf{font-size:34px;display:inline-block;padding:10px;background:#eee;border-radius:100%;width:74px;height:74px;text-align:center;margin:6px;top:-16px;left:16px;position:relative}.root-letter.svelte-1ob9mkf.svelte-1ob9mkf:hover{background-color:yellow}.chosenSuffix.svelte-1ob9mkf.svelte-1ob9mkf:hover{background-color:orange}.rendered.svelte-1ob9mkf.svelte-1ob9mkf{background:#eee;display:inline-block;padding:10px;margin:20px;border-radius:10px;font-size:34px;font-weight:bolder;color:#a34c09}.rendered.svelte-1ob9mkf .pronoun.svelte-1ob9mkf{position:relative}.rendered.svelte-1ob9mkf .gender.svelte-1ob9mkf{position:absolute;bottom:-26px;left:15%;font-size:18px;padding:2px 10px;background:#ffffa9;border-radius:3px;border:0.4px solid #ccc}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\tlet chosenVerb = {\\n\\t\\tv_form: 'I',\\n\\t\\tv_root: 'λέω'\\n\\t};\\n\\tlet words = [];\\n\\tlet stickers = {\\n\\t\\tprefixes: ['θα', 'να'],\\n\\t\\tsuffixes: ['ω', 'εις', 'ει', 'ουμε', 'ετε', 'ουν'],\\n\\t\\tstretches: ['ι', 'υ', 'α'],\\n\\t\\tsmoothie: ['ι', 'υ', 'α']\\n\\t};\\n\\tlet searchInput = '';\\n\\tlet chosenLetters = [];\\n\\n\\tlet amness = [\\n\\t\\t{ list: ['You', 'You All', 'They All', 'They', 'You Both', 'We'], amness: 'are' },\\n\\t\\t{ list: ['I'], amness: 'am' },\\n\\t\\t{ list: ['She', 'He'], amness: 'is' }\\n\\t];\\n\\n\\tlet combos = [\\n\\t\\t// past tense (Aorist)\\n\\t\\t{ pronoun: 'You', slug: 'past', tense: 'past', gender: 'm/f', suffix: ['ες'], prefix: [] },\\n\\t\\t{\\n\\t\\t\\tpronoun: 'You both',\\n\\t\\t\\tslug: 'past',\\n\\t\\t\\ttense: 'past',\\n\\t\\t\\tgender: 'm/f',\\n\\t\\t\\tsuffix: ['ετε'],\\n\\t\\t\\tprefix: []\\n\\t\\t},\\n\\t\\t{ pronoun: 'You All', slug: 'past', tense: 'past', gender: 'm/f', suffix: ['ετε'], prefix: [] },\\n\\t\\t{ pronoun: 'I', slug: 'past', tense: 'past', gender: 'm/f', suffix: ['α'], prefix: [] },\\n\\t\\t{ pronoun: 'We', slug: 'past', tense: 'past', gender: 'm/f', suffix: ['αμε'], prefix: [] },\\n\\t\\t{ pronoun: 'He', slug: 'past', tense: 'past', gender: 'm', suffix: ['ε'], prefix: [] },\\n\\t\\t{ pronoun: 'She', slug: 'past', tense: 'past', gender: 'f', suffix: ['ε'], prefix: [] },\\n\\t\\t{ pronoun: 'They', slug: 'past', tense: 'past', gender: 'm/f', suffix: ['αν'], prefix: [] },\\n\\n\\t\\t// present tense\\n\\t\\t{ pronoun: 'You', slug: 'present', tense: 'present', gender: 'm', suffix: ['εις'], prefix: [] },\\n\\t\\t{\\n\\t\\t\\tpronoun: 'You both',\\n\\t\\t\\tslug: 'present',\\n\\t\\t\\ttense: 'present',\\n\\t\\t\\tgender: 'm/f',\\n\\t\\t\\tsuffix: ['ετε'],\\n\\t\\t\\tprefix: []\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tpronoun: 'You All',\\n\\t\\t\\tslug: 'present',\\n\\t\\t\\ttense: 'present',\\n\\t\\t\\tgender: 'm',\\n\\t\\t\\tsuffix: ['ετε'],\\n\\t\\t\\tprefix: []\\n\\t\\t},\\n\\t\\t{ pronoun: 'I', slug: 'present', tense: 'present', gender: 'm/f', suffix: ['ω'], prefix: [] },\\n\\t\\t{\\n\\t\\t\\tpronoun: 'We',\\n\\t\\t\\tslug: 'present',\\n\\t\\t\\ttense: 'present',\\n\\t\\t\\tgender: 'm/f',\\n\\t\\t\\tsuffix: ['ουμε'],\\n\\t\\t\\tprefix: []\\n\\t\\t},\\n\\t\\t{ pronoun: 'He', slug: 'present', tense: 'present', gender: 'm', suffix: ['ει'], prefix: [] },\\n\\t\\t{ pronoun: 'She', slug: 'present', tense: 'present', gender: 'f', suffix: ['ει'], prefix: [] },\\n\\t\\t{\\n\\t\\t\\tpronoun: 'They',\\n\\t\\t\\tslug: 'present',\\n\\t\\t\\ttense: 'present',\\n\\t\\t\\tgender: 'm/f',\\n\\t\\t\\tsuffix: ['ουν'],\\n\\t\\t\\tprefix: []\\n\\t\\t}\\n\\t];\\n\\n\\tfunction removeHaraka(letter) {\\n\\t\\treturn letter.replace(/[\\\\u0300-\\\\u036F]/g, ''); // Greek diacritics range\\n\\t}\\n\\n\\tfunction findBestCombo(chosenLetters) {\\n\\t\\tlet chosenSuffixes = chosenLetters\\n\\t\\t\\t.filter((letter) => letter.category === 'suffix')\\n\\t\\t\\t.map((letter) => letter.content);\\n\\t\\tlet chosenPrefixes = chosenLetters\\n\\t\\t\\t.filter((letter) => letter.category === 'prefix')\\n\\t\\t\\t.map((letter) => removeHaraka(letter.content));\\n\\n\\t\\tfor (let combo of combos) {\\n\\t\\t\\tlet comboSuffixes = combo.suffix;\\n\\t\\t\\tlet comboPrefixes = combo.prefix.map(removeHaraka);\\n\\n\\t\\t\\tlet suffixMatch =\\n\\t\\t\\t\\tcomboSuffixes.every((suffix) => chosenSuffixes.includes(suffix)) &&\\n\\t\\t\\t\\tchosenSuffixes.every((suffix) => comboSuffixes.includes(suffix));\\n\\t\\t\\tlet prefixMatch =\\n\\t\\t\\t\\tcomboPrefixes.every((prefix) => chosenPrefixes.includes(prefix)) &&\\n\\t\\t\\t\\tchosenPrefixes.every((prefix) => comboPrefixes.includes(prefix));\\n\\n\\t\\t\\tif (suffixMatch && prefixMatch) {\\n\\t\\t\\t\\treturn combo;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\treturn null; // If no matching combo is found\\n\\t}\\n\\n\\tlet bestCombo = null;\\n\\n\\t$: bestCombo = findBestCombo(chosenLetters);\\n\\n\\tfunction handleDelivery(payload) {\\n\\t\\tconsole.log(payload);\\n\\t\\tchosenVerb = payload.word;\\n\\t\\tsearchInput = '';\\n\\t\\twords = [];\\n\\t}\\n\\n\\tlet popup = {\\n\\t\\tvisible: false,\\n\\t\\troot: null,\\n\\t\\tprefix: null\\n\\t};\\n\\n\\tfunction showPopupRoot(root) {\\n\\t\\tpopup = { visible: true, root };\\n\\t}\\n\\n\\tfunction showPopupPrefix(prefix) {\\n\\t\\tpopup = { visible: true, prefix };\\n\\t}\\n\\n\\tfunction hidePopup() {\\n\\t\\tpopup = { visible: false, root: null, prefix: null };\\n\\t}\\n\\n\\tfunction appendHaraka(haraka) {\\n\\t\\tchosenLetters = [...chosenLetters, haraka];\\n\\t\\thidePopup();\\n\\t}\\n\\n\\t$: console.log(chosenLetters);\\n<\/script>\\n\\n<h1 class=\\"page-title\\">Sarf Lab:</h1>\\n\\n{#if chosenVerb}\\n\\t<div class=\\"built\\">\\n\\t\\t<div class=\\"chosen\\">\\n\\t\\t\\t<h1>\\n\\t\\t\\t\\t<p>Form {chosenVerb.v_form}</p>\\n\\t\\t\\t</h1>\\n\\t\\t</div>\\n\\n\\t\\t{#if chosenLetters && chosenLetters.length > 0}\\n\\t\\t\\t<div class=\\"inputted\\">\\n\\t\\t\\t\\t<h1>\\n\\t\\t\\t\\t\\t{#each chosenLetters as letter}\\n\\t\\t\\t\\t\\t\\t<span class={letter.category}>{letter.content}</span>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<div class=\\"fa fa-times clear\\" on:click={() => (chosenLetters = [])} />\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if bestCombo && bestCombo.pronoun}\\n\\t\\t\\t\\t<div class=\\"rendered\\">\\n\\t\\t\\t\\t\\t<span class=\\"pronoun\\">\\n\\t\\t\\t\\t\\t\\t{bestCombo.pronoun}\\n\\t\\t\\t\\t\\t\\t<span class=\\"gender\\">{bestCombo.gender}</span>\\n\\t\\t\\t\\t\\t</span>\\n\\n\\t\\t\\t\\t\\t{#if bestCombo.slug === 'infinitive'}\\n\\t\\t\\t\\t\\t\\t{amness.find((a) => a.list.includes(bestCombo.pronoun)).amness}\\n\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t{chosenVerb[bestCombo.slug + '_english_base']}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t{/if}\\n\\t</div>\\n\\t<hr />\\n\\t<br />\\n\\t<div class=\\"flex\\">\\n\\t\\t<hr />\\n\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t<ul class=\\"stickers suffixes\\">\\n\\t\\t\\t<h1>Suffixes:</h1>\\n\\t\\t\\t{#each stickers.suffixes as suffix}\\n\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\tclass=\\"sticker\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tif (chosenLetters.find((c) => c.content === suffix && c.category === 'suffix')) {\\n\\t\\t\\t\\t\\t\\t\\tchosenLetters = chosenLetters.filter(\\n\\t\\t\\t\\t\\t\\t\\t\\t(c) => c.content !== suffix && c.category !== 'suffix'\\n\\t\\t\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t\\t\\t\\treturn;\\n\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\tchosenLetters = chosenLetters.filter((c) => c.category !== 'suffix');\\n\\t\\t\\t\\t\\t\\t\\tchosenLetters = [\\n\\t\\t\\t\\t\\t\\t\\t\\t...chosenLetters,\\n\\t\\t\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcontent: suffix,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcategory: 'suffix'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t];\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\tclass:chosenSuffix={chosenLetters.find(\\n\\t\\t\\t\\t\\t\\t(c) => c.content === suffix && c.category === 'suffix'\\n\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{suffix}\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\n\\t\\t<ul class=\\"stickers roots rtl\\">\\n\\t\\t\\t<h1 style=\\"direction: ltr\\">\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<span style=\\"color: blue;\\"> Letters: </span>\\n\\t\\t\\t</h1>\\n\\t\\t\\t{#each chosenVerb.v_root.split('') as root}\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\tclass=\\"sticker\\"\\n\\t\\t\\t\\t\\ton:mouseenter={() => showPopupRoot(root)}\\n\\t\\t\\t\\t\\ton:mouseleave={() => hidePopup()}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\t\\tclass=\\"root-letter\\"\\n\\t\\t\\t\\t\\t\\ton:click={(e) => {\\n\\t\\t\\t\\t\\t\\t\\tchosenLetters = [\\n\\t\\t\\t\\t\\t\\t\\t\\t...chosenLetters,\\n\\t\\t\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcontent: root,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tcategory: 'root'\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t];\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{root}\\n\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t\\t{#if ['ي', 'و', 'ا'].some((char) => chosenVerb.v_root.split(' ').includes(char))}\\n\\t\\t\\t\\t<br /><br />\\n\\t\\t\\t\\t<hr />\\n\\t\\t\\t\\t<br /><br />\\n\\t\\t\\t\\t<h1>Blending Helpers</h1>\\n\\t\\t\\t\\t<ul class=\\"stickers suffixes\\">\\n\\t\\t\\t\\t\\t{#each stickers.smoothie as blender}\\n\\t\\t\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"sticker\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tif (chosenLetters.find((c) => c.content === blender && c.category === 'blender')) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters = chosenLetters.filter(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t(c) => c.content !== blender && c.category !== 'blender'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\treturn;\\n\\t\\t\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters = chosenLetters.filter((c) => c.category !== 'blender');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters = [\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...chosenLetters,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcontent: blender,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcategory: 'blender'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t];\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{blender}\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t{/if}\\n\\t\\t</ul>\\n\\n\\t\\t<ul class=\\"stickers prefixes\\">\\n\\t\\t\\t<h1>Prefixes:</h1>\\n\\t\\t\\t{#each stickers.prefixes as prefix}\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\tclass=\\"sticker\\"\\n\\t\\t\\t\\t\\ton:mouseenter={() => showPopupPrefix(prefix)}\\n\\t\\t\\t\\t\\ton:mouseleave={() => hidePopup()}\\n\\t\\t\\t\\t\\tclass:chosenPrefix={chosenLetters.find(\\n\\t\\t\\t\\t\\t\\t(c) => c.content.includes(prefix) && c.category === 'prefix'\\n\\t\\t\\t\\t\\t)}\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tif (chosenLetters.find((c) => c.content.includes(prefix) && c.category === 'prefix')) {\\n\\t\\t\\t\\t\\t\\t\\t// console.log(chosenLetters);\\n\\t\\t\\t\\t\\t\\t\\t// chosenLetters = chosenLetters.filter((c) => c.category !== 'prefix');\\n\\t\\t\\t\\t\\t\\t\\t// return;\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{prefix}\\n\\t\\t\\t\\t\\t{#if popup.visible && popup.prefix === prefix}\\n\\t\\t\\t\\t\\t\\t<div class=\\"popup\\">\\n\\t\\t\\t\\t\\t\\t\\t{#each stickers.harakaat as haraka}\\n\\t\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"btn btn-outline-info\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters.find((c) => c.content === prefix && c.category === 'prefix')\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters = chosenLetters.filter(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t(c) => c.content !== prefix && c.category !== 'prefix'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\treturn;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters = chosenLetters.filter((c) => c.category !== 'prefix');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tchosenLetters = [\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcontent: prefix + haraka,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcategory: 'prefix'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t...chosenLetters\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}>{haraka}</button\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t\\t<hr />\\n\\t</div>\\n\\n\\t<hr />\\n{/if}\\n\\n<style>\\n\\t.rtl {\\n\\t\\tdirection: rtl;\\n\\t}\\n\\t.sticker {\\n\\t\\tfont-size: 34px;\\n\\t\\tdisplay: inline-block;\\n\\t\\tpadding: 10px;\\n\\t\\tbackground: #eee;\\n\\t\\tborder-radius: 100%;\\n\\t\\twidth: 74px;\\n\\t\\theight: 74px;\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 6px;\\n\\t}\\n\\n\\t.sticker:hover {\\n\\t\\tbackground-color: yellow;\\n\\t}\\n\\n\\t.stickers {\\n\\t\\twidth: max-content;\\n\\t\\tmargin: 0 auto;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.flex {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.flex ul {\\n\\t\\tflex: 1 1 33%;\\n\\t}\\n\\n\\t.built {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.chosen {\\n\\t\\tpadding: 12px;\\n\\t\\tfont-size: 38px;\\n\\t}\\n\\n\\t.inputted {\\n\\t\\tdisplay: block;\\n\\t\\tmargin: 0 auto;\\n\\t\\twidth: max-content;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.inputted .clear {\\n\\t\\t/* position: absolute;\\n\\t\\tright: -40px;\\n\\t\\tcolor: #eee;\\n\\t\\ttop: 20px; */\\n\\n\\t\\tposition: absolute;\\n\\t\\tright: -80px;\\n\\t\\tbottom: 0;\\n\\t\\tcolor: #ffdcdc;\\n\\t\\tfont-size: 34px;\\n\\t\\tborder: 1px solid #eee;\\n\\t\\tpadding: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\t.chosen > h1 {\\n\\t\\tbackground: #f2ffda;\\n\\t\\tdisplay: block;\\n\\t\\twidth: max-content;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 20px;\\n\\t\\tborder-radius: 20px;\\n\\t}\\n\\n\\t.inputted h1 {\\n\\t\\tfont-size: 76px;\\n\\t\\tcolor: #4c77ff;\\n\\t}\\n\\n\\t.popup {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: -166px;\\n\\t\\twidth: -moz-max-conten;\\n\\t\\twidth: 180px;\\n\\t\\t/* right: 0; */\\n\\t\\tleft: -70%;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\n\\t.popup button {\\n\\t\\tmargin: 2px;\\n\\t\\tfont-size: 32px;\\n\\t\\twidth: 52px;\\n\\t\\tpadding: 10px;\\n\\t\\t/* background-color: #fff; */\\n\\t\\tz-index: 9999;\\n\\t}\\n\\n\\t.sticker {\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.suffix,\\n\\t.prefix {\\n\\t\\tcolor: #a24c09;\\n\\t}\\n\\n\\t.page-title {\\n\\t\\tfont-size: 34px;\\n\\t}\\n\\n\\t.chosenSuffix,\\n\\t.chosenPrefix {\\n\\t\\tbackground: #a24c09;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.root-letter {\\n\\t\\tfont-size: 34px;\\n\\t\\tdisplay: inline-block;\\n\\t\\tpadding: 10px;\\n\\t\\tbackground: #eee;\\n\\t\\tborder-radius: 100%;\\n\\t\\twidth: 74px;\\n\\t\\theight: 74px;\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 6px;\\n\\t\\ttop: -16px;\\n\\t\\tleft: 16px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.root-letter:hover {\\n\\t\\tbackground-color: yellow;\\n\\t}\\n\\n\\t.chosenSuffix:hover {\\n\\t\\tbackground-color: orange;\\n\\t}\\n\\n\\t.rendered {\\n\\t\\tbackground: #eee;\\n\\t\\tdisplay: inline-block;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin: 20px;\\n\\t\\tborder-radius: 10px;\\n\\t\\tfont-size: 34px;\\n\\t\\tfont-weight: bolder;\\n\\t\\tcolor: #a34c09;\\n\\t}\\n\\n\\t.rendered .pronoun {\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.rendered .gender {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: -26px;\\n\\t\\tleft: 15%;\\n\\t\\tfont-size: 18px;\\n\\t\\tpadding: 2px 10px;\\n\\t\\tbackground: #ffffa9;\\n\\t\\tborder-radius: 3px;\\n\\t\\tborder: 0.4px solid #ccc;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
function removeHaraka(letter) {
  return letter.replace(/[\u0300-\u036F]/g, "");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chosenVerb = { v_form: "I", v_root: "λέω" };
  let stickers = {
    prefixes: ["θα", "να"],
    suffixes: ["ω", "εις", "ει", "ουμε", "ετε", "ουν"],
    smoothie: ["ι", "υ", "α"]
  };
  let chosenLetters = [];
  let amness = [
    {
      list: ["You", "You All", "They All", "They", "You Both", "We"],
      amness: "are"
    },
    { list: ["I"], amness: "am" },
    { list: ["She", "He"], amness: "is" }
  ];
  let combos = [
    // past tense (Aorist)
    {
      pronoun: "You",
      slug: "past",
      tense: "past",
      gender: "m/f",
      suffix: ["ες"],
      prefix: []
    },
    {
      pronoun: "You both",
      slug: "past",
      tense: "past",
      gender: "m/f",
      suffix: ["ετε"],
      prefix: []
    },
    {
      pronoun: "You All",
      slug: "past",
      tense: "past",
      gender: "m/f",
      suffix: ["ετε"],
      prefix: []
    },
    {
      pronoun: "I",
      slug: "past",
      tense: "past",
      gender: "m/f",
      suffix: ["α"],
      prefix: []
    },
    {
      pronoun: "We",
      slug: "past",
      tense: "past",
      gender: "m/f",
      suffix: ["αμε"],
      prefix: []
    },
    {
      pronoun: "He",
      slug: "past",
      tense: "past",
      gender: "m",
      suffix: ["ε"],
      prefix: []
    },
    {
      pronoun: "She",
      slug: "past",
      tense: "past",
      gender: "f",
      suffix: ["ε"],
      prefix: []
    },
    {
      pronoun: "They",
      slug: "past",
      tense: "past",
      gender: "m/f",
      suffix: ["αν"],
      prefix: []
    },
    // present tense
    {
      pronoun: "You",
      slug: "present",
      tense: "present",
      gender: "m",
      suffix: ["εις"],
      prefix: []
    },
    {
      pronoun: "You both",
      slug: "present",
      tense: "present",
      gender: "m/f",
      suffix: ["ετε"],
      prefix: []
    },
    {
      pronoun: "You All",
      slug: "present",
      tense: "present",
      gender: "m",
      suffix: ["ετε"],
      prefix: []
    },
    {
      pronoun: "I",
      slug: "present",
      tense: "present",
      gender: "m/f",
      suffix: ["ω"],
      prefix: []
    },
    {
      pronoun: "We",
      slug: "present",
      tense: "present",
      gender: "m/f",
      suffix: ["ουμε"],
      prefix: []
    },
    {
      pronoun: "He",
      slug: "present",
      tense: "present",
      gender: "m",
      suffix: ["ει"],
      prefix: []
    },
    {
      pronoun: "She",
      slug: "present",
      tense: "present",
      gender: "f",
      suffix: ["ει"],
      prefix: []
    },
    {
      pronoun: "They",
      slug: "present",
      tense: "present",
      gender: "m/f",
      suffix: ["ουν"],
      prefix: []
    }
  ];
  function findBestCombo(chosenLetters2) {
    let chosenSuffixes = chosenLetters2.filter((letter) => letter.category === "suffix").map((letter) => letter.content);
    let chosenPrefixes = chosenLetters2.filter((letter) => letter.category === "prefix").map((letter) => removeHaraka(letter.content));
    for (let combo of combos) {
      let comboSuffixes = combo.suffix;
      let comboPrefixes = combo.prefix.map(removeHaraka);
      let suffixMatch = comboSuffixes.every((suffix) => chosenSuffixes.includes(suffix)) && chosenSuffixes.every((suffix) => comboSuffixes.includes(suffix));
      let prefixMatch = comboPrefixes.every((prefix) => chosenPrefixes.includes(prefix)) && chosenPrefixes.every((prefix) => comboPrefixes.includes(prefix));
      if (suffixMatch && prefixMatch) {
        return combo;
      }
    }
    return null;
  }
  let bestCombo = null;
  $$result.css.add(css);
  bestCombo = findBestCombo(chosenLetters);
  {
    console.log(chosenLetters);
  }
  return `<h1 class="page-title svelte-1ob9mkf" data-svelte-h="svelte-1anl4c">Sarf Lab:</h1> ${chosenVerb ? `<div class="built svelte-1ob9mkf"><div class="chosen svelte-1ob9mkf"><h1 class="svelte-1ob9mkf"><p>Form ${escape(chosenVerb.v_form)}</p></h1></div> ${chosenLetters && chosenLetters.length > 0 ? `<div class="inputted svelte-1ob9mkf"><h1 class="svelte-1ob9mkf">${each(chosenLetters, (letter) => {
    return `<span class="${escape(null_to_empty(letter.category), true) + " svelte-1ob9mkf"}">${escape(letter.content)}</span>`;
  })}</h1>  <div class="fa fa-times clear svelte-1ob9mkf"></div></div> ${bestCombo && bestCombo.pronoun ? `<div class="rendered svelte-1ob9mkf"><span class="pronoun svelte-1ob9mkf">${escape(bestCombo.pronoun)} <span class="gender svelte-1ob9mkf">${escape(bestCombo.gender)}</span></span> ${bestCombo.slug === "infinitive" ? `${escape(amness.find((a) => a.list.includes(bestCombo.pronoun)).amness)}` : ``} ${escape(chosenVerb[bestCombo.slug + "_english_base"])}</div>` : ``}` : ``}</div> <hr> <br> <div class="flex svelte-1ob9mkf"><hr>  <ul class="stickers suffixes svelte-1ob9mkf"><h1 data-svelte-h="svelte-e3mqsx">Suffixes:</h1> ${each(stickers.suffixes, (suffix) => {
    return `<li class="${[
      "sticker svelte-1ob9mkf",
      chosenLetters.find((c) => c.content === suffix && c.category === "suffix") ? "chosenSuffix" : ""
    ].join(" ").trim()}">${escape(suffix)} </li>`;
  })}</ul> <ul class="stickers roots rtl svelte-1ob9mkf"><h1 style="direction: ltr" data-svelte-h="svelte-13zpqwh"> <span style="color: blue;">Letters:</span></h1> ${each(chosenVerb.v_root.split(""), (root) => {
    return ` <li class="sticker svelte-1ob9mkf"><span class="root-letter svelte-1ob9mkf">${escape(root)}</span> </li>`;
  })} ${["ي", "و", "ا"].some((char) => chosenVerb.v_root.split(" ").includes(char)) ? `<br><br> <hr> <br><br> <h1 data-svelte-h="svelte-1mniffs">Blending Helpers</h1> <ul class="stickers suffixes svelte-1ob9mkf">${each(stickers.smoothie, (blender) => {
    return `<li class="sticker svelte-1ob9mkf">${escape(blender)} </li>`;
  })}</ul>` : ``}</ul> <ul class="stickers prefixes svelte-1ob9mkf"><h1 data-svelte-h="svelte-1gzkmkw">Prefixes:</h1> ${each(stickers.prefixes, (prefix) => {
    return ` <li class="${[
      "sticker svelte-1ob9mkf",
      chosenLetters.find((c) => c.content.includes(prefix) && c.category === "prefix") ? "chosenPrefix" : ""
    ].join(" ").trim()}">${escape(prefix)} ${``} </li>`;
  })}</ul> <hr></div> <hr>` : ``}`;
});
export {
  Page as default
};
