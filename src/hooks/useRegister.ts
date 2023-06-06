import { watchEffect } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useLogin } from '@/hooks/useLogin';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import REGISTER from '@/graphql/queries/register.mutation.gql';
import type { User } from '@/types';

interface UserRegisterArgs extends Omit<User, '_id'> {
  password: string;
}

export const useRegister = () => {
  const store = useAppControlsStore();
  const { login } = useLogin();
  const { mutate, onError, onDone, loading } = useMutation(REGISTER, {
    context: { withAuth: false },
  });
  let userRegisterArgs: UserRegisterArgs | null = null;

  const register = (args: UserRegisterArgs) => {
    userRegisterArgs = args;
    mutate({ data: args });
  };

  onError((err) => {
    store.setError('Что-то пошло не так, не удалось зарегистрировать пользователя.');
    console.log(err);
  });

  onDone(({ data: { register } }) => {
    if (!register._id) {
      return;
    }

    login({
      email: userRegisterArgs?.email ?? '',
      password: userRegisterArgs?.password ?? '',
    });
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  return { register };
};
