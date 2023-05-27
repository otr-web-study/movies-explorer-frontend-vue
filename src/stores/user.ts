import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import type { User } from '@/types';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>({ name: 'tst', email: 'tst@tst.com' });
  const isLoggedIn = computed(() => user.value !== null);

  return { user, isLoggedIn };
});
