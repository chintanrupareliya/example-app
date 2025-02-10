import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../Pages/Welcome.vue';
import About from '../Pages/About.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // ...add other routes here...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
