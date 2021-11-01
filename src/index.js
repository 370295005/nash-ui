import { Button, Loading, Picker, Popup, Toast } from './modules'
const components = {
  Button,
  Loading,
  Picker,
  Popup,
  Toast
}
const install = Vue => {
  components.forEach(e => {
    e.install(Vue)
  })
}
// 全局引入
const NashUI = {
  version: require('../package.json').version,
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
export default NashUI
