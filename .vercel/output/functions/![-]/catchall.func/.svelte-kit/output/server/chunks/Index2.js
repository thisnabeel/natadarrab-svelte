import { c as create_ssr_component, a as subscribe, e as each, d as escape, v as validate_component } from "./ssr.js";
import { u as user } from "./user.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "./state.svelte.js";
import { p as page } from "./stores.js";
import { s as showSpotlight } from "./spotlight.js";
/* empty css                                    */
import "./api.js";
import { S as Search } from "./Search.js";
import { d as device } from "./device.js";
const css$2 = {
  code: ".search-btn.svelte-133ezr7.svelte-133ezr7{position:absolute;bottom:0;left:0;font-size:30px;color:#c3c3ff;display:block;width:100%;text-align:center;padding:10px;cursor:pointer}.search-btn.svelte-133ezr7.svelte-133ezr7:hover{background-color:aliceblue}.title.svelte-133ezr7.svelte-133ezr7{position:absolute;left:50px;top:18%}img.icon.svelte-133ezr7.svelte-133ezr7{width:24px;height:24px}.content.svelte-133ezr7.svelte-133ezr7{background-color:rgb(255, 255, 255);color:rgb(35, 39, 45);box-shadow:none;overflow:hidden auto;display:flex;flex-direction:column;flex:1 0 auto;z-index:1200;position:fixed;top:0px;outline:0px;left:0px;border-right:1px solid rgba(0, 0, 0, 0.12);transition:width 0.2s ease 0s;height:100vh;width:inherit}.sections.svelte-133ezr7.svelte-133ezr7{display:flex;flex-direction:column;justify-content:stretch;height:100vh}nav.svelte-133ezr7.svelte-133ezr7{list-style:none;margin:0px;padding:8px 0px;position:relative}.mid.svelte-133ezr7.svelte-133ezr7{-webkit-box-flex:1;flex-grow:1;overflow:hidden auto}.buttons.svelte-133ezr7.svelte-133ezr7{padding-left:0px;padding-right:0px}.buttons-list.svelte-133ezr7.svelte-133ezr7{overflow-y:scroll;height:83vh;border-bottom:5px dashed #f3f3f3}.expand.svelte-133ezr7.svelte-133ezr7{padding:0px 8px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.expand.svelte-133ezr7 .button.svelte-133ezr7{display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:transparent;background-color:transparent;outline:0px;border:0px;margin:0px 0px 0px 4px;cursor:pointer;user-select:none;vertical-align:middle;appearance:none;text-decoration:none;text-align:center;flex:0 0 auto;font-size:1.5rem;padding:8px;border-radius:50%;overflow:visible;color:rgba(0, 0, 0, 0.54);transition:background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}a.svelte-133ezr7.svelte-133ezr7{color:#424750;text-decoration:none}a.svelte-133ezr7:hover .button.svelte-133ezr7{background:rgba(245, 245, 245, 0.541)}.selected.svelte-133ezr7 .button.svelte-133ezr7{background:rgba(240, 240, 240, 0.74)}.selected.svelte-133ezr7.svelte-133ezr7{fill:blue !important}a.svelte-133ezr7 .button.svelte-133ezr7{border:1px solid rgba(0, 0, 0, 0.12);background-color:rgb(250, 250, 250);background-color:rgba(14, 99, 246, 0.08);-webkit-tap-highlight-color:transparent;background-color:transparent;outline:0px;margin:0px;cursor:pointer;user-select:none;vertical-align:middle;appearance:none;color:inherit;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;position:relative;text-decoration:none;width:100%;box-sizing:border-box;text-align:left;padding:8px 16px;transition:background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;border:1px solid rgb(255, 255, 255);right:-1px;border-radius:0px}@media only screen and (max-width: 600px){.search-btn.svelte-133ezr7.svelte-133ezr7{bottom:140px}}",
  map: `{"version":3,"file":"LeftBar.svelte","sources":["LeftBar.svelte"],"sourcesContent":["<script>\\n\\timport storage from '$lib/stores/storage';\\n\\timport { user } from '$lib/stores/user';\\n\\timport { goto } from '$app/navigation';\\n\\timport { page } from '$app/stores';\\n\\timport { showSpotlight } from '$lib/stores/spotlight';\\n\\n\\texport let expand;\\n\\texport let expanded;\\n\\n\\tlet profile = {\\n\\t\\ttooltip: 'Profile',\\n\\t\\ticon: 'fa-user',\\n\\t\\turl: '/dashboard'\\n\\t};\\n\\n\\tlet availability = {\\n\\t\\ttooltip: 'Availability',\\n\\t\\tsvg: \`<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24px\\" height=\\"24px\\" viewBox=\\"0 0 256 256\\"><path d=\\"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\\" opacity=\\"0.2\\"></path><path d=\\"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z\\"></path></svg>\`,\\n\\t\\turl: '/availability'\\n\\t};\\n\\tlet divider = {\\n\\t\\tdivider: true\\n\\t};\\n\\tlet timeline = {\\n\\t\\ttooltip: 'Timeline',\\n\\t\\tsvg: \`<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24px\\" height=\\"24px\\"  viewBox=\\"0 0 256 256\\"><path d=\\"M72,112v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H64A8,8,0,0,1,72,112ZM216,40H168a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Zm0,112H168a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,216,152Z\\" opacity=\\"0.2\\"></path><path d=\\"M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z\\"></path></svg>\`,\\n\\t\\turl: '/progress'\\n\\t};\\n\\tlet schedule = {\\n\\t\\ttooltip: 'Schedule',\\n\\t\\tsvg: \`<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"24px\\" height=\\"24px\\" viewBox=\\"0 0 256 256\\"><path d=\\"M160,72V216L96,184V40Z\\" opacity=\\"0.2\\"></path><path d=\\"M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z\\"></path></svg>\`,\\n\\t\\turl: '/schedule'\\n\\t};\\n\\n\\tlet whiteboard = {\\n\\t\\ttooltip: 'Whiteboard',\\n\\t\\timg: 'whiteboard.png',\\n\\t\\turl: '/whiteboard'\\n\\t};\\n\\n\\tlet labs = {\\n\\t\\ttooltip: 'Labs',\\n\\t\\ticon: \`fa-flask\`,\\n\\t\\turl: '/labs'\\n\\t};\\n\\n\\tlet recite = {\\n\\t\\ttooltip: 'Recite',\\n\\t\\ticon: \`fa-volume-up\`,\\n\\t\\turl: '/unzyla'\\n\\t};\\n\\n\\tlet seerah = {\\n\\t\\ttooltip: 'Seerah',\\n\\t\\timg: 'seerah.png',\\n\\t\\turl: '/seerah'\\n\\t};\\n\\n\\tlet quranflow = {\\n\\t\\ttooltip: 'QuranFlow',\\n\\t\\ticon: 'fa-book',\\n\\t\\turl: '/quranflow'\\n\\t};\\n\\n\\tlet springs = {\\n\\t\\ttooltip: 'Springs',\\n\\t\\timg: 'springs.png',\\n\\t\\turl: '/springs'\\n\\t};\\n\\n\\tlet bibleflow = {\\n\\t\\ttooltip: 'BibleFlow',\\n\\t\\timg: 'bible.png',\\n\\t\\turl: '/bibleflow'\\n\\t};\\n\\n\\tlet students = {\\n\\t\\ttooltip: 'Students',\\n\\t\\ticon: 'fa-users',\\n\\t\\turl: '/students'\\n\\t};\\n\\n\\tlet teacher = {\\n\\t\\ttooltip: 'Teacher',\\n\\t\\timg: 'teacher.png',\\n\\t\\turl: '/teachers'\\n\\t};\\n\\tlet planner = {\\n\\t\\ttooltip: 'Planner',\\n\\t\\ticon: 'fa-university',\\n\\t\\turl: '/planner'\\n\\t};\\n\\n\\tlet games = {\\n\\t\\ttooltip: 'Games',\\n\\t\\ticon: 'fa-puzzle-piece',\\n\\t\\turl: '/games'\\n\\t};\\n\\n\\tlet buttons = [\\n\\t\\tprofile,\\n\\t\\tavailability,\\n\\t\\tdivider,\\n\\t\\ttimeline,\\n\\t\\tschedule,\\n\\t\\tdivider,\\n\\t\\tlabs,\\n\\t\\trecite,\\n\\t\\tseerah,\\n\\t\\tquranflow,\\n\\t\\tsprings,\\n\\t\\tbibleflow,\\n\\t\\twhiteboard\\n\\t];\\n\\n\\tlet adminButtons = [\\n\\t\\tprofile,\\n\\t\\tstudents,\\n\\t\\tteacher,\\n\\t\\tplanner,\\n\\t\\tavailability,\\n\\t\\tdivider,\\n\\t\\ttimeline,\\n\\t\\tschedule,\\n\\t\\tdivider,\\n\\t\\tlabs,\\n\\t\\tgames,\\n\\t\\trecite,\\n\\t\\tsprings,\\n\\t\\tseerah,\\n\\t\\tquranflow,\\n\\t\\tdivider,\\n\\t\\tbibleflow,\\n\\t\\twhiteboard\\n\\t];\\n\\n\\t$: console.log('user', $user);\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t<div class=\\"sections\\">\\n\\t\\t<nav>\\n\\t\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t\\t\\t\\t<div class=\\"expand\\" on:click={expand}>\\n\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t<svg\\n\\t\\t\\t\\t\\t\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t\\t\\t\\t\\t\\t\\twidth=\\"24px\\"\\n\\t\\t\\t\\t\\t\\t\\theight=\\"24px\\"\\n\\t\\t\\t\\t\\t\\t\\tfill=\\"#A0A4AC\\"\\n\\t\\t\\t\\t\\t\\t\\tviewBox=\\"0 0 256 256\\"\\n\\t\\t\\t\\t\\t\\t\\t><path\\n\\t\\t\\t\\t\\t\\t\\t\\td=\\"M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z\\"\\n\\t\\t\\t\\t\\t\\t\\t/></svg\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<!-- <a on:click={() => admin.set(!$admin)}><span class=\\"fa button fa-toggle-on\\"></span></a> -->\\n\\n\\t\\t\\t\\t<div class=\\"buttons-list\\">\\n\\t\\t\\t\\t\\t{#each ($user && ($user.admin || $user.teacher ? adminButtons : buttons)) || [] as button}\\n\\t\\t\\t\\t\\t\\t{#if button.divider}\\n\\t\\t\\t\\t\\t\\t\\t<hr />\\n\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\thref=\\"#\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgoto(button.url);\\n\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\tclass:selected={$page.url.pathname.includes(button.url)}\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if button.svg}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{@html button.svg}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else if button.img}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<img src=\\"/{button.img}\\" alt=\\"\\" class=\\"icon\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"fa {button.icon}\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#if expanded}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"title\\">{button.tooltip}</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</nav>\\n\\t\\t<div class=\\"mid\\" />\\n\\t\\t<i class=\\"fa fa-search search-btn\\" on:click={() => showSpotlight.set(!$showSpotlight)} />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\n\\t.search-btn {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tleft: 0;\\n\\t\\tfont-size: 30px;\\n\\t\\tcolor: #c3c3ff;\\n\\t\\tdisplay: block;\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 10px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.search-btn:hover {\\n\\t\\tbackground-color: aliceblue;\\n\\t}\\n\\t.title {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 50px;\\n\\t\\ttop: 18%;\\n\\t}\\n\\timg.icon {\\n\\t\\twidth: 24px;\\n\\t\\theight: 24px;\\n\\t}\\n\\t.content {\\n\\t\\tbackground-color: rgb(255, 255, 255);\\n\\t\\tcolor: rgb(35, 39, 45);\\n\\t\\tbox-shadow: none;\\n\\t\\toverflow: hidden auto;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tflex: 1 0 auto;\\n\\t\\tz-index: 1200;\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0px;\\n\\t\\toutline: 0px;\\n\\t\\tleft: 0px;\\n\\t\\tborder-right: 1px solid rgba(0, 0, 0, 0.12);\\n\\t\\ttransition: width 0.2s ease 0s;\\n\\t\\theight: 100vh;\\n\\t\\twidth: inherit;\\n\\t}\\n\\n\\t.sections {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: stretch;\\n\\t\\theight: 100vh;\\n\\t}\\n\\n\\tnav {\\n\\t\\tlist-style: none;\\n\\t\\tmargin: 0px;\\n\\t\\tpadding: 8px 0px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.mid {\\n\\t\\t-webkit-box-flex: 1;\\n\\t\\tflex-grow: 1;\\n\\t\\toverflow: hidden auto;\\n\\t}\\n\\n\\t.buttons {\\n\\t\\tpadding-left: 0px;\\n\\t\\tpadding-right: 0px;\\n\\t}\\n\\n\\t.buttons-list {\\n\\t\\toverflow-y: scroll;\\n    \\theight: 83vh;\\n    \\tborder-bottom: 5px dashed #f3f3f3;\\n\\t}\\n\\n\\t.expand {\\n\\t\\tpadding: 0px 8px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\t-webkit-box-pack: justify;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\t.expand .button {\\n\\t\\tdisplay: inline-flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\t-webkit-box-pack: center;\\n\\t\\tjustify-content: center;\\n\\t\\tposition: relative;\\n\\t\\tbox-sizing: border-box;\\n\\t\\t-webkit-tap-highlight-color: transparent;\\n\\t\\tbackground-color: transparent;\\n\\t\\toutline: 0px;\\n\\t\\tborder: 0px;\\n\\t\\tmargin: 0px 0px 0px 4px;\\n\\t\\tcursor: pointer;\\n\\t\\tuser-select: none;\\n\\t\\tvertical-align: middle;\\n\\t\\tappearance: none;\\n\\t\\ttext-decoration: none;\\n\\t\\ttext-align: center;\\n\\t\\tflex: 0 0 auto;\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tpadding: 8px;\\n\\t\\tborder-radius: 50%;\\n\\t\\toverflow: visible;\\n\\t\\tcolor: rgba(0, 0, 0, 0.54);\\n\\t\\ttransition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n\\t}\\n\\n\\ta {\\n\\t\\tcolor: #424750;\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\ta:hover .button {\\n\\t\\tbackground: rgba(245, 245, 245, 0.541);\\n\\t}\\n\\n\\t.selected .button {\\n\\t\\tbackground: rgba(240, 240, 240, 0.74);\\n\\t\\t/* border-top: 0.5px gray;\\n        border-bottom: 0.5px gray; */\\n\\t}\\n\\n\\t.selected {\\n\\t\\tfill: blue !important;\\n\\t}\\n\\n\\ta .button {\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.12);\\n\\t\\tbackground-color: rgb(250, 250, 250);\\n\\t\\tbackground-color: rgba(14, 99, 246, 0.08);\\n\\t\\t-webkit-tap-highlight-color: transparent;\\n\\t\\tbackground-color: transparent;\\n\\t\\toutline: 0px;\\n\\t\\tmargin: 0px;\\n\\t\\tcursor: pointer;\\n\\t\\tuser-select: none;\\n\\t\\tvertical-align: middle;\\n\\t\\tappearance: none;\\n\\t\\tcolor: inherit;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-pack: start;\\n\\t\\tjustify-content: flex-start;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\tposition: relative;\\n\\t\\ttext-decoration: none;\\n\\t\\twidth: 100%;\\n\\t\\tbox-sizing: border-box;\\n\\t\\ttext-align: left;\\n\\t\\tpadding: 8px 16px;\\n\\t\\ttransition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n\\t\\tborder: 1px solid rgb(255, 255, 255);\\n\\t\\tright: -1px;\\n\\t\\tborder-radius: 0px;\\n\\t}\\n\\n\\t@media only screen and (max-width: 600px) {\\n\\t\\t.search-btn {\\n\\t\\t\\tbottom: 140px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const LeftBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_showSpotlight;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_showSpotlight = subscribe(showSpotlight, (value) => value);
  let { expand } = $$props;
  let { expanded } = $$props;
  let profile = {
    tooltip: "Profile",
    icon: "fa-user",
    url: "/dashboard"
  };
  let availability = {
    tooltip: "Availability",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path></svg>`,
    url: "/availability"
  };
  let divider = { divider: true };
  let timeline = {
    tooltip: "Timeline",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"  viewBox="0 0 256 256"><path d="M72,112v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H64A8,8,0,0,1,72,112ZM216,40H168a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Zm0,112H168a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,216,152Z" opacity="0.2"></path><path d="M168,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16V64h-8a32,32,0,0,0-32,32v24H80v-8A16,16,0,0,0,64,96H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h32v24a32,32,0,0,0,32,32h8v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v16h-8a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h8V96A16,16,0,0,0,168,112ZM64,144H32V112H64v32Zm104,16h48v48H168Zm0-112h48V96H168Z"></path></svg>`,
    url: "/progress"
  };
  let schedule = {
    tooltip: "Schedule",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><path d="M160,72V216L96,184V40Z" opacity="0.2"></path><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM104,52.94l48,24V203.06l-48-24ZM40,62.25l48-12v127.5l-48,12Zm176,131.5-48,12V78.25l48-12Z"></path></svg>`,
    url: "/schedule"
  };
  let whiteboard = {
    tooltip: "Whiteboard",
    img: "whiteboard.png",
    url: "/whiteboard"
  };
  let labs = {
    tooltip: "Labs",
    icon: `fa-flask`,
    url: "/labs"
  };
  let recite = {
    tooltip: "Recite",
    icon: `fa-volume-up`,
    url: "/unzyla"
  };
  let seerah = {
    tooltip: "Seerah",
    img: "seerah.png",
    url: "/seerah"
  };
  let quranflow = {
    tooltip: "QuranFlow",
    icon: "fa-book",
    url: "/quranflow"
  };
  let springs = {
    tooltip: "Springs",
    img: "springs.png",
    url: "/springs"
  };
  let bibleflow = {
    tooltip: "BibleFlow",
    img: "bible.png",
    url: "/bibleflow"
  };
  let students = {
    tooltip: "Students",
    icon: "fa-users",
    url: "/students"
  };
  let teacher = {
    tooltip: "Teacher",
    img: "teacher.png",
    url: "/teachers"
  };
  let planner = {
    tooltip: "Planner",
    icon: "fa-university",
    url: "/planner"
  };
  let games = {
    tooltip: "Games",
    icon: "fa-puzzle-piece",
    url: "/games"
  };
  let buttons = [
    profile,
    availability,
    divider,
    timeline,
    schedule,
    divider,
    labs,
    recite,
    seerah,
    quranflow,
    springs,
    bibleflow,
    whiteboard
  ];
  let adminButtons = [
    profile,
    students,
    teacher,
    planner,
    availability,
    divider,
    timeline,
    schedule,
    divider,
    labs,
    games,
    recite,
    springs,
    seerah,
    quranflow,
    divider,
    bibleflow,
    whiteboard
  ];
  if ($$props.expand === void 0 && $$bindings.expand && expand !== void 0) $$bindings.expand(expand);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
  $$result.css.add(css$2);
  {
    console.log("user", $user);
  }
  $$unsubscribe_user();
  $$unsubscribe_page();
  $$unsubscribe_showSpotlight();
  return `<div class="content svelte-133ezr7"><div class="sections svelte-133ezr7"><nav class="svelte-133ezr7"><div class="buttons svelte-133ezr7"> <div class="expand svelte-133ezr7" data-svelte-h="svelte-1hqylfv"><div class="button svelte-133ezr7"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#A0A4AC" viewBox="0 0 256 256"><path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path></svg></div></div>  <div class="buttons-list svelte-133ezr7">${each($user && ($user.admin || $user.teacher ? adminButtons : buttons) || [], (button) => {
    return `${button.divider ? `<hr>` : `<a href="#" class="${[
      "svelte-133ezr7",
      $page.url.pathname.includes(button.url) ? "selected" : ""
    ].join(" ").trim()}"><div class="button svelte-133ezr7">${button.svg ? `<!-- HTML_TAG_START -->${button.svg}<!-- HTML_TAG_END -->` : `${button.img ? `<img src="${"/" + escape(button.img, true)}" alt="" class="icon svelte-133ezr7">` : `<div class="${"fa " + escape(button.icon, true) + " svelte-133ezr7"}"></div>`}`} ${expanded ? `<span class="title svelte-133ezr7">${escape(button.tooltip)}</span>` : ``}</div> </a>`}`;
  })}</div></div></nav> <div class="mid svelte-133ezr7"></div> <i class="fa fa-search search-btn svelte-133ezr7"></i></div> </div>`;
});
const css$1 = {
  code: ".bgFiller.svelte-1wurgcb{background-color:#00000041;width:100vw;height:100vh;display:block;position:absolute;top:0;z-index:99999999}.spotlight_wrapper.svelte-1wurgcb{position:absolute;top:15%;display:block;margin:0 auto;left:0;right:0;width:100%}.mobile.spotlight_wrapper.svelte-1wurgcb{top:2%}",
  map: `{"version":3,"file":"Spotlight.svelte","sources":["Spotlight.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport { onMount } from 'svelte';\\n\\timport Search from './Search.svelte';\\n\\timport { showSpotlight } from '$lib/stores/spotlight';\\n\\timport { gopher } from '$lib/components/QuranFlow/store';\\n\\timport { device } from '$lib/utils/device';\\n\\n\\texport let deliver = function () {};\\n\\n\\tlet searchInput = '';\\n\\tlet searchElement = null;\\n\\tlet error = '';\\n\\t// Function to handle keyboard events\\n\\tconst handleKeyDown = (event) => {\\n\\t\\t// Check if the user pressed Cmd+/ on macOS or Ctrl+/ on Windows/Linux\\n\\t\\tif ((event.metaKey || event.ctrlKey) && event.key === '/') {\\n\\t\\t\\t$showSpotlight.set(!showSpotlight); // Toggle the showSpotlight variable\\n\\t\\t}\\n\\t};\\n\\n\\tonMount(() => {\\n\\t\\t// Add an event listener for keydown events\\n\\t\\twindow.addEventListener('keydown', handleKeyDown);\\n\\n\\t\\t// Cleanup the event listener when the component is unmounted\\n\\t\\treturn () => {\\n\\t\\t\\twindow.removeEventListener('keydown', handleKeyDown);\\n\\t\\t};\\n\\t});\\n\\n\\tlet words = [];\\n\\n\\tasync function findArabicWordsByRoot() {\\n\\t\\t// console.log(convertRomanToArabic(searchInput));\\n\\t\\tconst root = convertRomanToArabic(searchInput);\\n\\t\\tconst res = await API.post('/qf/find_by_root.json', {\\n\\t\\t\\ttype: 'verb',\\n\\t\\t\\troot: root\\n\\t\\t});\\n\\t\\tconsole.log({ res });\\n\\t\\twords = res;\\n\\t\\tif (res.length === 0) error = 'No Words for ' + searchInput;\\n\\t\\tsearchInput = '';\\n\\t}\\n\\n\\tfunction convertRomanToArabic(letters) {\\n\\t\\tconst hash = {\\n\\t\\t\\ta: ['ا', 'أ', 'ء', 'ع'],\\n\\t\\t\\t\\"'a\\": ['ا', 'أ', 'ء', 'ع'],\\n\\t\\t\\tb: 'ب',\\n\\t\\t\\tt: ['ت', 'ط'],\\n\\t\\t\\tth: ['ث', 'ذ'],\\n\\t\\t\\tj: 'ج',\\n\\t\\t\\tH: 'ح',\\n\\t\\t\\tkh: 'خ',\\n\\t\\t\\td: ['د', 'ض'],\\n\\t\\t\\tz: ['ذ', 'ز', 'ظ'],\\n\\t\\t\\tr: 'ر',\\n\\t\\t\\ts: ['س', 'ث', 'ص'],\\n\\t\\t\\tsh: 'ش',\\n\\t\\t\\t3: 'ع',\\n\\t\\t\\tgh: 'غ',\\n\\t\\t\\tg: ['غ', 'ج'],\\n\\t\\t\\tf: 'ف',\\n\\t\\t\\tq: 'ق',\\n\\t\\t\\tk: 'ك',\\n\\t\\t\\tl: 'ل',\\n\\t\\t\\tm: 'م',\\n\\t\\t\\tn: 'ن',\\n\\t\\t\\tw: 'و',\\n\\t\\t\\tv: 'و',\\n\\t\\t\\th: ['ه', 'ح'],\\n\\t\\t\\ty: 'ي',\\n\\t\\t\\ti: 'ي'\\n\\t\\t};\\n\\n\\t\\tlet combos = {\\n\\t\\t\\tr1: [],\\n\\t\\t\\tr2: [],\\n\\t\\t\\tr3: [],\\n\\t\\t\\tr4: []\\n\\t\\t};\\n\\n\\t\\tlet word = '';\\n\\n\\t\\tletters = letters.split('').filter((l) => l !== ' ');\\n\\t\\t// Go through each letter\\n\\t\\tfor (let i = 0; i < letters.length; i++) {\\n\\t\\t\\tconsole.log(i, letters[i]);\\n\\t\\t\\tconst l = letters[i];\\n\\t\\t\\tif (Array.isArray(hash[l])) {\\n\\t\\t\\t\\t// Go through each l in array\\n\\t\\t\\t\\thash[l].forEach((item) => {\\n\\t\\t\\t\\t\\tcombos['r' + (i + 1)].push(item);\\n\\t\\t\\t\\t});\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tcombos['r' + (i + 1)].push(hash[l]);\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tconsole.log(combos);\\n\\t\\tlet car;\\n\\t\\tif (combos['r4'].length > 0) {\\n\\t\\t\\tcar = cartesian(combos['r1'], combos['r2'], combos['r3'], combos['r4']);\\n\\t\\t} else {\\n\\t\\t\\tcar = cartesian(combos['r1'], combos['r2'], combos['r3']);\\n\\t\\t}\\n\\n\\t\\tlet roots = [];\\n\\t\\tcar.forEach((item) => {\\n\\t\\t\\tword = '';\\n\\t\\t\\titem.forEach((r) => {\\n\\t\\t\\t\\tword += r + ' ';\\n\\t\\t\\t});\\n\\t\\t\\troots.push(word.trim());\\n\\t\\t});\\n\\n\\t\\tconsole.log(roots);\\n\\t\\treturn roots;\\n\\t}\\n\\n\\tfunction cartesian() {\\n\\t\\tvar r = [],\\n\\t\\t\\targ = arguments,\\n\\t\\t\\tmax = arg.length - 1;\\n\\t\\tfunction helper(arr, i) {\\n\\t\\t\\tfor (var j = 0, l = arg[i].length; j < l; j++) {\\n\\t\\t\\t\\tvar a = arr.slice(0); // clone arr\\n\\t\\t\\t\\ta.push(arg[i][j]);\\n\\t\\t\\t\\tif (i == max) r.push(a);\\n\\t\\t\\t\\telse helper(a, i + 1);\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\thelper([], 0);\\n\\t\\treturn r;\\n\\t}\\n\\n\\tfunction handleBackgroundClick(event) {\\n\\t\\tconst spotlightWrapper = document.getElementById('spotlight_wrapper');\\n\\t\\tif (!spotlightWrapper) return;\\n\\t\\tif (!spotlightWrapper.contains(event.target)) {\\n\\t\\t\\tshowSpotlight.set(false);\\n\\t\\t\\t// Add any other actions you want to perform when clicking outside\\n\\t\\t}\\n\\t}\\n<\/script>\\n\\n{#if $showSpotlight}\\n\\t<!-- svelte-ignore a11y-click-events-have-key-events -->\\n\\t<div class=\\"bgFiller\\" on:click={handleBackgroundClick}>\\n\\t\\t<div class=\\"spotlight_wrapper\\" class:mobile={$device === 'mobile'}>\\n\\t\\t\\t<Search />\\n\\t\\t</div>\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.searchArabicRoots {\\n\\t\\tmax-width: 628px;\\n\\t\\tbackground: #ffa7a7;\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: left;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\n\\t.error {\\n\\t\\tmax-width: 628px;\\n\\t\\tbackground: #c52e2e;\\n\\t\\tcolor: #fff;\\n\\t\\tfont-size: 24px;\\n\\t\\ttext-align: left;\\n\\t\\tmargin: 0 auto;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\t.bgFiller {\\n\\t\\tbackground-color: #00000041;\\n\\t\\twidth: 100vw;\\n\\t\\theight: 100vh;\\n\\t\\tdisplay: block;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tz-index: 99999999;\\n\\t}\\n\\n\\t.spotlight_wrapper {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 15%;\\n\\t\\tdisplay: block;\\n\\t\\tmargin: 0 auto;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\twidth: 100%;\\n\\t\\t/* display: none; */\\n\\t}\\n\\n\\t.mobile.spotlight_wrapper {\\n\\t\\ttop: 2%;\\n\\t}\\n\\n\\t#spotlight {\\n\\t\\tdisplay: block;\\n\\t\\twidth: 628px;\\n\\t\\theight: 56px;\\n\\t\\tmargin: auto;\\n\\t\\t-moz-border-radius: 5px;\\n\\t\\t-webkit-border-radius: 5px;\\n\\t\\tborder-radius: 5px;\\n\\t\\t-moz-appearance: none;\\n\\t\\t-webkit-appearance: none;\\n\\t\\t-moz-box-shadow: 0 25px 60px 10px rgba(0, 0, 0, 0.3);\\n\\t\\t-webkit-box-shadow: 0 25px 60px 10px rgba(0, 0, 0, 0.3);\\n\\t\\tbox-shadow: 0 25px 60px 10px rgba(0, 0, 0, 0.3);\\n\\t\\tborder: 1px solid rgba(0, 0, 0, 0.2);\\n\\t\\toutline: none;\\n\\t\\tfont-size: 1.6rem;\\n\\t\\tfont-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\\n\\t\\t\\t'Lucida Grande', sans-serif;\\n\\t\\tcolor: #000;\\n\\t\\tbackgroundcolor: #f8f5f4;\\n\\t\\tbackground-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjIuNyAyMi41IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMi43IDIyLjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjguMSIgY3k9IjguNCIgcj0iNi44Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEzLjIiIHkxPSIxMi45IiB4Mj0iMjEuNSIgeTI9IjIxLjQiLz48L3N2Zz4=);\\n\\t\\tbackground-position: left 17px center;\\n\\t\\tbackground-repeat: no-repeat;\\n\\t\\tbackground-size: 3.5%;\\n\\t\\tpadding: 0 52px;\\n\\t}\\n\\t#spotlight:-moz-placeholder {\\n\\t\\tcolor: #666666;\\n\\t}\\n\\t#spotlight::-moz-placeholder {\\n\\t\\tcolor: #666666;\\n\\t}\\n\\t#spotlight:-ms-input-placeholder {\\n\\t\\tcolor: #666666;\\n\\t}\\n\\t#spotlight::-webkit-input-placeholder {\\n\\t\\tcolor: #666666;\\n\\t}\\n\\n\\t#desc {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 35%;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: center;\\n\\t\\tpadding: 0 40%;\\n\\t\\t-moz-box-sizing: border-box;\\n\\t\\t-webkit-box-sizing: border-box;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tfont-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,\\n\\t\\t\\t'Lucida Grande', sans-serif;\\n\\t\\tfont-size: 1.4rem;\\n\\t\\tline-height: 1.5;\\n\\t\\tcolor: #666666;\\n\\t}\\n\\n\\t.word {\\n\\t\\tmax-width: 628px;\\n\\t\\tmargin: 0 auto;\\n\\t\\t/* padding: 1em; */\\n\\t\\tpadding: 0.9em;\\n\\t\\tfont-size: 34px;\\n\\t\\tbackground: #fbffd7;\\n\\t\\tborder-bottom: 2px dashed;\\n\\t\\tbackground: #f0f3d7;\\n\\t\\tborder: 0.1em dashed #dee2c1;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgLC,wBAAU,CACT,gBAAgB,CAAE,SAAS,CAC3B,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,QACV,CAEA,iCAAmB,CAClB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,IAER,CAEA,OAAO,iCAAmB,CACzB,GAAG,CAAE,EACN"}`
};
const Spotlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showSpotlight, $$unsubscribe_showSpotlight;
  let $device, $$unsubscribe_device;
  $$unsubscribe_showSpotlight = subscribe(showSpotlight, (value) => $showSpotlight = value);
  $$unsubscribe_device = subscribe(device, (value) => $device = value);
  let { deliver = function() {
  } } = $$props;
  if ($$props.deliver === void 0 && $$bindings.deliver && deliver !== void 0) $$bindings.deliver(deliver);
  $$result.css.add(css$1);
  $$unsubscribe_showSpotlight();
  $$unsubscribe_device();
  return `${$showSpotlight ? ` <div class="bgFiller svelte-1wurgcb"><div class="${["spotlight_wrapper svelte-1wurgcb", $device === "mobile" ? "mobile" : ""].join(" ").trim()}">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
});
const css = {
  code: ".blur.svelte-8z21bi{filter:blur(10px)}.leftShelf.expanded.svelte-8z21bi{width:160px}.dashboard.svelte-8z21bi{height:100vh;display:flex;background-color:rgb(255, 255, 255)}.leftShelf.svelte-8z21bi{flex:0 0 auto;border-right:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-bottom-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234);background-color:rgb(255, 255, 255);transition:width 0.2s ease 0s;width:60px}.main.svelte-8z21bi{-webkit-box-flex:1;flex-grow:1;position:relative;overflow:auto}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport LeftBar from './LeftBar/LeftBar.svelte';\\n\\timport { onMount } from 'svelte';\\n\\n\\timport SpotlightSearch from './Search/Spotlight.svelte';\\n\\timport { user } from '$lib/stores/user';\\n\\tlet expanded = false;\\n\\timport Dashboard from '$lib/components/Home/Dashboards/Index.svelte';\\n\\timport { showSpotlight } from '$lib/stores/spotlight';\\n<\/script>\\n\\n<div class=\\"dashboard\\" class:blur={$showSpotlight}>\\n\\t{#if $user}\\n\\t\\t<div class=\\"leftShelf\\" class:expanded>\\n\\t\\t\\t<LeftBar\\n\\t\\t\\t\\texpand={() => {\\n\\t\\t\\t\\t\\texpanded = !expanded;\\n\\t\\t\\t\\t}}\\n\\t\\t\\t\\t{expanded}\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\t{/if}\\n\\t<div class=\\"main\\">\\n\\t\\t<!-- <Dashboard /> -->\\n\\t\\t<slot />\\n\\t</div>\\n</div>\\n\\n{#if $user}\\n\\t<SpotlightSearch />\\n{/if}\\n\\n<style>\\n\\t.blur {\\n\\t\\tfilter: blur(10px);\\n\\t}\\n\\t.leftShelf.expanded {\\n\\t\\twidth: 160px;\\n\\t}\\n\\t.dashboard {\\n\\t\\theight: 100vh;\\n\\t\\t/* min-width: 1200px; */\\n\\t\\tdisplay: flex;\\n\\t\\tbackground-color: rgb(255, 255, 255);\\n\\t}\\n\\n\\t.leftShelf {\\n\\t\\tflex: 0 0 auto;\\n\\t\\tborder-right: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-bottom-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t\\tbackground-color: rgb(255, 255, 255);\\n\\t\\ttransition: width 0.2s ease 0s;\\n\\t\\twidth: 60px;\\n\\t}\\n\\n\\tnav {\\n\\t\\tlist-style: none;\\n\\t\\tmargin: 0px;\\n\\t\\tpadding: 8px 0px;\\n\\t\\tposition: relative;\\n\\t}\\n\\t.main {\\n\\t\\t-webkit-box-flex: 1;\\n\\t\\tflex-grow: 1;\\n\\t\\tposition: relative;\\n\\t\\toverflow: auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiCC,mBAAM,CACL,MAAM,CAAE,KAAK,IAAI,CAClB,CACA,UAAU,uBAAU,CACnB,KAAK,CAAE,KACR,CACA,wBAAW,CACV,MAAM,CAAE,KAAK,CAEb,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CAEA,wBAAW,CACV,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CACd,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,mBAAmB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACvC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACrC,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,EAAE,CAC9B,KAAK,CAAE,IACR,CAQA,mBAAM,CACL,gBAAgB,CAAE,CAAC,CACnB,SAAS,CAAE,CAAC,CACZ,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,IACX"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showSpotlight, $$unsubscribe_showSpotlight;
  let $user, $$unsubscribe_user;
  $$unsubscribe_showSpotlight = subscribe(showSpotlight, (value) => $showSpotlight = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let expanded = false;
  $$result.css.add(css);
  $$unsubscribe_showSpotlight();
  $$unsubscribe_user();
  return `<div class="${["dashboard svelte-8z21bi", $showSpotlight ? "blur" : ""].join(" ").trim()}">${$user ? `<div class="${["leftShelf svelte-8z21bi", expanded ? "expanded" : ""].join(" ").trim()}">${validate_component(LeftBar, "LeftBar").$$render(
    $$result,
    {
      expand: () => {
        expanded = !expanded;
      },
      expanded
    },
    {},
    {}
  )}</div>` : ``} <div class="main svelte-8z21bi"> ${slots.default ? slots.default({}) : ``}</div></div> ${$user ? `${validate_component(Spotlight, "SpotlightSearch").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Index as I
};
