const routes = [
  {
    path: '/',
    component: () => import('@/pages/home.vue')
  },
  {
    path: '/button',
    component: () => import('@/components/button/index.vue'),
    meta: {
      title: 'button'
    }
  }
]

export default routes
