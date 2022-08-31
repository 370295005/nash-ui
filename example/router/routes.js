import Index from '../pages/index.vue'
export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'Index'
    }
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../pages/button.vue'),
    meta: {
      title: 'Button'
    }
  }
]
