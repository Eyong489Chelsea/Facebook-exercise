import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogIn.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LogIn,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
