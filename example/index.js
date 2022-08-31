import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './assets/css/reset.css'
const vm = new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
