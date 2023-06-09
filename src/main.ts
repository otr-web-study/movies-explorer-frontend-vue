import './assets/base.css';

import { createApp, h } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { provideGraphqlClient } from './graphql/graphql';

const app = createApp({
  setup() {
    provideGraphqlClient();
  },

  render: () => h(App),
});

app.use(createPinia());
app.use(router);

app.mount('#app');
