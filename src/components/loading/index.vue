<template>
  <div class="nash-loading" v-show="isVisible" :class="text === '' ? 'center' : ''">
    <div class="loading" :class="type">
      <div class="spinners" v-for="item in spinners" :key="item" v-show="type === 'spinner'"></div>
      <svg width="30" height="30" viewBox="0 0 30 30" class="dynamic-container" v-show="type === 'dynamic'">
        <circle cx="15" cy="15" r="14" fill="none" class="dynamic"></circle>
      </svg>
    </div>
    <div class="loading-text">{{ text }}</div>
  </div>
</template>
<script>
import visibleMixins from '../../mixins/visible'
const COMPONENTS_NAME = 'nash-loading'
export default {
  name: COMPONENTS_NAME,
  mixins: [visibleMixins],
  props: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '加载中'
    }
  },
  data() {
    return {
      spinners: 5
    }
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/style.styl';
@import '../../assets/css/animate.styl';
.nash-loading
  flex-box(space-evenly, center, column)
  min-width 150px
  min-height 150px
  position fixed
  top 50%
  left 50%
  transform translate(-50%, -50%)
  background-color $mask-bg
  opacity 0.7
  border-radius 10px
  .loading
    width 30px
    height 30px
  .circle
    border-radius 50%
    border 3px solid $loading-border
    border-top 3px solid $normal-gray
    animation rotate360 1s infinite linear
  .spinner
    flex-box(space-evenly, flex-end, row)
    width 32px
    height 32px
    .spinners
      width 3px
      height 20px
      background-color $normal-white
      animation toggleHeight 0.7s infinite ease-in-out
      for i in 1 .. 6
        &:nth-child({i})
          animation-delay: ((i - 1) / 6)s
  .dynamic-container
    animation rotate360 2s infinite linear
    .dynamic
      stroke #f3f3f3
      stroke-width 2
      animation stroke 2s infinite linear
      @keyframes stroke
        0%
          stroke-dasharray 5, 89
          stroke-dashoffset 0
        50%
          stroke-dasharray 75, 89
          stroke-dashoffset -30px
        100%
          stroke-dasharray 10, 80
          stroke-dashoffset -90px
  .loading-text
    color $normal-white
    font-size 14px
.center
  justify-content center
@keyframes toggleHeight
  0%
    height 20px
  50%
    height 10px
  100%
    height 20px
</style>
