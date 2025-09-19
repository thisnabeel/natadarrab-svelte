import { w as writable } from "./index.js";
const grid = writable("default");
const playlists = writable([]);
const selectedSegment = writable(null);
const selectedSegmentContentPlaylists = writable([]);
const rightNavTab = writable(0);
const selectedNote = writable(null);
const editMode = writable(false);
const segments = writable([], (s) => {
  console.log("got segments");
  return () => console.log("no segments");
});
const flow = writable(false);
const selectedSurah = writable(1);
const gopher = writable({ kind: null, item: null });
const translation = writable(null);
export {
  selectedSegment as a,
  selectedNote as b,
  selectedSegmentContentPlaylists as c,
  segments as d,
  editMode as e,
  flow as f,
  grid as g,
  gopher as h,
  playlists as p,
  rightNavTab as r,
  selectedSurah as s,
  translation as t
};
