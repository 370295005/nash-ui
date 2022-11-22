import NashToast from '@/components/toast'
import NashMask from '@/components/mask'

NashToast.install = (Vue, options) => {
  Vue.component(NashToast.name, NashToast)
  Vue.component(NashMask.name, NashMask)
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
  const method = (option) => {
    profile.visible = true
    if (typeof option === 'string') {
      profile.text = option
      profile.delay = 1000
      profile.mask = false
      setTimeout(() => {
        profile.visible = false
      }, 1000)
    } else {
      const { text, delay, mask } = option
      profile.text = text || ''
      profile.delay = delay || 1000
      profile.mask = mask || false
      setTimeout(() => {
        profile.visible = false
      }, delay || 1000)
    }
    return profile
  }
  Vue.prototype.$toast = method
}

export default NashToast
