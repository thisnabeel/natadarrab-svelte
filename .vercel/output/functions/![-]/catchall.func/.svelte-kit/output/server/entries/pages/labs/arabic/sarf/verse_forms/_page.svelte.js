import { c as create_ssr_component, a as subscribe, f as add_attribute, e as each, d as escape } from "../../../../../../chunks/ssr.js";
import "../../../../../../chunks/api.js";
import { m as members, c as currentRoomCode, r as roomOpen } from "../../../../../../chunks/interaction_rooms.js";
function uuid(array = null) {
  const min = 100;
  const max = 999;
  if (array) {
    let randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
    while (array.map((b) => b.id).includes(randomCode)) {
      randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomCode;
  } else {
    const cryptoObj = window.crypto || window.msCrypto;
    if (!cryptoObj) {
      console.log(
        "Cryptographically secure random number generation is not supported in this browser."
      );
      return null;
    }
    const array2 = new Uint8Array(8);
    cryptoObj.getRandomValues(array2);
    let uuid2 = "";
    for (let i = 0; i < array2.length; i++) {
      uuid2 += array2[i].toString(16).padStart(2, "0");
    }
    return uuid2;
  }
}
const css = {
  code: ".banner.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{font-size:44px;padding:1em;margin:1em 0}.banner.correct.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{background:#adff2f}.banner.wrong.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{background:#ff0000;color:#fff}.randomize.svelte-4xd8xj input.svelte-4xd8xj.svelte-4xd8xj{background-color:#000;color:#000}.quiz-options.svelte-4xd8xj .forms-select.results.svelte-4xd8xj>.correct.svelte-4xd8xj{background-color:rgb(195, 255, 104)}.quiz-options.svelte-4xd8xj .forms-select.results.svelte-4xd8xj>.incorrect.svelte-4xd8xj{background-color:rgb(255, 94, 94)}input.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{background-color:#eee;padding:10px;margin:10px}.quiz.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{display:block;max-width:750px;margin:0 auto}.cta-instruction.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{text-align:center;font-size:18px;color:#555;margin-bottom:20px;padding:12px 20px;background:linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);border-radius:8px;border-left:4px solid #6c757d;font-weight:500;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.quiz-options.svelte-4xd8xj .forms-select.svelte-4xd8xj.svelte-4xd8xj{display:grid;grid-template-columns:repeat(3, 1fr);gap:8px;width:100%;max-width:900px;margin:0 auto;justify-content:center}.quiz-options.svelte-4xd8xj .forms-select.svelte-4xd8xj>div.svelte-4xd8xj{font-size:24px;text-align:center;background-color:#eee;padding:24px;border-radius:8px;min-height:120px;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.form-number.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{position:absolute;top:8px;right:8px;background-color:#8f8f8f;color:white;padding:4px 8px;border-radius:12px;font-size:14px;font-weight:bold;z-index:1}.verse.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{text-align:right;font-size:34px;display:block;max-width:750px;margin:0 auto}.auu{color:#fff}.forms-select.svelte-4xd8xj.svelte-4xd8xj.svelte-4xd8xj{padding-bottom:20px}.forms-select.svelte-4xd8xj button.svelte-4xd8xj.svelte-4xd8xj{padding:6px;margin:6px;background-color:#eee}.forms-select.svelte-4xd8xj button.active.svelte-4xd8xj.svelte-4xd8xj{background-color:greenyellow}@media(max-width: 768px){.quiz-options.svelte-4xd8xj .forms-select.svelte-4xd8xj.svelte-4xd8xj{grid-template-columns:repeat(2, 1fr);max-width:600px}}@media(max-width: 480px){.quiz-options.svelte-4xd8xj .forms-select.svelte-4xd8xj.svelte-4xd8xj{grid-template-columns:1fr;max-width:400px}.quiz-options.svelte-4xd8xj .forms-select.svelte-4xd8xj>div.svelte-4xd8xj{font-size:20px;padding:16px;min-height:100px}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\t// @ts-nocheck\\n\\n\\timport API from '$lib/api/api';\\n\\timport { onMount } from 'svelte';\\n\\timport { roomOpen, currentRoomCode, members } from '$lib/stores/interaction_rooms';\\n\\timport uuid from '$lib/functions/uuid';\\n\\n\\tlet examples = [];\\n\\tlet starting_verse = '2:4';\\n\\tlet ending_verse = '2:14';\\n\\n\\tlet currentExampleIndex = 0;\\n\\n\\tlet includeSickLetters = false;\\n\\n\\tlet randomize = true;\\n\\n\\tlet showCorrectBanner = false;\\n\\tlet showWrongBanner = false;\\n\\tonMount(() => {\\n\\t\\tgetExamples();\\n\\t});\\n\\tasync function getExamples() {\\n\\t\\tclearBanners();\\n\\t\\texamples = await API.post(\`/examples/forms_quiz.json\`, {\\n\\t\\t\\tstarting_verse: randomize ? null : starting_verse,\\n\\t\\t\\tending_verse: randomize ? null : ending_verse,\\n\\t\\t\\tforms: selectedForms,\\n\\t\\t\\tinclude_sick_letters: includeSickLetters,\\n\\t\\t\\troomCode: $currentRoomCode\\n\\t\\t});\\n\\t\\tcurrentExampleIndex = 0;\\n\\n\\t\\texamples = examples.filter((e) => e.verse_original.includes('auu'));\\n\\t}\\n\\n\\tlet roomCode = null;\\n\\n\\troomOpen.subscribe((value) => {\\n\\t\\tif (value == true) {\\n\\t\\t\\tcurrentRoomCode.set(uuid());\\n\\t\\t\\tmakePusherRoom();\\n\\t\\t}\\n\\t});\\n\\n\\tcurrentRoomCode.subscribe((value) => {\\n\\t\\tif (value && value.length > 1) {\\n\\t\\t\\tmakePusherRoom(value);\\n\\t\\t}\\n\\t});\\n\\n\\tfunction makePusherRoom(code) {\\n\\t\\tconst pusher = new Pusher('7e649cff1bea807a7ce6', {\\n\\t\\t\\tcluster: 'us2'\\n\\t\\t});\\n\\n\\t\\tlet channel = pusher.subscribe('room-' + code);\\n\\n\\t\\tchannel.bind('add-member', function (data) {\\n\\t\\t\\tconsole.log(data);\\n\\t\\t\\tmembers.set([...$members, data.name]);\\n\\t\\t});\\n\\t}\\n\\n\\tlet forms = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];\\n\\tlet selectedForms = ['II', 'III', 'IV'];\\n\\n\\tfunction toggleForm(form) {\\n\\t\\tif (selectedForms.includes(form)) {\\n\\t\\t\\tselectedForms = selectedForms.filter((f) => f !== form);\\n\\t\\t} else {\\n\\t\\t\\tselectedForms = [...selectedForms, form];\\n\\t\\t}\\n\\t}\\n\\n\\tlet form_breakdown = {\\n\\t\\tI: {\\n\\t\\t\\tpast: 'فَعَلَ',\\n\\t\\t\\tpresent: 'يَفْعُلُ',\\n\\t\\t\\tmasdar: 'فَعْلٌ'\\n\\t\\t},\\n\\t\\tII: {\\n\\t\\t\\tpast: 'فَعَّلَ',\\n\\t\\t\\tpresent: 'يُفَعِّلُ',\\n\\t\\t\\tmasdar: 'تَفْعِيلٌ'\\n\\t\\t},\\n\\t\\tIII: {\\n\\t\\t\\tpast: 'فَاعَلَ',\\n\\t\\t\\tpresent: 'يُفَاعِلُ',\\n\\t\\t\\tmasdar: 'مُفَاعَلَةٌ'\\n\\t\\t},\\n\\t\\tIV: {\\n\\t\\t\\tpast: 'أَفْعَلَ',\\n\\t\\t\\tpresent: 'يُفْعِلُ',\\n\\t\\t\\tmasdar: 'إِفْعَالٌ'\\n\\t\\t},\\n\\t\\tV: {\\n\\t\\t\\tpast: 'تَفَعَّلَ',\\n\\t\\t\\tpresent: 'يَتَفَعَّلُ',\\n\\t\\t\\tmasdar: 'تَفَعُّلٌ'\\n\\t\\t},\\n\\t\\tVI: {\\n\\t\\t\\tpast: 'تَفَاعَلَ',\\n\\t\\t\\tpresent: 'يَتَفَاعَلُ',\\n\\t\\t\\tmasdar: 'تَفَاعُلٌ'\\n\\t\\t},\\n\\t\\tVII: {\\n\\t\\t\\tpast: 'اِنْفَعَلَ',\\n\\t\\t\\tpresent: 'يَنْفَعِلُ',\\n\\t\\t\\tmasdar: 'اِنْفِعَالٌ'\\n\\t\\t},\\n\\t\\tVIII: {\\n\\t\\t\\tpast: 'اِفْتَعَلَ',\\n\\t\\t\\tpresent: 'يَفْتَعِلُ',\\n\\t\\t\\tmasdar: 'اِفْتِعَالٌ'\\n\\t\\t},\\n\\t\\tIX: {\\n\\t\\t\\tpast: 'اِفْعَلَّ',\\n\\t\\t\\tpresent: 'يَفْعَلُّ',\\n\\t\\t\\tmasdar: 'اِفْعِلَالٌ'\\n\\t\\t},\\n\\t\\tX: {\\n\\t\\t\\tpast: 'اِسْتَفْعَلَ',\\n\\t\\t\\tpresent: 'يَسْتَفْعِلُ',\\n\\t\\t\\tmasdar: 'اِسْتِفْعَالٌ'\\n\\t\\t}\\n\\t};\\n\\n\\tlet showQuizResult = false;\\n\\tfunction nextQuiz(chosen) {\\n\\t\\tif (chosen == true) {\\n\\t\\t\\tshowCorrectBanner = true;\\n\\t\\t} else {\\n\\t\\t\\tshowWrongBanner = true;\\n\\t\\t}\\n\\n\\t\\tsetTimeout(function () {\\n\\t\\t\\tclearBanners();\\n\\t\\t\\tif (!examples[currentExampleIndex + 1]) {\\n\\t\\t\\t\\treturn getExamples();\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tcurrentExampleIndex = currentExampleIndex + 1;\\n\\t\\t\\t}\\n\\t\\t}, 2000);\\n\\t}\\n\\n\\tfunction clearBanners() {\\n\\t\\tshowQuizResult = false;\\n\\t\\tshowCorrectBanner = false;\\n\\t\\tshowWrongBanner = false;\\n\\t}\\n\\n\\tfunction dice() {\\n\\t\\trandomize = !randomize;\\n\\t}\\n<\/script>\\n\\n<div class=\\"wrapper\\" style=\\"position: relative\\">\\n\\t<div\\n\\t\\tclass=\\"controls\\"\\n\\t\\tclass:randomize\\n\\t\\tstyle=\\"display: block; margin: 0 auto; width: max-content;margin-bottom: 60px\\"\\n\\t>\\n\\t\\t<button class=\\"button\\" on:click={dice}><i class=\\"fa fa-dice\\" /></button>\\n\\t\\t<input type=\\"text\\" bind:value={starting_verse} /><input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tbind:value={ending_verse}\\n\\t\\t/><button class=\\"btn btn-outline-primary\\" on:click={() => getExamples()}>Find</button>\\n\\n\\t\\t<div class=\\"forms-select\\">\\n\\t\\t\\t{#each forms as form}\\n\\t\\t\\t\\t<button class:active={selectedForms.includes(form)} on:click={() => toggleForm(form)}\\n\\t\\t\\t\\t\\t>{form}</button\\n\\t\\t\\t\\t>\\n\\t\\t\\t{/each}\\n\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"btn\\"\\n\\t\\t\\t\\tclass:btn-success={includeSickLetters}\\n\\t\\t\\t\\tclass:btn-outline-success={!includeSickLetters}\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tincludeSickLetters = !includeSickLetters;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t🤒\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<!-- <ul class=\\"clean-list\\">\\n\\t\\t{#each examples as example}\\n\\t\\t\\t<li>\\n\\t\\t\\t\\t{@html example.verse_original}\\n\\t\\t\\t</li>\\n\\t\\t{/each}\\n\\t</ul> -->\\n\\n\\t{#if examples.length > 0}\\n\\t\\t<div class=\\"quiz\\">\\n\\t\\t\\t<div class=\\"verse\\">\\n\\t\\t\\t\\t{@html examples[currentExampleIndex].verse_original} - [{examples[currentExampleIndex].ref}]\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"quiz-options\\">\\n\\t\\t\\t\\t{#if selectedForms.length > 0}\\n\\t\\t\\t\\t\\t<div class=\\"cta-instruction\\">\\n\\t\\t\\t\\t\\t\\tClick to select the correct form for the highlighted (purple) verb\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t<div class=\\"forms-select\\" class:results={showQuizResult}>\\n\\t\\t\\t\\t\\t{#each selectedForms as form}\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\tshowQuizResult = true;\\n\\t\\t\\t\\t\\t\\t\\t\\tnextQuiz(form === examples[currentExampleIndex].form);\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\tclass:correct={form === examples[currentExampleIndex].form}\\n\\t\\t\\t\\t\\t\\t\\tclass:incorrect={form !== examples[currentExampleIndex].form}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"form-number\\">{form}</div>\\n\\t\\t\\t\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span style=\\"background:#fff; padding: 8px; border-radius: 6px\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{form_breakdown[form].past}</span\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{' / '}\\n\\t\\t\\t\\t\\t\\t\\t\\t<span style=\\"background:#fff; padding: 8px; border-radius: 6px\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>{form_breakdown[form].present}</span\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"margin-top: 12px; padding: 10px; border: 3px solid rgb(229 229 227); border-radius: 10px; padding-top: 10px; padding-bottom: 8px;\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{form_breakdown[form].masdar}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t{#if showCorrectBanner}\\n\\t\\t\\t<div class=\\"text-center correct banner\\"><h1>Correct!</h1></div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if showWrongBanner}\\n\\t\\t\\t<div class=\\"text-center wrong banner\\"><h1>Wrong!</h1></div>\\n\\t\\t{/if}\\n\\t{/if}\\n\\n\\t<div\\n\\t\\tclass=\\"btn btn-outline-info\\"\\n\\t\\ton:click={() => {\\n\\t\\t\\troomOpen.set(!$roomOpen);\\n\\t\\t}}\\n\\t\\tstyle=\\"position: absolute; top: 10px; right: 10px;\\"\\n\\t>\\n\\t\\tRoom\\n\\t</div>\\n\\t{#if $currentRoomCode}\\n\\t\\t<a\\n\\t\\t\\thref={'/rooms/' + $currentRoomCode}\\n\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\tclass=\\"btn btn-primary\\"\\n\\t\\t\\tstyle=\\"position: absolute; top: 50px; right: 10px;\\"\\n\\t\\t>\\n\\t\\t\\t<i class=\\"fa fa-link\\" />\\n\\t\\t</a>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.banner {\\n\\t\\tfont-size: 44px;\\n\\t\\tpadding: 1em;\\n\\t\\tmargin: 1em 0;\\n\\t}\\n\\n\\t.banner.correct {\\n\\t\\tbackground: #adff2f;\\n\\t}\\n\\n\\t.banner.wrong {\\n\\t\\tbackground: #ff0000;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.randomize input {\\n\\t\\tbackground-color: #000;\\n\\t\\tcolor: #000;\\n\\t}\\n\\t.quiz-options .forms-select.results > .correct {\\n\\t\\tbackground-color: rgb(195, 255, 104);\\n\\t}\\n\\n\\t.quiz-options .forms-select.results > .incorrect {\\n\\t\\tbackground-color: rgb(255, 94, 94);\\n\\t}\\n\\tinput {\\n\\t\\tbackground-color: #eee;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin: 10px;\\n\\t}\\n\\t.quiz {\\n\\t\\tdisplay: block;\\n\\t\\tmax-width: 750px;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t.cta-instruction {\\n\\t\\ttext-align: center;\\n\\t\\tfont-size: 18px;\\n\\t\\tcolor: #555;\\n\\t\\tmargin-bottom: 20px;\\n\\t\\tpadding: 12px 20px;\\n\\t\\tbackground: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\\n\\t\\tborder-radius: 8px;\\n\\t\\tborder-left: 4px solid #6c757d;\\n\\t\\tfont-weight: 500;\\n\\t\\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n\\t}\\n\\n\\t.quiz-options .forms-select {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(3, 1fr);\\n\\t\\tgap: 8px;\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 900px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.quiz-options .forms-select > div {\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: center;\\n\\t\\tbackground-color: #eee;\\n\\t\\tpadding: 24px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tmin-height: 120px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.form-number {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 8px;\\n\\t\\tright: 8px;\\n\\t\\tbackground-color: #8f8f8f;\\n\\t\\tcolor: white;\\n\\t\\tpadding: 4px 8px;\\n\\t\\tborder-radius: 12px;\\n\\t\\tfont-size: 14px;\\n\\t\\tfont-weight: bold;\\n\\t\\tz-index: 1;\\n\\t}\\n\\t.verse {\\n\\t\\ttext-align: right;\\n\\t\\tfont-size: 34px;\\n\\t\\tdisplay: block;\\n\\t\\tmax-width: 750px;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\t:global(.auu) {\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.forms-select {\\n\\t\\tpadding-bottom: 20px;\\n\\t}\\n\\n\\t.forms-select button {\\n\\t\\tpadding: 6px;\\n\\t\\tmargin: 6px;\\n\\t\\tbackground-color: #eee;\\n\\t}\\n\\n\\t.forms-select button.active {\\n\\t\\tbackground-color: greenyellow;\\n\\t}\\n\\n\\t/* Responsive design for smaller screens */\\n\\t@media (max-width: 768px) {\\n\\t\\t.quiz-options .forms-select {\\n\\t\\t\\tgrid-template-columns: repeat(2, 1fr);\\n\\t\\t\\tmax-width: 600px;\\n\\t\\t}\\n\\t}\\n\\n\\t@media (max-width: 480px) {\\n\\t\\t.quiz-options .forms-select {\\n\\t\\t\\tgrid-template-columns: 1fr;\\n\\t\\t\\tmax-width: 400px;\\n\\t\\t}\\n\\n\\t\\t.quiz-options .forms-select > div {\\n\\t\\t\\tfont-size: 20px;\\n\\t\\t\\tpadding: 16px;\\n\\t\\t\\tmin-height: 100px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $members, $$unsubscribe_members;
  let $currentRoomCode, $$unsubscribe_currentRoomCode;
  let $$unsubscribe_roomOpen;
  $$unsubscribe_members = subscribe(members, (value) => $members = value);
  $$unsubscribe_currentRoomCode = subscribe(currentRoomCode, (value) => $currentRoomCode = value);
  $$unsubscribe_roomOpen = subscribe(roomOpen, (value) => value);
  let examples = [];
  let starting_verse = "2:4";
  let ending_verse = "2:14";
  let currentExampleIndex = 0;
  roomOpen.subscribe((value) => {
    if (value == true) {
      currentRoomCode.set(uuid());
      makePusherRoom();
    }
  });
  currentRoomCode.subscribe((value) => {
    if (value && value.length > 1) {
      makePusherRoom(value);
    }
  });
  function makePusherRoom(code) {
    const pusher = new Pusher("7e649cff1bea807a7ce6", { cluster: "us2" });
    let channel = pusher.subscribe("room-" + code);
    channel.bind("add-member", function(data) {
      console.log(data);
      members.set([...$members, data.name]);
    });
  }
  let forms = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  let selectedForms = ["II", "III", "IV"];
  let form_breakdown = {
    I: {
      past: "فَعَلَ",
      present: "يَفْعُلُ",
      masdar: "فَعْلٌ"
    },
    II: {
      past: "فَعَّلَ",
      present: "يُفَعِّلُ",
      masdar: "تَفْعِيلٌ"
    },
    III: {
      past: "فَاعَلَ",
      present: "يُفَاعِلُ",
      masdar: "مُفَاعَلَةٌ"
    },
    IV: {
      past: "أَفْعَلَ",
      present: "يُفْعِلُ",
      masdar: "إِفْعَالٌ"
    },
    V: {
      past: "تَفَعَّلَ",
      present: "يَتَفَعَّلُ",
      masdar: "تَفَعُّلٌ"
    },
    VI: {
      past: "تَفَاعَلَ",
      present: "يَتَفَاعَلُ",
      masdar: "تَفَاعُلٌ"
    },
    VII: {
      past: "اِنْفَعَلَ",
      present: "يَنْفَعِلُ",
      masdar: "اِنْفِعَالٌ"
    },
    VIII: {
      past: "اِفْتَعَلَ",
      present: "يَفْتَعِلُ",
      masdar: "اِفْتِعَالٌ"
    },
    IX: {
      past: "اِفْعَلَّ",
      present: "يَفْعَلُّ",
      masdar: "اِفْعِلَالٌ"
    },
    X: {
      past: "اِسْتَفْعَلَ",
      present: "يَسْتَفْعِلُ",
      masdar: "اِسْتِفْعَالٌ"
    }
  };
  $$result.css.add(css);
  $$unsubscribe_members();
  $$unsubscribe_currentRoomCode();
  $$unsubscribe_roomOpen();
  return `<div class="wrapper" style="position: relative"><div class="${["controls svelte-4xd8xj", "randomize"].join(" ").trim()}" style="display: block; margin: 0 auto; width: max-content;margin-bottom: 60px"><button class="button" data-svelte-h="svelte-1b8zot1"><i class="fa fa-dice"></i></button> <input type="text" class="svelte-4xd8xj"${add_attribute("value", starting_verse, 0)}><input type="text" class="svelte-4xd8xj"${add_attribute("value", ending_verse, 0)}><button class="btn btn-outline-primary" data-svelte-h="svelte-w25doy">Find</button> <div class="forms-select svelte-4xd8xj">${each(forms, (form) => {
    return `<button class="${["svelte-4xd8xj", selectedForms.includes(form) ? "active" : ""].join(" ").trim()}">${escape(form)}</button>`;
  })}  <div class="${[
    "btn",
    " btn-outline-success"
  ].join(" ").trim()}" data-svelte-h="svelte-10r3gg5">🤒</div></div></div>  ${examples.length > 0 ? `<div class="quiz svelte-4xd8xj"><div class="verse svelte-4xd8xj"><!-- HTML_TAG_START -->${examples[currentExampleIndex].verse_original}<!-- HTML_TAG_END --> - [${escape(examples[currentExampleIndex].ref)}]</div> <div class="quiz-options svelte-4xd8xj">${selectedForms.length > 0 ? `<div class="cta-instruction svelte-4xd8xj" data-svelte-h="svelte-976i70">Click to select the correct form for the highlighted (purple) verb</div>` : ``} <div class="${["forms-select svelte-4xd8xj", ""].join(" ").trim()}">${each(selectedForms, (form) => {
    return `  <div class="${[
      "svelte-4xd8xj",
      (form === examples[currentExampleIndex].form ? "correct" : "") + " " + (form !== examples[currentExampleIndex].form ? "incorrect" : "")
    ].join(" ").trim()}"><div class="form-number svelte-4xd8xj">${escape(form)}</div> <div><span style="background:#fff; padding: 8px; border-radius: 6px">${escape(form_breakdown[form].past)}</span> ${escape(" / ")} <span style="background:#fff; padding: 8px; border-radius: 6px">${escape(form_breakdown[form].present)}</span></div> <div style="margin-top: 12px; padding: 10px; border: 3px solid rgb(229 229 227); border-radius: 10px; padding-top: 10px; padding-bottom: 8px;">${escape(form_breakdown[form].masdar)}</div> </div>`;
  })}</div></div></div> ${``} ${``}` : ``} <div class="btn btn-outline-info" style="position: absolute; top: 10px; right: 10px;" data-svelte-h="svelte-1gqwavq">Room</div> ${$currentRoomCode ? `<a${add_attribute("href", "/rooms/" + $currentRoomCode, 0)} target="_blank" class="btn btn-primary" style="position: absolute; top: 50px; right: 10px;"><i class="fa fa-link"></i></a>` : ``} </div>`;
});
export {
  Page as default
};
