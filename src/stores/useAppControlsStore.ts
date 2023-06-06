import { ref, computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMoviesStore } from '@/stores/useMoviesStore';
import type { User } from '@/types';

export const useAppControlsStore = defineStore('controls', () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => user.value !== null);
  const mainApiPending = ref(false);
  const infoMessage = ref('');

  const { pending: isMoviesApiPending } = storeToRefs(useMoviesStore());

  const isPending = computed(() => mainApiPending.value || isMoviesApiPending.value);

  const setMainApiPending = (value: boolean) => {
    mainApiPending.value = value;
  };

  const setError = (value: string) => {
    infoMessage.value = value;
  };

  return { user, isLoggedIn, isPending, infoMessage, setMainApiPending, setError };
});
