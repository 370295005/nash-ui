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
@import '@/assets/css/animate.less';
.nash-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  opacity: 0.4;
  z-index: @mask-zIndex;
  transition: opacity 0.3s ease-in-out;
  background-color: @mask-background-color;
}
</style>
