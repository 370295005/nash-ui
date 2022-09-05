<template>
  <transition name="fade">
    <div class="nash-popup" v-show="isVisible">
      <nash-mask @click="maskClick"></nash-mask>
      <transition :name="'popup-' + direction">
        <div class="nash-popup-container" :class="'container-position-' + direction" v-show="isVisible">
          <div class="nash-popup-content">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import NashMask from '@/components/mask'
import visibleMixins from '@/mixins/visible'
const COMPONENT_NAME = 'nash-popup'
export default {
  name: COMPONENT_NAME,
  mixins: [visibleMixins],
  props: {
    direction: {
      type: String,
      default: 'top'
    },
    maskCloseable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    maskClick() {
      this.maskCloseable && this.hide()
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .nash-popup-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.4;
    z-index: @mask-zIndex;
    transition: opacity 0.3s ease-in-out;
    background-color: @mask-background-color;
  }
  .nash-popup-container {
    width: auto;
    height: auto;
    position: absolute;
    max-height: 100%;
    background-color: @default;
    z-index: @mask-content-zIndex;
  }
  .container-position-top {
    top: 0;
  }
  .container-position-right {
    right: 0;
  }
  .container-position-left {
    left: 0;
  }
  .container-position-bottom {
    bottom: 0;
  }
}
</style>
