<template>
  <div class="nash-mask" @click="maskClick"></div>
</template>
<script>
const COMPONENT_NAME = 'nash-mask'
export default {
  name: COMPONENT_NAME,
  props: {
    maskCloseable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    maskClick() {
      this.maskCloseable && this.$emit('click')
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/color.less';
@import '@/assets/css/zIndex.less';
.nash-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: @mask-zIndex;
  transition: opacity 0.3s ease-in-out;
  background-color: @mask-background-color;
}
</style>
