import {
  Toast,
  Button,
  Loading,
  Popup,
  Picker,
  Mask,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Switch,
  Tip,
  CascadePicker,
  ButtonGroup,
  DateTimePicker,
  Collapse,
  NoticeBar
} from './modules'
import '@/assets/css/reset.css'
const componentsList = [
  Toast,
  Button,
  Loading,
  Popup,
  Picker,
  Mask,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Switch,
  Tip,
  CascadePicker,
  ButtonGroup,
  DateTimePicker,
  Collapse,
  NoticeBar
]

const install = (Vue) => {
  componentsList.forEach((components) => {
    components.install(Vue)
  })
}

const NashUI = {
  version: require('../package.json').version,
  install
}

componentsList.forEach((components) => {
  let name = components.name.replace(/nash-/g, '')
  name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
  NashUI[name] = components
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default NashUI
