import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ViteVue3ElementPlusTS/',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/ViteVue3ElementPlusTS/register',
    name: 'Register',
    component: () => import('../views/register/register.vue')
  },
  {
    path: '/ViteVue3ElementPlusTS/home', 
    name: 'Home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/ViteVue3ElementPlusTS/:catchAll(.*)', //正则 所有界面
    name: '404Page',
    component: () => import('../views/404/404Page.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
