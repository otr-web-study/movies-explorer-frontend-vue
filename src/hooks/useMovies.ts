import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import GET_MOVIES from '@/graphql/queries/movies.query.gql';
import type { SavedMovie } from '@/types';
import { watchEffect } from 'vue';

export const useMovies = () => {
  const store = useAppControlsStore();
  const { result, loading, onError } = useQuery<{ movies: SavedMovie[] }>(GET_MOVIES, null, {
    context: { withAuth: true },
  });

  onError((err) => {
    store.setError('Что-то пошло не так, не удалось получить данные сохраненных фильмов.');
    console.log(err);
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  const movies = computed(() => result.value?.movies ?? []);

  return { movies };
};
