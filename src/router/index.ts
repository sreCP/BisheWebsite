import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/api-manage',
    component: () => import('../views/ApiManagePage.vue')
  },
  {
    path: '/api-monitoring',
    component: () => import('../views/ApiMonitoringPage.vue')
  },
  {
    path: '/api-approval',
    component: () => import('../views/ApiApprovalPage.vue')
  },
  {
    path: '/platform-users',
    component: () => import('../views/PlatformUsersPage.vue')
  },
  {
    path: '/outsiders',
    component: () => import('../views/OutsidersPage.vue')
  },
  {
    path: '/settings',
    component: () => import('../views/SettingsPage.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
