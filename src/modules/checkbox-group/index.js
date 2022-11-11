import NashCheckbox from '@/components/checkbox'
import NashCheckboxGroup from '@/components/checkbox-group'

NashCheckboxGroup.install = (Vue) => {
  Vue.component(NashCheckbox.name, NashCheckbox)
  Vue.component(NashCheckboxGroup.name, NashCheckboxGroup)
}

export default NashCheckboxGroup
