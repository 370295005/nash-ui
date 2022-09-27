import NashButton from '@/components/button'
import NashButtonGroup from '@/components/button-group'

NashButtonGroup.install = (Vue) => {
  Vue.component(NashButton.name, NashButton)
  Vue.component(NashButtonGroup.name, NashButtonGroup)
}

export default NashButtonGroup
