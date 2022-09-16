<template>
  <nash-popup :direction="direction" v-model="isVisible">
    <div class="nash-picker">
      <div class="nash-picker-toolbar">
        <div class="nash-picker-cancel" @click="cancel">{{ cancelText }}</div>
        <div class="nash-picker-subtitle">{{ subTitle }}</div>
        <div class="nash-picker-confirm" @click="confirm">{{ confirmText }}</div>
      </div>
      <div class="nash-picker-container">
        <div class="nash-wheel-top"></div>
        <div class="nash-wheel-indicator"></div>
        <div class="nash-wheel-bottom"></div>
        <div class="nash-wheel-wrapper" ref="wheelWrapper">
          <div class="nash-wheel" v-for="(item, index) in pickerList" :key="Math.random() + index">
            <div class="nash-wheel-scroll">
              <div class="nash-wheel-item" v-for="(data, index) in item" :key="Math.random() + index">
                {{ data.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nash-popup>
</template>
<script>
import NashPopup from '../popup/index.vue'
import BScroll from 'better-scroll'
import Wheel from '@better-scroll/wheel'
import visibleMixins from '@/mixins/visible'
import { EVENT_CONFIRM, EVENT_CHANGE, EVENT_CANCEL } from '@/lib/constanceEvent'
BScroll.use(Wheel)
const EVENT_INDEXCHANGE = 'indexChange'
const COMPONENTS_NAME = 'nash-picker'
let pickedValue = []
export default {
  name: COMPONENTS_NAME,
  mixins: [visibleMixins],
  components: {
    NashPopup
  },
  props: {
    pickerList: {
      type: Array,
      default: () => {
        return []
      }
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    subTitle: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'bottom'
    },
    selectedIndex: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    isVisible(nv) {
      if (nv) {
        // if (this.wheels.length) {
        //   console.log(this.wheels)
        //   this.enableWheel()
        //   this.refresh()
        // } else {
        setTimeout(() => {
          this.initWheel()
        }, 200)
        // }
      } else {
        this.hide()
      }
    }
  },
  data() {
    return {
      // wheel实例
      wheels: [],
      // 记录当前选中的index
      currentIndex: this.selectedIndex
    }
  },
  beforeDestroy() {
    this.destoryWheel()
  },
  methods: {
    initWheel() {
      this.$nextTick(() => {
        const wrapper = this.$refs.wheelWrapper.children
        const len = wrapper.length
        const pickerLength = this.pickerList.length
        for (let i = 0; i < pickerLength; i++) {
          const index = this.selectedIndex[i]
          const value =
            index > this.pickerList[i].length - 1 ? this.pickerList[i][0].value : this.pickerList[i][index].value
          pickedValue[i] = value
        }
        for (let i = 0; i < len; i++) {
          const length = this.pickerList[i].length
          this.wheels[i] = new BScroll(wrapper[i], {
            wheel: {
              selectedIndex: this.selectedIndex[i] > length - 1 ? 0 : this.selectedIndex[i],
              wheelWrapperClass: 'nash-wheel-scroll',
              wheelItemClass: 'nash-wheel-item',
              wheelDisabledItemClass: 'nash-wheel-disabled-item'
            },
            useTransition: true,
            probeType: 3
          })
          this.wheels[i].on('wheelIndexChanged', (index) => {
            this.currentIndex[i] = index || 0
            pickedValue[i] = this.pickerList[i][index].value || this.pickerList[0][0].value
            // emit当前选中项的index下次打开picker能保持在这个位置
            this.$emit(EVENT_INDEXCHANGE, this.currentIndex)
            this.$emit(EVENT_CHANGE, pickedValue)
          })
        }
      })
    },
    destoryWheel() {
      this.wheels &&
        this.wheels.forEach((wheel) => {
          wheel.destroy()
        })
      this.wheels = []
    },
    // createWheel(wrapper, index) {
    //   const length = this.pickerList[index].length
    //   if (!this.wheels[index]) {
    //     const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
    //       wheel: {
    //         selectedIndex: this._indexes[i] || 0,
    //         wheelWrapperClass: 'nash-wheel-scroll',
    //         wheelItemClass: 'nash-wheel-item'
    //       },
    //       swipeTime: this.swipeTime,
    //       observeDOM: false,
    //       useTransition: true
    //     })
    //     wheel.on('wheelIndexChanged', (i) => {
    //       this.currentIndex[i] = index || 0
    //       this.$emit(EVENT_INDEXCHANGE, this.currentIndex)
    //     })
    //   } else {
    //     this.wheels[index].refresh()
    //   }
    //   return this.wheels[index]
    // },
    // col列的index,index滚动到该列指定的index
    scrollTo(col, index) {
      const wheel = this.wheels[index]
      this.currentIndex[col] = index
      this.$emit(EVENT_INDEXCHANGE, this.currentIndex)
      wheel.wheelTo(index)
    },
    enableWheel() {
      for (let i = 0; i < this.pickerList.length; i++) {
        this.wheels[i].enable()
        this.wheels[i].wheelTo(this.currentIndex[i])
      }
    },
    disableWheel() {
      for (let i = 0; i < this.pickerList.length; i++) {
        this.wheels[i].disable()
      }
    },
    refresh() {
      this.$nextTick(() => {
        this.wheels.forEach((wheel) => {
          wheel.refresh()
        })
      })
    },
    cancel() {
      this.$emit(EVENT_CANCEL)
      pickedValue = []
      this.hide()
    },
    confirm() {
      const wheels = this.wheels || []
      this.$emit(EVENT_CONFIRM, pickedValue)
      pickedValue = []
      this.hide()
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/default.less';

.nash-picker {
  width: 100vw;
  overflow: hidden;
  background-color: @default;

  .nash-picker-toolbar {
    .flex-box(space-between, center);
    width: 100%;
    height: 44px;
    padding: 0 16px;
    position: relative;
    font-size: 14px;
    color: @info;
    line-height: 44px;

    &::before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0px;
      bottom: 0;
      background-color: @default-border;
    }

    .nash-picker-cancel {
      color: @info;
    }

    .nash-picker-confirm {
      color: @primary;
    }

    .nash-picker-subtitle {
      color: @black;
      font-size: 16px;
    }
  }

  .nash-picker-container {
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: @default;

    .nash-wheel-top,
    .nash-wheel-bottom {
      width: 100%;
      height: 80px;
      position: absolute;
      pointer-events: none;
      z-index: 10;
      transform: translateZ(0);
      background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
    }

    .nash-wheel-top {
      top: 0;
    }

    .nash-wheel-bottom {
      bottom: 0;
    }

    .nash-wheel-indicator {
      width: 100%;
      height: 40px;
      position: absolute;
      top: 80px;
      background-color: rgba(131, 174, 255, 0.1);
    }

    .nash-wheel-wrapper {
      .flex-box(space-between, center);
      width: 100%;
      overflow: hidden;

      .nash-wheel {
        width: 100%;
        height: 200px;
        text-align: center;
        overflow: hidden;

        .nash-wheel-scroll {
          position: relative;
          top: 80px;

          .nash-wheel-item {
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
}
</style>
