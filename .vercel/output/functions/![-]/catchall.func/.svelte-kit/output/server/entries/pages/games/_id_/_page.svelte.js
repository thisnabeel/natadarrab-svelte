import { c as create_ssr_component, a as subscribe } from "../../../../chunks/ssr.js";
import "../../../../chunks/api.js";
/* empty css                                                    */
import "sweetalert2";
import { p as page } from "../../../../chunks/stores.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/state.svelte.js";
const css = {
  code: ".game.svelte-4qqeqb{padding:3em}.welcomer.svelte-4qqeqb{max-width:350px;margin:0 auto;margin-top:4em;display:block}.logo.svelte-4qqeqb{max-width:250px;margin:0 auto;display:block}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\n\\timport Game from '$lib/components/Games/Game/Game.svelte';\\n\\timport { onMount } from 'svelte';\\n\\timport { page } from '$app/stores';\\n\\timport shuffler from '$lib/functions/shuffler';\\n\\timport { afterNavigate } from '$app/navigation';\\n\\n\\tlet game = null;\\n\\n\\tonMount(async () => {});\\n\\n\\tafterNavigate(() => {\\n\\t\\tfetchGame();\\n\\t});\\n\\n\\tasync function fetchGame() {\\n\\t\\tconst id = $page.params.id;\\n\\t\\tgame = await API.get('/games/' + id + '.json');\\n\\t\\tgame.folder.questions = shuffler(game.folder.questions);\\n\\t\\tconsole.log(game);\\n\\t}\\n<\/script>\\n\\n<!-- svelte-ignore missing-declaration -->\\n\\n{#if game}\\n\\t<div class=\\"game\\">\\n\\t\\t<Game {game} />\\n\\t</div>\\n{:else}\\n\\t<div class=\\"welcomer text-center\\">\\n\\t\\t<img src=\\"/logo.svg\\" class=\\"logo\\" alt=\\"\\" />\\n\\t\\t<br />\\n\\t\\t<h1>Loading Quiz...</h1>\\n\\t\\t<img src=\\"/spinner.gif\\" alt=\\"\\" />\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t.game {\\n\\t\\tpadding: 3em;\\n\\t}\\n\\n\\t.welcomer {\\n\\t\\tmax-width: 350px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tmargin-top: 4em;\\n\\t\\tdisplay: block;\\n\\t}\\n\\t.logo {\\n\\t\\tmax-width: 250px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tdisplay: block;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAyCC,mBAAM,CACL,OAAO,CAAE,GACV,CAEA,uBAAU,CACT,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,KACV,CACA,mBAAM,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,KACV"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return ` ${`<div class="welcomer text-center svelte-4qqeqb" data-svelte-h="svelte-1noayzm"><img src="/logo.svg" class="logo svelte-4qqeqb" alt=""> <br> <h1>Loading Quiz...</h1> <img src="/spinner.gif" alt=""></div>`}`;
});
export {
  Page as default
};
