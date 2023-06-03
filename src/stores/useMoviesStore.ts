import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Movie } from '@/types';
import type { SearchArgs } from '@/types';
import api from '@/utils/moviesApi';
import { convertMovies } from '@/utils/convertMovies';
import { isMovieMatched } from '@/utils/searchHelpers';

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([]);
  const pending = ref<boolean>(false);
  const searchString = ref<string>('');
  const onlyShort = ref<boolean>(false);
  const page = ref<number>(0);
  const moviesLimit = ref<number>(9);
  const moviesMore = ref<number>(3);

  const filteredMovies = computed(() =>
    movies.value.filter((movie) => isMovieMatched(movie, searchString.value, onlyShort.value)),
  );
  const visibleMovies = computed(() =>
    filteredMovies.value.slice(0, moviesLimit.value + moviesMore.value * page.value),
  );
  const isMoreMovies = computed(() => filteredMovies.value.length > visibleMovies.value.length);

  const handleSearch = (searchArgs: SearchArgs) => {
    searchString.value = searchArgs.searchString;
    onlyShort.value = searchArgs.onlyShort;
    page.value = 0;
  };

  const nextPage = () => {
    page.value += 1;
  };

  const loadMovies = async () => {
    pending.value = true;
    try {
      movies.value = convertMovies(await api.getMovies());
    } catch (err) {
      pending.value = false;
    }
    pending.value = false;
  };

  loadMovies();

  return {
    visibleMovies,
    searchString,
    onlyShort,
    page,
    moviesLimit,
    moviesMore,
    isMoreMovies,
    handleSearch,
    nextPage,
  };
});
