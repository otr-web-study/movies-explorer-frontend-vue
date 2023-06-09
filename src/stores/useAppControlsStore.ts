import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMoviesStore } from '@/stores/useMoviesStore';
import type { User } from '@/types';

export const useAppControlsStore = defineStore('controls', () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => user.value !== null);
  const mainApiPending = ref(false);
  const infoMessage = ref('');
  const isError = ref(false);
  const isAuthChecked = ref(false);

  const { pending: isMoviesApiPending } = storeToRefs(useMoviesStore());

  const isPending = computed(
    () => mainApiPending.value || isMoviesApiPending.value || !isAuthChecked.value,
  );

  const setMainApiPending = (value: boolean) => {
    mainApiPending.value = value;
  };

  const setError = (value: string) => {
    infoMessage.value = value;
    isError.value = true;
  };

  const clearInfoMessage = () => {
    infoMessage.value = '';
    isError.value = false;
  };

  const setMessage = (value: string) => {
    infoMessage.value = value;
    isError.value = false;
  };

  return {
    user,
    isLoggedIn,
    isPending,
    infoMessage,
    isError,
    isAuthChecked,
    setMainApiPending,
    setError,
    setMessage,
    clearInfoMessage,
  };
});
