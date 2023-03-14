import TableLayout from 'element-plus/es/components/table/src/table-layout'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ViteVue3ElementPlusTS/',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/ViteVue3ElementPlusTS/register',
    name: 'Register',
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/ViteVue3ElementPlusTS/',
    component: Layout,
    redirect: '/ViteVue3ElementPlusTS/dashboard',
    children:[
      {
        path: '/ViteVue3ElementPlusTS/dashboard',
        component: () => import('@/views/dashboard/Index.vue'),
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'House'
        }
      }
    ]
  },
  {
    path: '/ViteVue3ElementPlusTS/setting',
    component: Layout,
    meta: {
      title: '系统设置',
      icon: 'Setting',
    },
    children: [
      {
        path: '/ViteVue3ElementPlusTS/rolesetting',
        component: () => import('@/views/setting/rolesetting.vue'),
        meta: {
          title: '角色设置',
          icon: 'UserFilled',
        },
      },
      {
        path: '/ViteVue3ElementPlusTS/pagesetting',
        component: () => import('@/views/setting/pagesetting.vue'),
        meta: {
          title: '站点设置',
          icon: 'Promotion',
        },
      },
    ]
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
