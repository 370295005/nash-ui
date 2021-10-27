import Index from '../pages/index.vue'
import Button from '../pages/button.vue'
import Popup from '../pages/popup.vue'
import Toast from '../pages/toast.vue'
import Loading from '../pages/loading.vue'
import Picker from '../pages/picker.vue'
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
    component: Button,
    meta: {
      title: 'Button'
    }
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup,
    meta: {
      title: 'Popup'
    }
  },
  {
    path: '/toast',
    name: 'Toast',
    component: Toast,
    meta: {
      title: 'Toast'
    }
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading,
    meta: {
      title: 'Loading'
    }
  },
  {
    path: '/picker',
    name: 'Picker',
    component: Picker,
    meta: {
      title: 'Picker'
    }
  }
]
