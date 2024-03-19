import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/h', 
    component:()=> import('../views/HomePage.vue')
  },
  { 
    path: '/api-manage', 
    component: ()=> import('../views/ApiManagePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
