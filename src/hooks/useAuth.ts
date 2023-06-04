import { useQuery } from '@vue/apollo-composable';
import GET_CURRENT_USER from '@/graphql/queries/currentUser.query.gql';
import type { User } from '@/types';

export const useAuth = () => {
  const getCurrentUser = () => {
    const { result, loading, onResult, onError } = useQuery<User>(GET_CURRENT_USER);

    return { user: result, loading, onResult, onError };
  };

  return { getCurrentUser };
};
