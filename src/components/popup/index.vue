<template>
  <transition name="nash-popup-fade">
    <div class="nash-popup" v-show="isVisible">
      <div class="nash-popup-mask" @click="maskClick"></div>
      <transition :name="'nash-popup-' + direction">
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
import visibleMixins from '../../mixins/visible'
const COMPONENTS_NAME = 'nash-popup'
export default {
  name: COMPONENTS_NAME,
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
        this.$emit('toggle', false)
      }
    }
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/default.styl'
.nash-popup
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 100
  .nash-popup-mask
    width 100%
    height 100%
    position absolute
    top 0
    background-color $mask-bg
    opacity 0.4
    transition opacity 0.3s ease-in-out
  .nash-popup-container
    width auto
    height auto
    position absolute
    max-height 100%
    background-color #fff
  .container-position-top
    top 0
  .container-position-right
    right 0
  .container-position-left
    left 0
  .container-position-bottom
    bottom 0
</style>
