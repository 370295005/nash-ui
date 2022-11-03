<!-- 折叠面板 -->
<!-- https://vant-contrib.gitee.io/vant/#/zh-CN/collapse -->
<template>
  <div class="nash-collapse">
    <slot></slot>
  </div>
</template>
<script>
import CollapseItem from './collapse-item.vue'
const COMPONENT_NAME = 'nash-collapse'
export default {
  name: COMPONENT_NAME,
  props: {
    // 是否为手风琴模式
    accordion: Boolean,
    // activeName
    value: [String, Number, Array]
  },
  components: {
    CollapseItem
  },
  watch: {
    value: {
      handler: function (nv) {},
      deep: true
    }
  },
  methods: {
    toggleCollapse(name, open) {
      if (this.accordion) {
        const value = open ? name : ''
        this.$emit('input', value)
      } else {
        const value = open ? this.value.concat(name) : this.value.filter((activeName) => activeName !== name)
        this.$emit('input', value)
      }
    }
  }
}
</script>
