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
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../pages/toast.vue'),
    meta: {
      title: 'Toast'
    }
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('../pages/loading.vue'),
    meta: {
      title: 'Loading'
    }
  },
  {
    path: '/popup',
    name: 'Popup',
    component: () => import('../pages/popup.vue'),
    meta: {
      title: 'Popup'
    }
  },
  {
    path: '/picker',
    name: 'Picker',
    component: () => import('../pages/picker.vue'),
    meta: {
      title: 'Picker'
    }
  }
]
