import NashToast from '@/components/toast'

NashToast.install = (Vue, options) => {
  Vue.component(NashToast.name, NashToast)
  const Toast = Vue.extend(NashToast)
  const profile = new Toast({
    el: document.createElement('div')
  })
  document.body.appendChild(profile.$el)
  if (options) {
    profile.text = options?.text || ''
    profile.delay = options?.delay || 1000
    profile.mask = options?.mask || false
  }
  const method = ({ text, delay, mask }) => {
    profile.visible = true
    profile.text = text || ''
    profile.delay = delay || 1000
    profile.mask = mask || false
    setTimeout(() => {
      profile.visible = false
    }, delay)
  }
  Vue.prototype.$toast = method
}

export default NashToast
