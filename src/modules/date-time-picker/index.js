import NashDateTimePicker from '@/components/date-time-picker'
import NashCascadePicker from '@/components/cascade-picker'
import NashPicker from '@/components/picker'
NashDateTimePicker.install = (Vue) => {
  Vue.component(NashPicker.name, NashPicker)
  Vue.component(NashCascadePicker.name, NashCascadePicker)
  Vue.component(NashDateTimePicker.name, NashDateTimePicker)
}

export default NashDateTimePicker
