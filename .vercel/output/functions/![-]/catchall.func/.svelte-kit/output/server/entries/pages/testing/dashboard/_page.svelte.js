import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { I as Index } from "../../../../chunks/Index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
