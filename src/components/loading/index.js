import Loading from './index.vue'
export default {
  install: (Vue, options) => {
    const NashLoading = Vue.extend(Loading)
    const profile = new NashLoading({
      el: document.createElement('div')
    })
    document.body.appendChild(profile.$el)
    if (options) {
      const { text, type } = options
      profile.text = text
      profile.type = type
    }
    const loadingMethod = {
      open({ type, text }) {
        profile.visible = true
        profile.type = type || 'circle'
        profile.text = text
      },
      close() {
        profile.visible = false
      }
    }
    Vue.prototype.$loading = loadingMethod
  }
}
