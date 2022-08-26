import { createApp } from 'vue'
import '@/assets/style/reset.less'
import router from './router/index'
import App from './App.vue'

createApp(App).use(router).mount('#app')
