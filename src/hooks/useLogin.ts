import { useMutation, useQuery } from '@vue/apollo-composable';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import GET_CURRENT_USER from '@/graphql/queries/currentUser.query.gql';
import LOGIN from '@/graphql/queries/login.mutation.gql';
import type { User } from '@/types';
import { watchEffect } from 'vue';

export const useLogin = () => {
  const store = useAppControlsStore();
  const { setValues } = useLocalStorage();
  const {
    mutate: login,
    onError,
    onDone,
    loading,
  } = useMutation(LOGIN, {
    context: { withAuth: false },
  });

  onError((err) => {
    store.setError('Что-то пошло не так, не удалось войти в систему.');
    console.log(err);
  });

  onDone(({ data: { login } }) => {
    const token = login.token;
    if (!token) {
      return;
    }

    setValues({ token });
    const { onResult, onError: onQueryError } = useQuery<User>(GET_CURRENT_USER, {
      context: { withAuth: true },
    });

    onQueryError((err) => {
      store.setError('Что-то пошло не так, не удалось получить данные пользователя.');
      console.log(err);
    });

    onResult(({ data: user }) => {
      store.user = user;
    });
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  return { login };
};
