import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register/Register.vue')
  },
  {
    path: '/Home', 
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/:catchAll(.*)', //正则 所有界面
    name: '404Page',
    component: () => import('../views/404/404Page.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
