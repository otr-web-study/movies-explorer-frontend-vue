import { onMounted, onUnmounted, reactive } from 'vue';
import { useMoviesStore } from '@/stores/useMoviesStore';
import {
  WIDTH_DESKTOP,
  WIDTH_MIDDLE,
  WIDTH_MOBILE,
  COUNT_CARDS_DESKTOP_WIDTH,
  COUNT_CARDS_MIDDLE_WIDTH,
  COUNT_CARDS_MOBILE_WIDTH,
  COUNT_CARDS_DESKTOP_WIDTH_MORE,
  COUNT_CARDS_MIDDLE_WIDTH_MORE,
  COUNT_CARDS_MOBILE_WIDTH_MORE,
} from '@/constants';

export const useMoviesLimits = () => {
  const store = useMoviesStore();

  const getWidthSelector = () => {
    const windowSize = window.innerWidth;
    if (windowSize >= WIDTH_DESKTOP) {
      return WIDTH_DESKTOP;
    } else if (windowSize >= WIDTH_MIDDLE) {
      return WIDTH_MIDDLE;
    }
    return WIDTH_MOBILE;
  };

  const handleResize = () => {
    switch (getWidthSelector()) {
      case WIDTH_DESKTOP:
        store.moviesLimit = COUNT_CARDS_DESKTOP_WIDTH;
        store.moviesMore = COUNT_CARDS_DESKTOP_WIDTH_MORE;
        break;
      case WIDTH_MIDDLE:
        store.moviesLimit = COUNT_CARDS_MIDDLE_WIDTH;
        store.moviesMore = COUNT_CARDS_MIDDLE_WIDTH_MORE;
        break;
      case WIDTH_MOBILE:
        store.moviesLimit = COUNT_CARDS_MOBILE_WIDTH;
        store.moviesMore = COUNT_CARDS_MOBILE_WIDTH_MORE;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
};
