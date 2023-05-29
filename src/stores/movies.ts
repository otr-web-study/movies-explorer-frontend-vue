import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Movie } from '@/types';
import type { SearchArgs } from '@/types';

export const useMoviesStore = defineStore('movies-controls', () => {
  const movies = ref<Movie[]>([]);

  const getVisibleMovies = (searchArgs: SearchArgs, page: number) => {};

  return { movies };
});
