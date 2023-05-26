import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ProfileViewVue from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: LoginView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileViewVue,
    },
  ],
});

export default router;
