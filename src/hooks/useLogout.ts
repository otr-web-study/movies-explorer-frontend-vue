import { useRouter } from 'vue-router';
import { useLocalStorage } from './useLocalStorage';
import { useMoviesStore } from '@/stores/useMoviesStore';
import { useAppControlsStore } from '@/stores/useAppControlsStore';

export const useLogout = () => {
  const { setDefaultValues } = useLocalStorage();
  const { onLogout } = useMoviesStore();
  const store = useAppControlsStore();
  const router = useRouter();

  const logout = () => {
    store.user = null;
    onLogout();
    setDefaultValues();
    router.push({ name: 'home' });
  };

  return { logout };
};
