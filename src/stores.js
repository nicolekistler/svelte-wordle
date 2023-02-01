import { writable } from 'svelte/store';

export const guesses = writable([[], [], [], [], [], []]);

export const currentRow = writable(0);

export const puzzleComplete = writable(false);

export const solution = writable('LEARN');
