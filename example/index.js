import Vue from 'vue'
import App from './app.vue'
import router from './router'
import '@/assets/css/reset.styl'
import NashUI from '../lib'
import '../lib/style.css'
console.log(NashUI)
Vue.use(NashUI)
const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
