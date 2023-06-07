import { watchEffect } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import CREATE_MOVIE from '@/graphql/queries/createMovie.mutation.gql';
import MOVIES from '@/graphql/queries/movies.query.gql';
import type { SavedMovie } from '@/types';

export const useCreateMovie = () => {
  const store = useAppControlsStore();
  const { mutate, loading, onError } = useMutation(CREATE_MOVIE, {
    context: { withAuth: true },
    update: (cache, { data: { createMovie } }) => {
      const data = cache.readQuery<{ movies: SavedMovie[] }>({ query: MOVIES });

      cache.writeQuery({
        query: MOVIES,
        data: {
          ...data,
          movies: [createMovie, ...(data?.movies ?? [])],
        },
      });
    },
  });

  const createMovie = (movie: SavedMovie) => {
    mutate({ data: movie });
  };

  onError((err) => {
    store.setError('Что-то пошло не так, не удалось сохранить фильм.');
    console.log(err);
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  return { createMovie };
};
