import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { I as Index } from "../../../../../chunks/Index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let verseRef = $page.params.verse;
  $$unsubscribe_page();
  return `${validate_component(Index, "Iraaber").$$render($$result, { verseRef }, {}, {})}`;
});
export {
  Page as default
};
