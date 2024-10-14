import { readable, writable } from 'svelte/store';

export const whiteboardActive = writable(false);
export const currentWhiteboardIndex = writable(0);
export const importVerse = writable(null);
