import { d as derived, w as writable } from "./index.js";
const width = writable(0);
const mobile = writable(true);
const device = derived([width, mobile], ([width2, mobile2]) => {
  if (width2 > 1e3 || !mobile2) {
    return "desktop";
  } else {
    return "mobile";
  }
});
export {
  device as d,
  mobile as m,
  width as w
};
