import { useAppControlsStore } from '@/stores/useAppControlsStore';
import { useLocalStorage } from './useLocalStorage';
import { useMoviesStore } from '@/stores/useMoviesStore';
import { useMainApi } from './useMainApi';
import { watchEffect } from 'vue';

export const useAuth = () => {
  const controlsStore = useAppControlsStore();
  const { getValue, setDefaultValues } = useLocalStorage();

  const checkLoggedIn = () => {
    const { getCurrentUser } = useMainApi();
    const token = getValue('token', '');
    if (token) {
      getCurrentUser();
    } else {
      controlsStore.logout();
    }
  };

  watchEffect(() => {
    if (!controlsStore.isLoggedIn) {
      const { onLogout } = useMoviesStore();
      onLogout();
      setDefaultValues();
    }
  });

  checkLoggedIn();
};
