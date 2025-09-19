import { c as create_ssr_component, d as escape, j as null_to_empty } from "./ssr.js";
/* empty css                                      */
const css = {
  code: "div.svelte-14o8ttq.svelte-14o8ttq{max-width:350px;margin:0 auto;margin-top:4em;display:block;text-align:center}.logo.svelte-14o8ttq.svelte-14o8ttq{max-width:250px;margin:0 auto;display:block}.lg.svelte-14o8ttq .logo.svelte-14o8ttq{max-width:250px}.sm.svelte-14o8ttq .logo.svelte-14o8ttq{max-width:150px}img.svelte-14o8ttq.svelte-14o8ttq{max-width:250px;margin:0 auto;display:block}",
  map: `{"version":3,"file":"Spinner.svelte","sources":["Spinner.svelte"],"sourcesContent":["<script>\\n\\texport let size = 'lg';\\n<\/script>\\n\\n<div class={size}>\\n\\t<img src=\\"/logo.svg\\" class=\\"logo\\" alt=\\"\\" />\\n\\t<br />\\n\\t<h1><slot /></h1>\\n\\t<img src=\\"/spinner.gif\\" alt=\\"\\" />\\n</div>\\n\\n<style>\\n\\tdiv {\\n\\t\\tmax-width: 350px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tmargin-top: 4em;\\n\\t\\tdisplay: block;\\n\\t\\ttext-align: center;\\n\\t}\\n\\t.logo {\\n\\t\\tmax-width: 250px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.lg div {\\n\\t\\tmax-width: 350px;\\n\\t}\\n\\n\\t.lg .logo {\\n\\t\\tmax-width: 250px;\\n\\t}\\n\\n\\t.sm div {\\n\\t\\tmax-width: 250px;\\n\\t}\\n\\n\\t.sm .logo {\\n\\t\\tmax-width: 150px;\\n\\t}\\n\\timg {\\n\\t\\tmax-width: 250px;\\n\\t\\tmargin: 0 auto;\\n\\t\\tdisplay: block;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,iCAAI,CACH,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,GAAG,CACf,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,MACb,CACA,mCAAM,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,KACV,CAMA,kBAAG,CAAC,oBAAM,CACT,SAAS,CAAE,KACZ,CAMA,kBAAG,CAAC,oBAAM,CACT,SAAS,CAAE,KACZ,CACA,iCAAI,CACH,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,KACV"}`
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "lg" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(size), true) + " svelte-14o8ttq"}"><img src="/logo.svg" class="logo svelte-14o8ttq" alt=""> <br> <h1>${slots.default ? slots.default({}) : ``}</h1> <img src="/spinner.gif" alt="" class="svelte-14o8ttq"> </div>`;
});
export {
  Spinner as S
};
