import { readable, writable } from 'svelte/store';

export const gopher = writable({ kind: null, item: null });
