import NashTip from '@/components/tip'

NashTip.install = (Vue) => {
  Vue.component(NashTip.name, NashTip)
}

export default NashTip
