<template>
  <transition name="fade">
    <div class="nash-popup" v-show="isVisible">
      <div class="nash-popup-mask" @click="maskClick"></div>
      <transition :name="'popup-' + direction">
        <div class="nash-popup-container" :class="'container-position-' + direction" v-show="isVisible">
          <div class="nash-popup-content">
            <slot name="content"></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
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
      if (this.maskCloseable) {
        this.hide()
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/animate.less';
@import '@/assets/css/style.less';
@import '@/assets/css/color.less';
.nash-popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  .nash-popup-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
    background-color: @mask-background-color;
  }
  .nash-popup-container {
    width: auto;
    height: auto;
    position: absolute;
    max-height: 100%;
    background-color: @default;
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
