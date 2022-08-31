import Vue from 'vue'
import App from './app.vue'
import router from './router'
import NashUI from '@/index.js'
import './assets/css/reset.css'

Vue.use(NashUI)
console.log(NashUI)
const vm = new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
