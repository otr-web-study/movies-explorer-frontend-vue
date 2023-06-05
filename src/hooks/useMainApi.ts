import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import GET_MOVIES from '@/graphql/queries/movies.query.gql';
import GET_CURRENT_USER from '@/graphql/queries/currentUser.query.gql';
import type { SavedMovie, User } from '@/types';

type LoginArgs = {
  email: string;
  password: string;
};

export const useMainApi = () => {
  const getMovies = () => {
    const { result, loading, onResult, onError } = useQuery<SavedMovie[]>(GET_MOVIES);

    const movies = computed(() => result.value || []);

    return { movies, loading, onResult, onError };
  };

  const getCurrentUser = () => {
    const { result, loading, onResult, onError } = useQuery<User>(GET_CURRENT_USER, {
      context: { withAuth: true },
    });

    return { user: result, loading, onResult, onError };
  };

  return { getMovies, getCurrentUser };
};
