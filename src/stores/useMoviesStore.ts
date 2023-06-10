import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Movie } from '@/types';
import type { SearchArgs } from '@/types';
import api from '@/utils/moviesApi';
import { convertMovies } from '@/utils/convertMovies';
import { isMovieMatched } from '@/utils/searchHelpers';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const useMoviesStore = defineStore('movies', () => {
  const { setValues, getValue } = useLocalStorage();
  const movies = ref<Movie[]>([]);
  const pending = ref<boolean>(false);
  const searchString = ref<string>(getValue('searchString', ''));
  const onlyShort = ref<boolean>(getValue('onlyShort', false));
  const page = ref<number>(0);
  const moviesLimit = ref<number>(0);
  const moviesMore = ref<number>(0);

  const filteredMovies = computed(() =>
    movies.value.filter((movie) => isMovieMatched(movie, searchString.value, onlyShort.value)),
  );
  const visibleMovies = computed(() =>
    filteredMovies.value.slice(0, moviesLimit.value + moviesMore.value * page.value),
  );
  const isMoreMovies = computed(() => filteredMovies.value.length > visibleMovies.value.length);

  const moviesLoaded = computed(() => movies.value.length > 0);

  const handleSearch = (searchArgs: SearchArgs) => {
    searchString.value = searchArgs.searchString;
    onlyShort.value = searchArgs.onlyShort;
    page.value = 0;

    setValues({
      searchString: searchString.value,
      onlyShort: onlyShort.value,
    });
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

  const onLogout = () => {
    searchString.value = '';
    onlyShort.value = false;
    page.value = 0;
  };

  return {
    visibleMovies,
    searchString,
    onlyShort,
    page,
    moviesLoaded,
    moviesLimit,
    moviesMore,
    isMoreMovies,
    pending,
    loadMovies,
    handleSearch,
    nextPage,
    onLogout,
  };
});
