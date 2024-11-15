import { readable, writable } from 'svelte/store';

export const roomOpen = writable(false);
export const currentRoomCode = writable(null);
export const members = writable([]);
