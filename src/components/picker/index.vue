<template>
  <div class="nash-picker">
    <div class="nash-picker-container">
      <div class="wheel-top"></div>
      <div class="wheel-indicator"></div>
      <div class="wheel-bottom"></div>
      <div class="wheel-wrapper" ref="wheelWrapper">
        <div class="wheel">
          <div class="wheel-scroll">
            <div class="wheel-item" v-for="item in number" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Wheel from '@better-scroll/wheel'
BScroll.use(Wheel)
export default {
  data() {
    return {
      number: 100
    }
  },
  mounted() {
    this.$nextTick(() => {
      const wrapper = this.$refs.wheelWrapper.children[0]
      const scroll = new BScroll(wrapper, {
        wheel: true
      })
      scroll.refresh()
    })
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/default.styl'
.nash-picker
  width 100%
  overflow hidden
  .nash-picker-container
    width 100%
    position relative
    overflow hidden
    .wheel-wrapper
      flex-box(space-between, center)
      width 100%
      overflow hidden
      .wheel
        width 100%
        height 200px
        text-align center
        overflow hidden
        .wheel-item
          height 20px
</style>
