import { Button, Loading, Picker, Popup, Toast } from './modules'
const components = [Button, Loading, Picker, Popup, Toast]
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
components.forEach(e => {
  const name = e.name.slice(0, 1).toUpperCase() + e.name.slice(1, e.name.length)
  NashUI[name] = e
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
console.log(NashUI)
export default NashUI
