import Vue from 'vue'
import App from './app.vue'
import router from './router'
import NashUI from '../lib/index.js'
import ContentContainer from './components/ContentContainer'
import './assets/css/reset.css'
import '../lib/index.min.css'
Vue.component('ContentContainer', ContentContainer)
Vue.use(NashUI)
const vm = new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
