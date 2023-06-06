import { useLocalStorage } from './useLocalStorage';
import { useMoviesStore } from '@/stores/useMoviesStore';
import { useCurrentUser } from './useCurrentUser';

export const useAuth = () => {
  const { getValue, setDefaultValues } = useLocalStorage();
  const { getCurrentUser, onResult } = useCurrentUser();
  const { onLogout } = useMoviesStore();

  const logout = () => {
    onLogout();
    setDefaultValues();
  };

  onResult((success) => {
    if (!success) {
      logout();
    }
  });

  const checkLoggedIn = () => {
    const token = getValue('token', '');
    if (token) {
      getCurrentUser();
    } else {
      logout();
    }
  };

  checkLoggedIn();
};
