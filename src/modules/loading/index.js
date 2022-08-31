import NashLoading from '@/components/loading/index.vue'

NashLoading.install = (Vue, options) => {
  Vue.component(NashLoading.name, NashLoading)
  const Loading = Vue.extend(NashLoading)
  const profile = new Loading({
    el: document.createElement('div')
  })
  document.body.appendChild(profile.$el)
  if (options) {
    const { text, type } = options
    profile.text = text
    profile.type = type
  }
  const method = {
    open({ type, text }) {
      profile.visible = true
      profile.type = type || 'circle'
      profile.text = text || '加载中'
    },
    close() {
      profile.visible = false
    }
  }

  Vue.prototype.$loading = method
}

export default NashLoading
