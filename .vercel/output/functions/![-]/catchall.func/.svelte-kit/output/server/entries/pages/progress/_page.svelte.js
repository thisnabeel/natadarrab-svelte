import { c as create_ssr_component, e as each, d as escape, f as add_attribute, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { A as API } from "../../../chunks/api.js";
import { w as writable } from "../../../chunks/index.js";
/* empty css                                                   */
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
/* empty css                                                 */
import Swal from "sweetalert2";
/* empty css                                                   */
/* empty css                                                        */
import { u as user } from "../../../chunks/user.js";
import { S as Show } from "../../../chunks/Show.js";
const css$7 = {
  code: ".prompt.svelte-13obb53.svelte-13obb53{padding:14px}.question.svelte-13obb53.svelte-13obb53{background:#fafcff;margin:17px;padding:13px;border:10px solid #e6f7ff}.choice.svelte-13obb53.svelte-13obb53{background:#fff;margin:10px 0;padding:14px;border:1px solid rgba(207, 207, 207, 0.822);cursor:pointer}.choice.svelte-13obb53.svelte-13obb53:hover{background:rgb(241, 241, 241)}.choice.selected.svelte-13obb53.svelte-13obb53{background:#123774;color:rgb(236, 236, 236)}.show-status.svelte-13obb53 .choice.selected.correct.svelte-13obb53{background:#a7ffd3;color:#000}.show-status.svelte-13obb53 .choice.selected.incorrect.svelte-13obb53{background:#ff2121;color:#fff}.show-status.svelte-13obb53 select.incorrect.svelte-13obb53{background:#ff2121;color:#fff}.show-status.svelte-13obb53 select.correct.svelte-13obb53{background:#a7ffd3;color:#000}.selector_block.svelte-13obb53.svelte-13obb53{margin:6px;padding:10px;border:1px solid #ccc;border-radius:10px}.selector_block.svelte-13obb53.svelte-13obb53:hover{background-color:rgba(220, 130, 130, 0.822)}.selected.svelte-13obb53 .selector_block.svelte-13obb53{background-color:#fff;font-size:24px;border:2px dashed #f0f0f0}.show-status.svelte-13obb53 .selected .correct.svelte-13obb53{background:#a7ffd3;color:#000}.show-status.svelte-13obb53 .selected .incorrect.svelte-13obb53{background:#ff2121;color:#fff}",
  map: `{"version":3,"file":"Question.svelte","sources":["Question.svelte"],"sourcesContent":["<script>\\n\\timport shuffler from '$lib/functions/shuffler.js';\\n\\n\\texport let question;\\n\\texport let showStatus;\\n\\texport let sendStatusUp;\\n\\texport let percentage;\\n\\n\\t$: q = question;\\n\\t$: selectedChoice && console.log(question);\\n\\n\\tlet selectedChoice;\\n\\tlet qs;\\n\\tlet selections = {};\\n\\n\\t$: console.log(selections);\\n\\n\\t$: {\\n\\t\\t// Define a reactive statement to rerun the status() function when showStatus changes\\n\\t\\tqs = status(selectedChoice, question, showStatus);\\n\\t}\\n\\n\\tfunction status(choice, question, showStatus) {\\n\\t\\tif (showStatus) {\\n\\t\\t\\tif (question.selected) {\\n\\t\\t\\t\\t// console.log(\\"cimpa\\", choice.id);\\n\\t\\t\\t\\tconsole.log('com', question.selected);\\n\\t\\t\\t\\tconsole.log('answer', question.correct);\\n\\n\\t\\t\\t\\tif (question.correct === question.selected) {\\n\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\tchoice: selectedChoice,\\n\\t\\t\\t\\t\\t\\tstatus: true\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\treturn 'correct';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\tchoice: selectedChoice,\\n\\t\\t\\t\\t\\t\\tstatus: false\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\treturn 'incorrect';\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\\tif (q.selectors) {\\n\\t\\t\\t\\tif (q.selection_style === 'blockable') {\\n\\t\\t\\t\\t\\tconsole.log('BLOCAKBLE TEST');\\n\\t\\t\\t\\t\\tlet allGood = true;\\n\\n\\t\\t\\t\\t\\tfor (let i = 0; i < question.selectors.length; i++) {\\n\\t\\t\\t\\t\\t\\tlet selectedBlock = selectedBlocks[i];\\n\\t\\t\\t\\t\\t\\tlet selector = question.selectors[i];\\n\\n\\t\\t\\t\\t\\t\\tif (!selectedBlock) {\\n\\t\\t\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\t\\t\\tchoice: selections,\\n\\t\\t\\t\\t\\t\\t\\t\\tstatus: false\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\treturn 'incorrect';\\n\\t\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t\\tlet foundBlock = question.selectors[i].options.find((o) => o === selectedBlock);\\n\\n\\t\\t\\t\\t\\t\\tif (foundBlock) {\\n\\t\\t\\t\\t\\t\\t\\tconsole.log(selector, foundBlock);\\n\\t\\t\\t\\t\\t\\t\\tif (selector.correct === selector.options.indexOf(foundBlock)) {\\n\\t\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tchoice: selections,\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tstatus: false\\n\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\treturn 'incorrect';\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\t\\t\\tchoice: selections,\\n\\t\\t\\t\\t\\t\\t\\t\\tstatus: false\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\treturn 'incorrect';\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\tchoice: selections,\\n\\t\\t\\t\\t\\t\\tstatus: true\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\treturn 'correct';\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tlet allGood = false;\\n\\t\\t\\t\\t\\tq.selectors.forEach((s, i) => {\\n\\t\\t\\t\\t\\t\\tif (question.selectors[i].correct !== selections[i]) {\\n\\t\\t\\t\\t\\t\\t\\tallGood = false;\\n\\n\\t\\t\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\t\\t\\tchoice: selections,\\n\\t\\t\\t\\t\\t\\t\\t\\tstatus: false\\n\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\treturn 'incorrect';\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\t\\t\\tchoice: selections,\\n\\t\\t\\t\\t\\t\\tstatus: true\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\treturn 'correct';\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\\tsendStatusUp({\\n\\t\\t\\t\\tquestion: question,\\n\\t\\t\\t\\tstatus: false\\n\\t\\t\\t});\\n\\t\\t\\treturn 'incorrect';\\n\\t\\t}\\n\\t\\treturn '';\\n\\t}\\n\\n\\t// function reCheck() {\\n\\t//     console.log(\\"recheck\\")\\n\\t//     for (let i = 0; i < question.selectors.length; i++){\\n\\t//         checkSelection(i);\\n\\t//     }\\n\\t// }\\n\\n\\tlet selectedBlocks = [];\\n<\/script>\\n\\n<li class=\\"question\\" class:show-status={showStatus}>\\n\\t<div><h3 class=\\"prompt\\">{@html q.question}</h3></div>\\n\\n\\t{#if q.choices}\\n\\t\\t<ul class=\\"clean-list choices\\">\\n\\t\\t\\t{#each Object.entries(q.choices).map( ([key, value]) => ({ ...value, id: key }) ) || [] as choice}\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\tclass=\\"choice {qs}\\"\\n\\t\\t\\t\\t\\tclass:selected={selectedChoice ? selectedChoice.id === choice.id : false}\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\tif (showStatus) return;\\n\\t\\t\\t\\t\\t\\tselectedChoice = choice;\\n\\t\\t\\t\\t\\t\\tquestion.selected = selectedChoice.id;\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{choice.answer}\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t{/if}\\n\\n\\t{#if q.selectors}\\n\\t\\t{#if q.selection_style === 'blockable'}\\n\\t\\t\\t<ul class=\\"clean-list horizontal-list selected\\">\\n\\t\\t\\t\\t{#each selectedBlocks as block, i}\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\t\\tclass:correct={question.selectors[i]\\n\\t\\t\\t\\t\\t\\t\\t? question.selectors[i].correct ===\\n\\t\\t\\t\\t\\t\\t\\t  question.selectors[i].options.indexOf(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tquestion.selectors[i].options.find((o) => o === block)\\n\\t\\t\\t\\t\\t\\t\\t  )\\n\\t\\t\\t\\t\\t\\t\\t: false}\\n\\t\\t\\t\\t\\t\\tclass:incorrect={question.selectors[i]\\n\\t\\t\\t\\t\\t\\t\\t? question.selectors[i].correct !==\\n\\t\\t\\t\\t\\t\\t\\t  question.selectors[i].options.indexOf(\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tquestion.selectors[i].options.find((o) => o === block)\\n\\t\\t\\t\\t\\t\\t\\t  )\\n\\t\\t\\t\\t\\t\\t\\t: true}\\n\\t\\t\\t\\t\\t\\tclass=\\"selector_block\\"\\n\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\tselectedBlocks = selectedBlocks.filter((b) => b !== block);\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{block}\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t\\t<hr />\\n\\t\\t\\t<ul class=\\"clean-list horizontal-list\\">\\n\\t\\t\\t\\t{#each [...new Set([].concat(...q.selectors.map((obj) => obj.options)))].filter((c) => c.length > 0) || [] as choice, i}\\n\\t\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t\\t<li\\n\\t\\t\\t\\t\\t\\tclass=\\"selector_block\\"\\n\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\tconsole.log(choice);\\n\\t\\t\\t\\t\\t\\t\\tselectedBlocks = [...selectedBlocks, choice];\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{choice}\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t{:else}\\n\\t\\t\\t<ul class=\\"clean-list horizontal-list\\">\\n\\t\\t\\t\\t{#each q.selectors || [] as choice, i}\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<select\\n\\t\\t\\t\\t\\t\\t\\tdisabled={showStatus}\\n\\t\\t\\t\\t\\t\\t\\tclass:correct={question.selectors[i].correct === selections[i]}\\n\\t\\t\\t\\t\\t\\t\\tclass:incorrect={question.selectors[i].correct !== selections[i]}\\n\\t\\t\\t\\t\\t\\t\\tname=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\tid=\\"\\"\\n\\t\\t\\t\\t\\t\\t\\tbind:value={selections[i]}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<option value=\\"-1\\" />\\n\\t\\t\\t\\t\\t\\t\\t{#each choice.options || [] as option, j}\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value={j}>{option}</option>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</select>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t{/if}\\n\\t{/if}\\n</li>\\n\\n<style>\\n\\t.prompt {\\n\\t\\tpadding: 14px;\\n\\t}\\n\\t.question {\\n\\t\\tbackground: #fafcff;\\n\\t\\tmargin: 17px;\\n\\t\\tpadding: 13px;\\n\\t\\tborder: 10px solid #e6f7ff;\\n\\t}\\n\\n\\t.choice {\\n\\t\\tbackground: #fff;\\n\\t\\tmargin: 10px 0;\\n\\t\\tpadding: 14px;\\n\\t\\tborder: 1px solid rgba(207, 207, 207, 0.822);\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.choice:hover {\\n\\t\\tbackground: rgb(241, 241, 241);\\n\\t}\\n\\n\\t.choice.selected {\\n\\t\\tbackground: #123774;\\n\\t\\tcolor: rgb(236, 236, 236);\\n\\t}\\n\\n\\t.show-status .choice.selected.correct {\\n\\t\\tbackground: #a7ffd3;\\n\\t\\tcolor: #000;\\n\\t}\\n\\n\\t.show-status .choice.selected.incorrect {\\n\\t\\tbackground: #ff2121;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.show-status select.incorrect {\\n\\t\\tbackground: #ff2121;\\n\\t\\tcolor: #fff;\\n\\t}\\n\\n\\t.show-status select.correct {\\n\\t\\tbackground: #a7ffd3;\\n\\t\\tcolor: #000;\\n\\t}\\n\\n\\t.selector_block {\\n\\t\\tmargin: 6px;\\n\\t\\tpadding: 10px;\\n\\t\\tborder: 1px solid #ccc;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\t.selector_block:hover {\\n\\t\\tbackground-color: rgba(220, 130, 130, 0.822);\\n\\t}\\n\\n\\t.selected .selector_block {\\n\\t\\tbackground-color: #fff;\\n\\t\\tfont-size: 24px;\\n\\n\\t\\tborder: 2px dashed #f0f0f0;\\n\\t}\\n\\n\\t.show-status .selected .correct {\\n\\t\\tbackground: #a7ffd3;\\n\\t\\tcolor: #000;\\n\\t}\\n\\n\\t.show-status .selected .incorrect {\\n\\t\\tbackground: #ff2121;\\n\\t\\tcolor: #fff;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiOC,qCAAQ,CACP,OAAO,CAAE,IACV,CACA,uCAAU,CACT,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,KAAK,CAAC,OACpB,CAEA,qCAAQ,CACP,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAC5C,MAAM,CAAE,OACT,CAEA,qCAAO,MAAO,CACb,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC9B,CAEA,OAAO,uCAAU,CAChB,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACzB,CAEA,2BAAY,CAAC,OAAO,SAAS,uBAAS,CACrC,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACR,CAEA,2BAAY,CAAC,OAAO,SAAS,yBAAW,CACvC,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACR,CAEA,2BAAY,CAAC,MAAM,yBAAW,CAC7B,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACR,CAEA,2BAAY,CAAC,MAAM,uBAAS,CAC3B,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACR,CAEA,6CAAgB,CACf,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,IAChB,CAEA,6CAAe,MAAO,CACrB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAC5C,CAEA,wBAAS,CAAC,8BAAgB,CACzB,gBAAgB,CAAE,IAAI,CACtB,SAAS,CAAE,IAAI,CAEf,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,OACpB,CAEA,2BAAY,CAAC,SAAS,CAAC,uBAAS,CAC/B,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACR,CAEA,2BAAY,CAAC,SAAS,CAAC,yBAAW,CACjC,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IACR"}`
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let q;
  let { question } = $$props;
  let { showStatus } = $$props;
  let { sendStatusUp } = $$props;
  let { percentage } = $$props;
  let selectedChoice;
  let qs;
  let selections = {};
  function status(choice, question2, showStatus2) {
    if (showStatus2) {
      if (question2.selected) {
        console.log("com", question2.selected);
        console.log("answer", question2.correct);
        if (question2.correct === question2.selected) {
          sendStatusUp({
            question: question2,
            choice: selectedChoice,
            status: true
          });
          return "correct";
        } else {
          sendStatusUp({
            question: question2,
            choice: selectedChoice,
            status: false
          });
          return "incorrect";
        }
      }
      if (q.selectors) {
        if (q.selection_style === "blockable") {
          console.log("BLOCAKBLE TEST");
          for (let i = 0; i < question2.selectors.length; i++) {
            let selectedBlock = selectedBlocks[i];
            let selector = question2.selectors[i];
            if (!selectedBlock) {
              sendStatusUp({
                question: question2,
                choice: selections,
                status: false
              });
              return "incorrect";
            }
            let foundBlock = question2.selectors[i].options.find((o) => o === selectedBlock);
            if (foundBlock) {
              console.log(selector, foundBlock);
              if (selector.correct === selector.options.indexOf(foundBlock)) ;
              else {
                sendStatusUp({
                  question: question2,
                  choice: selections,
                  status: false
                });
                return "incorrect";
              }
            } else {
              sendStatusUp({
                question: question2,
                choice: selections,
                status: false
              });
              return "incorrect";
            }
          }
          sendStatusUp({
            question: question2,
            choice: selections,
            status: true
          });
          return "correct";
        } else {
          q.selectors.forEach((s, i) => {
            if (question2.selectors[i].correct !== selections[i]) {
              sendStatusUp({
                question: question2,
                choice: selections,
                status: false
              });
              return "incorrect";
            }
          });
          sendStatusUp({
            question: question2,
            choice: selections,
            status: true
          });
          return "correct";
        }
      }
      sendStatusUp({ question: question2, status: false });
      return "incorrect";
    }
    return "";
  }
  let selectedBlocks = [];
  if ($$props.question === void 0 && $$bindings.question && question !== void 0) $$bindings.question(question);
  if ($$props.showStatus === void 0 && $$bindings.showStatus && showStatus !== void 0) $$bindings.showStatus(showStatus);
  if ($$props.sendStatusUp === void 0 && $$bindings.sendStatusUp && sendStatusUp !== void 0) $$bindings.sendStatusUp(sendStatusUp);
  if ($$props.percentage === void 0 && $$bindings.percentage && percentage !== void 0) $$bindings.percentage(percentage);
  $$result.css.add(css$7);
  q = question;
  {
    console.log(selections);
  }
  {
    {
      qs = status(selectedChoice, question, showStatus);
    }
  }
  return `<li class="${["question svelte-13obb53", showStatus ? "show-status" : ""].join(" ").trim()}"><div><h3 class="prompt svelte-13obb53"><!-- HTML_TAG_START -->${q.question}<!-- HTML_TAG_END --></h3></div> ${q.choices ? `<ul class="clean-list choices">${each(Object.entries(q.choices).map(([key, value]) => ({ ...value, id: key })) || [], (choice) => {
    return ` <li class="${[
      "choice " + escape(qs, true) + " svelte-13obb53",
      ""
    ].join(" ").trim()}">${escape(choice.answer)} </li>`;
  })}</ul>` : ``} ${q.selectors ? `${q.selection_style === "blockable" ? `<ul class="clean-list horizontal-list selected svelte-13obb53">${each(selectedBlocks, (block, i) => {
    return ` <li class="${[
      "selector_block svelte-13obb53",
      ((question.selectors[i] ? question.selectors[i].correct === question.selectors[i].options.indexOf(question.selectors[i].options.find((o) => o === block)) : false) ? "correct" : "") + " " + ((question.selectors[i] ? question.selectors[i].correct !== question.selectors[i].options.indexOf(question.selectors[i].options.find((o) => o === block)) : true) ? "incorrect" : "")
    ].join(" ").trim()}">${escape(block)} </li>`;
  })}</ul> <hr> <ul class="clean-list horizontal-list">${each([...new Set([].concat(...q.selectors.map((obj) => obj.options)))].filter((c) => c.length > 0) || [], (choice, i) => {
    return ` <li class="selector_block svelte-13obb53">${escape(choice)} </li>`;
  })}</ul>` : `<ul class="clean-list horizontal-list">${each(q.selectors || [], (choice, i) => {
    return `<li><select ${showStatus ? "disabled" : ""} name="" id="" class="${[
      "svelte-13obb53",
      (question.selectors[i].correct === selections[i] ? "correct" : "") + " " + (question.selectors[i].correct !== selections[i] ? "incorrect" : "")
    ].join(" ").trim()}"><option value="-1"></option>${each(choice.options || [], (option, j) => {
      return `<option${add_attribute("value", j, 0)}>${escape(option)}</option>`;
    })}</select> </li>`;
  })}</ul>`}` : ``} </li>`;
});
const css$6 = {
  code: ".description.svelte-jz5aiz{padding:2em}.title.svelte-jz5aiz{background:#deffe8;border:5px solid #ccf6d9;padding:20px;max-width:fit-content;margin:0 auto}",
  map: `{"version":3,"file":"Game.svelte","sources":["Game.svelte"],"sourcesContent":["<script>\\n\\timport Question from './Question.svelte';\\n\\t// import Swal from \\"sweetalert2\\";\\n\\timport Swal from 'sweetalert2';\\n\\timport shuffler from '$lib/functions/shuffler';\\n\\timport API from '$lib/api/api';\\n\\timport { user } from '$lib/stores/user';\\n\\n\\texport let game;\\n\\tlet showStatus = false;\\n\\n\\tfunction submit() {\\n\\t\\tshowStatus = true;\\n\\t}\\n\\n\\tlet results = [];\\n\\tlet percentage = null;\\n\\tlet showingVideo = false;\\n\\n\\tfunction retry() {\\n\\t\\tresults = [];\\n\\t\\tpercentage = null;\\n\\t\\tshowStatus = false;\\n\\n\\t\\tgame.folder.questions = shuffler(game.folder.questions);\\n\\t}\\n\\n\\tfunction checkResults() {\\n\\t\\tif (results.length !== game.folder.questions.length) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\n\\t\\tconsole.log({ results });\\n\\t\\tconst total = results.length;\\n\\t\\tconst number = results.filter((r) => r.status === true).length;\\n\\n\\t\\tconst result = parseFloat(parseFloat(number, 10) * 100) / parseFloat(total, 10);\\n\\t\\tconst final_perc = Math.round(result.toFixed(2));\\n\\n\\t\\t// alert(\`\${final_perc}%\`)\\n\\t\\tpercentage = final_perc;\\n\\t\\tconsole.log(percentage);\\n\\t\\t// Swal.fire('Perfect!', 'You Passed This Quiz', 'success');\\n\\n\\t\\tif (percentage === 100) {\\n\\t\\t\\tSwal.fire('Perfect!', 'You Passed This Quiz', 'success');\\n\\t\\t} else {\\n\\t\\t\\tSwal.fire('Oh No!', \\"You Didn't Pass This Quiz. Try Again.\\", 'warning');\\n\\t\\t}\\n\\n\\t\\tsaveGameAttempt();\\n\\n\\t\\t// results = [];\\n\\t\\t// percentage = null;\\n\\t}\\n\\n\\tasync function saveGameAttempt() {\\n\\t\\tif (!$user || !$user.id) {\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\tconst res = await API.post(\`/game_attempts.json\`, {\\n\\t\\t\\tuser_id: $user.id,\\n\\t\\t\\tgame_id: game.id,\\n\\t\\t\\tresult: percentage,\\n\\t\\t\\tquestions: results\\n\\t\\t});\\n\\t\\tconsole.log({ res });\\n\\t\\tlet newUser = { ...$user };\\n\\t\\tnewUser.bank_skills = res;\\n\\t\\tuser.set(newUser);\\n\\t}\\n\\n\\tfunction handleStatus(payload) {\\n\\t\\tconsole.log({ payload });\\n\\t\\tresults = [...results, payload];\\n\\t\\tcheckResults();\\n\\t}\\n<\/script>\\n\\n<div class=\\"title\\">\\n\\t<h1>{game.title}</h1>\\n</div>\\n<br />\\n{#if game.video && !showingVideo}\\n\\t<div class=\\"btn btn-outline-info\\" on:click={() => (showingVideo = !showingVideo)}>\\n\\t\\tShow Tutorial Video\\n\\t</div>\\n{/if}\\n{#if showingVideo}\\n\\t{#if game.video}\\n\\t\\t{@html game.video}\\n\\t{/if}\\n{/if}\\n{#if game.description.length > 50}\\n\\t<div class=\\"description\\">{@html game.description}</div>\\n{/if}\\n<div class=\\"wrapper\\">\\n\\t<ol class=\\"clean-list\\">\\n\\t\\t{#each game.folder.questions.slice(0, 3) || [] as q}\\n\\t\\t\\t<Question question={q} {showStatus} {percentage} sendStatusUp={handleStatus} />\\n\\t\\t{/each}\\n\\t</ol>\\n\\n\\t{#if showStatus}\\n\\t\\t<div class=\\"btn btn-warning btn-lg\\" on:click={retry}>Retry</div>\\n\\t{:else}\\n\\t\\t<div class=\\"btn btn-outline-primary btn-lg\\" on:click={submit}>Submit</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.description {\\n\\t\\tpadding: 2em;\\n\\t}\\n\\t.title {\\n\\t\\tbackground: #deffe8;\\n\\t\\tborder: 5px solid #ccf6d9;\\n\\t\\tpadding: 20px;\\n\\t\\tmax-width: fit-content;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+GC,0BAAa,CACZ,OAAO,CAAE,GACV,CACA,oBAAO,CACN,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,WAAW,CACtB,MAAM,CAAE,CAAC,CAAC,IACX"}`
};
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { game } = $$props;
  let showStatus = false;
  let results = [];
  let percentage = null;
  function checkResults() {
    if (results.length !== game.folder.questions.length) {
      return;
    }
    console.log({ results });
    const total = results.length;
    const number = results.filter((r) => r.status === true).length;
    const result = parseFloat(parseFloat(number, 10) * 100) / parseFloat(total, 10);
    const final_perc = Math.round(result.toFixed(2));
    percentage = final_perc;
    console.log(percentage);
    if (percentage === 100) {
      Swal.fire("Perfect!", "You Passed This Quiz", "success");
    } else {
      Swal.fire("Oh No!", "You Didn't Pass This Quiz. Try Again.", "warning");
    }
    saveGameAttempt();
  }
  async function saveGameAttempt() {
    if (!$user || !$user.id) {
      return;
    }
    const res = await API.post(`/game_attempts.json`, {
      user_id: $user.id,
      game_id: game.id,
      result: percentage,
      questions: results
    });
    console.log({ res });
    let newUser = { ...$user };
    newUser.bank_skills = res;
    user.set(newUser);
  }
  function handleStatus(payload) {
    console.log({ payload });
    results = [...results, payload];
    checkResults();
  }
  if ($$props.game === void 0 && $$bindings.game && game !== void 0) $$bindings.game(game);
  $$result.css.add(css$6);
  $$unsubscribe_user();
  return `<div class="title svelte-jz5aiz"><h1>${escape(game.title)}</h1></div> <br> ${game.video && true ? `<div class="btn btn-outline-info" data-svelte-h="svelte-77tqex">Show Tutorial Video</div>` : ``} ${``} ${game.description.length > 50 ? `<div class="description svelte-jz5aiz"><!-- HTML_TAG_START -->${game.description}<!-- HTML_TAG_END --></div>` : ``} <div class="wrapper"><ol class="clean-list">${each(game.folder.questions.slice(0, 3) || [], (q) => {
    return `${validate_component(Question, "Question").$$render(
      $$result,
      {
        question: q,
        showStatus,
        percentage,
        sendStatusUp: handleStatus
      },
      {},
      {}
    )}`;
  })}</ol> ${`<div class="btn btn-outline-primary btn-lg" data-svelte-h="svelte-azp4h3">Submit</div>`} </div>`;
});
const selectedSet = writable(null);
const selectedGame = writable(null);
const selectedChapter = writable(null);
const selectedStudent = writable(null);
const selectedStudentSkills = writable([]);
const loadingStudentSkills = writable(false);
const selectedTab = writable(0);
const css$5 = {
  code: "select.svelte-ga9n28.svelte-ga9n28{margin-left:14px;font-size:20px}.nav.svelte-ga9n28.svelte-ga9n28{display:flex;margin-top:0;position:sticky;top:0;z-index:99999;background-color:#ffffeb;font-size:30px;justify-content:flex-end;flex:1 1 50%}.tab.svelte-ga9n28.svelte-ga9n28{flex:1 1 50%;text-align:center;padding:20px 20px 10px;color:#2e2e2e;font-size:24px;border-bottom:6px solid #efdbc2}.activeTab.svelte-ga9n28.svelte-ga9n28{border-bottom:6px solid #efdbc2;background:#efdbc2;border-radius:10px 10px 0 0}.top-nav.svelte-ga9n28.svelte-ga9n28{padding:16px 16px 16px 40px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;background-color:rgb(255, 255, 255);border-bottom:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-right-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234);flex:1 1 30%}.top-nav.svelte-ga9n28 .head.svelte-ga9n28{height:48px;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.5rem;line-height:1.4;font-family:'Avenir Next', sans-serif;margin-right:16px;cursor:pointer}.hori-divider.svelte-ga9n28.svelte-ga9n28{padding-left:16px;margin-top:-16px;margin-bottom:-16px;height:74px;border-right:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-bottom-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport { selectedSet, selectedGame, selectedChapter, selectedTab } from '../store';\\n\\timport { onMount } from 'svelte';\\n\\n\\tlet skillSets = [];\\n\\n\\tonMount(async () => {\\n\\t\\t// const response = await Api.get(\\"/skills_sets/1.json\\");\\n\\t\\t// skillSets = [...skillSets, response];\\n\\n\\t\\tskillSets = await API.get('/skills_sets/as_user/1.json');\\n\\t\\tconsole.log(skillSets);\\n\\n\\t\\t//\\n\\t\\tselectedSet.set(skillSets[0]);\\n\\t});\\n<\/script>\\n\\n<div class=\\"top-nav\\">\\n\\t<div class=\\"head\\">\\n\\t\\t<span>Progress: </span>\\n\\t\\t{#if skillSets}\\n\\t\\t\\t<select name=\\"\\" id=\\"\\" class=\\"form-control\\" bind:value={$selectedSet}>\\n\\t\\t\\t\\t{#each skillSets as set}\\n\\t\\t\\t\\t\\t<option value={set}>{set.title}</option>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</select>\\n\\t\\t{/if}\\n\\t\\t<!-- <div class=\\"arrow-space\\"></div>\\n            <div class=\\"left-arrow arrow\\"><div class=\\"\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"20px\\" height=\\"20px\\" fill=\\"#626872\\" viewBox=\\"0 0 256 256\\"><path d=\\"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z\\"></path></svg></div></div>\\n            <div class=\\"arrow-space\\"></div>\\n            <div class=\\"right-arrow arrow\\"><div class=\\"\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"20px\\" height=\\"20px\\" fill=\\"#626872\\" viewBox=\\"0 0 256 256\\"><path d=\\"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z\\"></path></svg></div></div> -->\\n\\t</div>\\n\\n\\t<div class=\\"hori-divider\\" />\\n\\t{#if $selectedGame || $selectedChapter}\\n\\t\\t<div class=\\"go-back\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tselectedGame.set(null);\\n\\t\\t\\t\\t\\tselectedChapter.set(null);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<i class=\\"fa fa-arrow-left\\" /> Go Back\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{:else}\\n\\t\\t<div class=\\"nav\\">\\n\\t\\t\\t<div class=\\"tab\\" class:activeTab={$selectedTab === 0} on:click={() => selectedTab.set(0)}>\\n\\t\\t\\t\\tLessons\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"tab\\" class:activeTab={$selectedTab === 1} on:click={() => selectedTab.set(1)}>\\n\\t\\t\\t\\tMastery\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<br />\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\tselect {\\n\\t\\tmargin-left: 14px;\\n\\t\\tfont-size: 20px;\\n\\t}\\n\\t.nav {\\n\\t\\tdisplay: flex;\\n\\t\\t/* margin: 30px auto; */\\n\\t\\tmargin-top: 0;\\n\\t\\tposition: sticky;\\n\\t\\ttop: 0;\\n\\t\\tz-index: 99999;\\n\\t\\tbackground-color: #ffffeb;\\n\\t\\tfont-size: 30px;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tflex: 1 1 50%;\\n\\t}\\n\\n\\t.tab {\\n\\t\\tflex: 1 1 50%;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 20px 20px 10px;\\n\\t\\tcolor: #2e2e2e;\\n\\t\\tfont-size: 24px;\\n\\t\\tborder-bottom: 6px solid #efdbc2;\\n\\t}\\n\\n\\t.activeTab {\\n\\t\\tborder-bottom: 6px solid #efdbc2;\\n\\t\\tbackground: #efdbc2;\\n\\t\\tborder-radius: 10px 10px 0 0;\\n\\t}\\n\\n\\t.top-nav {\\n\\t\\tpadding: 16px 16px 16px 40px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\t-webkit-box-pack: justify;\\n\\t\\tjustify-content: space-between;\\n\\t\\tbackground-color: rgb(255, 255, 255);\\n\\t\\tborder-bottom: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-right-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t\\tflex: 1 1 30%;\\n\\t}\\n\\n\\t.top-nav .head {\\n\\t\\theight: 48px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tline-height: 1.4;\\n\\t\\tfont-family: 'Avenir Next', sans-serif;\\n\\t\\tmargin-right: 16px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.left-arrow {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tpadding: 4px;\\n\\t}\\n\\n\\t.left-arrow > div {\\n\\t\\tline-height: 0;\\n\\t\\twidth: 20px;\\n\\t\\theight: 20px;\\n\\t}\\n\\n\\t.arrow-space {\\n\\t\\tpadding-left: 4px;\\n\\t\\tpadding-right: 4px;\\n\\t}\\n\\n\\t.right-arrow {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tpadding: 4px;\\n\\t}\\n\\n\\t.right-arrow > div {\\n\\t\\tline-height: 0;\\n\\t\\twidth: 20px;\\n\\t\\theight: 20px;\\n\\t}\\n\\n\\t.hori-divider {\\n\\t\\tpadding-left: 16px;\\n\\t\\tmargin-top: -16px;\\n\\t\\tmargin-bottom: -16px;\\n\\t\\theight: 74px;\\n\\t\\tborder-right: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-bottom-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t}\\n\\n\\t.arrow:hover {\\n\\t\\tbackground-color: rgb(250, 250, 250);\\n\\t\\tborder-color: rgb(231, 232, 234);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8DC,kCAAO,CACN,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IACZ,CACA,gCAAK,CACJ,OAAO,CAAE,IAAI,CAEb,UAAU,CAAE,CAAC,CACb,QAAQ,CAAE,MAAM,CAChB,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,KAAK,CACd,gBAAgB,CAAE,OAAO,CACzB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,QAAQ,CACzB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GACX,CAEA,gCAAK,CACJ,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACb,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CACvB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAC1B,CAEA,sCAAW,CACV,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAChC,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,CAC5B,CAEA,oCAAS,CACR,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CACzB,eAAe,CAAE,aAAa,CAC9B,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC3C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,kBAAkB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACtC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACrC,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GACX,CAEA,sBAAQ,CAAC,mBAAM,CACd,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,aAAa,CAAC,CAAC,UAAU,CACtC,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,OACT,CAmCA,yCAAc,CACb,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,mBAAmB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACvC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC"}`
};
const Index$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedSet;
  let $selectedGame, $$unsubscribe_selectedGame;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedTab, $$unsubscribe_selectedTab;
  $$unsubscribe_selectedSet = subscribe(selectedSet, (value) => value);
  $$unsubscribe_selectedGame = subscribe(selectedGame, (value) => $selectedGame = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  let skillSets = [];
  $$result.css.add(css$5);
  $$unsubscribe_selectedSet();
  $$unsubscribe_selectedGame();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedTab();
  return `<div class="top-nav svelte-ga9n28"><div class="head svelte-ga9n28"><span data-svelte-h="svelte-1g482jj">Progress:</span> ${skillSets ? `<select name="" id="" class="form-control svelte-ga9n28">${each(skillSets, (set) => {
    return `<option${add_attribute("value", set, 0)}>${escape(set.title)}</option>`;
  })}</select>` : ``} </div> <div class="hori-divider svelte-ga9n28"></div> ${$selectedGame || $selectedChapter ? `<div class="go-back"><div data-svelte-h="svelte-nekd5"><i class="fa fa-arrow-left"></i> Go Back</div></div>` : `<div class="nav svelte-ga9n28"><div class="${["tab svelte-ga9n28", $selectedTab === 0 ? "activeTab" : ""].join(" ").trim()}" data-svelte-h="svelte-1d9r150">Lessons</div> <div class="${["tab svelte-ga9n28", $selectedTab === 1 ? "activeTab" : ""].join(" ").trim()}" data-svelte-h="svelte-1ue0i7i">Mastery</div> <br></div>`} </div>`;
});
const css$4 = {
  code: ".expand.svelte-1gjhw63{position:absolute;right:20px;top:10px;color:rgba(104, 110, 71, 0.186)}.wrapper.svelte-1gjhw63{position:relative}.todo.svelte-1gjhw63{position:absolute;left:-24px;top:-8px;color:#e4ebc2;font-size:34px}.learned.svelte-1gjhw63{color:#686e47}.deckHead.svelte-1gjhw63{padding:20px;font-family:Avenir Next, sans-serif;font-size:22px;color:#291f13;margin:10px;background-color:#f0dbc3;border-radius:7px}.chapters.svelte-1gjhw63{list-style-type:disc;font-size:18px;padding-left:28px}.title.svelte-1gjhw63{font-size:24px}.expanded.svelte-1gjhw63{padding:10px;border-top:1px solid #ccc;margin-top:10px}.deckHead.learned.svelte-1gjhw63{background-color:#a4ffbb}.loading.svelte-1gjhw63{width:50px;position:relative;left:-20px;top:0}",
  map: `{"version":3,"file":"Skill.svelte","sources":["Skill.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from '$app/navigation';\\n\\timport API from '$lib/api/api';\\n\\texport let skill;\\n\\timport { user } from '$lib/stores/user';\\n\\timport {\\n\\t\\tselectedGame,\\n\\t\\tselectedChapter,\\n\\t\\tselectedStudent,\\n\\t\\tselectedStudentSkills,\\n\\t\\tloadingStudentSkills\\n\\t} from '../store';\\n\\n\\tlet expanded = false;\\n\\tlet chapters = [];\\n\\tlet openedChapter = -1;\\n\\t// let learned = false;\\n\\n\\t$: learned = $selectedStudentSkills.find((s) => s.passing === true && s.id === skill.id);\\n\\n\\tasync function toggleTodo() {\\n\\t\\tlearned = !learned;\\n\\t\\tif (!$selectedStudent) return;\\n\\t\\tconst res = await API.post('/user_skills.json', {\\n\\t\\t\\tuser_id: $selectedStudent.id,\\n\\t\\t\\tskill_id: skill.id,\\n\\t\\t\\tpassing: learned\\n\\t\\t});\\n\\t}\\n\\n\\tasync function addChapter() {\\n\\t\\tconst chapter = await API.post('/chapters.json', {\\n\\t\\t\\ttitle: 'untitled',\\n\\t\\t\\tskill_id: skill.id\\n\\t\\t});\\n\\n\\t\\tchapters = [...chapters, chapter];\\n\\t}\\n\\n\\tasync function fetchSkill() {\\n\\t\\t// console.log(skill);\\n\\t\\tif (expanded) return (expanded = false);\\n\\t\\texpanded = true;\\n\\t\\tconst response = await API.get(\`/skills/\${skill.id}.json\`);\\n\\t\\tskill.games = response.games;\\n\\t\\tskill.meeting_cards = response.meeting_cards;\\n\\n\\t\\tchapters = skill.games.map((game) => game.chapter);\\n\\t\\tconsole.log({ chapters });\\n\\t\\tif (chapters.length === 1) {\\n\\t\\t\\t// openedChapter = chapters[0].id;\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\n<div class=\\"wrapper\\">\\n\\t<div class=\\"deckHead\\" class:learned on:click={fetchSkill}>\\n\\t\\t<span class=\\"title\\"\\n\\t\\t\\t>{skill.title}\\n\\t\\t\\t<hr style=\\"color:#ccc;margin: 10px;\\" />\\n\\t\\t\\t<small style=\\"font-size; 12px;color: #404040\\">{@html skill.description}</small>\\n\\t\\t</span>\\n\\n\\t\\t{#if $user && $user.admin}\\n\\t\\t\\t<div class=\\"pull-right clean-a btn-warning btn test-now edit-deck\\">\\n\\t\\t\\t\\t<a href=\\"/decks/3/edit\\">Edit</a>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"pull-right clean-a btn-success btn test-now edit-deck\\"\\n\\t\\t\\t\\tstyle=\\"position: absolute; right: -100px;\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<i class=\\"fa fa-toggle-on\\" aria-hidden=\\"true\\" />\\n\\t\\t\\t</div>\\n\\t\\t\\t<span class=\\"btn btn-outline-danger remove-deck\\">Delete</span>\\n\\t\\t{/if}\\n\\n\\t\\t<div class=\\"expand\\">\\n\\t\\t\\t<i class=\\"fa\\" class:fa-expand={true} />\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t{#if $selectedStudent}\\n\\t\\t{#if $loadingStudentSkills}\\n\\t\\t\\t<div class=\\"todo\\" on:click={() => {}}>\\n\\t\\t\\t\\t<img src=\\"/spinner.gif\\" class=\\"loading\\" alt=\\"\\" />\\n\\t\\t\\t</div>\\n\\t\\t{:else}\\n\\t\\t\\t<div class=\\"todo\\" on:click={toggleTodo}>\\n\\t\\t\\t\\t<i\\n\\t\\t\\t\\t\\tclass=\\"fa\\"\\n\\t\\t\\t\\t\\tclass:fa-check-square-o={learned}\\n\\t\\t\\t\\t\\tclass:learned\\n\\t\\t\\t\\t\\tclass:fa-square-o={!learned}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t{/if}\\n\\n\\t{#if expanded}\\n\\t\\t<div class=\\"expanded\\">\\n\\t\\t\\t{#if chapters}\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\tLearn:\\n\\t\\t\\t\\t\\t{#if $user && $user.admin}\\n\\t\\t\\t\\t\\t\\t<i class=\\"fa fa-plus\\" on:click={() => addChapter()} />\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<ul class=\\"chapters\\">\\n\\t\\t\\t\\t\\t{#each chapters.filter((c) => c && c.title) as chapter}\\n\\t\\t\\t\\t\\t\\t<li on:click={selectedChapter.set(chapter)}>\\n\\t\\t\\t\\t\\t\\t\\t{chapter.title}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"btn btn-outline-info\\"><i class=\\"fa fa-link\\" /></div>\\n\\t\\t\\t\\t\\t\\t\\t<a class=\\"btn btn-outline-warning\\" href=\\"/chapters/{chapter.id}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t><i class=\\"fa fa-share\\" /></a\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if skill.games}\\n\\t\\t\\t\\t<div>Practice:</div>\\n\\t\\t\\t\\t<ul class=\\"chapters\\">\\n\\t\\t\\t\\t\\t{#each skill.games as game}\\n\\t\\t\\t\\t\\t\\t<li on:click={() => selectedGame.set(game)}>\\n\\t\\t\\t\\t\\t\\t\\t{game.title}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"btn btn-outline-info\\"><i class=\\"fa fa-link\\" /></div>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.expand {\\n\\t\\tposition: absolute;\\n\\t\\tright: 20px;\\n\\t\\ttop: 10px;\\n\\t\\tcolor: rgba(104, 110, 71, 0.186);\\n\\t}\\n\\t.wrapper {\\n\\t\\tposition: relative;\\n\\t}\\n\\t.courseTitle {\\n\\t\\ttext-align: center;\\n\\t\\t/* font-family: Maragsa; */\\n\\t\\ttext-shadow: 0 5px 6px #fff;\\n\\t\\tfont-size: 79px;\\n\\t\\tborder-radius: 14px;\\n\\t\\tpadding: 0;\\n\\t\\tcolor: #000;\\n\\t}\\n\\n\\t.todo {\\n\\t\\tposition: absolute;\\n\\t\\tleft: -24px;\\n\\t\\ttop: -8px;\\n\\t\\tcolor: #e4ebc2;\\n\\t\\tfont-size: 34px;\\n\\t}\\n\\t.learned {\\n\\t\\tcolor: #686e47;\\n\\t}\\n\\n\\t.deckHead {\\n\\t\\tpadding: 20px;\\n\\t\\tfont-family: Avenir Next, sans-serif;\\n\\t\\tfont-size: 22px;\\n\\t\\tcolor: #291f13;\\n\\t\\tmargin: 10px;\\n\\t\\t/* background: #e4ebc2; */\\n\\t\\tbackground-color: #f0dbc3;\\n\\t\\tborder-radius: 7px;\\n\\t}\\n\\n\\t.chapters {\\n\\t\\tlist-style-type: disc;\\n\\t\\tfont-size: 18px;\\n\\t\\tpadding-left: 28px;\\n\\t}\\n\\n\\t.title {\\n\\t\\tfont-size: 24px;\\n\\t}\\n\\n\\t.expanded {\\n\\t\\tpadding: 10px;\\n\\t\\tborder-top: 1px solid #ccc;\\n\\t\\tmargin-top: 10px;\\n\\t}\\n\\n\\t.deckHead.learned {\\n\\t\\tbackground-color: #a4ffbb;\\n\\t}\\n\\n\\t.loading {\\n\\t\\twidth: 50px;\\n\\t\\tposition: relative;\\n\\t\\tleft: -20px;\\n\\t\\ttop: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAwIC,sBAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAChC,CACA,uBAAS,CACR,QAAQ,CAAE,QACX,CAWA,oBAAM,CACL,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,KAAK,CACX,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IACZ,CACA,uBAAS,CACR,KAAK,CAAE,OACR,CAEA,wBAAU,CACT,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CAAC,IAAI,CAAC,CAAC,UAAU,CACpC,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,IAAI,CAEZ,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAChB,CAEA,wBAAU,CACT,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,IACf,CAEA,qBAAO,CACN,SAAS,CAAE,IACZ,CAEA,wBAAU,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC1B,UAAU,CAAE,IACb,CAEA,SAAS,uBAAS,CACjB,gBAAgB,CAAE,OACnB,CAEA,uBAAS,CACR,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,KAAK,CACX,GAAG,CAAE,CACN"}`
};
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let learned;
  let $selectedStudent, $$unsubscribe_selectedStudent;
  let $selectedStudentSkills, $$unsubscribe_selectedStudentSkills;
  let $user, $$unsubscribe_user;
  let $loadingStudentSkills, $$unsubscribe_loadingStudentSkills;
  $$unsubscribe_selectedStudent = subscribe(selectedStudent, (value) => $selectedStudent = value);
  $$unsubscribe_selectedStudentSkills = subscribe(selectedStudentSkills, (value) => $selectedStudentSkills = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_loadingStudentSkills = subscribe(loadingStudentSkills, (value) => $loadingStudentSkills = value);
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0) $$bindings.skill(skill);
  $$result.css.add(css$4);
  learned = $selectedStudentSkills.find((s) => s.passing === true && s.id === skill.id);
  $$unsubscribe_selectedStudent();
  $$unsubscribe_selectedStudentSkills();
  $$unsubscribe_user();
  $$unsubscribe_loadingStudentSkills();
  return ` <div class="wrapper svelte-1gjhw63"><div class="${["deckHead svelte-1gjhw63", learned ? "learned" : ""].join(" ").trim()}"><span class="title svelte-1gjhw63">${escape(skill.title)} <hr style="color:#ccc;margin: 10px;"> <small style="font-size; 12px;color: #404040"><!-- HTML_TAG_START -->${skill.description}<!-- HTML_TAG_END --></small></span> ${$user && $user.admin ? `<div class="pull-right clean-a btn-warning btn test-now edit-deck" data-svelte-h="svelte-1nvou16"><a href="/decks/3/edit">Edit</a></div> <div class="pull-right clean-a btn-success btn test-now edit-deck" style="position: absolute; right: -100px;" data-svelte-h="svelte-11lroes"><i class="fa fa-toggle-on" aria-hidden="true"></i></div> <span class="btn btn-outline-danger remove-deck" data-svelte-h="svelte-dfdnsd">Delete</span>` : ``} <div class="expand svelte-1gjhw63"><i class="${["fa", "fa-expand"].join(" ").trim()}"></i></div></div> ${$selectedStudent ? `${$loadingStudentSkills ? `<div class="todo svelte-1gjhw63" data-svelte-h="svelte-1ctr0zq"><img src="/spinner.gif" class="loading svelte-1gjhw63" alt=""></div>` : `<div class="todo svelte-1gjhw63"><i class="${[
    "fa svelte-1gjhw63",
    (learned ? "fa-check-square-o" : "") + " " + (learned ? "learned" : "") + " " + (!learned ? "fa-square-o" : "")
  ].join(" ").trim()}"></i></div>`}` : ``} ${``} </div>`;
});
const css$3 = {
  code: ".wrapper.svelte-2iil3i{background:#ffffeb;font-family:GreycliffCF-Light;background-size:cover;border-radius:8px;padding:70px 50px;font-size:16px;box-sizing:border-box;max-width:700px;color:#000;position:relative;margin:100px auto 20px;margin-top:0}",
  map: `{"version":3,"file":"Set.svelte","sources":["Set.svelte"],"sourcesContent":["<script>\\n\\timport { openModal } from 'svelte-modals';\\n\\timport Modal from '$lib/components/Modal/Index.svelte';\\n\\timport Api from '$lib/api/api';\\n\\texport let set;\\n\\n\\timport { user } from '$lib/stores/user';\\n\\timport Skill from './Skill.svelte';\\n\\n\\tlet expanded = false;\\n\\n\\tlet bankSkillsChanged = 0; // Variable to track changes in $user.bank_skills\\n\\n\\t// Function to increment the change counter\\n\\tconst incrementChangeCounter = () => {\\n\\t\\tbankSkillsChanged += 1;\\n\\t};\\n\\n\\tasync function addSkillToSet() {\\n\\t\\tconst newSkill = await Api.post('/skills.json', {\\n\\t\\t\\ttitle: 'NewSkill',\\n\\t\\t\\tdescription: '',\\n\\t\\t\\tposition: set.skills[set.skills.length - 1],\\n\\t\\t\\tsubject: set.title,\\n\\t\\t\\tskills_set_id: set.id\\n\\t\\t});\\n\\t\\tset.skills = [...set.skills, newSkill];\\n\\t}\\n\\n\\tasync function removeSkill(skill) {\\n\\t\\tconst response = await Api.delete(\`/skills/\${skill.id}.json\`);\\n\\t\\tconsole.log(response);\\n\\t\\tset.skills = set.skills.filter((s) => s.id !== skill.id);\\n\\t}\\n\\n\\tasync function moveSkill(skill, direction) {\\n\\t\\tconst response = await Api.post(\`/skills/move.json\`, {\\n\\t\\t\\tskill_id: skill.id,\\n\\t\\t\\tdirection: direction\\n\\t\\t});\\n\\n\\t\\t// const arrayToBeRearranged = [...set.skills];\\n\\n\\t\\tresponse.forEach((ns) => (set.skills.filter((s) => s.id === ns.id)[0].position = ns.position));\\n\\n\\t\\tset.skills = set.skills.sort((a, b) => {\\n\\t\\t\\tif (a.position < b.position) return -1;\\n\\t\\t\\tif (a.position > b.position) return 1;\\n\\t\\t\\treturn 0;\\n\\t\\t});\\n\\t\\t// console.log(response);\\n\\t}\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<!-- <h3 class=\\"courseTitle\\">\\n\\t\\t{set.title}\\n\\t</h3> -->\\n\\n\\t<div class=\\"decks\\">\\n\\t\\t{#each set.skills as skill}\\n\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t<Skill {skill} />\\n\\t\\t{/each}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tbackground: #ffffeb;\\n\\t\\tfont-family: GreycliffCF-Light;\\n\\t\\tbackground-size: cover;\\n\\t\\tborder-radius: 8px;\\n\\t\\t/* box-shadow: 0 20px 20px 0 rgba(35, 35, 35, 0.26), 0 9px 45px 0 hsla(0, 0%, 6%, 0.53); */\\n\\t\\tpadding: 70px 50px;\\n\\t\\tfont-size: 16px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tmax-width: 700px;\\n\\t\\tcolor: #000;\\n\\t\\tposition: relative;\\n\\t\\tmargin: 100px auto 20px;\\n\\t\\tmargin-top: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoEC,sBAAS,CACR,UAAU,CAAE,OAAO,CACnB,WAAW,CAAE,iBAAiB,CAC9B,eAAe,CAAE,KAAK,CACtB,aAAa,CAAE,GAAG,CAElB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,CACvB,UAAU,CAAE,CACb"}`
};
const Set$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { set } = $$props;
  if ($$props.set === void 0 && $$bindings.set && set !== void 0) $$bindings.set(set);
  $$result.css.add(css$3);
  return `<div class="wrapper svelte-2iil3i"> <div class="decks">${each(set.skills, (skill) => {
    return ` ${validate_component(Skill, "Skill").$$render($$result, { skill }, {}, {})}`;
  })}</div> </div>`;
});
const css$2 = {
  code: ".wrapper.svelte-2iil3i{background:#ffffeb;font-family:GreycliffCF-Light;background-size:cover;border-radius:8px;padding:70px 50px;font-size:16px;box-sizing:border-box;max-width:700px;color:#000;position:relative;margin:100px auto 20px;margin-top:0}",
  map: `{"version":3,"file":"Mastery.svelte","sources":["Mastery.svelte"],"sourcesContent":["<script>\\n\\timport Skill from './Mastery/Skill.svelte';\\n<\/script>\\n\\n<div class=\\"wrapper\\" />\\n\\n<style>\\n\\t.wrapper {\\n\\t\\tbackground: #ffffeb;\\n\\t\\tfont-family: GreycliffCF-Light;\\n\\t\\tbackground-size: cover;\\n\\t\\tborder-radius: 8px;\\n\\t\\t/* box-shadow: 0 20px 20px 0 rgba(35, 35, 35, 0.26), 0 9px 45px 0 hsla(0, 0%, 6%, 0.53); */\\n\\t\\tpadding: 70px 50px;\\n\\t\\tfont-size: 16px;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tmax-width: 700px;\\n\\t\\tcolor: #000;\\n\\t\\tposition: relative;\\n\\t\\tmargin: 100px auto 20px;\\n\\t\\tmargin-top: 0;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAOC,sBAAS,CACR,UAAU,CAAE,OAAO,CACnB,WAAW,CAAE,iBAAiB,CAC9B,eAAe,CAAE,KAAK,CACtB,aAAa,CAAE,GAAG,CAElB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,UAAU,CACtB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,CACvB,UAAU,CAAE,CACb"}`
};
const Mastery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="wrapper svelte-2iil3i"></div>`;
});
const css$1 = {
  code: ".results.svelte-15l1og5 li.svelte-15l1og5{padding:10px}.flex.svelte-15l1og5.svelte-15l1og5{display:flex;width:350px}.viewingAs.svelte-15l1og5.svelte-15l1og5{padding:10px;font-size:34px}.name.svelte-15l1og5.svelte-15l1og5{background:#ffffac;padding:10px 20px;border-radius:10px}.results.svelte-15l1og5 li.svelte-15l1og5{border:1px solid #eee;margin:6px}.results.svelte-15l1og5 li.svelte-15l1og5:hover{border-color:#000;background-color:#ffffac}",
  map: `{"version":3,"file":"Search.svelte","sources":["Search.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport save from '$lib/functions/debounce';\\n\\timport { user } from '$lib/stores/user';\\n\\n\\tlet input;\\n\\tlet results = [];\\n\\tlet selectedUser;\\n\\texport let selectStudent;\\n\\texport let emptyStudent;\\n\\n\\tasync function search() {\\n\\t\\tresults = await save(\\n\\t\\t\\t'/students/search',\\n\\t\\t\\t{\\n\\t\\t\\t\\tname: input,\\n\\t\\t\\t\\tteacher_id: $user.id\\n\\t\\t\\t},\\n\\t\\t\\t'post'\\n\\t\\t);\\n\\n\\t\\tconsole.log({ results });\\n\\t}\\n\\n\\tfunction selectUser(user) {\\n\\t\\tselectedUser = user;\\n\\t\\tselectStudent(user);\\n\\t}\\n<\/script>\\n\\n{#if selectedUser}\\n\\t<div class=\\"viewingAs\\">\\n\\t\\tProgress for:\\n\\t\\t<span class=\\"name\\">\\n\\t\\t\\t{selectedUser.first_name}\\n\\n\\t\\t\\t{selectedUser.last_name}\\n\\t\\t</span>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"fa fa-times\\"\\n\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\tselectedUser = null;\\n\\t\\t\\t\\tresults = null;\\n\\t\\t\\t\\tinput = '';\\n\\t\\t\\t\\temptyStudent();\\n\\t\\t\\t}}\\n\\t\\t/>\\n\\t</div>\\n{:else}\\n\\t<div class=\\"flex\\">\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\tplaceholder=\\"Search Student...\\"\\n\\t\\t\\ton:keyup={search}\\n\\t\\t\\tbind:value={input}\\n\\t\\t/>\\n\\t\\t<div class=\\"btn btn-outline-info\\" on:click={search}><i class=\\"fa fa-search\\" /></div>\\n\\t</div>\\n\\n\\t{#if results}\\n\\t\\t<ul class=\\"results clean-list\\">\\n\\t\\t\\t{#each results as user}\\n\\t\\t\\t\\t<li on:click={() => selectUser(user)}>{user.first_name} {user.last_name}</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t{/if}\\n{/if}\\n\\n<style>\\n\\t.results li {\\n\\t\\tpadding: 10px;\\n\\t}\\n\\t.flex {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 350px;\\n\\t}\\n\\n\\t.viewingAs {\\n\\t\\tpadding: 10px;\\n\\t\\tfont-size: 34px;\\n\\t}\\n\\n\\t.name {\\n\\t\\tbackground: #ffffac;\\n\\t\\tpadding: 10px 20px;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\t.results li {\\n\\t\\tborder: 1px solid #eee;\\n\\t\\tmargin: 6px;\\n\\t}\\n\\n\\t.results li:hover {\\n\\t\\tborder-color: #000;\\n\\t\\tbackground-color: #ffffac;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAsEC,uBAAQ,CAAC,iBAAG,CACX,OAAO,CAAE,IACV,CACA,mCAAM,CACL,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KACR,CAEA,wCAAW,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IACZ,CAEA,mCAAM,CACL,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,IAChB,CAEA,uBAAQ,CAAC,iBAAG,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,GACT,CAEA,uBAAQ,CAAC,iBAAE,MAAO,CACjB,YAAY,CAAE,IAAI,CAClB,gBAAgB,CAAE,OACnB"}`
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let input;
  let results = [];
  let { selectStudent } = $$props;
  let { emptyStudent } = $$props;
  if ($$props.selectStudent === void 0 && $$bindings.selectStudent && selectStudent !== void 0) $$bindings.selectStudent(selectStudent);
  if ($$props.emptyStudent === void 0 && $$bindings.emptyStudent && emptyStudent !== void 0) $$bindings.emptyStudent(emptyStudent);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `${`<div class="flex svelte-15l1og5"><input type="text" class="form-control" placeholder="Search Student..."${add_attribute("value", input, 0)}> <div class="btn btn-outline-info" data-svelte-h="svelte-1upiw05"><i class="fa fa-search"></i></div></div> ${results ? `<ul class="results clean-list svelte-15l1og5">${each(results, (user2) => {
    return `<li class="svelte-15l1og5">${escape(user2.first_name)} ${escape(user2.last_name)}</li>`;
  })}</ul>` : ``}`}`;
});
const css = {
  code: ".content.svelte-o1hqf3{background:#fafafa;height:100vh;overflow-y:scroll}.wrapper.svelte-o1hqf3{height:90vh;overflow-y:scroll;background:#ffffeb}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport Nav from './Nav/Index.svelte';\\n\\timport Api from '$lib/api/api.js';\\n\\timport { onMount } from 'svelte';\\n\\timport Set from './Set/Set.svelte';\\n\\timport Mastery from './Mastery.svelte';\\n\\timport {\\n\\t\\tselectedSet,\\n\\t\\tselectedGame,\\n\\t\\tselectedChapter,\\n\\t\\tselectedStudent,\\n\\t\\tselectedStudentSkills,\\n\\t\\tloadingStudentSkills,\\n\\t\\tselectedTab\\n\\t} from './store';\\n\\timport Game from '../Games/Game/Game.svelte';\\n\\t// import Chapter from './Chapter.svelte';\\n\\timport Chapter from '$lib/components/Chapters/Show.svelte';\\n\\t// $: selectedSet = skillSets.find((s) => s.title === $selectedSet.id);\\n\\timport SearchStudents from '../Students/Search.svelte';\\n\\timport { user } from '$lib/stores/user';\\n\\timport API from '$lib/api/api.js';\\n\\n\\tfunction selectStudent(payload) {\\n\\t\\tselectedStudent.set(payload);\\n\\t\\tfetchStudentSkills(payload);\\n\\t}\\n\\n\\tasync function fetchStudentSkills(student) {\\n\\t\\tloadingStudentSkills.set(true);\\n\\t\\tconst studentSkills = await API.get(\`/students/\${student.id}/skills.json\`);\\n\\t\\tselectedStudentSkills.set(studentSkills);\\n\\t\\tconsole.log({ studentSkills });\\n\\t\\tloadingStudentSkills.set(false);\\n\\t}\\n\\n\\tfunction emptyStudent() {\\n\\t\\tselectedStudent.set(null);\\n\\t\\tselectedStudentSkills.set([]);\\n\\t}\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t<Nav />\\n\\t{#if $user && $user.teacher}\\n\\t\\t<SearchStudents {selectStudent} {emptyStudent} />\\n\\t{/if}\\n\\n\\t{#if $selectedTab === 0}\\n\\t\\t{#if $selectedGame}\\n\\t\\t\\t<Game game={$selectedGame} />\\n\\t\\t{:else if $selectedChapter}\\n\\t\\t\\t<Chapter chapter={$selectedChapter} overrideGate={true} />\\n\\t\\t{:else}\\n\\t\\t\\t<div class=\\"wrapper\\">\\n\\t\\t\\t\\t{#if $selectedSet}\\n\\t\\t\\t\\t\\t<Set set={$selectedSet} />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t{:else if $selectedTab === 1}\\n\\t\\t<div class=\\"wrapper\\">\\n\\t\\t\\t<Mastery />\\n\\t\\t</div>{/if}\\n</div>\\n\\n<style>\\n\\t.content {\\n\\t\\tbackground: #fafafa;\\n\\t\\theight: 100vh;\\n\\t\\toverflow-y: scroll;\\n\\t}\\n\\t.wrapper {\\n\\t\\theight: 90vh;\\n\\t\\toverflow-y: scroll;\\n\\n\\t\\tbackground: #ffffeb;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmEC,sBAAS,CACR,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,MACb,CACA,sBAAS,CACR,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAAM,CAElB,UAAU,CAAE,OACb"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $selectedTab, $$unsubscribe_selectedTab;
  let $selectedGame, $$unsubscribe_selectedGame;
  let $selectedChapter, $$unsubscribe_selectedChapter;
  let $selectedSet, $$unsubscribe_selectedSet;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  $$unsubscribe_selectedGame = subscribe(selectedGame, (value) => $selectedGame = value);
  $$unsubscribe_selectedChapter = subscribe(selectedChapter, (value) => $selectedChapter = value);
  $$unsubscribe_selectedSet = subscribe(selectedSet, (value) => $selectedSet = value);
  function selectStudent(payload) {
    selectedStudent.set(payload);
    fetchStudentSkills(payload);
  }
  async function fetchStudentSkills(student) {
    loadingStudentSkills.set(true);
    const studentSkills = await API.get(`/students/${student.id}/skills.json`);
    selectedStudentSkills.set(studentSkills);
    console.log({ studentSkills });
    loadingStudentSkills.set(false);
  }
  function emptyStudent() {
    selectedStudent.set(null);
    selectedStudentSkills.set([]);
  }
  $$result.css.add(css);
  $$unsubscribe_user();
  $$unsubscribe_selectedTab();
  $$unsubscribe_selectedGame();
  $$unsubscribe_selectedChapter();
  $$unsubscribe_selectedSet();
  return `<div class="content svelte-o1hqf3">${validate_component(Index$1, "Nav").$$render($$result, {}, {}, {})} ${$user && $user.teacher ? `${validate_component(Search, "SearchStudents").$$render($$result, { selectStudent, emptyStudent }, {}, {})}` : ``} ${$selectedTab === 0 ? `${$selectedGame ? `${validate_component(Game, "Game").$$render($$result, { game: $selectedGame }, {}, {})}` : `${$selectedChapter ? `${validate_component(Show, "Chapter").$$render(
    $$result,
    {
      chapter: $selectedChapter,
      overrideGate: true
    },
    {},
    {}
  )}` : `<div class="wrapper svelte-o1hqf3">${$selectedSet ? `${validate_component(Set$1, "Set").$$render($$result, { set: $selectedSet }, {}, {})}` : ``}</div>`}`}` : `${$selectedTab === 1 ? `<div class="wrapper svelte-o1hqf3">${validate_component(Mastery, "Mastery").$$render($$result, {}, {}, {})}</div>` : ``}`} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Progress").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
