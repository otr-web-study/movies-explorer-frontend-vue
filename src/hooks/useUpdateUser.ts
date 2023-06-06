import { watchEffect } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import UPDATE_USER from '@/graphql/queries/updateUser.mutation.gql';
import type { User } from '@/types';

interface UpdateUserArgs extends Omit<User, '_id'> {}

export const useUpdateUser = () => {
  const store = useAppControlsStore();
  const { mutate, onError, onDone, loading } = useMutation(UPDATE_USER, {
    context: { withAuth: true },
    fetchPolicy: 'no-cache',
  });

  const updateUser = (args: UpdateUserArgs) => {
    mutate({ data: args });
  };

  onError((err) => {
    store.setError('Что-то пошло не так, не удалось изменить данные пользователя.');
    console.log(err);
  });

  onDone(({ data: { updateUser } }) => {
    if (updateUser) {
      store.user = updateUser;
    }
  });

  watchEffect(() => {
    store.setMainApiPending(loading.value);
  });

  return { updateUser };
};
