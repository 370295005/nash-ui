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
@import '@/assets/css/style.less';
.nash-button-group {
  .flex-box(flex-start,center);
  > .nash-button {
    display: inline-block;
    &:first-child {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-color: rgba(255, 255, 255, 0.5);
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-left: none;
      border-right: none;
    }
    &:last-child {
      margin-left: -1px;
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
