import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation } from '@vue/apollo-composable';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import LOGIN from '@/graphql/queries/login.mutation.gql';
import type { User } from '@/types';

interface LoginArgs extends Pick<User, 'email'> {
  password: string;
}

export const useLogin = () => {
  const store = useAppControlsStore();
  const router = useRouter();
  const { setValues } = useLocalStorage();
  const { getCurrentUser, onResult: onCurrentUserResult } = useCurrentUser();
  const { mutate, onError, onDone, loading } = useMutation(LOGIN, {
    context: { withAuth: false },
    fetchPolicy: 'no-cache',
  });

  const login = (args: LoginArgs) => {
    mutate({ data: args });
  };

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
    getCurrentUser();
  });

  onCurrentUserResult((success) => {
    if (success) {
      router.push({ name: 'home' });
    }
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  return { login };
};
