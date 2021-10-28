<template>
  <div class="nash-picker">
    <div class="nash-picker-container">
      <div class="wheel-top"></div>
      <div class="wheel-indicator"></div>
      <div class="wheel-bottom"></div>
      <div class="wheel-wrapper" ref="wheelWrapper">
        <div class="wheel" v-for="(item, index) in pickerList" :key="Math.random()">
          <div class="wheel-scroll">
            <div class="wheel-item" v-for="data in item" :key="Math.random()">{{ data }}</div>
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
  model: {
    prop: 'pickerValue',
    event: 'scroll'
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    pickerList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      number: 100,
      scroll: null,
      wheels: [],
      value: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initWheel()
    })
  },
  methods: {
    initWheel() {
      if (!this.scroll) {
        const wrapper = this.$refs.wheelWrapper.children
        const len = wrapper.length
        for (let i = 0; i < len; i++) {
          this.wheels[i] = new BScroll(wrapper[i], {
            wheel: {
              selectedIndex: 0,
              wheelWrapperClass: 'wheel-scroll',
              wheelItemClass: 'wheel-item',
              wheelDisabledItemClass: 'wheel-disabled-item'
            },
            useTransition: false,
            probeType: 3
          })
          this.wheels[i].on('wheelIndexChanged', (index) => {
            this.value[i] = this.pickerList[i][index]
            this.$emit('scroll', this.value)
          })
        }
      }
    }
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
        .wheel-scroll
          position relative
          top 80px
          .wheel-item
            height 40px
            line-height 40px
</style>
