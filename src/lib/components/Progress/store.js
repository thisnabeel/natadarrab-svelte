import { readable, writable } from 'svelte/store';

export const selectedSet = writable(null);
export const selectedGame = writable(null);
export const selectedChapter = writable(null);
export const selectedStudent = writable(null);
export const selectedStudentSkills = writable([]);
export const loadingStudentSkills = writable(false);
export const selectedTab = writable(0);
