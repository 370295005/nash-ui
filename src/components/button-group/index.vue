<template>
  <div class="nash-button-group">
    <slot></slot>
  </div>
</template>
<script>
import NashButton from '@/components/button'
const COMPONENT_NAME = 'nash-button-group'
export default {
  name: COMPONENT_NAME,
  components: {
    NashButton
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/color.less';
.nash-button-group {
  > .nash-button {
    margin: 0 -1px;
    display: inline-block;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-color: rgba(255, 255, 255, 0.5);
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:last-child {
      margin-left: -1px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-color: rgba(255, 255, 255, 0.5);
    }
    // TODO 按钮组边框有点问题
    &:not(:last-child) {
      margin-right: -1px;
    }
  }
}
</style>
