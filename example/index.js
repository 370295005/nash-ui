import Vue from 'vue'
import App from './app.vue'
import router from './router'
import Toast from '../src/components/toast/index'
import Loading from '../src/components/loading/index'
import '@/assets/css/reset.styl'
Vue.use(Toast)
Vue.use(Loading)
const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
