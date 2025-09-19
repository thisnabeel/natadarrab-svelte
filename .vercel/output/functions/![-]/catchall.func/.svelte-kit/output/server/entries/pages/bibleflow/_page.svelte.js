import { c as create_ssr_component, f as add_attribute, e as each, d as escape, v as validate_component, a as subscribe } from "../../../chunks/ssr.js";
import { A as API } from "../../../chunks/api.js";
/* empty css                                                  */
import { V as Verse } from "../../../chunks/Verse.js";
import { u as user } from "../../../chunks/user.js";
function getBooks() {
  return [
    {
      collection: "ot",
      category: "Torah",
      books: [
        "Genesis",
        "Exodus",
        "Leviticus",
        "Numbers",
        "Deuteronomy"
      ]
    },
    {
      collection: "ot",
      category: "Historical",
      books: [
        "Joshua",
        "Judges",
        "Ruth",
        "1 Samuel",
        "2 Samuel",
        "1 Kings",
        "2 Kings",
        "1 Chronicles",
        "2 Chronicles",
        "Ezra",
        "Nehemiah",
        "Esther"
      ]
    },
    {
      collection: "ot",
      category: "Wisdom & Poetry",
      books: [
        "Job",
        "Psalms",
        "Proverbs",
        "Ecclesiastes",
        "Song Of Songs"
      ]
    },
    {
      collection: "ot",
      category: "Major Prophet",
      books: [
        "Isaiah",
        "Jeremiah"
      ]
    },
    {
      collection: "ot",
      category: "Wisdom & Poetry",
      books: [
        "Lamentations"
      ]
    },
    {
      collection: "ot",
      category: "Major Prophet",
      books: [
        "Ezekiel",
        "Daniel"
      ]
    },
    {
      collection: "ot",
      category: "Minor Prophet",
      books: [
        "Ezekiel",
        "Daniel",
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah",
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah",
        "Haggai",
        "Zechariah",
        "Malachi"
      ]
    },
    {
      collection: "nt",
      category: "Gospel",
      books: [
        "Matthew",
        "Mark"
      ]
    },
    {
      collection: "nt",
      category: "Epistle",
      books: [
        "Luke"
      ]
    },
    {
      collection: "nt",
      category: "Gospel",
      books: [
        "John"
      ]
    },
    {
      collection: "nt",
      category: "Historical",
      books: [
        "Acts"
      ]
    },
    {
      collection: "nt",
      category: "Epistle",
      books: [
        "Romans",
        "1 Corinthians",
        "2 Corinthians",
        "Galatians",
        "Ephesians",
        "Philippians",
        "Colossians",
        "1 Thessalonians",
        "2 Thessalonians",
        "1 Timothy",
        "2 Timothy",
        "Titus",
        "Philemon",
        "Hebrews"
      ]
    },
    {
      collection: "nt",
      category: "Sermon",
      books: [
        "James"
      ]
    },
    {
      collection: "nt",
      category: "Epistle",
      books: [
        "1 Peter",
        "2 Peter",
        "1 John",
        "2 John",
        "3 John",
        "Jude"
      ]
    },
    {
      collection: "nt",
      category: "Prophetic",
      books: [
        "Revelation"
      ]
    }
  ];
}
const css$4 = {
  code: ".wrapper.svelte-qnesrj{padding:0 4vw}.containers.svelte-qnesrj{list-style:none;display:inline}.segment-adder.svelte-qnesrj{position:fixed;z-index:999;background:#c1f5ff;display:block;width:100%;border:2px solid #0dcbf0;padding:24px}",
  map: `{"version":3,"file":"EditSegments.svelte","sources":["EditSegments.svelte"],"sourcesContent":["<script>\\nimport API from \\"$lib/api/api\\";\\nimport { onMount } from \\"svelte\\";\\nimport getBooks from \\"./books\\"\\nimport SegmentEdit from \\"./Segment/Edit.svelte\\";\\n\\n\\n    let newSegmentDescription = \\"\\";\\n    let activeContainer = {\\n        id: null\\n    }\\n    let newContainerTitle = \\"\\";\\n    let containers = [];\\n    let segments = [];\\n    let bibleBooks = getBooks().map((c) => c.books.map((b)=> b)).flat();\\n    let selectedBookPosition = 1;\\n\\n    $: if (activeContainer.id) {\\n        getContainerSegments();\\n    }\\n\\n\\n    onMount(() => {\\n        getContainers();\\n\\n    })\\n\\n    async function addSegment() {\\n        const segment = await API.post(\\"/bible_segments.json\\", {\\n            bible_segment: {\\n                description: newSegmentDescription,\\n                position: segments.length + 1,\\n                bible_segments_container_id: activeContainer.id,\\n                bible_book_id: selectedBookPosition\\n            },\\n        })\\n\\n        segments = [...segments, segment]\\n        newSegmentDescription = '';\\n    }\\n\\n    async function addContainer() {\\n        // newContainerTitle;\\n        const container = await API.post(\\"/bible_segments_containers.json\\", {\\n            title: newContainerTitle,\\n            position: containers.length + 1\\n        })\\n\\n        containers = [...containers, container]\\n        newContainerTitle = '';\\n    }\\n\\n\\n    async function getContainers() {\\n        containers = await API.get(\\"/bible_segments_containers.json\\");\\n    }\\n\\n    async function getContainerSegments() {\\n        segments = await API.get(\\"/bible_segments_containers/\\"+activeContainer.id+\\"/segments.json\\");\\n        console.log({segments})\\n    }\\n<\/script>\\n\\n<input type=\\"text\\" class=\\"form-control\\" bind:value={newContainerTitle}>\\n<div class=\\"btn btn-info\\" on:click={addContainer}>Add Container</div>\\n<div class=\\"containers clean-list\\">\\n    {#each containers as container}\\n        <li class=\\"container\\" class:active={activeContainer.id === container.id} on:click={() => activeContainer = container}>{container.title}</li>\\n    {/each}\\n</div>\\n\\n<div class=\\"wrapper\\">\\n\\n    {#if activeContainer.id}\\n    <br><br>\\n    <div class=\\"segment-adder\\">\\n        <h3>Add a Segment</h3>\\n        <textarea class=\\"form-control\\" placeholder=\\"Title\\" bind:value={newSegmentDescription}></textarea>\\n        <select name=\\"\\" id=\\"\\" bind:value={selectedBookPosition}>\\n            {#each bibleBooks as book, index}\\n            <option value=\\"{index + 1}\\">{book}</option>\\n            {/each}\\n        </select>\\n        <div class=\\"btn btn-info\\" on:click={addSegment}>Add</div>\\n    </div>\\n    <hr style=\\"margin-top: 13em;\\">\\n    \\n    <div class=\\"segments clean-list\\">\\n        {#each segments as segment, index}\\n        <SegmentEdit {segment} {bibleBooks} {index}></SegmentEdit>\\n        {/each}\\n    </div>\\n    \\n    {/if}\\n</div>\\n\\n<style>\\n\\n    .wrapper {\\n        padding: 0 4vw;\\n    }\\n    .containers {\\n        list-style: none;\\n        display: inline;\\n    }\\n\\n    .segment-adder {\\n        position: fixed;\\n        z-index: 999;\\n        background: #c1f5ff;\\n        display: block;\\n        width: 100%;\\n        border: 2px solid #0dcbf0;\\n        padding: 24px;\\n    }\\n</style>"],"names":[],"mappings":"AAkGI,sBAAS,CACL,OAAO,CAAE,CAAC,CAAC,GACf,CACA,yBAAY,CACR,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,MACb,CAEA,4BAAe,CACX,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,OAAO,CAAE,IACb"}`
};
const EditSegments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeContainer = { id: null };
  let newContainerTitle = "";
  let containers = [];
  getBooks().map((c) => c.books.map((b) => b)).flat();
  $$result.css.add(css$4);
  return `<input type="text" class="form-control"${add_attribute("value", newContainerTitle, 0)}> <div class="btn btn-info" data-svelte-h="svelte-1p8fe12">Add Container</div> <div class="containers clean-list svelte-qnesrj">${each(containers, (container) => {
    return `<li class="${["container", activeContainer.id === container.id ? "active" : ""].join(" ").trim()}">${escape(container.title)}</li>`;
  })}</div> <div class="wrapper svelte-qnesrj">${``} </div>`;
});
const css$3 = {
  code: ".wrapper.svelte-10cirvi.svelte-10cirvi{display:flex}.left-col.svelte-10cirvi.svelte-10cirvi{flex:1 1 66%;max-width:66%;padding:3em}.select-holder.svelte-10cirvi.svelte-10cirvi{display:table;max-width:740px;font-size:34px}.select-holder.svelte-10cirvi select.svelte-10cirvi{font-size:34px}.select-holder.svelte-10cirvi hr.svelte-10cirvi{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eeeeee;box-sizing:content-box;height:0}.verses.selected.svelte-10cirvi.svelte-10cirvi{background-color:#b5ffea;display:block;border:6px dashed #93e0ca;padding:13px}",
  map: '{"version":3,"file":"Segments.svelte","sources":["Segments.svelte"],"sourcesContent":["<script>\\nimport API from \\"$lib/api/api\\";\\n\\nimport { onMount } from \\"svelte\\";\\nimport Verse from \\"./Verse/Verse.svelte\\";\\n\\n\\n\\nexport let books;\\n\\nlet segments = [];\\n\\nlet book_id = books[0].id;\\nasync function fetchBookSegments() {\\n    // console.log(book_id)\\n    segments = await API.get(`/bible_segments/book/${book_id}.json`);\\n}\\n\\n$: fetchBookSegments(book_id)\\n\\n\\nlet selected = null;\\nlet verses = null;\\nasync function selectSegment(segment) {\\n    if (selected) {\\n        selected = null;\\n        verses = null;\\n        return;\\n    }\\n    selected = segment;\\n    verses = await API.get(`/bible_segments/${segment.id}/verses.json`);\\n    console.log(verses);\\n}\\n\\nfunction capitalize(str) {\\n  // Check if the input string is empty\\n  if (str.length === 0) return str;\\n\\n  // Capitalize the first letter and concatenate the rest of the string\\n  return str.charAt(0).toUpperCase() + str.slice(1);\\n}\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n    <div class=\\"left-col\\">\\n        <div class=\\"select-holder\\">\\n    \\n                <select class=\\"book-select form-control\\" bind:value={book_id} >\\n                    {#each books as book}\\n                        <option value=\\"{book.id}\\">{book.title.replaceAll(\\"-\\", \\" \\").split(\\" \\").map(t => capitalize(t)).join(\\" \\")}</option>\\n                    {/each}\\n                </select>\\n                <hr>\\n            </div>\\n\\n        <div class=\\"summary\\">\\n            {#each segments as segment}\\n                <div class=\\"segment\\">\\n                    <span class=\\"verses\\" on:click={() => selectSegment(segment)} class:selected={selected && selected.id === segment.id}>\\n                        {segment.description}\\n                    </span>\\n\\n                    {#if selected && selected.id === segment.id}\\n                        {#if verses}\\n                            {#each verses as verse, index}\\n                                <Verse {verse} {index}></Verse>\\n                            {/each}\\n                        {/if}\\n                    {/if}\\n                </div>\\n            {/each}\\n            \\n        </div>\\n    </div>\\n\\n</div>\\n\\n<style>\\n.wrapper {\\n    display: flex;\\n}\\n\\n.mini-header {\\n    max-width: 350px;\\n    display: block;\\n    margin: 0 auto;\\n}\\n\\nimg {\\n    vertical-align: middle;\\n}\\n\\n.left-col {\\n    flex: 1 1 66%;\\n    max-width: 66%;\\n    padding: 3em;\\n    /* height: 74vh; */\\n    /* overflow-y: scroll; */\\n}\\n\\n.select-holder {\\n    display: table;\\n    /* margin: 0 auto; */\\n    max-width: 740px;\\n    font-size: 34px;\\n}\\n\\n.select-holder select {\\n    font-size: 34px;\\n}\\n\\n.select-holder hr {\\n    margin-top: 20px;\\n    margin-bottom: 20px;\\n    border: 0;\\n    border-top: 1px solid #eeeeee;\\n    box-sizing: content-box;\\n    height: 0;\\n}\\n\\n.verses.selected {\\n    background-color: #b5ffea;\\n    display: block;\\n    border: 6px dashed #93e0ca;\\n    padding: 13px;\\n}\\n</style>\\n"],"names":[],"mappings":"AA8EA,sCAAS,CACL,OAAO,CAAE,IACb,CAYA,uCAAU,CACN,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACb,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,GAGb,CAEA,4CAAe,CACX,OAAO,CAAE,KAAK,CAEd,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IACf,CAEA,6BAAc,CAAC,qBAAO,CAClB,SAAS,CAAE,IACf,CAEA,6BAAc,CAAC,iBAAG,CACd,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC7B,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,CACZ,CAEA,OAAO,uCAAU,CACb,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,OAAO,CAC1B,OAAO,CAAE,IACb"}'
};
function capitalize(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const Segments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { books } = $$props;
  let segments = [];
  let book_id = books[0].id;
  async function fetchBookSegments() {
    segments = await API.get(`/bible_segments/book/${book_id}.json`);
  }
  if ($$props.books === void 0 && $$bindings.books && books !== void 0) $$bindings.books(books);
  $$result.css.add(css$3);
  {
    fetchBookSegments();
  }
  return `<div class="wrapper svelte-10cirvi"><div class="left-col svelte-10cirvi"><div class="select-holder svelte-10cirvi"><select class="book-select form-control svelte-10cirvi">${each(books, (book) => {
    return `<option${add_attribute("value", book.id, 0)}>${escape(book.title.replaceAll("-", " ").split(" ").map((t) => capitalize(t)).join(" "))}</option>`;
  })}</select> <hr class="svelte-10cirvi"></div> <div class="summary">${each(segments, (segment) => {
    return `<div class="segment"><span class="${[
      "verses svelte-10cirvi",
      ""
    ].join(" ").trim()}">${escape(segment.description)}</span> ${``} </div>`;
  })}</div></div> </div>`;
});
const css$2 = {
  code: ".bookSelector.svelte-1alzfjw.svelte-1alzfjw{width:fit-content;display:block;margin:0 auto;font-size:34px}.selectors.svelte-1alzfjw.svelte-1alzfjw{display:flex;width:max-content;margin:0px auto}.selectors.svelte-1alzfjw select.svelte-1alzfjw{display:inline-block}",
  map: '{"version":3,"file":"Reader.svelte","sources":["Reader.svelte"],"sourcesContent":["<script>\\n    import API from \\"$lib/api/api\\";\\n    import { onMount } from \\"svelte\\";\\n    import Verse from \\"./Verse/Verse.svelte\\"\\n\\n    export let books;\\n    let selectedBookId = -1;\\n    let selectedBook = null;\\n\\n\\n    onMount(async () => {\\n        selectedBookId = books[0].id;\\n        console.log({books})\\n        getSelectedBook();\\n    })\\n\\n    let content = null;\\n\\n\\n\\n    const getSelectedBook = () => {\\n        selectedBook = books.filter(book => book.id === selectedBookId)[0];\\n    };\\n\\n    let selectedChapter = 1;\\n    let verses = [];\\n\\n    async function fetchChapter(key) {\\n        // console.log(key)\\n        const response = await API.get(\\"/bible_books/get_chapter/\\"+key);\\n        console.log(response);\\n        verses = response;\\n    }\\n\\n    $: if (selectedBook) {\\n        console.log(selectedBook.position, selectedChapter)\\n        fetchChapter(String(selectedBook.position) + \\":\\" + selectedChapter);\\n    };\\n\\n\\n<\/script>\\n\\n\\n{#if books}\\n    <div class=\\"selectors\\">\\n\\n        <select name=\\"\\" id=\\"\\" class=\\"form-control bookSelector\\" bind:value={selectedBookId} on:change={getSelectedBook}>\\n            {#each books as book}\\n                <option value=\\"{book.id}\\">{book.title}</option>\\n            {/each}\\n        </select>\\n        {#if selectedBook}\\n            <select  class=\\"form-control\\" name=\\"\\" id=\\"\\" bind:value={selectedChapter}>\\n                {#each Object.keys(selectedBook.selectable) as chapter}\\n                    <option value={chapter}>{chapter}</option>\\n                {/each}\\n            </select>\\n        {/if}\\n    </div>\\n{/if}\\n\\n{#if verses}\\n        <ul class=\\"clean-list verses\\" bind:this={content}>\\n            {#each verses as verse, index}\\n                <Verse {verse}></Verse>\\n            {/each}\\n        </ul>\\n{/if}\\n\\n<style>\\n\\n    .english, .original {\\n        display: flex;\\n    }\\n    .english .ref, .original .ref {\\n        width: 70px;\\n        text-align: center;\\n        margin: 0 10px;\\n        height: fit-content;\\n    }\\n.verse {\\n    padding: 8px;\\n    margin: 4px;\\n    /* background-color: rgb(221, 245, 255); */\\n\\n    background-color: rgb(255 243 234);\\n    border-radius: 10px;\\n    line-height: initial;\\n}\\n\\n.hebrew {\\n    direction: rtl;\\n    text-align: right;\\n}\\n\\n.verse .ref {\\n    background: #c1c1ff54;\\n    color: #040404;\\n    padding: 4px 16px;\\n    border-radius: 10px;\\n}\\n\\n\\n.bookSelector {\\n    width: fit-content;\\n    display: block;\\n    margin: 0 auto;\\n    font-size: 34px;\\n}\\n\\n.selectors {\\n    display: flex;\\n    width: max-content;\\n    margin: 0px auto;\\n}\\n\\n.selectors select {\\n    display: inline-block;\\n}\\n</style>"],"names":[],"mappings":"AAuGA,2CAAc,CACV,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,IACf,CAEA,wCAAW,CACP,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,WAAW,CAClB,MAAM,CAAE,GAAG,CAAC,IAChB,CAEA,yBAAU,CAAC,qBAAO,CACd,OAAO,CAAE,YACb"}'
};
const Reader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { books } = $$props;
  let content = null;
  let verses = [];
  if ($$props.books === void 0 && $$bindings.books && books !== void 0) $$bindings.books(books);
  $$result.css.add(css$2);
  return `${books ? `<div class="selectors svelte-1alzfjw"><select name="" id="" class="form-control bookSelector svelte-1alzfjw">${each(books, (book) => {
    return `<option${add_attribute("value", book.id, 0)}>${escape(book.title)}</option>`;
  })}</select> ${``}</div>` : ``} ${verses ? `<ul class="clean-list verses"${add_attribute("this", content, 0)}>${each(verses, (verse, index) => {
    return `${validate_component(Verse, "Verse").$$render($$result, { verse }, {}, {})}`;
  })}</ul>` : ``}`;
});
const css$1 = {
  code: '.top-nav.svelte-9qx20t.svelte-9qx20t{padding:16px 16px 16px 40px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;background-color:rgb(255, 255, 255);border-bottom:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-right-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}.top-nav.svelte-9qx20t .head.svelte-9qx20t{height:48px;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.5rem;line-height:1.4;font-family:"Avenir Next", sans-serif;margin-right:16px;cursor:pointer}.arrow-space.svelte-9qx20t.svelte-9qx20t{padding-left:4px;padding-right:4px}.hori-divider.svelte-9qx20t.svelte-9qx20t{padding-left:16px;margin-top:-16px;margin-bottom:-16px;height:74px;border-right:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-bottom-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}',
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n    export let toggleView;\\n    import {user} from \\"$lib/stores/user\\"\\n<\/script>\\n\\n    <div class=\\"top-nav\\">\\n        <div class=\\"head\\">\\n\\n            <span>BibleFlow</span>\\n            <!-- <div class=\\"arrow-space\\"></div>\\n            <div class=\\"left-arrow arrow\\"><div class=\\"\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"20px\\" height=\\"20px\\" fill=\\"#626872\\" viewBox=\\"0 0 256 256\\"><path d=\\"M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z\\"></path></svg></div></div>\\n            <div class=\\"right-arrow arrow\\"><div class=\\"\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"20px\\" height=\\"20px\\" fill=\\"#626872\\" viewBox=\\"0 0 256 256\\"><path d=\\"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z\\"></path></svg></div></div> -->\\n            <div class=\\"arrow-space\\"></div>\\n\\n            {#if $user && $user.admin}\\n                <div class=\\"btn btn-warning\\" on:click={toggleView}>Segments</div>\\n            {/if}\\n\\n        </div>\\n\\n\\n        <div class=\\"hori-divider\\"></div>\\n    </div>\\n\\n    <style>\\n\\n    .top-nav {\\n        padding: 16px 16px 16px 40px;\\n        display: flex;\\n        -webkit-box-align: center;\\n        align-items: center;\\n        -webkit-box-pack: justify;\\n        justify-content: space-between;\\n        background-color: rgb(255, 255, 255);\\n        border-bottom: 1px solid rgb(231, 232, 234);\\n        border-top-color: rgb(231, 232, 234);\\n        border-right-color: rgb(231, 232, 234);\\n        border-left-color: rgb(231, 232, 234);\\n    }\\n\\n    .top-nav .head {\\n        height: 48px;\\n        display: flex;\\n        -webkit-box-align: center;\\n        align-items: center;\\n        font-weight: 700;\\n        font-size: 1.5rem;\\n        line-height: 1.4;\\n        font-family: \\"Avenir Next\\", sans-serif;\\n        margin-right: 16px;\\n        cursor: pointer;\\n    }\\n\\n    .left-arrow {\\n        cursor: pointer;\\n        box-sizing: border-box;\\n        border: 1px solid transparent;\\n        border-radius: 4px;\\n        padding: 4px;\\n    }\\n\\n    .left-arrow > div {\\n        line-height: 0;\\n        width: 20px;\\n        height: 20px;\\n    }\\n\\n    .arrow-space {\\n        padding-left: 4px;\\n        padding-right: 4px;\\n    }\\n\\n    .right-arrow {\\n        cursor: pointer;\\n        box-sizing: border-box;\\n        border: 1px solid transparent;\\n        border-radius: 4px;\\n        padding: 4px;\\n    }\\n\\n    .right-arrow > div {\\n        line-height: 0;\\n        width: 20px;\\n        height: 20px;\\n    }\\n\\n    .hori-divider {\\n        padding-left: 16px;\\n        margin-top: -16px;\\n        margin-bottom: -16px;\\n        height: 74px;\\n        border-right: 1px solid rgb(231, 232, 234);\\n        border-top-color: rgb(231, 232, 234);\\n        border-bottom-color: rgb(231, 232, 234);\\n        border-left-color: rgb(231, 232, 234);\\n    }\\n\\n    .arrow:hover {\\n        background-color: rgb(250, 250, 250);\\n        border-color: rgb(231, 232, 234);\\n    }\\n\\n</style>"],"names":[],"mappings":"AA0BI,oCAAS,CACL,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CACzB,eAAe,CAAE,aAAa,CAC9B,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC3C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,kBAAkB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACtC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxC,CAEA,sBAAQ,CAAC,mBAAM,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,aAAa,CAAC,CAAC,UAAU,CACtC,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,OACZ,CAgBA,wCAAa,CACT,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GACnB,CAgBA,yCAAc,CACV,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,mBAAmB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACvC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACxC"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { toggleView } = $$props;
  if ($$props.toggleView === void 0 && $$bindings.toggleView && toggleView !== void 0) $$bindings.toggleView(toggleView);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `<div class="top-nav svelte-9qx20t"><div class="head svelte-9qx20t"><span data-svelte-h="svelte-1foihrc">BibleFlow</span>  <div class="arrow-space svelte-9qx20t"></div> ${$user && $user.admin ? `<div class="btn btn-warning" data-svelte-h="svelte-19phwo9">Segments</div>` : ``}</div> <div class="hori-divider svelte-9qx20t"></div> </div>`;
});
const css = {
  code: ".wrapper.svelte-qhscq2{padding:3vw}",
  map: '{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n    import API from \\"$lib/api/api\\";\\n    import { onMount } from \\"svelte\\";\\n    import EditSegments from \\"./EditSegments.svelte\\";\\n    import Segments from \\"./Segments.svelte\\";\\n    import Reader from \\"./Reader.svelte\\";\\n    import Nav from \\"./Nav.svelte\\"\\n\\n    // let newTitle = \\"\\";\\n    // let newYear = \\"\\";\\n\\n    let books = [];\\n\\n    onMount(async () => {\\n        books = await API.get(\\"/bible_books.json\\");\\n    })\\n\\n\\n    async function addEvent() {\\n        // const event = await API.post(\\"/historical_events.json\\", {\\n        //     title: newTitle,\\n        //     year: newYear\\n        // });\\n        // events = [...events, event];\\n        // newTitle = \\"\\";\\n        // newYear = \\"\\";\\n    }\\n\\n    let views = [\\"segments\\", \\"editSegments\\"]\\n    let viewIndex = 0;\\n\\n    let view = views[viewIndex]\\n\\n    function toggleSegmentsView() {\\n        viewIndex = (viewIndex + 1) % views.length;\\n        view = views[viewIndex];\\n    }\\n\\n    // $: timeline = events.sort((a,b) => a.year - b.year)\\n<\/script>\\n\\n<Nav toggleView={toggleSegmentsView}></Nav>\\n\\n\\n    {#if books.length > 1}\\n        <div class=\\"wrapper\\">\\n            {#if view === \\"segments\\"}\\n                <Segments {books}></Segments>\\n            {/if}\\n\\n            {#if view === \\"reader\\"}\\n                    <Reader {books}></Reader>\\n            {/if}\\n\\n            {#if view === \\"editSegments\\"}\\n                <EditSegments></EditSegments>\\n            {/if}\\n        </div>\\n    {/if}\\n\\n\\n\\n\\n<style>\\n    .wrapper {\\n        padding: 3vw;\\n    }\\n\\n    .events {\\n        padding: 3vw;\\n    }\\n    .event {\\n        padding: 8px;\\n        margin: 4px;\\n        background-color: rgb(221, 245, 255);\\n        border-radius: 10px;\\n    }\\n</style>"],"names":[],"mappings":"AAgEI,sBAAS,CACL,OAAO,CAAE,GACb"}'
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let books = [];
  let views = ["segments", "editSegments"];
  let viewIndex = 0;
  let view = views[viewIndex];
  function toggleSegmentsView() {
    viewIndex = (viewIndex + 1) % views.length;
    view = views[viewIndex];
  }
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, { toggleView: toggleSegmentsView }, {}, {})} ${books.length > 1 ? `<div class="wrapper svelte-qhscq2">${view === "segments" ? `${validate_component(Segments, "Segments").$$render($$result, { books }, {}, {})}` : ``} ${view === "reader" ? `${validate_component(Reader, "Reader").$$render($$result, { books }, {}, {})}` : ``} ${view === "editSegments" ? `${validate_component(EditSegments, "EditSegments").$$render($$result, {}, {}, {})}` : ``}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "BibleFlow").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
