import { w as writable } from "./index.js";
const whiteboardActive = writable(false);
const currentWhiteboardIndex = writable(0);
const importVerse = writable(null);
export {
  currentWhiteboardIndex as c,
  importVerse as i,
  whiteboardActive as w
};
