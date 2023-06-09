import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ProfileView from '@/views/ProfileView.vue';
import MoviesView from '@/views/MoviesView.vue';
import SavedMoviewView from '@/views/SavedMoviesView.vue';
import NotFound from '@/views/NotFound.vue';
import { useAppControlsStore } from '@/stores/useAppControlsStore';
import type { RouteLocationNormalized } from 'vue-router';

const auth = (to: RouteLocationNormalized) => {
  const store = useAppControlsStore();
  if (!store.isAuthChecked) {
    return { name: 'home', query: { redirect: to.fullPath } };
  }

  if (!store.isLoggedIn) {
    return { name: 'signin' };
  }
};

const notAuth = (to: RouteLocationNormalized) => {
  const store = useAppControlsStore();
  if (!store.isAuthChecked) {
    return { name: 'home', query: { redirect: to.fullPath } };
  }

  if (store.isLoggedIn) {
    store.setMessage('Вы уже авторизованы.');
    return { name: 'home' };
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: MainView },
    { path: '/signup', name: 'signup', component: RegisterView, beforeEnter: notAuth },
    { path: '/signin', name: 'signin', component: LoginView, beforeEnter: notAuth },
    { path: '/profile', name: 'profile', component: ProfileView, beforeEnter: auth },
    { path: '/movies', name: 'movies', component: MoviesView, beforeEnter: auth },
    { path: '/saved-movies', name: 'saved-movies', component: SavedMoviewView, beforeEnter: auth },
    { path: '/:catchAll(.*)*', component: NotFound },
  ],
});

export default router;
