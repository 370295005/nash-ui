<!-- 折叠面板 -->
<!-- https://vant-contrib.gitee.io/vant/#/zh-CN/collapse -->
<template>
  <div class="nash-collapse">
    <slot></slot>
  </div>
</template>
<script>
import CollapseItem from './collapse-item.vue'
export default {
  model: {
    prop: 'activeName',
    event: 'toggle'
  },
  components: {
    CollapseItem
  },
  props: {
    // 是否为手风琴模式
    accordion: Boolean
  }
}
</script>
