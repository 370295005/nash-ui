<template>
  <div class="nash-collapse-item" @click="toggleCollapseItem">
    <div class="nash-collapse-item-header">
      <div class="nash-collapse-item-title">{{ title }}</div>
      <div class="nash-collapse-item-icon">
        <i class="nashic-select"></i>
      </div>
    </div>
    <div class="nash-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'nash-collapse-item'
export default {
  name: COMPONENT_NAME,
  props: {
    title: String,
    name: [Number, String],
    disabled: Boolean
  },
  methods: {
    // 切换展开
    toggleCollapseItem() {}
  }
}
</script>
<style lang="less" scoped>
.nash-collapse-item {
}
</style>
