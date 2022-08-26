import type { RouteRecord } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/button',
    component: () => import('@/pages/button.vue'),
    meta: {
      title: 'button'
    }
  }
]

export default routes
