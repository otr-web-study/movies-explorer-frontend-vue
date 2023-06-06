import { useQuery } from '@vue/apollo-composable';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import GET_CURRENT_USER from '@/graphql/queries/currentUser.query.gql';
import type { User } from '@/types';
import type { ApolloQueryResult } from '@apollo/client/core';

type SubscribeOnResultFn = (success: boolean) => void;

export const useCurrentUser = () => {
  const store = useAppControlsStore();
  const fns: Array<SubscribeOnResultFn> = [];

  const subscribeOnResult = (fn: SubscribeOnResultFn) => {
    fns.push(fn);
    return {
      usubscribe: () => unsubscribeOnResult(fn),
    };
  };

  const unsubscribeOnResult = (fn: SubscribeOnResultFn) => {
    const index = fns.indexOf(fn);
    if (index !== -1) {
      fns.splice(index, 1);
    }
  };

  const applySubscriptions = (success: boolean) => {
    for (const fn of fns) {
      fn(success);
    }
  };

  const getCurrentUser = () => {
    store.setMainApiPending(true);
    const { onResult, onError } = useQuery<{ currentUser: User }>(GET_CURRENT_USER, null, {
      context: { withAuth: true },
      fetchPolicy: 'no-cache',
    });

    onError((err) => {
      store.setError('Что-то пошло не так, не удалось получить данные пользователя.');
      store.user = null;
      console.log(err);
      store.setMainApiPending(false);
      applySubscriptions(false);
    });

    onResult(({ data }: ApolloQueryResult<{ currentUser: User }>) => {
      const user = data?.currentUser;
      if (user) {
        store.user = user;
        store.setMainApiPending(false);
        applySubscriptions(true);
      }
    });
  };

  return { getCurrentUser, onResult: subscribeOnResult };
};
