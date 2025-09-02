import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import Calculator from './components/Calculator.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;