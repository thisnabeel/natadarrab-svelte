import { readable, writable } from 'svelte/store';

export const selectedSet = writable(null);
export const selectedGame = writable(null);
export const selectedChapter = writable(null);
