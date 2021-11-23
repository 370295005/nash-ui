import Loading from '../../components/loading/index.vue'

Loading.install = (Vue, options) => {
  Vue.component(Loading.name, Loading)
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

export default Loading
