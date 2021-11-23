import { Button, Loading, Picker, Popup, Toast } from './modules'
const components = [Button, Loading, Picker, Popup, Toast]
function install(Vue) {
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
  let name = e.name.replace(/nash-/g, '')
  name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
  NashUI[name] = e
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}
export default NashUI
