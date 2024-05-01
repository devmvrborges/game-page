import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import TelaInicial from './components/TelaInicial.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TelaInicial },
    { path: '/FirstPage', component: FirstPage },
    { path: '/SecondPage', component: SecondPage }
  ]
});

export default router;
