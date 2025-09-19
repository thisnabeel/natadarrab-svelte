import { c as create_ssr_component, d as escape, e as each, v as validate_component } from "./ssr.js";
/* empty css                                    */
const css$2 = {
  code: ".unhovered.svelte-1evs966.svelte-1evs966{color:rgb(221, 221, 221)}.box.svelte-1evs966 .english.svelte-1evs966{display:none;position:absolute;bottom:-40px;background:#fff;padding:10px;width:max-content;left:0}.box.svelte-1evs966 .transliteration.svelte-1evs966{display:none;position:absolute;top:-40px;background:#fff;padding:10px;width:max-content;left:0}.box.svelte-1evs966.svelte-1evs966:hover{background:#fff;z-index:999999999}.box.svelte-1evs966:hover .english.svelte-1evs966{display:block\n    }.box.svelte-1evs966:hover .transliteration.svelte-1evs966{display:block;background:rgb(255, 215, 255)\n    }.word.svelte-1evs966.svelte-1evs966{font-size:28px}.box.svelte-1evs966.svelte-1evs966{display:inline-block;margin-right:10px;margin-left:0;position:relative;z-index:9999}",
  map: `{"version":3,"file":"Box.svelte","sources":["Box.svelte"],"sourcesContent":["<script>\\n    export let box;\\n    export let index;\\n    export let hover;\\n    export let unHover;\\n    export let hoveredIndex;\\n<\/script>\\n\\n<div class=\\"box\\" \\n    class:unhovered={(hoveredIndex > -1) && hoveredIndex !== index} \\n    class:hovered={(hoveredIndex > -1) && hoveredIndex === index} \\n>\\n    <span class=\\"word\\" \\n        on:mouseover={() => hover(index)}\\n        on:mouseleave={unHover}\\n    >{box.word.replace(/[\\\\u0591-\\\\u05AF]/g, '')}</span>\\n    <span class=\\"english\\">{box.english}</span>\\n    <span class=\\"transliteration\\">{box.transliteration}</span>\\n</div>\\n\\n<style>\\n\\n    .unhovered {\\n        color: rgb(221, 221, 221);\\n    }\\n\\n    .box .english {\\n        display: none;\\n        position: absolute;\\n        bottom: -40px;\\n        background: #fff;\\n        padding: 10px;\\n        width: max-content;\\n        left: 0;\\n    }\\n\\n    .box .transliteration {\\n        display: none;\\n        position: absolute;\\n        top: -40px;\\n        background: #fff;\\n        padding: 10px;\\n        width: max-content;\\n        left: 0;\\n    }\\n    .box:hover {\\n        background: #fff;\\n        z-index: 999999999;\\n    }\\n    .box:hover .english { \\n        display:block\\n    }\\n\\n    .box:hover .transliteration { \\n        display:block;\\n        background: rgb(255, 215, 255)\\n    }\\n\\n    .word {\\n            font-size: 28px;\\n    }\\n    .box {\\n        display: inline-block;\\n        margin-right: 10px;\\n        margin-left: 0;\\n        position: relative;\\n        /* z-index: 999999; */\\n        z-index: 9999;\\n    }\\n\\n    .hebrew.box {\\n        margin-left: 10px;\\n        margin-right: 0;\\n    }\\n</style>"],"names":[],"mappings":"AAsBI,wCAAW,CACP,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC5B,CAEA,mBAAI,CAAC,uBAAS,CACV,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,WAAW,CAClB,IAAI,CAAE,CACV,CAEA,mBAAI,CAAC,+BAAiB,CAClB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CACV,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,WAAW,CAClB,IAAI,CAAE,CACV,CACA,kCAAI,MAAO,CACP,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,SACb,CACA,mBAAI,MAAM,CAAC,uBAAS,CAChB,QAAQ;AAChB,IAAI,CAEA,mBAAI,MAAM,CAAC,+BAAiB,CACxB,QAAQ,KAAK,CACb,UAAU,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG;AACrC,IAAI,CAEA,mCAAM,CACE,SAAS,CAAE,IACnB,CACA,kCAAK,CACD,OAAO,CAAE,YAAY,CACrB,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,CAAC,CACd,QAAQ,CAAE,QAAQ,CAElB,OAAO,CAAE,IACb"}`
};
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { box } = $$props;
  let { index } = $$props;
  let { hover } = $$props;
  let { unHover } = $$props;
  let { hoveredIndex } = $$props;
  if ($$props.box === void 0 && $$bindings.box && box !== void 0) $$bindings.box(box);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0) $$bindings.hover(hover);
  if ($$props.unHover === void 0 && $$bindings.unHover && unHover !== void 0) $$bindings.unHover(unHover);
  if ($$props.hoveredIndex === void 0 && $$bindings.hoveredIndex && hoveredIndex !== void 0) $$bindings.hoveredIndex(hoveredIndex);
  $$result.css.add(css$2);
  return `<div class="${[
    "box svelte-1evs966",
    (hoveredIndex > -1 && hoveredIndex !== index ? "unhovered" : "") + " " + (hoveredIndex > -1 && hoveredIndex === index ? "hovered" : "")
  ].join(" ").trim()}"><span class="word svelte-1evs966">${escape(box.word.replace(/[\u0591-\u05AF]/g, ""))}</span> <span class="english svelte-1evs966">${escape(box.english)}</span> <span class="transliteration svelte-1evs966">${escape(box.transliteration)}</span> </div>`;
});
const css$1 = {
  code: ".original.svelte-xronj1.svelte-xronj1{display:flex}.original.svelte-xronj1 .boxes.svelte-xronj1{padding:20px;background:rgba(255, 255, 255, 0.404);border-radius:10px}.original.svelte-xronj1 .ref.svelte-xronj1{width:70px;text-align:center;margin:0 10px;height:fit-content}.hebrew.svelte-xronj1.svelte-xronj1{direction:rtl;text-align:right;font-family:system-ui}.original.svelte-xronj1 a{text-decoration:none;color:#000}",
  map: `{"version":3,"file":"OriginalVerse.svelte","sources":["OriginalVerse.svelte"],"sourcesContent":["<script>\\n    import Box from \\"../Boxes/Box.svelte\\"\\n    export let verse;\\n    export let index;\\n \\n\\n    $: hebrew = verse.ref.split(\\":\\")[0] < 40;\\n\\n    let hoveredIndex = -1;\\n\\n    function setHovered(payload){\\n        hoveredIndex = payload;\\n    }\\n\\n    function unHover() {\\n        hoveredIndex = -1;\\n    }\\n<\/script>\\n\\n<div class=\\"original\\" \\n    class:hebrew={hebrew}\\n    class:unhovered={(hoveredIndex > -1) && hoveredIndex !== index} \\n    class:hovered={(hoveredIndex > -1) && hoveredIndex === index} \\n>\\n    <span class=\\"ref\\">{verse.ref.split(\\":\\").slice(1, 3).join(':')}</span>\\n    <div class=\\"boxes\\">\\n        {#each verse.boxes || [] as box, index}\\n            <Box {box} {hebrew} hover={setHovered} unHover={unHover} {hoveredIndex}  {index}></Box>\\n        {/each}\\n    </div>\\n</div>\\n<style>\\n\\n\\n\\n    .original {\\n        display: flex;\\n    }\\n\\n    .original .boxes {\\n        padding: 20px;\\n        background: rgba(255, 255, 255, 0.404);\\n        border-radius: 10px;\\n    }\\n    .original .ref {\\n        width: 70px;\\n        text-align: center;\\n        margin: 0 10px;\\n        height: fit-content;\\n    }\\n\\n    .hebrew {\\n    direction: rtl;\\n    text-align: right;\\n    font-family: system-ui;\\n    }\\n\\n.original .content {\\n    font-size: 28px;\\n}\\n\\n.original :global(a) {\\n    text-decoration: none;\\n    color: #000;\\n}\\n\\n</style>"],"names":[],"mappings":"AAmCI,qCAAU,CACN,OAAO,CAAE,IACb,CAEA,uBAAS,CAAC,oBAAO,CACb,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CACtC,aAAa,CAAE,IACnB,CACA,uBAAS,CAAC,kBAAK,CACX,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,MAAM,CAAE,WACZ,CAEA,mCAAQ,CACR,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,SACb,CAMJ,uBAAS,CAAS,CAAG,CACjB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IACX"}`
};
const OriginalVerse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hebrew;
  let { verse } = $$props;
  let { index } = $$props;
  let hoveredIndex = -1;
  function setHovered(payload) {
    hoveredIndex = payload;
  }
  function unHover() {
    hoveredIndex = -1;
  }
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0) $$bindings.verse(verse);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$1);
  hebrew = verse.ref.split(":")[0] < 40;
  return `<div class="${[
    "original svelte-xronj1",
    (hebrew ? "hebrew" : "") + " " + (hoveredIndex > -1 && hoveredIndex !== index ? "unhovered" : "") + " " + (hoveredIndex > -1 && hoveredIndex === index ? "hovered" : "")
  ].join(" ").trim()}"><span class="ref svelte-xronj1">${escape(verse.ref.split(":").slice(1, 3).join(":"))}</span> <div class="boxes svelte-xronj1">${each(verse.boxes || [], (box, index2) => {
    return `${validate_component(Box, "Box").$$render(
      $$result,
      {
        box,
        hebrew,
        hover: setHovered,
        unHover,
        hoveredIndex,
        index: index2
      },
      {},
      {}
    )}`;
  })}</div> </div>`;
});
const css = {
  code: ".greek.svelte-17rdxg9.svelte-17rdxg9{text-align:left;direction:ltr}.english.svelte-17rdxg9.svelte-17rdxg9{display:flex}.english.svelte-17rdxg9 .ref.svelte-17rdxg9{width:70px;text-align:center;margin:0 10px;height:fit-content}.verse.svelte-17rdxg9.svelte-17rdxg9{padding:8px;margin:4px;background-color:rgb(255 243 234);border-radius:10px;line-height:initial}.hebrew.svelte-17rdxg9.svelte-17rdxg9{direction:rtl;text-align:right}.verse.svelte-17rdxg9 .ref.svelte-17rdxg9{background:#c1c1ff54;color:#040404;padding:4px 16px;border-radius:10px}",
  map: `{"version":3,"file":"Verse.svelte","sources":["Verse.svelte"],"sourcesContent":["<script>\\n\\timport OriginalVerse from './OriginalVerse.svelte';\\n\\n\\texport let verse;\\n\\texport let index;\\n\\texport let lang = null;\\n\\n\\tlet hoveredIndex = -1;\\n\\n\\tfunction setHovered(payload) {\\n\\t\\thoveredIndex = payload;\\n\\t}\\n\\n\\tfunction unHover() {\\n\\t\\thoveredIndex = -1;\\n\\t}\\n<\/script>\\n\\n<div class=\\"verse\\" class:greek={lang === 'greek'} class:hebrew={lang === 'hebrew'}>\\n\\t<div class=\\"english\\">\\n\\t\\t<span class=\\"ref\\">{verse.ref.split(':').slice(1, 3).join(':')}</span>\\n\\t\\t<span class=\\"content\\">{verse.english}</span>\\n\\t</div>\\n\\n\\t<OriginalVerse {verse} hover={setHovered} {unHover} {hoveredIndex} {index} />\\n</div>\\n\\n<style>\\n\\t.greek {\\n\\t\\ttext-align: left;\\n\\t\\tdirection: ltr;\\n\\t}\\n\\t.english,\\n\\t.original {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\t.english .ref,\\n\\t.original .ref {\\n\\t\\twidth: 70px;\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 0 10px;\\n\\t\\theight: fit-content;\\n\\t}\\n\\t.verse {\\n\\t\\tpadding: 8px;\\n\\t\\tmargin: 4px;\\n\\t\\t/* background-color: rgb(221, 245, 255); */\\n\\n\\t\\tbackground-color: rgb(255 243 234);\\n\\t\\tborder-radius: 10px;\\n\\t\\tline-height: initial;\\n\\t}\\n\\n\\t.hebrew {\\n\\t\\tdirection: rtl;\\n\\t\\ttext-align: right;\\n\\t}\\n\\n\\t.verse .ref {\\n\\t\\tbackground: #c1c1ff54;\\n\\t\\tcolor: #040404;\\n\\t\\tpadding: 4px 16px;\\n\\t\\tborder-radius: 10px;\\n\\t}\\n\\n\\t.bookSelector {\\n\\t\\twidth: fit-content;\\n\\t\\tdisplay: block;\\n\\t\\tmargin: 0 auto;\\n\\t\\tfont-size: 34px;\\n\\t}\\n\\n\\t.selectors {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: max-content;\\n\\t\\tmargin: 0px auto;\\n\\t}\\n\\n\\t.selectors select {\\n\\t\\tdisplay: inline-block;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,oCAAO,CACN,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,GACZ,CACA,sCACU,CACT,OAAO,CAAE,IACV,CACA,uBAAQ,CAAC,mBACM,CACd,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,MAAM,CAAE,WACT,CACA,oCAAO,CACN,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,GAAG,CAGX,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAClC,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,OACd,CAEA,qCAAQ,CACP,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,KACb,CAEA,qBAAM,CAAC,mBAAK,CACX,UAAU,CAAE,SAAS,CACrB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,IAChB"}`
};
const Verse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { verse } = $$props;
  let { index } = $$props;
  let { lang = null } = $$props;
  let hoveredIndex = -1;
  function setHovered(payload) {
    hoveredIndex = payload;
  }
  function unHover() {
    hoveredIndex = -1;
  }
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0) $$bindings.verse(verse);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0) $$bindings.lang(lang);
  $$result.css.add(css);
  return `<div class="${[
    "verse svelte-17rdxg9",
    (lang === "greek" ? "greek" : "") + " " + (lang === "hebrew" ? "hebrew" : "")
  ].join(" ").trim()}"><div class="english svelte-17rdxg9"><span class="ref svelte-17rdxg9">${escape(verse.ref.split(":").slice(1, 3).join(":"))}</span> <span class="content">${escape(verse.english)}</span></div> ${validate_component(OriginalVerse, "OriginalVerse").$$render(
    $$result,
    {
      verse,
      hover: setHovered,
      unHover,
      hoveredIndex,
      index
    },
    {},
    {}
  )} </div>`;
});
export {
  Verse as V
};
