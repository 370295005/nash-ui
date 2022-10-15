<template>
  <div class="nash-collapse-item" @click="toggleCollapseItem">
    <div class="nash-collapse-item-title">{{ title }}</div>
    <div class="nash-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
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
<style lang="less" scoped></style>
