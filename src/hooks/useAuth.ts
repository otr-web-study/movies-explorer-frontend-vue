import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useLogout } from '@/hooks/useLogout';
import { useAppControlsStore } from '@/stores/useAppControlsStore';

export const useAuth = () => {
  const store = useAppControlsStore();
  const { getValue } = useLocalStorage();
  const { getCurrentUser, onResult } = useCurrentUser();
  const { logout } = useLogout();
  const router = useRouter();
  const route = useRoute();

  onResult((success) => {
    if (!success) {
      logout();
    }
    store.isAuthChecked = true;
  });

  const checkLoggedIn = () => {
    const token = getValue('token', '');
    if (token) {
      getCurrentUser();
    } else {
      logout();
      store.isAuthChecked = true;
    }
  };

  watchEffect(() => {
    if (store.isAuthChecked) {
      const path = route.query.redirect?.toString();
      if (path) {
        router.push({ path });
      }
    }
  });

  return { checkLoggedIn };
};
