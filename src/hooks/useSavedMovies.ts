import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import GET_MOVIES from '@/graphql/queries/movies.query.gql';
import type { SavedMovie } from '@/types';

export const useSavedMovies = () => {
  const getMovies = () => {
    const { result, loading, onResult, onError } = useQuery<SavedMovie[]>(GET_MOVIES);

    const movies = computed(() => result.value || []);

    return { movies, loading, onResult, onError };
  };

  return { getMovies };
};
