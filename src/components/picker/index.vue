<template>
  <nash-popup :direction="direction" v-model="isVisible">
    <div class="nash-picker">
      <div class="nash-picker-toolbar">
        <div class="nash-picker-cancel" @click="cancel">{{ cancelText }}</div>
        <div class="nash-picker-title">{{ title }}</div>
        <div class="nash-picker-confirm" @click="confirm">{{ confirmText }}</div>
      </div>
      <div class="nash-picker-container">
        <div class="nash-wheel-top"></div>
        <div class="nash-wheel-indicator"></div>
        <div class="nash-wheel-bottom"></div>
        <div class="nash-wheel-wrapper" ref="wheelWrapper">
          <div class="nash-wheel" v-for="(item, index) in pickerData" :key="index">
            <div class="nash-wheel-scroll">
              <div class="nash-wheel-item" v-for="(data, index) in item" :key="index">
                {{ data.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nash-popup>
</template>

<script>
import BScroll from 'better-scroll'
import Wheel from '@better-scroll/wheel'
import NashPopup from '@/components/popup/index'
import visibleMixins from '@/mixins/visible'
import { EVENT_CONFIRM, EVENT_CHANGE, EVENT_CANCEL } from '@/lib/constanceEvent'
BScroll.use(Wheel)
const COMPONENTS_NAME = 'nash-picker'
export default {
  name: COMPONENTS_NAME,
  mixins: [visibleMixins],
  components: { NashPopup },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    direction: {
      type: String,
      default: 'bottom'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    title: {
      type: String,
      default: ''
    },
    // 滑动动画时间
    swipeTime: {
      type: Number,
      default: 2000
    },
    // 初始化时每列选中的index
    selectedIndexList: {
      type: Array,
      default: () => []
    },
    // 自动保存滑动的位置
    autoSaveIndex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // wheel实例
      wheels: [],
      // 当前选中的索引数组
      currentIndexList: [],
      // 传进来的数据
      pickerData: this.data.slice()
    }
  },
  watch: {
    isVisible(nv) {
      nv ? this.initWheel() : this.hide()
    },
    data(nv) {
      if (nv) {
        this.pickerData = nv.slice()
      }
    }
  },
  beforeDestroy() {
    this.destroyWheels()
  },
  methods: {
    initWheel() {
      const length = this.pickerData.length
      if (!this.wheels.length) {
        this.$nextTick(() => {
          const wheelWrapper = this.$refs.wheelWrapper
          for (let i = 0; i < length; i++) {
            // props中的索引
            const index = this.selectedIndexList[i] || 0
            // 实际最大索引
            const realMaxIndex = this.pickerData[i].length - 1
            this.createWheel(wheelWrapper, i)
            // 如果props的索引超出长度则滑动至最后一个
            const selectedIndex = index >= realMaxIndex ? realMaxIndex : index
            this.$set(this.currentIndexList, i, selectedIndex)
            this.wheels[i].wheelTo(selectedIndex)
          }
        })
      } else {
        for (let i = 0; i < length; i++) {
          this.wheels[i].wheelTo(this.autoSaveIndex ? this.currentIndexList[i] : this.selectedIndexList[i])
        }
      }
    },
    // 初始化单个wheel
    createWheel(wrapper, index) {
      if (!this.wheels[index]) {
        const wheel = (this.wheels[index] = new BScroll(wrapper.children[index], {
          wheel: {
            wheelWrapperClass: 'nash-wheel-scroll',
            wheelItemClass: 'nash-wheel-item'
          },
          swipeTime: this.swipeTime,
          observeDOM: false,
          useTransition: true,
          probeType: 3
        }))
        wheel.wheelTo(this.selectedIndexList[index])
        wheel.on('scrollEnd', () => {
          const selectedIndex = wheel.getSelectedIndex()
          // 滑动结束时触发，返回列索引，当前索引
          this.$emit(EVENT_CHANGE, index, selectedIndex)
        })
        // 滑动时保存索引
        wheel.on('wheelIndexChanged', (currIndex) => {
          this.currentIndexList[index] = currIndex
        })
      } else {
        this.wheels[index].refresh()
        this.wheels[index].wheelTo(this.autoSaveIndex ? this.currentIndexList[index] : this.selectedIndexList[index])
      }
      return this.wheels[index]
    },
    // 销毁所有wheel
    destroyWheels() {
      const wheels = this.wheels
      wheels.forEach((wheel) => {
        wheel.destroy()
      })
      this.wheels = []
    },
    // 刷新wheel
    refreshWheels() {
      const wheels = this.wheels
      wheels.forEach((wheel) => {
        wheel.refresh()
      })
    },
    // 滚动到指定位置,colIndex列的索引,index索引
    wheelTo(colIndex, index) {
      const wheel = this.wheels[colIndex]
      wheel.wheelTo(index)
    },
    // 重新设置数据
    setWheelData(data, selectedIndexList) {
      this.currentIndexList = selectedIndexList ? [...selectedIndexList] : []
      const wrapper = this.$refs.wheelWrapper
      this.pickerData = data.slice()
      this.$nextTick(() => {
        this.pickerData.forEach((item, index) => {
          this.createWheel(wrapper, index)
          this.wheels[index].wheelTo(this.currentIndexList[index] || 0)
        })
        this.destroyExtraWheels()
      })
    },
    // 销毁多余的wheel
    destroyExtraWheels() {
      const length = this.pickerData.length
      if (this.wheels.length > length) {
        const extraWheels = this.wheels.splice(length)
        extraWheels.forEach((wheel) => {
          wheel.destroy()
        })
      }
    },
    // 重新装填所有列
    refill(data) {
      const res = []
      if (data.length) {
        return res
      }
      data.forEach((item, index) => {
        res[index] = this.refillColumn(index, item)
      })
      return res
    },
    // 重新装填列
    refillColumn(index, data) {
      const wrapper = this.$refs.wheelWrapper
      const scroll = wrapper.children[index].querySelector('.nash-wheel-scroll')
      let wheel = this.wheels.length ? this.wheels[index] : null
      let dist = 0
      if (scroll && wheel) {
        const oldData = this.pickerData[index]
        this.$set(this.pickerData, index, data)
        const selectedIndex = wheel.getSelectedIndex()
        if (oldData.length) {
          const oldValue = oldData[selectedIndex].value
          for (let i = 0; i < data.length; i++) {
            if (data[i].value === oldValue) {
              dist = i
              break
            }
          }
        }
        this.currentIndexList[index] = dist
        this.$nextTick(() => {
          wheel = this.createWheel(wrapper, index)
          wheel.wheelTo(dist)
        })
      }
      return dist
    },
    cancel() {
      this.$emit(EVENT_CANCEL)
      this.hide()
    },
    confirm() {
      const length = this.wheels.length
      const value = []
      const text = []
      const index = []
      for (let i = 0; i < length; i++) {
        const target = this.pickerData[i][this.currentIndexList[i]]
        value[i] = target.value
        text[i] = target.text
        index[i] = this.currentIndexList[i]
      }
      this.$emit(EVENT_CONFIRM, value, text, index)
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

    .nash-picker-title {
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
