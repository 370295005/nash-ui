import NashPicker from '@/components/picker'
import NashPopup from '@/components/popup'
NashPicker.install = (Vue) => {
  Vue.component(NashPopup.name, NashPopup)
  Vue.component(NashPicker.name, NashPicker)
}

export default NashPicker
