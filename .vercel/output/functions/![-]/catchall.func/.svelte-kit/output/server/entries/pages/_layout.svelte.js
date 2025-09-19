import { c as create_ssr_component, a as subscribe, e as each, v as validate_component, i as is_promise, n as noop, m as missing_component, b as set_store_value, d as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { I as Index } from "../../chunks/Index2.js";
import { u as user } from "../../chunks/user.js";
import { r as roomOpen, m as members } from "../../chunks/interaction_rooms.js";
import { m as mobile, w as width } from "../../chunks/device.js";
const exitBeforeEnter = writable(false);
const transitioning = writable(null);
const modals = writable([]);
function isLazyModal(component) {
  return typeof component.prototype === "undefined";
}
async function getComponent(component) {
  return component().then((res) => res.default);
}
const Modals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modals, $$unsubscribe_modals;
  let $transitioning, $$unsubscribe_transitioning;
  let $$unsubscribe_exitBeforeEnter;
  $$unsubscribe_modals = subscribe(modals, (value) => $modals = value);
  $$unsubscribe_transitioning = subscribe(transitioning, (value) => $transitioning = value);
  $$unsubscribe_exitBeforeEnter = subscribe(exitBeforeEnter, (value) => value);
  $$unsubscribe_modals();
  $$unsubscribe_transitioning();
  $$unsubscribe_exitBeforeEnter();
  return `${$modals.length > 0 ? `${slots.backdrop ? slots.backdrop({}) : ``}` : ``} ${slots.default ? slots.default({}) : ` ${each($modals, (modal, i) => {
    return ` ${isLazyModal(modal.component) ? `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` ${slots.loading ? slots.loading({}) : ``} `;
      }
      return function(component) {
        return ` ${validate_component(component || missing_component, "svelte:component").$$render(
          $$result,
          Object.assign(
            {},
            {
              isOpen: i === $modals.length - 1 && !$transitioning
            },
            modal.props
          ),
          {},
          {}
        )} `;
      }(__value);
    }(getComponent(modal.component))}` : ` ${validate_component(modal.component || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          isOpen: i === $modals.length - 1 && !$transitioning
        },
        modal.props
      ),
      {},
      {}
    )}`}`;
  })} `}`;
});
const css = {
  code: "div.svelte-2xokay{font-family:'Poppins', sans-serif}.flex.svelte-2xokay{display:flex}.flex-1.svelte-2xokay{flex:1 1 85%}.flex-2.svelte-2xokay{flex:1 1 15%;border-left:1px solid #eee;padding:10px}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<!-- <script context=\\"module\\">\\n\\t//the session object destructured below comes from the hooks.js file above\\n\\texport async function load({ session }) {\\n\\t\\treturn {\\n\\t\\t\\tprops: {\\n\\t\\t\\t\\t//Add the boolean as a property of the __layout.svelte component\\n\\t\\t\\t\\toverrideMobile: session.mobile\\n\\t\\t\\t}\\n\\t\\t};\\n\\t}\\n<\/script> -->\\n\\n<script>\\n\\timport '../app.pcss';\\n\\timport 'sweetalert2/dist/sweetalert2.min.css';\\n\\timport { fade } from 'svelte/transition';\\n\\timport { Modals, closeModal } from 'svelte-modals'; //\\n\\n\\timport Main from '$lib/components/Main/Index.svelte';\\n\\timport { user } from '$lib/stores/user';\\n\\timport { members, roomOpen } from '$lib/stores/interaction_rooms';\\n\\n\\timport { width, mobile } from '$lib/utils/device';\\n\\t//receive whether to override and render as mobile\\n\\texport let overrideMobile = true;\\n\\t//store this in the shared stores located in '$lib/utils/device'\\n\\t$mobile = overrideMobile;\\n<\/script>\\n\\n<!-- notice we also bind the inner width of the HTML document to a store -->\\n<svelte:window bind:innerWidth={$width} />\\n\\n<div>\\n\\t{#if !$user}\\n\\t\\t<slot />\\n\\t{:else}\\n\\t\\t<Main>\\n\\t\\t\\t<div class=\\"flex\\">\\n\\t\\t\\t\\t<div class=\\"flex-1\\">\\n\\t\\t\\t\\t\\t<slot />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{#if $roomOpen}\\n\\t\\t\\t\\t\\t<div class=\\"flex-2\\">\\n\\t\\t\\t\\t\\t\\t<ul class=\\"squad clean-list\\">\\n\\t\\t\\t\\t\\t\\t\\t{#each $members as member}\\n\\t\\t\\t\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\"status\\"><i class=\\"fa fa-square-o\\" /></span>{' '}<span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"username\\">{member}</span\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</Main>\\n\\t{/if}\\n</div>\\n<Modals>\\n\\t<div slot=\\"backdrop\\" class=\\"backdrop\\" transition:fade on:click={closeModal} />\\n</Modals>\\n\\n<style>\\n\\tdiv {\\n\\t\\tfont-family: 'Poppins', sans-serif;\\n\\t}\\n\\n\\t.flex {\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t.flex-1 {\\n\\t\\tflex: 1 1 85%;\\n\\t}\\n\\n\\t.flex-2 {\\n\\t\\tflex: 1 1 15%;\\n\\t\\tborder-left: 1px solid #eee;\\n\\t\\tpadding: 10px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+DC,iBAAI,CACH,WAAW,CAAE,SAAS,CAAC,CAAC,UACzB,CAEA,mBAAM,CACL,OAAO,CAAE,IACV,CAEA,qBAAQ,CACP,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GACX,CAEA,qBAAQ,CACP,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACb,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC3B,OAAO,CAAE,IACV"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mobile, $$unsubscribe_mobile;
  let $$unsubscribe_width;
  let $user, $$unsubscribe_user;
  let $roomOpen, $$unsubscribe_roomOpen;
  let $members, $$unsubscribe_members;
  $$unsubscribe_mobile = subscribe(mobile, (value) => $mobile = value);
  $$unsubscribe_width = subscribe(width, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_roomOpen = subscribe(roomOpen, (value) => $roomOpen = value);
  $$unsubscribe_members = subscribe(members, (value) => $members = value);
  let { overrideMobile = true } = $$props;
  set_store_value(mobile, $mobile = overrideMobile, $mobile);
  if ($$props.overrideMobile === void 0 && $$bindings.overrideMobile && overrideMobile !== void 0) $$bindings.overrideMobile(overrideMobile);
  $$result.css.add(css);
  $$unsubscribe_mobile();
  $$unsubscribe_width();
  $$unsubscribe_user();
  $$unsubscribe_roomOpen();
  $$unsubscribe_members();
  return `    <div class="svelte-2xokay">${!$user ? `${slots.default ? slots.default({}) : ``}` : `${validate_component(Index, "Main").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex svelte-2xokay"><div class="flex-1 svelte-2xokay">${slots.default ? slots.default({}) : ``}</div> ${$roomOpen ? `<div class="flex-2 svelte-2xokay"><ul class="squad clean-list">${each($members, (member) => {
        return `<li><span class="status" data-svelte-h="svelte-ejgyvk"><i class="fa fa-square-o"></i></span>${escape(" ")}<span class="username">${escape(member)}</span> </li>`;
      })}</ul></div>` : ``}</div>`;
    }
  })}`}</div> ${validate_component(Modals, "Modals").$$render($$result, {}, {}, {
    backdrop: () => {
      return `<div slot="backdrop" class="backdrop svelte-2xokay"></div>`;
    }
  })}`;
});
export {
  Layout as default
};
