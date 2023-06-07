import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ProfileView from '@/views/ProfileView.vue';
import MoviesView from '@/views/MoviesView.vue';
import SavedMoviewView from '@/views/SavedMoviesView.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: MainView },
    { path: '/signup', name: 'signup', component: RegisterView },
    { path: '/signin', name: 'signin', component: LoginView },
    { path: '/profile', name: 'profile', component: ProfileView },
    { path: '/movies', name: 'movies', component: MoviesView },
    { path: '/saved-movies', name: 'saved-movies', component: SavedMoviewView },
    { path: '/:catchAll(.*)*', component: NotFound },
  ],
});

export default router;
