import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  document.title = to.meta.title as string || 'nash-ui'
})

export default router
