import { ref, computed, watchEffect } from 'vue';
import { useMovies } from './useMovies';
import { useLocalStorage } from './useLocalStorage';
import { isMovieMatched } from '@/utils/searchHelpers';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import type { SearchArgs } from '@/types';

export const useSavedMovies = () => {
  const { getValue, setValues } = useLocalStorage();
  const store = useAppControlsStore();
  const { movies } = useMovies();
  const searchString = ref<string>(getValue('savedSearchString', ''));
  const onlyShort = ref<boolean>(getValue('savedOnlyShort', false));

  const visibleMovies = computed(() =>
    movies.value.filter((movie) => isMovieMatched(movie, searchString.value, onlyShort.value)),
  );

  const handleSearch = (searchArgs: SearchArgs) => {
    searchString.value = searchArgs.searchString;
    onlyShort.value = searchArgs.onlyShort;

    setValues({
      savedSearchString: searchArgs.searchString,
      savedOnlyShort: searchArgs.onlyShort,
    });
  };

  return { movies: visibleMovies, searchString, onlyShort, handleSearch };
};
