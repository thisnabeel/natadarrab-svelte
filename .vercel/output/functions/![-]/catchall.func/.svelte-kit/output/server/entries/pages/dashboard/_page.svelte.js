import { c as create_ssr_component, a as subscribe, d as escape, v as validate_component } from "../../../chunks/ssr.js";
import { u as user } from "../../../chunks/user.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
/* empty css                                                  */
import "../../../chunks/api.js";
/* empty css                                                        */
import "../../../chunks/device.js";
/* empty css                                                   */
/* empty css                                                  */
const css$1 = {
  code: ".sign-out.svelte-1f8cafh{position:absolute;top:10px;right:10px;font-size:32px}.wrapper.svelte-1f8cafh{padding:2em}@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');.extra-bold.svelte-1f8cafh{font-size:58px;color:#000;font-weight:bold}.lalezar-regular.svelte-1f8cafh{font-family:'Lalezar', system-ui;font-weight:400;font-style:normal}",
  map: `{"version":3,"file":"Teacher.svelte","sources":["Teacher.svelte"],"sourcesContent":["<script>\\n\\timport { user } from '$lib/stores/user';\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<h1 class=\\"extra-bold\\">\\n\\t\\t<div class=\\"salam lalezar-regular\\">السلام عليكم<br /> {$user.first_name}</div>\\n\\t</h1>\\n\\n\\t<i class=\\"fa fa-sign-out sign-out\\" on:click={() => user.set(null)} />\\n</div>\\n\\n<style>\\n\\t.sign-out {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 10px;\\n\\t\\tright: 10px;\\n\\t\\tfont-size: 32px;\\n\\t}\\n\\t.wrapper {\\n\\t\\tpadding: 2em;\\n\\t}\\n\\t@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');\\n\\n\\t.extra-bold {\\n\\t\\tfont-size: 58px;\\n\\t\\tcolor: #000;\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\t.lalezar-regular {\\n\\t\\tfont-family: 'Lalezar', system-ui;\\n\\t\\tfont-weight: 400;\\n\\t\\tfont-style: normal;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAaC,wBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IACZ,CACA,uBAAS,CACR,OAAO,CAAE,GACV,CACA,QAAQ,oEAAoE,CAE5E,0BAAY,CACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IACd,CAEA,+BAAiB,CAChB,WAAW,CAAE,SAAS,CAAC,CAAC,SAAS,CACjC,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACb"}`
};
const Teacher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `<div class="wrapper svelte-1f8cafh"><h1 class="extra-bold svelte-1f8cafh"><div class="salam lalezar-regular svelte-1f8cafh">السلام عليكم<br> ${escape($user.first_name)}</div></h1> <i class="fa fa-sign-out sign-out svelte-1f8cafh"></i> </div>`;
});
const css = {
  code: ".sign-out.svelte-1f8cafh{position:absolute;top:10px;right:10px;font-size:32px}.wrapper.svelte-1f8cafh{padding:2em}@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');.extra-bold.svelte-1f8cafh{font-size:58px;color:#000;font-weight:bold}.lalezar-regular.svelte-1f8cafh{font-family:'Lalezar', system-ui;font-weight:400;font-style:normal}",
  map: `{"version":3,"file":"User.svelte","sources":["User.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from '$app/navigation';\\n\\timport { user } from '$lib/stores/user';\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t{#if $user}\\n\\t\\t<h1 class=\\"extra-bold\\">\\n\\t\\t\\t<div class=\\"salam lalezar-regular\\">السلام عليكم<br /> {$user.first_name}</div>\\n\\t\\t</h1>\\n\\n\\t\\t<i class=\\"fa fa-sign-out sign-out\\" on:click={() => user.set(null)} />\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.sign-out {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 10px;\\n\\t\\tright: 10px;\\n\\t\\tfont-size: 32px;\\n\\t}\\n\\t.wrapper {\\n\\t\\tpadding: 2em;\\n\\t}\\n\\t@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');\\n\\n\\t.extra-bold {\\n\\t\\tfont-size: 58px;\\n\\t\\tcolor: #000;\\n\\t\\tfont-weight: bold;\\n\\t}\\n\\n\\t.lalezar-regular {\\n\\t\\tfont-family: 'Lalezar', system-ui;\\n\\t\\tfont-weight: 400;\\n\\t\\tfont-style: normal;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,wBAAU,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IACZ,CACA,uBAAS,CACR,OAAO,CAAE,GACV,CACA,QAAQ,oEAAoE,CAE5E,0BAAY,CACX,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,IACd,CAEA,+BAAiB,CAChB,WAAW,CAAE,SAAS,CAAC,CAAC,SAAS,CACjC,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACb"}`
};
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `<div class="wrapper svelte-1f8cafh">${$user ? `<h1 class="extra-bold svelte-1f8cafh"><div class="salam lalezar-regular svelte-1f8cafh">السلام عليكم<br> ${escape($user.first_name)}</div></h1> <i class="fa fa-sign-out sign-out svelte-1f8cafh"></i>` : ``} </div>`;
});
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user && $user.admin ? `${validate_component(Teacher, "Teacher").$$render($$result, {}, {}, {})}` : `${validate_component(User, "User").$$render($$result, {}, {}, {})}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_user();
  return `${validate_component(Index, "Home").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
