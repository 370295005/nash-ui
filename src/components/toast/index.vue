<template>
  <transition name="fade">
    <div class="nash-toast" v-show="isVisible">
      <nash-mask v-if="mask"></nash-mask>
      <div class="nash-toast-container">
        <div class="nash-toast-text">
          {{ text }}
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import NashMask from '@/components/mask'
import visibleMixins from '@/mixins/visible'
const COMPONENT_NAME = 'nash-toast'
export default {
  name: COMPONENT_NAME,
  mixins: [visibleMixins],
  components: {
    NashMask
  },
  props: {
    mask: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    dalay: {
      type: Number,
      default: 1000
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-toast {
  position: relative;
  .nash-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    z-index: @mask-zIndex;
    background-color: @mask-background-color;
  }
  .nash-toast-container {
    .flex-box(center,center);
    min-width: 150px;
    max-width: 200px;
    min-height: 32px;
    max-height: 64px;
    padding: 10px 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: justify;
    color: #ccc;
    z-index: @mask-content-zIndex;
    font-size: 14px;
    background-color: @mask-background-color;
    border-radius: 3px;
  }
}
</style>
