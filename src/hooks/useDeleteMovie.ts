import { watchEffect } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import DELETE_MOVIE from '@/graphql/queries/deleteMovie.gql';
import MOVIES from '@/graphql/queries/movies.query.gql';
import type { SavedMovie } from '@/types';

export const useDeleteMovie = () => {
  const store = useAppControlsStore();
  let id: SavedMovie['_id'] | undefined;

  const { mutate, loading, onError } = useMutation(DELETE_MOVIE, {
    context: { withAuth: true },
    fetchPolicy: 'no-cache',
    update: (cache) => {
      const data = cache.readQuery<{ movies: SavedMovie[] }>({ query: MOVIES });

      cache.writeQuery({
        query: MOVIES,
        data: {
          ...data,
          movies: [...(data?.movies ?? []).filter((m) => m._id !== id)],
        },
      });
    },
  });

  const deleteMovie = (_id: SavedMovie['_id']) => {
    id = _id;
    mutate({ id: id });
  };

  onError((err) => {
    store.setError('Что-то пошло не так, не удалось удалить фильм из сохраненных.');
    console.log(err);
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  return { deleteMovie };
};
