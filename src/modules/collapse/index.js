import Collapse from '@/componets/collapse'
import CollapseItem from '@/components/collapse/collapse-item'

Collapse.install = (Vue) => {
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
}

export default Collapse
