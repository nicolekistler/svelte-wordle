import { writable } from 'svelte/store';

export const letterStream = writable([[], [], [], [], [], []]);

export const currentRow = writable(0);

export const puzzleComplete = writable(false);
