import Toast from './index.vue'
export default {
  install: (Vue, options) => {
    const toast = Vue.extend(Toast)
    const profile = new toast({
      el: document.createElement('div')
    })
    document.body.appendChild(profile.$el)
    if (options) {
      if (options.text) profile.text = options.text
      if (options.delay) profile.delay = options.delay
    }
    const toastMethod = {
      open({ text, delay }) {
        profile.isVisible = true
        profile.text = text || ''
        profile.delay = delay || 1000
      },
      close() {
        profile.isVisible = false
      }
    }
    Vue.prototype.$toast = toastMethod
  }
}
