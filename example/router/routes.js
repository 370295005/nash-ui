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
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import('../pages/dialog.vue'),
    meta: {
      title: 'Dialog'
    }
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../pages/input.vue'),
    meta: {
      title: 'Input'
    }
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../pages/checkbox.vue'),
    meta: {
      title: 'Checkbox'
    }
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../pages/switch.vue'),
    meta: {
      title: 'Switch'
    }
  },
  {
    path: '/tip',
    name: 'Tip',
    component: () => import('../pages/tip.vue'),
    meta: {
      title: 'Tip'
    }
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../pages/icon.vue'),
    meta: {
      title: 'Icon'
    }
  }
]
