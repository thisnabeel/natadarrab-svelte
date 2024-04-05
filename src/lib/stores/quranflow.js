import { readable, writable } from 'svelte/store';

export const grid = writable('default');
export const playlists = writable([]);
export const selectedSegment = writable(null);
export const selectedSegmentContentPlaylists = writable([]);
export const rightNavTab = writable(0);
export const selectedNote = writable(null);
export const editMode = writable(false);
export const segments = writable([], (s) => {
	console.log('got segments');
	return () => console.log('no segments');
});
