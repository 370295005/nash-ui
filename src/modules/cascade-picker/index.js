import NashCascadePicker from '@/components/cascade-picker'
import NashPicker from '@/components/picker'
NashCascadePicker.install = (Vue) => {
  Vue.component(NashPicker.name, NashPicker)
  Vue.component(NashCascadePicker.name, NashCascadePicker)
}

export default NashCascadePicker
