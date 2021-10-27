import Loading from './index.vue'
export default {
  install: (Vue, options) => {
    const NashLoading = Vue.extend(Loading)
    const profile = new NashLoading({
      el: document.createElement('div')
    })
    document.body.appendChild(profile.$el)
    if (options) {
      if (options.text) profile.type = options.type
    }
    const loadingMethod = {
      open({ type }) {
        profile.visible = true
        profile.type = type || 'circle'
      },
      close() {
        profile.visible = false
      }
    }
    Vue.prototype.$loading = loadingMethod
  }
}
