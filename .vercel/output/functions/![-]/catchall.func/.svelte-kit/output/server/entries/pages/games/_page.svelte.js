import { c as create_ssr_component, g as get_store_value, h as createEventDispatcher, d as escape, f as add_attribute, e as each, a as subscribe, b as set_store_value, s as setContext, v as validate_component } from "../../../chunks/ssr.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import "../../../chunks/api.js";
/* empty css                                                 */
import { w as writable } from "../../../chunks/index.js";
import { u as user } from "../../../chunks/user.js";
const css$6 = {
  code: ".top-nav.svelte-1epg30x.svelte-1epg30x{padding:16px 16px 16px 40px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;background-color:rgb(255, 255, 255);border-bottom:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-right-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}.top-nav.svelte-1epg30x .head.svelte-1epg30x{height:48px;display:flex;-webkit-box-align:center;align-items:center;font-weight:700;font-size:1.5rem;line-height:1.4;font-family:'Avenir Next', sans-serif;margin-right:16px;cursor:pointer}.hori-divider.svelte-1epg30x.svelte-1epg30x{padding-left:16px;margin-top:-16px;margin-bottom:-16px;height:74px;border-right:1px solid rgb(231, 232, 234);border-top-color:rgb(231, 232, 234);border-bottom-color:rgb(231, 232, 234);border-left-color:rgb(231, 232, 234)}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\texport let nextWeek;\\n<\/script>\\n\\n<div class=\\"top-nav\\">\\n\\t<div class=\\"head\\">\\n\\t\\t<span>Quizzes</span>\\n\\t</div>\\n\\n\\t<div class=\\"hori-divider\\" />\\n</div>\\n\\n<style>\\n\\t.top-nav {\\n\\t\\tpadding: 16px 16px 16px 40px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\t-webkit-box-pack: justify;\\n\\t\\tjustify-content: space-between;\\n\\t\\tbackground-color: rgb(255, 255, 255);\\n\\t\\tborder-bottom: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-right-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t}\\n\\n\\t.top-nav .head {\\n\\t\\theight: 48px;\\n\\t\\tdisplay: flex;\\n\\t\\t-webkit-box-align: center;\\n\\t\\talign-items: center;\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tline-height: 1.4;\\n\\t\\tfont-family: 'Avenir Next', sans-serif;\\n\\t\\tmargin-right: 16px;\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.left-arrow {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tpadding: 4px;\\n\\t}\\n\\n\\t.left-arrow > div {\\n\\t\\tline-height: 0;\\n\\t\\twidth: 20px;\\n\\t\\theight: 20px;\\n\\t}\\n\\n\\t.arrow-space {\\n\\t\\tpadding-left: 4px;\\n\\t\\tpadding-right: 4px;\\n\\t}\\n\\n\\t.right-arrow {\\n\\t\\tcursor: pointer;\\n\\t\\tbox-sizing: border-box;\\n\\t\\tborder: 1px solid transparent;\\n\\t\\tborder-radius: 4px;\\n\\t\\tpadding: 4px;\\n\\t}\\n\\n\\t.right-arrow > div {\\n\\t\\tline-height: 0;\\n\\t\\twidth: 20px;\\n\\t\\theight: 20px;\\n\\t}\\n\\n\\t.hori-divider {\\n\\t\\tpadding-left: 16px;\\n\\t\\tmargin-top: -16px;\\n\\t\\tmargin-bottom: -16px;\\n\\t\\theight: 74px;\\n\\t\\tborder-right: 1px solid rgb(231, 232, 234);\\n\\t\\tborder-top-color: rgb(231, 232, 234);\\n\\t\\tborder-bottom-color: rgb(231, 232, 234);\\n\\t\\tborder-left-color: rgb(231, 232, 234);\\n\\t}\\n\\n\\t.arrow:hover {\\n\\t\\tbackground-color: rgb(250, 250, 250);\\n\\t\\tborder-color: rgb(231, 232, 234);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAaC,sCAAS,CACR,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC5B,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CACzB,eAAe,CAAE,aAAa,CAC9B,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC3C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,kBAAkB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACtC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC,CAEA,uBAAQ,CAAC,oBAAM,CACd,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,aAAa,CAAC,CAAC,UAAU,CACtC,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,OACT,CAmCA,2CAAc,CACb,YAAY,CAAE,IAAI,CAClB,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,mBAAmB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACvC,iBAAiB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACrC"}`
};
const Index$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nextWeek } = $$props;
  if ($$props.nextWeek === void 0 && $$bindings.nextWeek && nextWeek !== void 0) $$bindings.nextWeek(nextWeek);
  $$result.css.add(css$6);
  return `<div class="top-nav svelte-1epg30x" data-svelte-h="svelte-m5xug2"><div class="head svelte-1epg30x"><span>Quizzes</span></div> <div class="hori-divider svelte-1epg30x"></div> </div>`;
});
let t = {};
const exec = (command, value = null) => {
  document.execCommand(command, false, value);
};
const saveRange = (editor) => {
  const documentSelection = document.getSelection();
  t.range = null;
  if (documentSelection.rangeCount) {
    let savedRange = t.range = documentSelection.getRangeAt(0);
    let range = document.createRange();
    let rangeStart;
    range.selectNodeContents(editor);
    range.setEnd(savedRange.startContainer, savedRange.startOffset);
    rangeStart = (range + "").length;
    t.metaRange = {
      start: rangeStart,
      end: rangeStart + (savedRange + "").length
    };
  }
};
const restoreRange = (editor) => {
  let metaRange = t.metaRange;
  let savedRange = t.range;
  let documentSelection = document.getSelection();
  let range;
  if (!savedRange) {
    return;
  }
  if (metaRange && metaRange.start !== metaRange.end) {
    let charIndex = 0, nodeStack = [editor], node, foundStart = false, stop = false;
    range = document.createRange();
    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType === 3) {
        let nextCharIndex = charIndex + node.length;
        if (!foundStart && metaRange.start >= charIndex && metaRange.start <= nextCharIndex) {
          range.setStart(node, metaRange.start - charIndex);
          foundStart = true;
        }
        if (foundStart && metaRange.end >= charIndex && metaRange.end <= nextCharIndex) {
          range.setEnd(node, metaRange.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        let cn = node.childNodes;
        let i = cn.length;
        while (i > 0) {
          i -= 1;
          nodeStack.push(cn[i]);
        }
      }
    }
  }
  documentSelection.removeAllRanges();
  documentSelection.addRange(range || savedRange);
};
const unwrap = (wrapper) => {
  const docFrag = document.createDocumentFragment();
  while (wrapper.firstChild) {
    const child = wrapper.removeChild(wrapper.firstChild);
    docFrag.appendChild(child);
  }
  wrapper.parentNode.replaceChild(docFrag, wrapper);
};
const removeBlockTagsRecursive = (elements, tagsToRemove) => {
  Array.from(elements).forEach((item) => {
    if (tagsToRemove.some((tag) => tag === item.tagName.toLowerCase())) {
      if (item.children.length) {
        removeBlockTagsRecursive(item.children, tagsToRemove);
      }
      unwrap(item);
    }
  });
};
const getActionBtns = (actions) => {
  return Object.keys(actions).map((action) => actions[action]);
};
const getNewActionObj = (actions, userActions = []) => {
  if (userActions && userActions.length) {
    const newActions = {};
    userActions.forEach((action) => {
      if (typeof action === "string") {
        newActions[action] = Object.assign({}, actions[action]);
      } else if (actions[action.name]) {
        newActions[action.name] = Object.assign(actions[action.name], action);
      } else {
        newActions[action.name] = Object.assign({}, action);
      }
    });
    return newActions;
  } else {
    return actions;
  }
};
const removeBadTags = (html) => {
  ["style", "script", "applet", "embed", "noframes", "noscript"].forEach((badTag) => {
    html = html.replace(new RegExp(`<${badTag}.*?${badTag}(.*?)>`, "gi"), "");
  });
  return html;
};
const linkSvg = '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M31.1 48.9l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9L15 50.4c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L11 41.8c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7c2.5-2.6 3.1-6.7 1.5-10l-5.9 5.9zM38.7 22.5l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2L42 38c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1c0 .1 0 .1 0 0z"></path><path d="M44.2 30.5c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.3-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.9 40.6c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM49.9 55.4h-8.5v-5h8.5v-8.9h5.2v8.9h8.5v5h-8.5v8.9h-5.2v-8.9z"></path></svg>';
const unlinkSvg = '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M30.9 49.1l-6.7 6.7c-.8.8-1.6.9-2.1.9s-1.4-.1-2.1-.9l-5.2-5.2c-1.1-1.1-1.1-3.1 0-4.2l6.1-6.1.2-.2 6.5-6.5c-1.2-.6-2.5-.9-3.8-.9-2.3 0-4.6.9-6.3 2.6L10.8 42c-3.5 3.5-3.5 9.2 0 12.7l5.2 5.2c1.7 1.7 4 2.6 6.3 2.6s4.6-.9 6.3-2.6l6.7-6.7C38 50.5 38.6 46.3 37 43l-6.1 6.1zM38.5 22.7l6.7-6.7c.8-.8 1.6-.9 2.1-.9s1.4.1 2.1.9l5.2 5.2c1.1 1.1 1.1 3.1 0 4.2l-6.1 6.1-.2.2-6.5 6.5c1.2.6 2.5.9 3.8.9 2.3 0 4.6-.9 6.3-2.6l6.7-6.7c3.5-3.5 3.5-9.2 0-12.7l-5.2-5.2c-1.7-1.7-4-2.6-6.3-2.6s-4.6.9-6.3 2.6l-6.7 6.7c-2.7 2.7-3.3 6.9-1.7 10.2l6.1-6.1z"></path><path d="M44.1 30.7c.2-.2.4-.6.4-.9 0-.3-.1-.6-.4-.9l-2.3-2.3c-.2-.2-.6-.4-.9-.4-.3 0-.6.1-.9.4L25.8 40.8c-.2.2-.4.6-.4.9 0 .3.1.6.4.9l2.3 2.3c.2.2.6.4.9.4.3 0 .6-.1.9-.4l14.2-14.2zM41.3 55.8v-5h22.2v5H41.3z"></path></svg>';
const defaultActions = {
  viewHtml: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path fill="none" stroke="currentColor" stroke-width="8" stroke-miterlimit="10" d="M26.9 17.9L9 36.2 26.9 54M45 54l17.9-18.3L45 17.9"></path></svg>',
    title: "View HTML",
    result: function() {
      let refs = get_store_value(this.references);
      let actionObj = get_store_value(this.state).actionObj;
      let helper = get_store_value(this.helper);
      helper.showEditor = !helper.showEditor;
      refs.editor.style.display = helper.showEditor ? "block" : "none";
      refs.raw.style.display = helper.showEditor ? "none" : "block";
      if (helper.showEditor) {
        refs.editor.innerHTML = refs.raw.value;
      } else {
        refs.raw.value = refs.editor.innerHTML;
      }
      setTimeout(() => {
        Object.keys(actionObj).forEach(
          (action) => actionObj[action].disabled = !helper.showEditor
        );
        actionObj.viewHtml.disabled = false;
        actionObj.viewHtml.active = !helper.showEditor;
        this.state.update((state2) => {
          state2.actionBtns = getActionBtns(actionObj);
          state2.actionObj = actionObj;
          return state2;
        });
      });
    }
  },
  undo: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M61.2 51.2c0-5.1-2.1-9.7-5.4-13.1-3.3-3.3-8-5.4-13.1-5.4H26.1v-12L10.8 36l15.3 15.3V39.1h16.7c3.3 0 6.4 1.3 8.5 3.5 2.2 2.2 3.5 5.2 3.5 8.5h6.4z"></path></svg>',
    title: "Undo",
    result: () => exec("undo")
  },
  redo: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M10.8 51.2c0-5.1 2.1-9.7 5.4-13.1 3.3-3.3 8-5.4 13.1-5.4H46v-12L61.3 36 45.9 51.3V39.1H29.3c-3.3 0-6.4 1.3-8.5 3.5-2.2 2.2-3.5 5.2-3.5 8.5h-6.5z"></path></svg>',
    title: "Redo",
    result: () => exec("redo")
  },
  b: {
    icon: "<b>B</b>",
    title: "Bold",
    result: () => exec("bold")
  },
  i: {
    icon: "<i>I</i>",
    title: "Italic",
    result: () => exec("italic")
  },
  u: {
    icon: "<u>U</u>",
    title: "Underline",
    result: () => exec("underline")
  },
  strike: {
    icon: "<strike>S</strike>",
    title: "Strike-through",
    result: () => exec("strikeThrough")
  },
  sup: {
    icon: "A<sup>2</sup>",
    title: "Superscript",
    result: () => exec("superscript")
  },
  sub: {
    icon: "A<sub>2</sub>",
    title: "Subscript",
    result: () => exec("subscript")
  },
  h1: {
    icon: "<b>H<sub>1</sub></b>",
    title: "Heading 1",
    result: () => exec("formatBlock", "<H1>")
  },
  h2: {
    icon: "<b>H<sub>2</sub></b>",
    title: "Heading 2",
    result: () => exec("formatBlock", "<H2>")
  },
  p: {
    icon: "&#182;",
    title: "Paragraph",
    result: () => exec("formatBlock", "<P>")
  },
  blockquote: {
    icon: "&#8220; &#8221;",
    title: "Quote",
    result: () => exec("formatBlock", "<BLOCKQUOTE>")
  },
  ol: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M27 14h36v8H27zM27 50h36v8H27zM27 32h36v8H27zM11.8 15.8V22h1.8v-7.8h-1.5l-2.1 1 .3 1.3zM12.1 38.5l.7-.6c1.1-1 2.1-2.1 2.1-3.4 0-1.4-1-2.4-2.7-2.4-1.1 0-2 .4-2.6.8l.5 1.3c.4-.3 1-.6 1.7-.6.9 0 1.3.5 1.3 1.1 0 .9-.9 1.8-2.6 3.3l-1 .9V40H15v-1.5h-2.9zM13.3 53.9c1-.4 1.4-1 1.4-1.8 0-1.1-.9-1.9-2.6-1.9-1 0-1.9.3-2.4.6l.4 1.3c.3-.2 1-.5 1.6-.5.8 0 1.2.3 1.2.8 0 .7-.8.9-1.4.9h-.7v1.3h.7c.8 0 1.6.3 1.6 1.1 0 .6-.5 1-1.4 1-.7 0-1.5-.3-1.8-.5l-.4 1.4c.5.3 1.3.6 2.3.6 2 0 3.2-1 3.2-2.4 0-1.1-.8-1.8-1.7-1.9z"></path></svg>',
    title: "Ordered List",
    result: () => exec("insertOrderedList")
  },
  ul: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M27 14h36v8H27zM27 50h36v8H27zM9 50h9v8H9zM9 32h9v8H9zM9 14h9v8H9zM27 32h36v8H27z"></path></svg>',
    title: "Unordered List",
    result: () => exec("insertUnorderedList")
  },
  hr: {
    icon: "&#8213;",
    title: "Horizontal Line",
    result: () => exec("insertHorizontalRule")
  },
  left: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h36v8H9z"></path></svg>',
    title: "Justify left",
    result: () => exec("justifyLeft")
  },
  right: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM27 32h36v8H27z"></path></svg>',
    title: "Justify right",
    result: () => exec("justifyRight")
  },
  center: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM18 32h36v8H18z"></path></svg>',
    title: "Justify center",
    result: () => exec("justifyCenter")
  },
  justify: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M9 14h54v8H9zM9 50h54v8H9zM9 32h54v8H9z"></path></svg>',
    title: "Justify full",
    result: () => exec("justifyFull")
  },
  a: {
    icon: linkSvg,
    title: "Insert link",
    result: function() {
      const actionObj = get_store_value(this.state).actionObj;
      const refs = get_store_value(this.references);
      if (actionObj.a.active) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(document.getSelection().focusNode);
        selection.removeAllRanges();
        selection.addRange(range);
        exec("unlink");
        actionObj.a.title = "Insert link";
        actionObj.a.icon = linkSvg;
        this.state.update((state2) => {
          state2.actionBtn = getActionBtns(actionObj);
          state2.actionObj = actionObj;
          return state2;
        });
      } else {
        saveRange(refs.editor);
        refs.modal.$set({
          show: true,
          event: "linkUrl",
          title: "Insert link",
          label: "Url"
        });
        if (!get_store_value(this.helper).link) {
          this.helper.update((state2) => {
            state2.link = true;
            return state2;
          });
          refs.modal.$on("linkUrl", (event) => {
            restoreRange(refs.editor);
            exec("createLink", event.detail);
            actionObj.a.title = "Unlink";
            actionObj.a.icon = unlinkSvg;
            this.state.update((state2) => {
              state2.actionBtn = getActionBtns(actionObj);
              state2.actionObj = actionObj;
              return state2;
            });
          });
        }
      }
    }
  },
  image: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M64 17v38H8V17h56m8-8H0v54h72V9z"></path><path d="M17.5 22C15 22 13 24 13 26.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zM16 50h27L29.5 32zM36 36.2l8.9-8.5L60.2 50H45.9S35.6 35.9 36 36.2z"></path></svg>',
    title: "Image",
    result: function() {
      const refs = get_store_value(this.references);
      saveRange(refs.editor);
      refs.modal.$set({
        show: true,
        event: "imageUrl",
        title: "Insert image",
        label: "Url"
      });
      if (!get_store_value(this.helper).image) {
        this.helper.update((state2) => {
          state2.image = true;
          return state2;
        });
        refs.modal.$on("imageUrl", (event) => {
          restoreRange(refs.editor);
          exec("insertImage", event.detail);
        });
      }
    }
  },
  forecolor: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M32 15h7.8L56 57.1h-7.9l-4-11.1H27.4l-4 11.1h-7.6L32 15zm-2.5 25.4h12.9L36 22.3h-.2l-6.3 18.1z"></path></svg>',
    title: "Text color",
    colorPicker: true,
    result: function() {
      showColorPicker.call(this, "foreColor");
    }
  },
  backcolor: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M36.5 22.3l-6.3 18.1H43l-6.3-18.1z"></path><path d="M9 8.9v54.2h54.1V8.9H9zm39.9 48.2L45 46H28.2l-3.9 11.1h-7.6L32.8 15h7.8l16.2 42.1h-7.9z"></path></svg>',
    title: "Background color",
    colorPicker: true,
    result: function() {
      showColorPicker.call(this, "backColor");
    }
  },
  removeFormat: {
    icon: '<svg viewBox="0 0 72 72" width="17px" height="100%"><path d="M58.2 54.6L52 48.5l3.6-3.6 6.1 6.1 6.4-6.4 3.8 3.8-6.4 6.4 6.1 6.1-3.6 3.6-6.1-6.1-6.4 6.4-3.7-3.8 6.4-6.4zM21.7 52.1H50V57H21.7zM18.8 15.2h34.1v6.4H39.5v24.2h-7.4V21.5H18.8v-6.3z"></path></svg>',
    title: "Remove format",
    result: function() {
      const refs = get_store_value(this.references);
      const selection = window.getSelection();
      if (!selection.toString().length) {
        removeBlockTagsRecursive(
          refs.editor.children,
          this.removeFormatTags
        );
        const range = document.createRange();
        range.selectNodeContents(refs.editor);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      exec("removeFormat");
      selection.removeAllRanges();
    }
  }
};
const showColorPicker = function(cmd) {
  const refs = get_store_value(this.references);
  saveRange(refs.editor);
  refs.colorPicker.$set({ show: true, event: cmd });
  if (!get_store_value(this.helper)[cmd]) {
    this.helper.update((state2) => {
      state2[cmd] = true;
      return state2;
    });
    refs.colorPicker.$on(cmd, (event) => {
      let item = event.detail;
      if (item.modal) {
        refs.modal.$set({
          show: true,
          event: `${cmd}Changed`,
          title: "Text color",
          label: cmd === "foreColor" ? "Text color" : "Background color"
        });
        const command = cmd;
        if (!get_store_value(this.helper)[`${command}Modal`]) {
          get_store_value(this.helper)[`${command}Modal`] = true;
          refs.modal.$on(`${command}Changed`, (event2) => {
            let color = event2.detail;
            restoreRange(refs.editor);
            exec(command, color);
          });
        }
      } else {
        restoreRange(refs.editor);
        exec(cmd, item.color);
      }
    });
  }
};
const css$5 = {
  code: '.cl-editor-modal.svelte-42yfje.svelte-42yfje{position:absolute;top:37px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:520px;width:100%;height:140px;backface-visibility:hidden;z-index:11}.cl-editor-overlay.svelte-42yfje.svelte-42yfje{position:absolute;background-color:rgba(255,255,255,.5);height:100%;width:100%;left:0;top:0;z-index:10}.modal-box.svelte-42yfje.svelte-42yfje{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);max-width:500px;width:calc(100% - 20px);padding-bottom:36px;z-index:1;background-color:#FFF;text-align:center;font-size:14px;box-shadow:rgba(0,0,0,.2) 0 2px 3px;-webkit-backface-visibility:hidden;backface-visibility:hidden}.modal-title.svelte-42yfje.svelte-42yfje{font-size:24px;font-weight:700;margin:0 0 20px;padding:2px 0 4px;display:block;border-bottom:1px solid #EEE;color:#333;background:#fbfcfc}.modal-label.svelte-42yfje.svelte-42yfje{display:block;position:relative;margin:15px 12px;height:29px;line-height:29px;overflow:hidden}.modal-label.svelte-42yfje input.svelte-42yfje{position:absolute;top:0;right:0;height:27px;line-height:25px;border:1px solid #DEDEDE;background:#fff;font-size:14px;max-width:330px;width:70%;padding:0 7px;transition:all 150ms}.modal-label.svelte-42yfje input.svelte-42yfje:focus{outline:none}.input-error.svelte-42yfje input.svelte-42yfje{border:1px solid #e74c3c}.input-info.svelte-42yfje.svelte-42yfje{display:block;text-align:left;height:25px;line-height:25px;transition:all 150ms}.input-info.svelte-42yfje span.svelte-42yfje{display:block;color:#69878f;background-color:#fbfcfc;border:1px solid #DEDEDE;padding:1px 7px;width:150px}.input-error.svelte-42yfje .input-info.svelte-42yfje{margin-top:-29px}.input-error.svelte-42yfje .msg-error.svelte-42yfje{color:#e74c3c}.modal-button.svelte-42yfje.svelte-42yfje{position:absolute;bottom:10px;right:0;text-decoration:none;color:#FFF;display:block;width:100px;height:35px;line-height:33px;margin:0 10px;background-color:#333;border:none;cursor:pointer;font-family:"Lato",Helvetica,Verdana,sans-serif;font-size:16px;transition:all 150ms}.modal-submit.svelte-42yfje.svelte-42yfje{right:110px;background:#2bc06a}.modal-reset.svelte-42yfje.svelte-42yfje{color:#555;background:#e6e6e6}',
  map: `{"version":3,"file":"EditorModal.svelte","sources":["EditorModal.svelte"],"sourcesContent":["<svelte:options accessors={true}></svelte:options>\\n{#if show}\\n  <div class=\\"cl-editor-overlay\\" on:click=\\"{cancel}\\"></div>\\n  <div class=\\"cl-editor-modal\\">\\n    <div class=\\"modal-box\\">\\n      <span class=\\"modal-title\\">{title}</span>\\n      <form on:submit|preventDefault=\\"{event=>confirm()}\\">\\n        <label class=\\"modal-label\\" class:input-error={error}>\\n          <input bind:this={refs.text} on:keyup=\\"{hideError}\\" use:inputType name=\\"text\\" bind:value=\\"{text}\\">\\n          <span class=\\"input-info\\">\\n            <span>{label}</span>\\n            {#if error}\\n            <span class=\\"msg-error\\">Required</span>\\n            {/if}\\n          </span>\\n        </label>\\n        <button class=\\"modal-button modal-submit\\" type=\\"submit\\">Confirm</button>\\n        <button class=\\"modal-button modal-reset\\" type=\\"reset\\" on:click=\\"{cancel}\\">Cancel</button>\\n      </form>\\n    </div>\\n  </div>\\n{/if}\\n\\n<script>\\n  import { createEventDispatcher } from \\"svelte\\";\\n\\n  let dispatcher = new createEventDispatcher();\\n\\n  export let show = false;\\n  export let text = '';\\n  export let event = '';\\n  export let title = '';\\n  export let label = '';\\n  export let error = false;\\n\\n  let refs = {}\\n  \\n  const inputType = (e) => {\\n    e.type = event.includes('Color') ? 'color' : 'text';\\n  };\\n\\n  $:{\\n    if (show) {\\n      setTimeout(() => {\\n        refs.text.focus();\\n      });\\n    }\\n  }\\n\\n  function confirm() {\\n    if (text) {\\n      dispatcher(event,text);\\n      cancel();\\n    } else {\\n      error = true;\\n      refs.text.focus();\\n    }\\n  }\\n\\n  function cancel() {\\n    show = false;\\n    text = '';\\n    error = false;\\n  }\\n\\n  function hideError() {\\n    error = false;\\n  }\\n<\/script>\\n\\n<style>\\n.cl-editor-modal {\\n  position: absolute;\\n  top: 37px;\\n  left: 50%;\\n  -webkit-transform: translateX(-50%);\\n  transform: translateX(-50%);\\n  max-width: 520px;\\n  width: 100%;\\n  height: 140px;\\n  backface-visibility: hidden;\\n  z-index: 11;\\n}\\n\\n.cl-editor-overlay {\\n  position: absolute;\\n  background-color: rgba(255,255,255,.5);\\n  height: 100%;\\n  width: 100%;\\n  left: 0;\\n  top: 0;\\n  z-index: 10;\\n}\\n\\n.modal-box {\\n  position: absolute;\\n  top: 0;\\n  left: 50%;\\n  -webkit-transform: translateX(-50%);\\n  transform: translateX(-50%);\\n  max-width: 500px;\\n  width: calc(100% - 20px);\\n  padding-bottom: 36px;\\n  z-index: 1;\\n  background-color: #FFF;\\n  text-align: center;\\n  font-size: 14px;\\n  box-shadow: rgba(0,0,0,.2) 0 2px 3px;\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n}\\n\\n.modal-title {\\n  font-size: 24px;\\n  font-weight: 700;\\n  margin: 0 0 20px;\\n  padding: 2px 0 4px;\\n  display: block;\\n  border-bottom: 1px solid #EEE;\\n  color: #333;\\n  background: #fbfcfc;\\n}\\n\\n.modal-label {\\n  display: block;\\n  position: relative;\\n  margin: 15px 12px;\\n  height: 29px;\\n  line-height: 29px;\\n  overflow: hidden;\\n}\\n\\n.modal-label input {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  height: 27px;\\n  line-height: 25px;\\n  border: 1px solid #DEDEDE;\\n  background: #fff;\\n  font-size: 14px;\\n  max-width: 330px;\\n  width: 70%;\\n  padding: 0 7px;\\n  transition: all 150ms;\\n}\\n\\n.modal-label input:focus {\\n  outline: none;\\n}\\n\\n.input-error input {\\n  border: 1px solid #e74c3c;\\n}\\n\\n.input-info {\\n  display: block;\\n  text-align: left;\\n  height: 25px;\\n  line-height: 25px;\\n  transition: all 150ms;\\n}\\n\\n.input-info span {\\n  display: block;\\n  color: #69878f;\\n  background-color: #fbfcfc;\\n  border: 1px solid #DEDEDE;\\n  padding: 1px 7px;\\n  width: 150px;\\n}\\n\\n.input-error .input-info {\\n  margin-top: -29px;\\n}\\n\\n.input-error .msg-error {\\n  color: #e74c3c;\\n}\\n\\n.modal-button {\\n  position: absolute;\\n  bottom: 10px;\\n  right: 0;\\n  text-decoration: none;\\n  color: #FFF;\\n  display: block;\\n  width: 100px;\\n  height: 35px;\\n  line-height: 33px;\\n  margin: 0 10px;\\n  background-color: #333;\\n  border: none;\\n  cursor: pointer;\\n  font-family: \\"Lato\\",Helvetica,Verdana,sans-serif;\\n  font-size: 16px;\\n  transition: all 150ms;\\n}\\n\\n.modal-submit {\\n  right: 110px;\\n  background: #2bc06a;\\n}\\n\\n.modal-reset {\\n  color: #555;\\n  background: #e6e6e6;\\n}\\n</style>\\n"],"names":[],"mappings":"AAuEA,4CAAiB,CACf,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,GAAG,CACT,iBAAiB,CAAE,WAAW,IAAI,CAAC,CACnC,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,mBAAmB,CAAE,MAAM,CAC3B,OAAO,CAAE,EACX,CAEA,8CAAmB,CACjB,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE,CAAC,CACtC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,EACX,CAEA,sCAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,GAAG,CACT,iBAAiB,CAAE,WAAW,IAAI,CAAC,CACnC,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACxB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,CAAC,CACV,gBAAgB,CAAE,IAAI,CACtB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CACpC,2BAA2B,CAAE,MAAM,CACnC,mBAAmB,CAAE,MACvB,CAEA,wCAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,CAAC,CAAC,GAAG,CAClB,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CAC7B,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OACd,CAEA,wCAAa,CACX,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,MACZ,CAEA,0BAAY,CAAC,mBAAM,CACjB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,UAAU,CAAE,GAAG,CAAC,KAClB,CAEA,0BAAY,CAAC,mBAAK,MAAO,CACvB,OAAO,CAAE,IACX,CAEA,0BAAY,CAAC,mBAAM,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACpB,CAEA,uCAAY,CACV,OAAO,CAAE,KAAK,CACd,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CAAC,KAClB,CAEA,yBAAW,CAAC,kBAAK,CACf,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,OAAO,CACd,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,KAAK,CAAE,KACT,CAEA,0BAAY,CAAC,yBAAY,CACvB,UAAU,CAAE,KACd,CAEA,0BAAY,CAAC,wBAAW,CACtB,KAAK,CAAE,OACT,CAEA,yCAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,CAAC,CACR,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,gBAAgB,CAAE,IAAI,CACtB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,MAAM,CAAC,SAAS,CAAC,OAAO,CAAC,UAAU,CAChD,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAAG,CAAC,KAClB,CAEA,yCAAc,CACZ,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,OACd,CAEA,wCAAa,CACX,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OACd"}`
};
const EditorModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new createEventDispatcher();
  let { show = false } = $$props;
  let { text = "" } = $$props;
  let { event = "" } = $$props;
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { error = false } = $$props;
  let refs = {};
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  $$result.css.add(css$5);
  {
    {
      if (show) {
        setTimeout(() => {
          refs.text.focus();
        });
      }
    }
  }
  return ` ${show ? `<div class="cl-editor-overlay svelte-42yfje"></div> <div class="cl-editor-modal svelte-42yfje"><div class="modal-box svelte-42yfje"><span class="modal-title svelte-42yfje">${escape(title)}</span> <form><label class="${["modal-label svelte-42yfje", error ? "input-error" : ""].join(" ").trim()}"><input name="text" class="svelte-42yfje"${add_attribute("this", refs.text, 0)}${add_attribute("value", text, 0)}> <span class="input-info svelte-42yfje"><span class="svelte-42yfje">${escape(label)}</span> ${error ? `<span class="msg-error svelte-42yfje" data-svelte-h="svelte-1hsxkja">Required</span>` : ``}</span></label> <button class="modal-button modal-submit svelte-42yfje" type="submit" data-svelte-h="svelte-1mghl0k">Confirm</button> <button class="modal-button modal-reset svelte-42yfje" type="reset" data-svelte-h="svelte-1yas1qa">Cancel</button></form></div></div>` : ``}`;
});
const css$4 = {
  code: '.color-picker-wrapper.svelte-njq4pk{border:1px solid #ecf0f1;border-top:none;background:#FFF;box-shadow:rgba(0,0,0,.1) 0 2px 3px;width:290px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:0;position:absolute;top:37px;z-index:11}.color-picker-overlay.svelte-njq4pk{position:absolute;background-color:rgba(255,255,255,.5);height:100%;width:100%;left:0;top:0;z-index:10}.color-picker-btn.svelte-njq4pk{display:block;position:relative;float:left;height:20px;width:20px;border:1px solid #333;padding:0;margin:2px;line-height:35px;text-decoration:none;background:#FFF;color:#333!important;cursor:pointer;text-align:left;font-size:15px;transition:all 150ms;line-height:20px;padding:0px 5px}.color-picker-btn.svelte-njq4pk:hover::after{content:" ";display:block;position:absolute;top:-5px;left:-5px;height:27px;width:27px;background:inherit;border:1px solid #FFF;box-shadow:#000 0 0 2px;z-index:10}',
  map: `{"version":3,"file":"EditorColorPicker.svelte","sources":["EditorColorPicker.svelte"],"sourcesContent":["<div style=\\"display: {show ? 'block' : 'none'}\\">\\n  <div class=\\"color-picker-overlay\\" on:click=\\"{close}\\"></div>\\n  <div class=\\"color-picker-wrapper\\">\\n    {#each btns as btn}\\n    <button type=\\"button\\" class=\\"color-picker-btn\\" style=\\"background-color:{btn.color};\\" on:click=\\"{event => selectColor(btn)}\\">{btn.text || ''}</button>\\n    {/each}\\n  </div>\\n</div>\\n\\n<script>\\n    import { createEventDispatcher } from \\"svelte\\";\\n\\n    const dispatcher = new createEventDispatcher();\\n\\n    export let show = false;\\n    export let btns = [];\\n    export let event = '';\\n    export let colors = [];\\n\\n    $: btns = colors\\n            .map((color) => ({ color }))\\n            .concat([{ text: '#', modal: true }]);\\n\\n    function close() {\\n        show = false;\\n    }\\n\\n    function selectColor(btn) {\\n        dispatcher(event,btn)\\n        close();\\n    }\\n\\n<\/script>\\n\\n<style>\\n    .color-picker-wrapper {\\n        border: 1px solid #ecf0f1;\\n        border-top: none;\\n        background: #FFF;\\n        box-shadow: rgba(0,0,0,.1) 0 2px 3px;\\n        width: 290px;\\n        left: 50%;\\n        -webkit-transform: translateX(-50%);\\n        transform: translateX(-50%);\\n        padding: 0;\\n        position: absolute;\\n        top: 37px;\\n        z-index: 11;\\n    }\\n\\n    .color-picker-overlay {\\n        position: absolute;\\n        background-color: rgba(255,255,255,.5);\\n        height: 100%;\\n        width: 100%;\\n        left: 0;\\n        top: 0;\\n        z-index: 10;\\n    }\\n\\n    .color-picker-btn {\\n        display: block;\\n        position: relative;\\n        float: left;\\n        height: 20px;\\n        width: 20px;\\n        border: 1px solid #333;\\n        padding: 0;\\n        margin: 2px;\\n        line-height: 35px;\\n        text-decoration: none;\\n        background: #FFF;\\n        color: #333!important;\\n        cursor: pointer;\\n        text-align: left;\\n        font-size: 15px;\\n        transition: all 150ms;\\n        line-height: 20px;\\n        padding: 0px 5px;\\n    }\\n\\n    .color-picker-btn:hover::after {\\n        content: \\" \\";\\n        display: block;\\n        position: absolute;\\n        top: -5px;\\n        left: -5px;\\n        height: 27px;\\n        width: 27px;\\n        background: inherit;\\n        border: 1px solid #FFF;\\n        box-shadow: #000 0 0 2px;\\n        z-index: 10;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAmCI,mCAAsB,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CACpC,KAAK,CAAE,KAAK,CACZ,IAAI,CAAE,GAAG,CACT,iBAAiB,CAAE,WAAW,IAAI,CAAC,CACnC,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,EACb,CAEA,mCAAsB,CAClB,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE,CAAC,CACtC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,EACb,CAEA,+BAAkB,CACd,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,GAAG,CACX,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,UAAU,CACrB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAAG,CAAC,KAAK,CACrB,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,GAAG,CAAC,GACjB,CAEA,+BAAiB,MAAM,OAAQ,CAC3B,OAAO,CAAE,GAAG,CACZ,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,UAAU,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CACxB,OAAO,CAAE,EACb"}`
};
const EditorColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  new createEventDispatcher();
  let { show = false } = $$props;
  let { btns = [] } = $$props;
  let { event = "" } = $$props;
  let { colors = [] } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.btns === void 0 && $$bindings.btns && btns !== void 0) $$bindings.btns(btns);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0) $$bindings.colors(colors);
  $$result.css.add(css$4);
  btns = colors.map((color) => ({ color })).concat([{ text: "#", modal: true }]);
  return `<div style="${"display: " + escape(show ? "block" : "none", true)}"><div class="color-picker-overlay svelte-njq4pk"></div> <div class="color-picker-wrapper svelte-njq4pk">${each(btns, (btn) => {
    return `<button type="button" class="color-picker-btn svelte-njq4pk" style="${"background-color:" + escape(btn.color, true) + ";"}">${escape(btn.text || "")}</button>`;
  })}</div> </div>`;
});
const state = function(name) {
  let state2 = {
    actionBtns: [],
    actionObj: {}
  };
  const { subscribe: subscribe2, set, update } = writable(state2);
  return {
    name,
    set,
    update,
    subscribe: subscribe2
  };
};
const createStateStore = state;
const css$3 = {
  code: ".cl.svelte-1a534py .svelte-1a534py{box-sizing:border-box}.cl.svelte-1a534py.svelte-1a534py{box-shadow:0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);box-sizing:border-box;width:100%;position:relative}.cl-content.svelte-1a534py.svelte-1a534py{height:300px;outline:0;overflow-y:auto;padding:10px;width:100%;background-color:white}.cl-actionbar.svelte-1a534py.svelte-1a534py{background-color:#ecf0f1;border-bottom:1px solid rgba(10, 10, 10, 0.1);width:100%}.cl-button.svelte-1a534py.svelte-1a534py{background-color:transparent;border:none;cursor:pointer;height:35px;outline:0;width:35px;vertical-align:top;position:relative}.cl-button.svelte-1a534py.svelte-1a534py:hover,.cl-button.active.svelte-1a534py.svelte-1a534py{background-color:#fff}.cl-button.svelte-1a534py.svelte-1a534py:disabled{opacity:.5;pointer-events:none}.cl-textarea.svelte-1a534py.svelte-1a534py{display:none;max-width:100%;min-width:100%;border:none;padding:10px}.cl-textarea.svelte-1a534py.svelte-1a534py:focus{outline:none}",
  map: `{"version":3,"file":"Editor.svelte","sources":["Editor.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\tconst editors = [];\\n<\/script>\\n<svelte:window on:click=\\"{ event => _documentClick(event) }\\" />\\n<svelte:options accessors={true}></svelte:options>\\n<div class=\\"cl\\" bind:this={$references.editorWrapper}>\\n  <div class=\\"cl-actionbar\\">\\n    {#each $state.actionBtns as action}\\n      <button type=\\"button\\"\\n        class=\\"cl-button {action.active ? 'active' : ''}\\"\\n        title=\\"{action.title}\\"\\n        on:click=\\"{event => _btnClicked(action)}\\"\\n        disabled=\\"{action.disabled}\\">\\n        {@html action.icon}\\n      </button>\\n    {/each}\\n  </div>\\n  <div bind:this={$references.editor}\\n    id=\\"{contentId}\\"\\n    class=\\"cl-content\\"\\n    style=\\"height: {height}\\"\\n    contenteditable=\\"true\\"\\n    on:input=\\"{event => _onChange(event.target.innerHTML)}\\"\\n    on:mouseup=\\"{() => _handleButtonStatus()}\\"\\n    on:keyup=\\"{() => _handleButtonStatus()}\\"\\n    on:paste=\\"{event => _onPaste(event)}\\">\\n  </div>\\n\\n  <textarea bind:this={$references.raw} class=\\"cl-textarea\\" style=\\"max-height: {height}; min-height: {height}\\"></textarea>\\n  <EditorModal bind:this={$references.modal}></EditorModal>\\n  <EditorColorPicker bind:this={$references.colorPicker} {colors}></EditorColorPicker>\\n</div>\\n\\n<script>\\n  import {\\n    getTagsRecursive,\\n    saveRange as _saveRange,\\n    restoreRange as _restoreRange,\\n    exec as _exec,\\n    cleanHtml,\\n    getActionBtns,\\n    getNewActionObj,\\n    removeBadTags,\\n    isEditorClick\\n  } from './helpers/util.js';\\n\\n  import defaultActions from './helpers/actions.js';\\n  import EditorModal from './helpers/EditorModal.svelte';\\n  import EditorColorPicker from './helpers/EditorColorPicker.svelte';\\n\\n  import { onMount, createEventDispatcher, setContext, getContext } from \\"svelte\\";\\n  import { createStateStore } from \\"./helpers/store.js\\";\\n  import {writable} from \\"svelte/store\\";\\n\\n  let dispatcher = new createEventDispatcher();\\n\\n  export let actions = [];\\n  export let height = '300px';\\n  export let html = '';\\n  export let contentId = '';\\n  export let colors = ['#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00', '#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca', '#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694', '#bfbfbf', '#3f3f3f', '#938953', '#548dd4', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7', '#b7dde8', '#fac08f', '#f2c314', '#a5a5a5', '#262626', '#494429', '#17365d', '#366092', '#953734', '#76923c', '#5f497a', '#92cddc', '#e36c09', '#c09100', '#7f7f7f', '#0c0c0c', '#1d1b10', '#0f243e', '#244061', '#632423', '#4f6128', '#3f3151', '#31859b', '#974806', '#7f6000']\\n  export let removeFormatTags = ['h1', 'h2', 'blockquote']\\n\\n  let helper = writable({\\n      foreColor: false,\\n      backColor: false,\\n      foreColorModal: false,\\n      backColorModal: false,\\n      image: false,\\n      link: false,\\n      showEditor: true,\\n      blurActive: false\\n  });\\n\\n  editors.push({})\\n  let contextKey = \\"editor_\\" + editors.length;\\n\\n  let state = createStateStore(contextKey);\\n\\n  let references = writable({});\\n  $state.actionObj = getNewActionObj(defaultActions, actions);\\n\\n  let context = {\\n      exec,\\n      getHtml,\\n      getText,\\n      setHtml,\\n      saveRange,\\n      restoreRange,\\n      helper,\\n      references,\\n      state,\\n      removeFormatTags\\n  }\\n\\n  setContext(contextKey, context);\\n\\n  onMount(() => {\\n      $state.actionBtns = getActionBtns($state.actionObj);\\n      setHtml(html);\\n  });\\n\\n  function _btnClicked(action) {\\n    $references.editor.focus();\\n    saveRange($references.editor);\\n    restoreRange($references.editor);\\n    action.result.call(context);\\n    _handleButtonStatus();\\n  }\\n\\n  function _handleButtonStatus(clearBtns) {\\n    const tags = clearBtns ? [] : getTagsRecursive(document.getSelection().focusNode);\\n    Object.keys($state.actionObj).forEach((action) => $state.actionObj[action].active = false);\\n    tags.forEach((tag) => ($state.actionObj[tag.toLowerCase()] || {}).active = true);\\n    $state.actionBtns = getActionBtns($state.actionObj);\\n    $state.actionObj = $state.actionObj;\\n  }\\n\\n  function _onPaste(event) {\\n    event.preventDefault();\\n    exec('insertHTML', event.clipboardData.getData('text/html') ? cleanHtml(event.clipboardData.getData('text/html')) : event.clipboardData.getData('text'));\\n  }\\n\\n  function _onChange(event) {\\n     dispatcher('change', event)\\n  }\\n\\n  function _documentClick(event) {\\n    if (!isEditorClick(event.target, $references.editorWrapper) && $helper.blurActive) {\\n      dispatcher('blur', event);\\n    }\\n    $helper.blurActive = true;\\n  }\\n\\n  export function exec(cmd, value){\\n      _exec(cmd, value);\\n  };\\n\\n  export function getHtml(sanitize) {\\n    return sanitize ? removeBadTags($references.editor.innerHTML) : $references.editor.innerHTML;\\n  }\\n  export function getText() {\\n    return $references.editor.innerText;\\n  }\\n  export function setHtml(html, sanitize) {\\n    const htmlData = sanitize ? removeBadTags(html) : (html || '')\\n    $references.editor.innerHTML = htmlData;\\n    $references.raw.value = htmlData;\\n  }\\n  export function saveRange() {\\n    _saveRange($references.editor);\\n  }\\n  export function restoreRange() {\\n    _restoreRange($references.editor);\\n  }\\n  export const refs = $references;\\n<\/script>\\n\\n<style>\\n  .cl * {\\n    box-sizing: border-box;\\n  }\\n\\n  .cl {\\n    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\\n    box-sizing: border-box;\\n    width: 100%;\\n    position: relative;\\n  }\\n\\n  .cl-content {\\n    height: 300px;\\n    outline: 0;\\n    overflow-y: auto;\\n    padding: 10px;\\n    width: 100%;\\n    background-color: white;\\n  }\\n\\n  .cl-actionbar {\\n    background-color: #ecf0f1;\\n    border-bottom: 1px solid rgba(10, 10, 10, 0.1);\\n    width: 100%;\\n  }\\n\\n  .cl-button {\\n    background-color: transparent;\\n    border: none;\\n    cursor: pointer;\\n    height: 35px;\\n    outline: 0;\\n    width: 35px;\\n    vertical-align: top;\\n    position: relative;\\n  }\\n\\n  .cl-button:hover, .cl-button.active {\\n    background-color: #fff;\\n  }\\n\\n  .cl-button:disabled {\\n    opacity: .5;\\n    pointer-events: none;\\n  }\\n\\n  .cl-textarea {\\n    display: none;\\n    max-width: 100%;\\n    min-width: 100%;\\n    border: none;\\n    padding: 10px;\\n  }\\n\\n  .cl-textarea:focus {\\n    outline: none;\\n  }\\n\\n</style>\\n"],"names":[],"mappings":"AA+JE,kBAAG,CAAC,eAAE,CACJ,UAAU,CAAE,UACd,CAEA,iCAAI,CACF,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAC5E,UAAU,CAAE,UAAU,CACtB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QACZ,CAEA,yCAAY,CACV,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KACpB,CAEA,2CAAc,CACZ,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CAC9C,KAAK,CAAE,IACT,CAEA,wCAAW,CACT,gBAAgB,CAAE,WAAW,CAC7B,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,GAAG,CACnB,QAAQ,CAAE,QACZ,CAEA,wCAAU,MAAM,CAAE,UAAU,qCAAQ,CAClC,gBAAgB,CAAE,IACpB,CAEA,wCAAU,SAAU,CAClB,OAAO,CAAE,EAAE,CACX,cAAc,CAAE,IAClB,CAEA,0CAAa,CACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IACX,CAEA,0CAAY,MAAO,CACjB,OAAO,CAAE,IACX"}`
};
const editors = [];
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $references, $$unsubscribe_references;
  let $$unsubscribe_helper;
  let $state, $$unsubscribe_state;
  new createEventDispatcher();
  let { actions = [] } = $$props;
  let { height = "300px" } = $$props;
  let { html = "" } = $$props;
  let { contentId = "" } = $$props;
  let { colors = [
    "#ffffff",
    "#000000",
    "#eeece1",
    "#1f497d",
    "#4f81bd",
    "#c0504d",
    "#9bbb59",
    "#8064a2",
    "#4bacc6",
    "#f79646",
    "#ffff00",
    "#f2f2f2",
    "#7f7f7f",
    "#ddd9c3",
    "#c6d9f0",
    "#dbe5f1",
    "#f2dcdb",
    "#ebf1dd",
    "#e5e0ec",
    "#dbeef3",
    "#fdeada",
    "#fff2ca",
    "#d8d8d8",
    "#595959",
    "#c4bd97",
    "#8db3e2",
    "#b8cce4",
    "#e5b9b7",
    "#d7e3bc",
    "#ccc1d9",
    "#b7dde8",
    "#fbd5b5",
    "#ffe694",
    "#bfbfbf",
    "#3f3f3f",
    "#938953",
    "#548dd4",
    "#95b3d7",
    "#d99694",
    "#c3d69b",
    "#b2a2c7",
    "#b7dde8",
    "#fac08f",
    "#f2c314",
    "#a5a5a5",
    "#262626",
    "#494429",
    "#17365d",
    "#366092",
    "#953734",
    "#76923c",
    "#5f497a",
    "#92cddc",
    "#e36c09",
    "#c09100",
    "#7f7f7f",
    "#0c0c0c",
    "#1d1b10",
    "#0f243e",
    "#244061",
    "#632423",
    "#4f6128",
    "#3f3151",
    "#31859b",
    "#974806",
    "#7f6000"
  ] } = $$props;
  let { removeFormatTags = ["h1", "h2", "blockquote"] } = $$props;
  let helper = writable({
    foreColor: false,
    backColor: false,
    foreColorModal: false,
    backColorModal: false,
    image: false,
    link: false,
    showEditor: true,
    blurActive: false
  });
  $$unsubscribe_helper = subscribe(helper, (value) => value);
  editors.push({});
  let contextKey = "editor_" + editors.length;
  let state2 = createStateStore(contextKey);
  $$unsubscribe_state = subscribe(state2, (value) => $state = value);
  let references = writable({});
  $$unsubscribe_references = subscribe(references, (value) => $references = value);
  set_store_value(state2, $state.actionObj = getNewActionObj(defaultActions, actions), $state);
  let context = {
    exec: exec$1,
    getHtml,
    getText,
    setHtml,
    saveRange: saveRange$1,
    restoreRange: restoreRange$1,
    helper,
    references,
    state: state2,
    removeFormatTags
  };
  setContext(contextKey, context);
  function exec$1(cmd, value) {
    exec(cmd, value);
  }
  function getHtml(sanitize) {
    return sanitize ? removeBadTags($references.editor.innerHTML) : $references.editor.innerHTML;
  }
  function getText() {
    return $references.editor.innerText;
  }
  function setHtml(html2, sanitize) {
    const htmlData = sanitize ? removeBadTags(html2) : html2 || "";
    set_store_value(references, $references.editor.innerHTML = htmlData, $references);
    set_store_value(references, $references.raw.value = htmlData, $references);
  }
  function saveRange$1() {
    saveRange($references.editor);
  }
  function restoreRange$1() {
    restoreRange($references.editor);
  }
  const refs = $references;
  if ($$props.actions === void 0 && $$bindings.actions && actions !== void 0) $$bindings.actions(actions);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.html === void 0 && $$bindings.html && html !== void 0) $$bindings.html(html);
  if ($$props.contentId === void 0 && $$bindings.contentId && contentId !== void 0) $$bindings.contentId(contentId);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0) $$bindings.colors(colors);
  if ($$props.removeFormatTags === void 0 && $$bindings.removeFormatTags && removeFormatTags !== void 0) $$bindings.removeFormatTags(removeFormatTags);
  if ($$props.exec === void 0 && $$bindings.exec && exec$1 !== void 0) $$bindings.exec(exec$1);
  if ($$props.getHtml === void 0 && $$bindings.getHtml && getHtml !== void 0) $$bindings.getHtml(getHtml);
  if ($$props.getText === void 0 && $$bindings.getText && getText !== void 0) $$bindings.getText(getText);
  if ($$props.setHtml === void 0 && $$bindings.setHtml && setHtml !== void 0) $$bindings.setHtml(setHtml);
  if ($$props.saveRange === void 0 && $$bindings.saveRange && saveRange$1 !== void 0) $$bindings.saveRange(saveRange$1);
  if ($$props.restoreRange === void 0 && $$bindings.restoreRange && restoreRange$1 !== void 0) $$bindings.restoreRange(restoreRange$1);
  if ($$props.refs === void 0 && $$bindings.refs && refs !== void 0) $$bindings.refs(refs);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `  <div class="cl svelte-1a534py"${add_attribute("this", $references.editorWrapper, 0)}><div class="cl-actionbar svelte-1a534py">${each($state.actionBtns, (action) => {
      return `<button type="button" class="${"cl-button " + escape(action.active ? "active" : "", true) + " svelte-1a534py"}"${add_attribute("title", action.title, 0)} ${action.disabled ? "disabled" : ""}><!-- HTML_TAG_START -->${action.icon}<!-- HTML_TAG_END --> </button>`;
    })}</div> <div${add_attribute("id", contentId, 0)} class="cl-content svelte-1a534py" style="${"height: " + escape(height, true)}" contenteditable="true"${add_attribute("this", $references.editor, 0)}></div> <textarea class="cl-textarea svelte-1a534py" style="${"max-height: " + escape(height, true) + "; min-height: " + escape(height, true)}"${add_attribute("this", $references.raw, 0)}></textarea> ${validate_component(EditorModal, "EditorModal").$$render(
      $$result,
      { this: $references.modal },
      {
        this: ($$value) => {
          $references.modal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(EditorColorPicker, "EditorColorPicker").$$render(
      $$result,
      { colors, this: $references.colorPicker },
      {
        this: ($$value) => {
          $references.colorPicker = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  $$unsubscribe_references();
  $$unsubscribe_helper();
  $$unsubscribe_state();
  return $$rendered;
});
const css$2 = {
  code: ".question.svelte-1aoqp36.svelte-1aoqp36{padding:14px;margin:14px 0;margin-left:30px;border:2px solid #e8e8e8;border-radius:8px;position:relative}.index.svelte-1aoqp36.svelte-1aoqp36{position:absolute;top:10px;left:-34px;font-size:24px}.choices.svelte-1aoqp36.svelte-1aoqp36{padding:14px;margin:14px 0;border-top:2px solid #e8e8e8}.choices.svelte-1aoqp36 .choice.svelte-1aoqp36{padding:14px;margin:14px 0;background-color:aliceblue}.cl-content{height:max-content !important}.selector.svelte-1aoqp36.svelte-1aoqp36{display:block;margin:20px;background-color:aliceblue;padding:8px;border-left:4px dashed rgba(177, 177, 225, 0.216)}.selector.svelte-1aoqp36 .option.svelte-1aoqp36{display:inline-block;width:max-content}.correct.svelte-1aoqp36.svelte-1aoqp36{background-color:rgb(212, 255, 148) !important}.option.svelte-1aoqp36.svelte-1aoqp36{position:relative;padding-right:30px}.selectCorrect.svelte-1aoqp36.svelte-1aoqp36{position:absolute;right:7px;top:10px;color:#e5e5e5}.selectCorrect.svelte-1aoqp36.svelte-1aoqp36:hover{color:#ccc}.choice.svelte-1aoqp36.svelte-1aoqp36{position:relative}.choice.svelte-1aoqp36 .selectCorrect.svelte-1aoqp36{left:-20px}.mode-selector.svelte-1aoqp36.svelte-1aoqp36{top:10px;right:10px}",
  map: `{"version":3,"file":"Edit.svelte","sources":["Edit.svelte"],"sourcesContent":["<script>\\n\\timport API from '$lib/api/api';\\n\\timport { onMount } from 'svelte';\\n\\timport Editor from 'cl-editor/src/Editor.svelte';\\n\\timport uuid from '$lib/functions/uuid';\\n\\texport let selectedGame;\\n\\texport let goBack;\\n\\n\\timport debounceSave from '$lib/functions/debounce';\\n\\n\\tonMount(async () => {\\n\\t\\tselectedGame = await API.get(\`/games/\${selectedGame.id}.json\`);\\n\\t\\tconsole.log({ selectedGame });\\n\\t\\tif (!selectedGame.folder) {\\n\\t\\t\\tselectedGame.folder = { questions: [] };\\n\\t\\t} else if (!selectedGame.folder.questions) {\\n\\t\\t\\tselectedGame.folder.questions = [];\\n\\t\\t}\\n\\t});\\n\\n\\tfunction addMultipleChoice(choices, id) {\\n\\t\\tlet letter = findNextAvailableLetter(choices);\\n\\t\\tlet hash = {};\\n\\t\\thash[letter] = { answer: 'Type Here', feedback: '' };\\n\\n\\t\\t// Create a copy of the selectedGame object\\n\\t\\tlet updatedGame = { ...selectedGame };\\n\\n\\t\\t// Find the index of the question in the array\\n\\t\\tconst questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);\\n\\n\\t\\t// Update the choices of the specific question\\n\\t\\tupdatedGame.folder.questions[questionIndex].choices = { ...choices, ...hash };\\n\\n\\t\\t// Update the selectedGame variable, triggering a re-render\\n\\t\\tselectedGame = updatedGame;\\n\\t\\tconsole.log(selectedGame.folder.questions[questionIndex]);\\n\\t}\\n\\n\\tfunction multipleChoiceCorrect(id, key) {\\n\\t\\t// Create a copy of the selectedGame object\\n\\t\\tlet updatedGame = { ...selectedGame };\\n\\t\\tconst questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);\\n\\n\\t\\t// Update the choices of the specific question\\n\\t\\tupdatedGame.folder.questions[questionIndex].correct = key;\\n\\n\\t\\t// Update the selectedGame variable, triggering a re-render\\n\\t\\tselectedGame = updatedGame;\\n\\t}\\n\\n\\tfunction findNextAvailableLetter(choices) {\\n\\t\\t// Extract existing keys\\n\\t\\tconst existingKeys = Object.keys(choices);\\n\\n\\t\\t// Define all letters\\n\\t\\tconst allLetters = 'abcdefghijklmnopqrstuvwxyz';\\n\\n\\t\\t// Find the first available letter\\n\\t\\tconst nextLetter = allLetters.split('').find((letter) => !existingKeys.includes(letter));\\n\\n\\t\\t// If all letters are used, handle the edge case (e.g., return null)\\n\\t\\tif (!nextLetter) {\\n\\t\\t\\tconsole.log('All letters are used.');\\n\\t\\t\\treturn null;\\n\\t\\t}\\n\\n\\t\\treturn nextLetter;\\n\\t}\\n\\n\\tfunction addSelectorOption(selector, id) {\\n\\t\\t// Create a copy of the selectedGame object\\n\\t\\tlet updatedGame = { ...selectedGame };\\n\\n\\t\\t// Find the index of the question in the array\\n\\t\\tconst questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);\\n\\n\\t\\t// Update the choices of the specific question\\n\\t\\tlet current = updatedGame.folder.questions[questionIndex].selectors.find((s) => s === selector);\\n\\t\\t// console.log({ current });\\n\\t\\tcurrent.options = [...current.options, 'test'];\\n\\t\\t// // Update the selectedGame variable, triggering a re-render\\n\\t\\tselectedGame = updatedGame;\\n\\n\\t\\t// console.log(selector);\\n\\t}\\n\\n\\tfunction addSelectorBlock(id) {\\n\\t\\t// Create a copy of the selectedGame object\\n\\t\\tlet updatedGame = { ...selectedGame };\\n\\n\\t\\t// Find the index of the question in the array\\n\\t\\tconst questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);\\n\\n\\t\\t// Update the choices of the specific question\\n\\t\\tupdatedGame.folder.questions[questionIndex].selectors = [\\n\\t\\t\\t...updatedGame.folder.questions[questionIndex].selectors,\\n\\t\\t\\t{\\n\\t\\t\\t\\toptions: ['Empty'],\\n\\t\\t\\t\\tcorrect: 0\\n\\t\\t\\t}\\n\\t\\t];\\n\\n\\t\\t// console.log({ current });\\n\\t\\t// // Update the selectedGame variable, triggering a re-render\\n\\n\\t\\tconsole.log({ updatedGame });\\n\\t\\tselectedGame = updatedGame;\\n\\t}\\n\\n\\tfunction selectorCorrect(selector, id, index) {\\n\\t\\t// Create a copy of the selectedGame object\\n\\t\\tlet updatedGame = { ...selectedGame };\\n\\n\\t\\t// Find the index of the question in the array\\n\\t\\tconst questionIndex = updatedGame.folder.questions.findIndex((q) => q.id === id);\\n\\n\\t\\t// Update the choices of the specific question\\n\\t\\tlet current = updatedGame.folder.questions[questionIndex].selectors.find((s) => s === selector);\\n\\t\\t// console.log({ current });\\n\\t\\tcurrent.correct = index;\\n\\t\\t// // Update the selectedGame variable, triggering a re-render\\n\\t\\tselectedGame = updatedGame;\\n\\n\\t\\t// console.log(selector);\\n\\t}\\n\\t// const hash = {\\n\\t// \\tquestion:\\n\\t// \\t\\t'<h1>ذَهَبَ<strong>&nbsp;<span style=\\"color: rgb(0, 168, 133);\\">ٱللهُ</span></strong></h1><h1>2:17</h1><h1><u>Allah</u> takes away</h1>',\\n\\t// \\tchoices: { a: { answer: 'type', feedback: '' }, b: { answer: 'type', feedback: '' } },\\n\\t// \\tcorrect: 'a',\\n\\t// \\tquestion_type: 'multiple-choice',\\n\\t// \\tid: 7\\n\\t// };\\n\\n\\tasync function save() {\\n\\t\\tconst res = await API.put(\`/games/\${selectedGame.id}.json\`, selectedGame);\\n\\t\\tconsole.log({ res });\\n\\t\\t// console.log({ selectedGame });\\n\\t}\\n\\n\\tfunction deleteQuestion(question) {\\n\\t\\tlet updatedGame = { ...selectedGame };\\n\\n\\t\\t// Update the choices of the specific question\\n\\t\\tupdatedGame.folder.questions = updatedGame.folder.questions.filter((q) => q.id !== question.id);\\n\\n\\t\\t// // Update the selectedGame variable, triggering a re-render\\n\\t\\tselectedGame = updatedGame;\\n\\t}\\n<\/script>\\n\\n<div class=\\"btn btn-outline-danger\\" on:click={goBack}>\\n\\t<i class=\\"fa fa-left-arrow\\" />Go Back\\n</div>\\n\\n<input\\n\\ttype=\\"text\\"\\n\\tclass=\\"form-control\\"\\n\\tstyle=\\"font-size: 42px; text-align:center\\"\\n\\tbind:value={selectedGame.title}\\n/>\\n\\n<textarea\\n\\tname=\\"\\"\\n\\tid=\\"\\"\\n\\tcols=\\"20\\"\\n\\trows=\\"3\\"\\n\\tclass=\\"form-control description\\"\\n\\tbind:value={selectedGame.description}\\n\\ton:keyup={() => {\\n\\t\\tdebounceSave(\`/games/\${selectedGame.id}\`, {\\n\\t\\t\\tdescription: selectedGame.description\\n\\t\\t});\\n\\t}}\\n/>\\n\\n<div class=\\"btn btn-outline-success\\" on:click={save}>Save</div>\\n\\n<div class=\\"questions\\">\\n\\t{#if selectedGame.folder && selectedGame.folder.questions}\\n\\t\\t<ul class=\\"clean-list\\">\\n\\t\\t\\t{#each selectedGame.folder.questions as q, index}\\n\\t\\t\\t\\t<li class=\\"question\\">\\n\\t\\t\\t\\t\\t<div class=\\"index\\">\\n\\t\\t\\t\\t\\t\\t{index + 1}\\n\\t\\t\\t\\t\\t\\t<span class=\\"fa fa-times delete-question\\" on:click={() => deleteQuestion(q)} />\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"body\\">\\n\\t\\t\\t\\t\\t\\t<Editor\\n\\t\\t\\t\\t\\t\\t\\thtml={q.question}\\n\\t\\t\\t\\t\\t\\t\\ton:change={(evt) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tconst value = evt.detail;\\n\\t\\t\\t\\t\\t\\t\\t\\tq.question = value;\\n\\t\\t\\t\\t\\t\\t\\t\\tconsole.log('saving value', value);\\n\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"choices\\">\\n\\t\\t\\t\\t\\t\\t{#if q.question_type === 'multiple-choice'}\\n\\t\\t\\t\\t\\t\\t\\t{#each Object.entries(q.choices).sort( (a, b) => a[0].localeCompare(b[0]) ) as [key, choice]}\\n\\t\\t\\t\\t\\t\\t\\t\\t<li class=\\"choice\\" class:correct={key === q.correct}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<i\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"fa fa-bullseye selectCorrect\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => multipleChoiceCorrect(q.id, key)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<span style=\\"display:inline\\">{key}:</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"display:inline; width: 70%\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={choice.answer}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"btn btn-outline-info\\" on:click={() => addMultipleChoice(q.choices, q.id)}>\\n\\t\\t\\t\\t\\t\\t\\t\\t<i class=\\"fa fa-plus\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t\\t\\t{#if q.question_type === 'selector'}\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"mode-selector\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<select name=\\"\\" id=\\"\\" class=\\"mode form-control\\" bind:value={q.selection_style}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<option />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\"blockable\\">Blockable</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t</select>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t{#each q.selectors as selector}\\n\\t\\t\\t\\t\\t\\t\\t\\t<li class=\\"selector\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each selector.options as option, index}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<li class=\\"option\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass:correct={index === selector.correct}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tbind:value={option}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<i\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"fa fa-bullseye selectCorrect\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => selectorCorrect(selector, q.id, index)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<i class=\\"fa fa-plus\\" on:click={() => addSelectorOption(selector, q.id)} />\\n\\t\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"btn btn-outline-info\\" on:click={() => addSelectorBlock(q.id)}>\\n\\t\\t\\t\\t\\t\\t\\t\\t<i class=\\"fa fa-plus\\" />\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t{/if}\\n</div>\\n\\n<div class=\\"question adder\\">\\n\\t<div class=\\"row\\">\\n\\t\\t<div class=\\"col-lg-6 col-md-6 col-sm-6\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"btn btn-warning\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tconst question = {\\n\\t\\t\\t\\t\\t\\tquestion: '<p>Type Question Body...',\\n\\t\\t\\t\\t\\t\\tchoices: {},\\n\\t\\t\\t\\t\\t\\tcorrect: '',\\n\\t\\t\\t\\t\\t\\tquestion_type: 'multiple-choice',\\n\\t\\t\\t\\t\\t\\tid: uuid(selectedGame.folder.questions)\\n\\t\\t\\t\\t\\t};\\n\\n\\t\\t\\t\\t\\tselectedGame.folder.questions = [...selectedGame.folder.questions, question];\\n\\t\\t\\t\\t\\t// selectedGame.questions\\n\\t\\t\\t\\t\\tconsole.log(selectedGame);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tAdd Choices\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"col-lg-6 col-md-6 col-sm-6\\">\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"btn btn-warning\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tconst question = {\\n\\t\\t\\t\\t\\t\\tquestion: '<p>Type Question Body...',\\n\\t\\t\\t\\t\\t\\tselectors: [],\\n\\t\\t\\t\\t\\t\\tquestion_type: 'selector',\\n\\t\\t\\t\\t\\t\\tid: uuid(selectedGame.folder.questions.map((q) => q.id))\\n\\t\\t\\t\\t\\t};\\n\\n\\t\\t\\t\\t\\tselectedGame.folder.questions = [...selectedGame.folder.questions, question];\\n\\t\\t\\t\\t\\tconsole.log(selectedGame);\\n\\t\\t\\t\\t\\t// selectedGame.questions\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tAdd Selectors\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.question {\\n\\t\\tpadding: 14px;\\n\\t\\tmargin: 14px 0;\\n\\t\\tmargin-left: 30px;\\n\\t\\tborder: 2px solid #e8e8e8;\\n\\t\\tborder-radius: 8px;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.index {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 10px;\\n\\t\\tleft: -34px;\\n\\t\\tfont-size: 24px;\\n\\t}\\n\\n\\t.choices {\\n\\t\\tpadding: 14px;\\n\\t\\tmargin: 14px 0;\\n\\t\\tborder-top: 2px solid #e8e8e8;\\n\\t}\\n\\n\\t.choices .choice {\\n\\t\\tpadding: 14px;\\n\\t\\tmargin: 14px 0;\\n\\t\\tbackground-color: aliceblue;\\n\\t}\\n\\n\\t:global(.cl-content) {\\n\\t\\theight: max-content !important;\\n\\t}\\n\\n\\t.selector {\\n\\t\\tdisplay: block;\\n\\t\\tmargin: 20px;\\n\\t\\tbackground-color: aliceblue;\\n\\t\\tpadding: 8px;\\n\\t\\tborder-left: 4px dashed rgba(177, 177, 225, 0.216);\\n\\t}\\n\\n\\t.selector .option {\\n\\t\\tdisplay: inline-block;\\n\\t\\twidth: max-content;\\n\\t}\\n\\n\\t.selector .option .input {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.correct {\\n\\t\\tbackground-color: rgb(212, 255, 148) !important;\\n\\t}\\n\\n\\t.option {\\n\\t\\tposition: relative;\\n\\t\\tpadding-right: 30px;\\n\\t}\\n\\n\\t.selectCorrect {\\n\\t\\tposition: absolute;\\n\\t\\tright: 7px;\\n\\t\\ttop: 10px;\\n\\t\\tcolor: #e5e5e5;\\n\\t}\\n\\n\\t.selectCorrect:hover {\\n\\t\\tcolor: #ccc;\\n\\t}\\n\\n\\t.choice {\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.choice .selectCorrect {\\n\\t\\tleft: -20px;\\n\\t}\\n\\n\\t.mode-selector {\\n\\t\\t/* position: absolute; */\\n\\t\\ttop: 10px;\\n\\t\\tright: 10px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiTC,uCAAU,CACT,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,QACX,CAEA,oCAAO,CACN,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,KAAK,CACX,SAAS,CAAE,IACZ,CAEA,sCAAS,CACR,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OACvB,CAEA,uBAAQ,CAAC,sBAAQ,CAChB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,gBAAgB,CAAE,SACnB,CAEQ,WAAa,CACpB,MAAM,CAAE,WAAW,CAAC,UACrB,CAEA,uCAAU,CACT,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,SAAS,CAC3B,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,GAAG,CAAC,MAAM,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAClD,CAEA,wBAAS,CAAC,sBAAQ,CACjB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,WACR,CAMA,sCAAS,CACR,gBAAgB,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UACtC,CAEA,qCAAQ,CACP,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,IAChB,CAEA,4CAAe,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,OACR,CAEA,4CAAc,MAAO,CACpB,KAAK,CAAE,IACR,CAEA,qCAAQ,CACP,QAAQ,CAAE,QACX,CAEA,sBAAO,CAAC,6BAAe,CACtB,IAAI,CAAE,KACP,CAEA,4CAAe,CAEd,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IACR"}`
};
const Edit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedGame } = $$props;
  let { goBack } = $$props;
  if ($$props.selectedGame === void 0 && $$bindings.selectedGame && selectedGame !== void 0) $$bindings.selectedGame(selectedGame);
  if ($$props.goBack === void 0 && $$bindings.goBack && goBack !== void 0) $$bindings.goBack(goBack);
  $$result.css.add(css$2);
  return `<div class="btn btn-outline-danger" data-svelte-h="svelte-157sks2"><i class="fa fa-left-arrow"></i>Go Back</div> <input type="text" class="form-control" style="font-size: 42px; text-align:center"${add_attribute("value", selectedGame.title, 0)}> <textarea name="" id="" cols="20" rows="3" class="form-control description">${escape(selectedGame.description || "")}</textarea> <div class="btn btn-outline-success" data-svelte-h="svelte-34qu9g">Save</div> <div class="questions">${selectedGame.folder && selectedGame.folder.questions ? `<ul class="clean-list">${each(selectedGame.folder.questions, (q, index) => {
    return `<li class="question svelte-1aoqp36"><div class="index svelte-1aoqp36">${escape(index + 1)} <span class="fa fa-times delete-question"></span></div> <div class="body">${validate_component(Editor, "Editor").$$render($$result, { html: q.question }, {}, {})}</div> <div class="choices svelte-1aoqp36">${q.question_type === "multiple-choice" ? `${each(Object.entries(q.choices).sort((a, b) => a[0].localeCompare(b[0])), ([key, choice]) => {
      return `<li class="${["choice svelte-1aoqp36", key === q.correct ? "correct" : ""].join(" ").trim()}"><i class="fa fa-bullseye selectCorrect svelte-1aoqp36"></i> <span style="display:inline">${escape(key)}:</span> <input style="display:inline; width: 70%" type="text" class="form-control"${add_attribute("value", choice.answer, 0)}> </li>`;
    })} <div class="btn btn-outline-info" data-svelte-h="svelte-1239fhs"><i class="fa fa-plus"></i> </div>` : ``} ${q.question_type === "selector" ? `<div class="mode-selector svelte-1aoqp36"><select name="" id="" class="mode form-control"><option value=""></option><option value="blockable" data-svelte-h="svelte-13l11v0">Blockable</option></select></div> ${each(q.selectors, (selector) => {
      return `<li class="selector svelte-1aoqp36">${each(selector.options, (option, index2) => {
        return `<li class="option svelte-1aoqp36"><input type="text" class="${[
          "form-control svelte-1aoqp36",
          index2 === selector.correct ? "correct" : ""
        ].join(" ").trim()}"${add_attribute("value", option, 0)}> <i class="fa fa-bullseye selectCorrect svelte-1aoqp36"></i> </li>`;
      })} <i class="fa fa-plus"></i> </li>`;
    })} <div class="btn btn-outline-info" data-svelte-h="svelte-1dbyeaw"><i class="fa fa-plus"></i> </div>` : ``}</div> </li>`;
  })}</ul>` : ``}</div> <div class="question adder svelte-1aoqp36"><div class="row"><div class="col-lg-6 col-md-6 col-sm-6"><div class="btn btn-warning" data-svelte-h="svelte-10vo8sj">Add Choices</div></div> <div class="col-lg-6 col-md-6 col-sm-6"><div class="btn btn-warning" data-svelte-h="svelte-17hhk88">Add Selectors</div></div></div> </div>`;
});
const css$1 = {
  code: ".selected.svelte-zxslae>.head.svelte-zxslae{background-color:#b8eeff !important}.game.svelte-zxslae.svelte-zxslae{padding-left:10px}.game.selected.svelte-zxslae.svelte-zxslae{padding-left:6px;border-left:4px solid #b8eeff}.head.svelte-zxslae.svelte-zxslae{padding:8px;font-size:24px;background:rgb(255 248 222);margin:4px;border-radius:8px}.children.svelte-zxslae.svelte-zxslae{margin-left:32px}",
  map: '{"version":3,"file":"ListItem.svelte","sources":["ListItem.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from \'$app/navigation\';\\n\\timport { user } from \'$lib/stores/user\';\\n\\timport ListItem from \'./ListItem.svelte\';\\n\\n\\texport let game;\\n\\texport let selectedGame;\\n\\texport let selectGame;\\n\\texport let visitGame;\\n<\/script>\\n\\n<li class=\\"game\\" class:selected={selectedGame ? selectedGame.id === game.id : false}>\\n\\t<div class=\\"head\\" on:click={() => selectGame(game)}>\\n\\t\\t{game.title}\\n\\n\\t\\t{#if $user && $user.admin}\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"btn btn-warning\\"\\n\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\tgoto(`/games/${game.id}/edit`);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<i class=\\"fa fa-link\\" />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t<div\\n\\t\\t\\tclass=\\"btn btn-outline-primary\\"\\n\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\tgoto(`/games/${game.id}`);\\n\\t\\t\\t}}\\n\\t\\t>\\n\\t\\t\\t<i class=\\"fa fa-eye\\" />\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"children\\">\\n\\t\\t{#each game.children || [] as child}\\n\\t\\t\\t<ListItem {selectedGame} game={child} {selectGame} {visitGame} />\\n\\t\\t{/each}\\n\\t</div>\\n</li>\\n\\n<style>\\n\\t.selected > .head {\\n\\t\\tbackground-color: #b8eeff !important;\\n\\t}\\n\\n\\t.wrapper {\\n\\t\\tpadding: 20px;\\n\\t}\\n\\n\\t.game {\\n\\t\\tpadding-left: 10px;\\n\\t}\\n\\t.game.selected {\\n\\t\\tpadding-left: 6px;\\n\\t\\tborder-left: 4px solid #b8eeff;\\n\\t}\\n\\n\\t.head {\\n\\t\\tpadding: 8px;\\n\\t\\tfont-size: 24px;\\n\\t\\tbackground: rgb(255 248 222);\\n\\t\\tmargin: 4px;\\n\\t\\tborder-radius: 8px;\\n\\t}\\n\\n\\t.children {\\n\\t\\tmargin-left: 32px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4CC,uBAAS,CAAG,mBAAM,CACjB,gBAAgB,CAAE,OAAO,CAAC,UAC3B,CAMA,iCAAM,CACL,YAAY,CAAE,IACf,CACA,KAAK,qCAAU,CACd,YAAY,CAAE,GAAG,CACjB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OACxB,CAEA,iCAAM,CACL,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAC5B,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAChB,CAEA,qCAAU,CACT,WAAW,CAAE,IACd"}'
};
const ListItem_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { game } = $$props;
  let { selectedGame } = $$props;
  let { selectGame } = $$props;
  let { visitGame } = $$props;
  if ($$props.game === void 0 && $$bindings.game && game !== void 0) $$bindings.game(game);
  if ($$props.selectedGame === void 0 && $$bindings.selectedGame && selectedGame !== void 0) $$bindings.selectedGame(selectedGame);
  if ($$props.selectGame === void 0 && $$bindings.selectGame && selectGame !== void 0) $$bindings.selectGame(selectGame);
  if ($$props.visitGame === void 0 && $$bindings.visitGame && visitGame !== void 0) $$bindings.visitGame(visitGame);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  return `<li class="${[
    "game svelte-zxslae",
    (selectedGame ? selectedGame.id === game.id : false) ? "selected" : ""
  ].join(" ").trim()}"><div class="head svelte-zxslae">${escape(game.title)} ${$user && $user.admin ? `<div class="btn btn-warning" data-svelte-h="svelte-1cemmzl"><i class="fa fa-link"></i></div>` : ``} <div class="btn btn-outline-primary" data-svelte-h="svelte-xrzsej"><i class="fa fa-eye"></i></div></div> <div class="children svelte-zxslae">${each(game.children || [], (child) => {
    return `${validate_component(ListItem_1, "ListItem").$$render(
      $$result,
      {
        selectedGame,
        game: child,
        selectGame,
        visitGame
      },
      {},
      {}
    )}`;
  })}</div> </li>`;
});
const css = {
  code: ".saveProgress.svelte-1ftmnlt{position:fixed;bottom:10px;right:10px}.wrapper.svelte-1ftmnlt{padding:20px}",
  map: `{"version":3,"file":"Index.svelte","sources":["Index.svelte"],"sourcesContent":["<script>\\n\\timport { onMount, afterUpdate } from 'svelte';\\n\\timport Nav from './Nav/Index.svelte';\\n\\timport API from '$lib/api/api';\\n\\timport SelectedGame from './Game/Edit.svelte';\\n\\timport ListItem from './ListItem.svelte';\\n\\timport debounceSave from '$lib/functions/debounce';\\n\\timport { user } from '$lib/stores/user';\\n\\n\\tlet games = [];\\n\\tlet selectedGame = null;\\n\\tlet visitingGame = null;\\n\\tlet organizedGames = [];\\n\\n\\tlet unsaved = false;\\n\\tlet saving = false;\\n\\n\\tonMount(async () => {\\n\\t\\tconst res = await API.get('/games.json');\\n\\t\\tgames = res;\\n\\t\\tconsole.log('first game fetch', games);\\n\\t\\torganizedGames = organizeGames(games);\\n\\t\\tconsole.log('organized games', organizedGames);\\n\\t});\\n\\n\\tafterUpdate(() => {\\n\\t\\t// Add event listeners for arrow key navigation\\n\\t\\twindow.addEventListener('keydown', handleKeyDown);\\n\\n\\t\\treturn () => {\\n\\t\\t\\t// Remove event listeners on component destruction\\n\\t\\t\\twindow.removeEventListener('keydown', handleKeyDown);\\n\\t\\t};\\n\\t});\\n\\n\\tafterUpdate(() => {\\n\\t\\t// Add event listeners for arrow key navigation\\n\\t\\twindow.addEventListener('keydown', handleKeyDown);\\n\\n\\t\\treturn () => {\\n\\t\\t\\t// Remove event listeners on component destruction\\n\\t\\t\\twindow.removeEventListener('keydown', handleKeyDown);\\n\\t\\t};\\n\\t});\\n\\n\\tfunction handleKeyDown(event) {\\n\\t\\tif (!selectedGame || !organizedGames) return;\\n\\n\\t\\tlet index = -1;\\n\\t\\tlet siblings = findSiblings(organizedGames, selectedGame.id);\\n\\n\\t\\tif (selectedGame.game_id) {\\n\\t\\t\\tindex = siblings.findIndex((game) => game.id === selectedGame.id);\\n\\t\\t} else {\\n\\t\\t\\tsiblings = organizedGames;\\n\\t\\t\\tindex = organizedGames.findIndex((game) => game.id === selectedGame.id);\\n\\t\\t}\\n\\n\\t\\tif (event.key === 's' || event.key === 'w') {\\n\\t\\t\\thandleUpDownKey(event, siblings, index);\\n\\t\\t} else if (event.key === 'd') {\\n\\t\\t\\thandleRightKey(siblings, index);\\n\\t\\t} else if (event.key === 'a') {\\n\\t\\t\\thandleLeftKey(siblings, index);\\n\\t\\t}\\n\\n\\t\\torganizedGames = organizedGames.map((game) => {\\n\\t\\t\\tif (game.id === selectedGame.id && selectedGame.game_id) {\\n\\t\\t\\t\\treturn {\\n\\t\\t\\t\\t\\t...game,\\n\\t\\t\\t\\t\\tchildren: [...siblings]\\n\\t\\t\\t\\t};\\n\\t\\t\\t}\\n\\t\\t\\treturn game;\\n\\t\\t});\\n\\n\\t\\tunsaved = true;\\n\\n\\t\\t// saveOrder(organizedGames);\\n\\t\\t// saveOrder(updatePositions(organizedGames));\\n\\t}\\n\\n\\tasync function saveOrder() {\\n\\t\\t// console.log({ array });\\n\\t\\tsaving = true;\\n\\t\\tconst array = updatePositions(organizedGames);\\n\\t\\tawait debounceSave('/games/reorder', {\\n\\t\\t\\tlist: flattenTree(array).map((g) => {\\n\\t\\t\\t\\treturn { id: g.id, game_id: g.game_id, position: g.position };\\n\\t\\t\\t})\\n\\t\\t});\\n\\t\\tsaving = false;\\n\\t\\tunsaved = false;\\n\\t}\\n\\n\\tfunction updatePositions(array) {\\n\\t\\t// console.log('GOTTEN', array);\\n\\t\\tif (!array) return;\\n\\t\\tfor (let i = 0; i < array.length; i++) {\\n\\t\\t\\tarray[i].position = i + 1;\\n\\t\\t\\tarray[i].children = updatePositions(array[i].children);\\n\\t\\t}\\n\\n\\t\\treturn array;\\n\\t}\\n\\n\\tfunction handleUpDownKey(event, container, index) {\\n\\t\\tif (selectedGame) {\\n\\t\\t\\tif (!container) {\\n\\t\\t\\t\\tconsole.log('no parent');\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tconsole.log({ container });\\n\\t\\t\\t}\\n\\n\\t\\t\\tif (event.key === 's' && index < container.length - 1) {\\n\\t\\t\\t\\t// Move the game down\\n\\t\\t\\t\\tswapPositions(container, index, index + 1);\\n\\t\\t\\t} else if (event.key === 'w' && index > 0) {\\n\\t\\t\\t\\t// Move the game up\\n\\t\\t\\t\\tswapPositions(container, index, index - 1);\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleRightKey(siblings, index) {\\n\\t\\tconst currentIndex = siblings.indexOf(selectedGame);\\n\\t\\tconst futureParentIndex = currentIndex - 1;\\n\\n\\t\\tconsole.log({ futureParentIndex });\\n\\n\\t\\tif (futureParentIndex >= 0 && futureParentIndex < siblings.length - 1) {\\n\\t\\t\\t// Save the removed element\\n\\t\\t\\tconst removedElement = siblings.splice(currentIndex, 1)[0];\\n\\n\\t\\t\\tselectedGame.game_id = siblings[futureParentIndex].id;\\n\\t\\t\\tif (!siblings[futureParentIndex].children) {\\n\\t\\t\\t\\tsiblings[futureParentIndex].children = [];\\n\\t\\t\\t}\\n\\t\\t\\tsiblings[futureParentIndex].children = [\\n\\t\\t\\t\\t...siblings[futureParentIndex].children,\\n\\t\\t\\t\\tremovedElement\\n\\t\\t\\t];\\n\\t\\t}\\n\\t}\\n\\n\\tfunction handleLeftKey(siblings, index) {\\n\\t\\tif (!selectedGame || !selectedGame.game_id) {\\n\\t\\t\\treturn;\\n\\t\\t} else {\\n\\t\\t\\tconst grandparentId = findGrandparentId(organizedGames, selectedGame.game_id);\\n\\t\\t\\tlet newParent;\\n\\t\\t\\tlet currentParent;\\n\\t\\t\\tlet currentParentIndex;\\n\\t\\t\\tif (grandparentId !== null) {\\n\\t\\t\\t\\tnewParent = findGame(organizedGames, grandparentId);\\n\\t\\t\\t\\tcurrentParent = findGame(organizedGames, selectedGame.game_id);\\n\\t\\t\\t\\tcurrentParentIndex = newParent.children.findIndex((game) => game.id === currentParent.id);\\n\\n\\t\\t\\t\\tconsole.log({ newParent });\\n\\t\\t\\t\\tconsole.log({ currentParent });\\n\\t\\t\\t\\tconsole.log({ currentParentIndex });\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tnewParent = organizedGames;\\n\\t\\t\\t\\tcurrentParent = findGame(organizedGames, selectedGame.game_id);\\n\\t\\t\\t\\tcurrentParentIndex = newParent.findIndex((game) => game.id === currentParent.id);\\n\\t\\t\\t}\\n\\n\\t\\t\\tif (currentParentIndex >= 0) {\\n\\t\\t\\t\\t// Remove the selected game from its parent\\n\\t\\t\\t\\tconst removedElement = currentParent.children.splice(index, 1)[0];\\n\\t\\t\\t\\tconsole.log(currentParent.children);\\n\\t\\t\\t\\tremovedElement.game_id = newParent.id;\\n\\t\\t\\t\\tif (Array.isArray(newParent)) {\\n\\t\\t\\t\\t\\tnewParent.splice(currentParentIndex + 1, 0, removedElement);\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tnewParent.children.splice(currentParentIndex + 1, 0, removedElement);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\treturn;\\n\\t\\t\\t}\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t}\\n\\n\\tfunction swapPositions(array, indexA, indexB) {\\n\\t\\tconst temp = array[indexA];\\n\\t\\tarray[indexA] = array[indexB];\\n\\t\\tarray[indexB] = temp;\\n\\t}\\n\\n\\tfunction flattenTree(tree) {\\n\\t\\treturn tree.reduce((acc, node) => {\\n\\t\\t\\tacc.push(node);\\n\\t\\t\\tif (node.children) {\\n\\t\\t\\t\\tacc.push(...flattenTree(node.children));\\n\\t\\t\\t}\\n\\t\\t\\treturn acc;\\n\\t\\t}, []);\\n\\t}\\n\\tfunction findGrandparentId(arr, gameId) {\\n\\t\\tfor (let game of arr) {\\n\\t\\t\\tif (game.children && game.children.some((child) => child.id === gameId)) {\\n\\t\\t\\t\\treturn game.id;\\n\\t\\t\\t}\\n\\t\\t\\tif (game.children) {\\n\\t\\t\\t\\tconst result = findGrandparentId(game.children, gameId);\\n\\t\\t\\t\\tif (result !== null) {\\n\\t\\t\\t\\t\\treturn result; // Return if found in children\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn null;\\n\\t}\\n\\n\\tfunction findGame(arr, gameId) {\\n\\t\\t// console.log({ gameId });\\n\\t\\tfor (let game of arr) {\\n\\t\\t\\tif (game.id === gameId) {\\n\\t\\t\\t\\treturn game;\\n\\t\\t\\t}\\n\\t\\t\\tif (game.children) {\\n\\t\\t\\t\\tconst result = findGame(game.children, gameId);\\n\\t\\t\\t\\tif (result !== null) {\\n\\t\\t\\t\\t\\treturn result; // Return if found in children\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn null;\\n\\t}\\n\\t// function findGameIndex(arr, gameId) {\\n\\t// \\tfor (let game of arr) {\\n\\t// \\t\\t// console.log({ game }, gameId);\\n\\t// \\t\\tif (game.id === gameId) {\\n\\t// \\t\\t\\treturn game;\\n\\t// \\t\\t}\\n\\t// \\t\\tconst result = findParent(game.children || [], gameId);\\n\\t// \\t}\\n\\t// \\treturn game;\\n\\t// }\\n\\n\\tfunction findSiblings(arr, gameId) {\\n\\t\\tfor (let game of arr) {\\n\\t\\t\\tif (game.children && game.children.some((child) => child.id === gameId)) {\\n\\t\\t\\t\\treturn game.children;\\n\\t\\t\\t}\\n\\t\\t\\tif (game.children) {\\n\\t\\t\\t\\tconst result = findSiblings(game.children, gameId);\\n\\t\\t\\t\\tif (result.length > 0) {\\n\\t\\t\\t\\t\\tconsole.log('FOUND IN CHILDREN');\\n\\t\\t\\t\\t\\treturn result; // Return if found in children\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn [];\\n\\t}\\n\\n\\t// $: organizedGames = organizeGames(games);\\n\\t// $: console.log({ organizedGames });\\n\\n\\tfunction organizeGames(games, parentId = null) {\\n\\t\\t// Filter games based on the current parent ID\\n\\t\\tconst filteredGames = games.filter((game) => game.game_id === parentId);\\n\\n\\t\\t// Recursively organize children for each filtered game\\n\\t\\tconst organizedChildren = filteredGames.map((parentGame) => {\\n\\t\\t\\tconst children = organizeGames(games, parentGame.id);\\n\\t\\t\\treturn { ...parentGame, children };\\n\\t\\t});\\n\\n\\t\\treturn organizedChildren;\\n\\t}\\n\\n\\tfunction selectGame(game) {\\n\\t\\tselectedGame = game;\\n\\t\\tconsole.log({ selectedGame });\\n\\t}\\n\\n\\tfunction visitGame(game) {\\n\\t\\tvisitingGame = game;\\n\\t\\tconsole.log({ visitingGame });\\n\\t}\\n\\tlet newGameTitle;\\n\\tasync function createGame() {\\n\\t\\tif (newGameTitle.length < 2) return;\\n\\t\\tconst res = await API.post('/games', {\\n\\t\\t\\ttitle: newGameTitle,\\n\\t\\t\\tpositon: organizedGames.length + 1\\n\\t\\t});\\n\\t\\tconsole.log({ res });\\n\\t\\tgames = [...games, res];\\n\\t\\torganizedGames = organizeGames(games);\\n\\t\\tnewGameTitle = '';\\n\\t}\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t<Nav />\\n\\n\\t{#if $user && $user.admin}\\n\\t\\t<div class=\\"createGame inline-form\\">\\n\\t\\t\\t<input type=\\"text\\" class=\\"form-control\\" placeholder=\\"Create Game\\" bind:value={newGameTitle} />\\n\\t\\t\\t<div class=\\"btn btn-info\\" on:click={createGame}><i class=\\"fa fa-plus\\" /></div>\\n\\t\\t</div>\\n\\t{/if}\\n\\n\\t<div class=\\"wrapper\\">\\n\\t\\t{#if !visitingGame}\\n\\t\\t\\t<ul class=\\"clean-list games\\">\\n\\t\\t\\t\\t{#each organizedGames || [] as game}\\n\\t\\t\\t\\t\\t<ListItem {selectedGame} {game} {selectGame} {visitGame} />\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t{:else}\\n\\t\\t\\t<SelectedGame selectedGame={visitingGame} goBack={() => (visitingGame = null)} />\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t<div class=\\"saveProgress\\">\\n\\t\\t{#if unsaved && !saving}\\n\\t\\t\\t<div class=\\"btn btn-warning\\" on:click={saveOrder}>Unsaved Progress</div>\\n\\t\\t{:else}\\n\\t\\t\\t<div class=\\"btn btn-success\\"><i class=\\"fa fa-check\\" /></div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if saving}\\n\\t\\t\\t<div class=\\"btn btn-info\\">Saving</div>\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.saveProgress {\\n\\t\\tposition: fixed;\\n\\t\\tbottom: 10px;\\n\\t\\tright: 10px;\\n\\t}\\n\\t/* ... (your existing styles) */\\n\\t.selected {\\n\\t\\tbackground-color: #b8eeff !important;\\n\\t}\\n\\n\\t.wrapper {\\n\\t\\tpadding: 20px;\\n\\t}\\n\\n\\t.game {\\n\\t\\tpadding: 8px;\\n\\t\\tfont-size: 24px;\\n\\t\\tbackground: rgb(255 248 222);\\n\\t\\tmargin: 4px;\\n\\t\\tborder-radius: 8px;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0UC,4BAAc,CACb,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACR,CAMA,uBAAS,CACR,OAAO,CAAE,IACV"}`
};
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let selectedGame = null;
  let visitingGame = null;
  let organizedGames = [];
  function selectGame(game) {
    selectedGame = game;
    console.log({ selectedGame });
  }
  function visitGame(game) {
    visitingGame = game;
    console.log({ visitingGame });
  }
  let newGameTitle;
  $$result.css.add(css);
  $$unsubscribe_user();
  return `<div class="content">${validate_component(Index$1, "Nav").$$render($$result, {}, {}, {})} ${$user && $user.admin ? `<div class="createGame inline-form"><input type="text" class="form-control" placeholder="Create Game"${add_attribute("value", newGameTitle, 0)}> <div class="btn btn-info" data-svelte-h="svelte-hrys9y"><i class="fa fa-plus"></i></div></div>` : ``} <div class="wrapper svelte-1ftmnlt">${!visitingGame ? `<ul class="clean-list games">${each(organizedGames || [], (game) => {
    return `${validate_component(ListItem_1, "ListItem").$$render(
      $$result,
      {
        selectedGame,
        game,
        selectGame,
        visitGame
      },
      {},
      {}
    )}`;
  })}</ul>` : `${validate_component(Edit, "SelectedGame").$$render(
    $$result,
    {
      selectedGame: visitingGame,
      goBack: () => visitingGame = null
    },
    {},
    {}
  )}`}</div> <div class="saveProgress svelte-1ftmnlt">${`<div class="btn btn-success" data-svelte-h="svelte-1i6i9n1"><i class="fa fa-check"></i></div>`} ${``}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Games").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
