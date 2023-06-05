import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import GET_CURRENT_USER from '@/graphql/queries/currentUser.query.gql';
import type { User } from '@/types';

export const useCurrentUser = () => {
  const getCurrentUser = () => {
    const { result } = useQuery<User>(GET_CURRENT_USER);

    return computed(() => result.value ?? {});
  };

  return { getCurrentUser };
};
