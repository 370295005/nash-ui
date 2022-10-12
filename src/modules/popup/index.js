import NashPopup from '@/components/popup'
import NashMask from '@/components/mask'

NashPopup.install = (Vue) => {
  Vue.component(NashMask.name, NashMask)
  Vue.component(NashPopup.name, NashPopup)
}

export default NashPopup
