import Toast from '../../components/toast/index.vue'

Toast.install = (Vue, options) => {
  Vue.component(Toast.name, Toast)
  const NashToast = Vue.extend(Toast)
  const profile = new NashToast({
    el: document.createElement('div')
  })
  document.body.appendChild(profile.$el)
  if (options) {
    if (options.text) profile.text = options.text
    if (options.delay) profile.delay = options.delay
  }
  const toastMethod = ({ text, delay }) => {
    profile.visible = true
    profile.text = text
    profile.delay = delay
  }
  Vue.prototype.$toast = toastMethod
}

export default Toast
