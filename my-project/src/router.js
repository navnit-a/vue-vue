// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import UserSignup from './components/Signup.vue';

const routes = [
  {
    path: '/signup',
    name: 'UserSignup',
    component: UserSignup,
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
