<!--
 * @Author: yeenjian<1793147874@qq.com>
 * @Date: 2021-10-13 09:34:02
 * @LastEditors: yeenjian
 * @LastEditTime: 2021-10-15 12:02:43
-->
<template>
  <div class="my-picker">
    <div class="panel">
      <div class="panel-title">
        <div class="bold-text">快捷选项</div>
      </div>
      <div class="panel-content">
        <div class="btn-wrapper">
          <div
            v-for="(item, index) in btnList"
            :key="index"
            class="btn"
            :class="{ active: btnIndex === index }"
            @click="toggleModel(item, index)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-title">
        <div class="ts-wrapper">
          <div class="ts" :class="{ active: tabIndex === 0 }" @click="toggleTab(0)">
            {{ startDate }}
          </div>
          <div class="split">至</div>
          <div class="ts" :class="{ active: tabIndex === 1 }" @click="toggleTab(1)">
            {{ endDate }}
          </div>
        </div>
      </div>
      <div class="panel-content">
        <div class="mask-top"></div>
        <div class="mask-bottom"></div>
        <div class="mask-indicator"></div>
        <div ref="wheelWrapper" class="wheel-wrapper">
          <div v-for="(item, index) in selectList" :key="index" class="wheel">
            <div class="wheel-scroll">
              <div v-for="e in item" :key="e.value" class="wheel-item">
                {{ e.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-btn-wrapper">
      <div class="footer-btn reset" @click="reset">重置</div>
      <div class="footer-btn confirm" @click="confirm">完成</div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'
import { parseTime } from '@/lib/parseTime'
BScroll.use(Wheel)
export default {
  components: {},
  props: {
    // 绑定的时间
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    pickerTabIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabIndex: 0,
      model: ['', ''],
      selectedIndex: [],
      // startTime: '',
      // endTime: '',
      selectList: [],
      wheels: null,
      btnList: [],
      btnIndex: 4,
      totalFlag: false
    }
  },
  computed: {
    startDate() {
      return this.model[0] ? parseTime(this.model[0], '{y}/{m}/{d}') : '请选择'
    },
    endDate() {
      return this.model[1] ? parseTime(this.model[1], '{y}/{m}/{d}') : '请选择'
    }
  },
  watch: {
    model(val) {
      let [startDate, endDate] = val
      const year = this.selectList[0][0].value
      if (startDate && endDate) {
        this.btnIndex = this.btnList.findIndex((e) => {
          return +e.value[0] === +val[0] && +e.value[1] === +val[1]
        })
      } else if (startDate === '' && endDate === '') {
        this.btnIndex = 4
      } else if (startDate === '' && endDate) {
        startDate = new Date(`${year}/01/01 00:00:00`)
      } else if (startDate && endDate === '') {
        endDate = new Date()
      }
      if (Date.parse(startDate) > Date.parse(endDate)) {
        this.$emit('input', [endDate, startDate])
      } else {
        this.$emit('input', [startDate, endDate])
      }
    },
    tabIndex(val) {
      this.$emit('changePickerTabIndex', val)
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    reset() {
      this.toggleModel(this.btnList[4], 4)
    },
    confirm() {
      let flag = false
      if (this.model[0] === '' && this.model[1]) {
        const year = this.selectList[0][0].value
        this.model = [new Date(`${year}/01/01 00:00:00`), this.model[1]]
        flag = true
      } else if (this.model[0] && this.model[1] === '') {
        this.model = [this.model[0], new Date()]
        flag = true
      }
      if (Date.parse(this.model[0]) > Date.parse(this.model[1])) {
        this.model = [this.model[1], this.model[0]]
        flag = true
      }
      if (flag) {
        const modelItem = this.model[this.tabIndex]
        this.initSelectList(modelItem)
        this.$nextTick(() => {
          this.wheels[0].refresh()
          this.wheels[1].refresh()
          this.wheels[2].refresh()
          this.$nextTick(() => {
            const [year, month, day] = this.getFlatDate(modelItem)
            const yearIndex = this.selectList[0].findIndex((e) => e.value === year)
            const monthIndex = this.selectList[1].findIndex((e) => e.value === month)
            const dayIndex = this.selectList[2].findIndex((e) => e.value === day)
            this.wheels[0].wheelTo(yearIndex)
            this.wheels[1].wheelTo(monthIndex)
            this.wheels[2].wheelTo(dayIndex)
          })
        })
      }
      this.$emit('confirm')
    },
    init() {
      this.tabIndex = this.pickerTabIndex
      this.model = [...this.value]
      this.initBtnList()
      this.initSelectList()
      this.initSelectedIndex()
      this.initWheels()
    },
    toggleModel(item, index) {
      this.btnIndex = index
      const newModel = item.value
      const oldModel = [...this.model]
      this.model = [...newModel]
      if (+newModel[this.tabIndex] !== +oldModel[this.tabIndex] && newModel[this.tabIndex]) {
        const modelItem = newModel[this.tabIndex]
        this.initSelectList(modelItem)
        this.$nextTick(() => {
          this.wheels[0].refresh()
          this.wheels[1].refresh()
          this.wheels[2].refresh()
          this.$nextTick(() => {
            const [year, month, day] = this.getFlatDate(modelItem)
            const yearIndex = this.selectList[0].findIndex((e) => e.value === year)
            const monthIndex = this.selectList[1].findIndex((e) => e.value === month)
            const dayIndex = this.selectList[2].findIndex((e) => e.value === day)
            this.wheels[0].wheelTo(yearIndex)
            this.wheels[1].wheelTo(monthIndex)
            this.wheels[2].wheelTo(dayIndex)
          })
        })
      }
    },
    toggleTab(tabIndex) {
      if (this.tabIndex !== tabIndex) {
        this.tabIndex = tabIndex
        if (+this.model[0] !== +this.model[1] && this.model[tabIndex]) {
          const modelItem = this.model[tabIndex]
          this.initSelectList(modelItem)
          this.$nextTick(() => {
            this.wheels[0].refresh()
            this.wheels[1].refresh()
            this.wheels[2].refresh()
            this.$nextTick(() => {
              const [year, month, day] = this.getFlatDate(modelItem)
              const yearIndex = this.selectList[0].findIndex((e) => e.value === year)
              const monthIndex = this.selectList[1].findIndex((e) => e.value === month)
              const dayIndex = this.selectList[2].findIndex((e) => e.value === day)
              this.wheels[0].wheelTo(yearIndex)
              this.wheels[1].wheelTo(monthIndex)
              this.wheels[2].wheelTo(dayIndex)
            })
          })
        }
      }
    },
    prefix0(val) {
      return +val > 9 ? val : `0${val}`
    },
    getFlatDate(date) {
      const myDate = +date || +new Date()
      const formatedDate = parseTime(myDate, '{y}-{m}-{d}')
      const dateArr = formatedDate.split('-').map((e) => +e)
      return dateArr
    },
    getReflectIndex(date) {
      const flatDate = this.getFlatDate(date)
      const result = []
      for (let i = 0; i < 3; i++) {
        const list = this.selectList[i]
        const activeIndex = list.findIndex((e) => e.value === flatDate[i])
        result.push(activeIndex)
      }
      return result
    },
    initBtnList() {
      const [currentYear, currentMonth, currentDay] = this.getFlatDate()
      const endDate = new Date(`${currentYear}/${currentMonth}/${currentDay} 23:59:59`)
      // 计算今日
      const todayModel = [new Date(`${currentYear}/${currentMonth}/${currentDay} 00:00:00`), endDate]
      // 计算近一月
      const oneMonthStartYear = currentMonth - 1 <= 0 ? currentYear - 1 : currentYear
      const oneMonthStartMonth = currentMonth - 1 <= 0 ? 12 : currentMonth - 1
      const oneMonthModel = [new Date(`${oneMonthStartYear}/${oneMonthStartMonth}/${currentDay} 00:00:00`), endDate]
      // 计算近3月
      const threeMonthStartYear = currentMonth - 3 <= 0 ? currentYear - 1 : currentYear
      const threeMonthStartMonth = currentMonth - 3 <= 0 ? currentMonth + 9 : currentMonth - 3
      const threeMonthModel = [
        new Date(`${threeMonthStartYear}/${threeMonthStartMonth}/${currentDay} 00:00:00`),
        endDate
      ]
      // 计算近半年
      const sixMonthStartYear = currentMonth - 6 <= 0 ? currentYear - 1 : currentYear
      const sixMonthStartMonth = currentMonth - 6 <= 0 ? currentMonth + 6 : currentMonth - 6
      const sixMonthModel = [new Date(`${sixMonthStartYear}/${sixMonthStartMonth}/${currentDay} 00:00:00`), endDate]
      // 全部
      const totalModel = ['', '']
      this.btnList = [
        {
          text: '今日',
          value: todayModel
        },
        {
          text: '近一月',
          value: oneMonthModel
        },
        {
          text: '近三月',
          value: threeMonthModel
        },
        {
          text: '近半年',
          value: sixMonthModel
        },
        {
          text: '全部',
          value: totalModel
        }
      ]
    },
    initSelectList(date) {
      // 年份选择列表
      const yearList = Array.from({ length: 30 }).map((e, i) => {
        const value = this.getFlatDate(new Date())[0] - i
        const text = `${this.prefix0(value)}年`
        return {
          text,
          value
        }
      })
      yearList.reverse()
      // 月份选择列表
      const monthList = Array.from({ length: 12 }).map((e, i) => {
        const value = i + 1
        const text = `${this.prefix0(value)}月`
        return {
          text,
          value
        }
      })
      // 日期选择列表
      const currentDate = this.getFlatDate(date)
      const year = currentDate[0]
      const month = currentDate[1]
      const dayCount = new Date(year, month, 0).getDate()
      const dayList = Array.from({ length: dayCount }).map((e, i) => {
        const value = dayCount - i
        const text = `${this.prefix0(value)}日`
        return {
          text,
          value
        }
      })
      dayList.reverse()
      this.selectList = [yearList, monthList, dayList]
    },
    initSelectedIndex() {
      const date = this.value[this.tabIndex] || new Date()
      this.selectedIndex = this.getReflectIndex(date)
    },
    initWheels() {
      if (!this.wheels) {
        this.$nextTick(() => {
          this.wheels = []
          const wheelWrapper = this.$refs.wheelWrapper
          for (let i = 0; i < this.selectList.length; i++) {
            if (!this.wheels[i]) {
              this.wheels[i] = new BScroll(wheelWrapper.children[i], {
                wheel: {
                  selectedIndex: this.selectedIndex[i],
                  wheelWrapperClass: 'wheel-scroll',
                  wheelItemClass: 'wheel-item'
                },
                probeType: 3
              })
              this.wheels[i].on('scrollEnd', () => {
                const activeIndex = this.wheels[i].getSelectedIndex()
                const oldIndex = this.selectedIndex[i]
                // 选择月份时，日期要跟着变
                if ((i === 0 || i === 1) && activeIndex !== oldIndex) {
                  let year, month
                  if (i === 0) {
                    year = this.selectList[0][activeIndex].value
                    month = this.selectList[1][this.selectedIndex[1]].value
                  }
                  if (i === 1) {
                    year = this.selectList[0][this.selectedIndex[0]].value
                    month = this.selectList[1][activeIndex].value
                  }
                  const dayCount = new Date(year, month, 0).getDate()
                  const dayList = Array.from({ length: dayCount }).map((e, i) => {
                    const value = dayCount - i
                    const text = `${this.prefix0(value)}日`
                    return {
                      text,
                      value
                    }
                  })
                  dayList.reverse()
                  this.selectList.splice(2, 1, dayList)
                  this.$nextTick(() => {
                    this.wheels[2].refresh()
                  })
                }
                // 更新model的值
                this.selectedIndex.splice(i, 1, activeIndex)
                const selectedItem = [
                  this.selectList[0][this.selectedIndex[0]],
                  this.selectList[1][this.selectedIndex[1]],
                  this.selectList[2][this.selectedIndex[2]]
                ]
                if (selectedItem[0] && selectedItem[1] && selectedItem[2]) {
                  const newModel =
                    this.tabIndex === 0
                      ? new Date(`${selectedItem[0].value}/${selectedItem[1].value}/${selectedItem[2].value} 00:00:00`)
                      : new Date(`${selectedItem[0].value}/${selectedItem[1].value}/${selectedItem[2].value} 23:59:59`)
                  this.model.splice(this.tabIndex, 1, newModel)
                }
              })
            } else {
              this.wheels[i].refresh()
            }
          }
        })
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~@/assets/css/utils.styl';
.my-picker {
  .panel {
    .panel-title {
      flex-box(space-between);
      color: rgba(33, 40, 50, 1);
      font-size: 14px;
      .ts-wrapper {
        flex-box(center);
        width: 100%;
        height: 34px;
        padding: 0 16px;
        line-height: 20px;
        .ts {
          flex-box(center);
          width: 155px;
          position: relative;
          height: 100%;
          flex: 1;
          text-align: center;
          @extend .border-1px-bottom;
          &:after {
            background: rgba(145, 156, 173, 0.2);
          }
          &.active:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 155px;
            height: 1px;
            background: rgba(76, 139, 255, 1);
            z-index: 1;
          }
        }
        .split {
          flex-box(center);
          height: 100%;
          flex: 0 0 auto;
          padding: 0 8px;
        }
      }
      .bold-text {
        padding: 4px 16px 8px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(33, 40, 50, 1);
      }
    }
    .panel-content {
      position: relative;
      .btn-wrapper {
        position: relative;
        flex-box(space-between);
        padding: 0 16px 8px;
        @extend .border-1px-bottom;
        &:after {
          background: rgba(145, 156, 173, 0.2);
        }
        .btn {
          position: relative;
          width: 64px;
          padding: 5px 0 4px;
          line-height: 17px;
          color: rgba(145, 156, 173, 1);
          font-size: 12px;
          text-align: center;
          background: rgba(145, 156, 173, 0.08);
          &.active {
            color: rgba(76, 139, 255, 1);
            background: rgba(76, 139, 255, 0.08);
            &:before {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              width: 200%;
              height: 200%;
              transform: scale(0.5);
              transform-origin: 0 0;
              border: 1px solid rgba(76, 139, 255, 1);
              border-radius: 4px;
            }
          }
        }
      }
      .mask-top, .mask-bottom {
        z-index: 10;
        width: 100%;
        height: 48px;
        pointer-events: none;
        transform: translateZ(0);
      }
      .mask-top {
        position: absolute;
        top: 0;
        background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
      }
      .mask-bottom {
        position: absolute;
        bottom: 1px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8));
      }
      .mask-indicator {
        width: 100%;
        height: 24px;
        position: absolute;
        top: 48px;
        background-color: rgba(145, 156, 173, 0.08);
      }
      .wheel-wrapper {
        // display: flex
        flex-box(center);
        padding: 0 115px 0 96px;
        .wheel {
          flex: 1;
          width: 1%;
          height: 120px;
          overflow: hidden;
          font-size: 14px;
          .wheel-scroll {
            padding: 0;
            margin-top: 48px;
            line-height: 24px;
            list-style: none;
            .wheel-item {
              list-style: none;
              height: 24px;
              overflow: hidden;
              white-space: nowrap;
              color: rgba(33, 40, 50, 1);
              text-align: right;
              &.wheel-disabled-item {
                opacity: 0.2;
              }
            }
          }
        }
      }
    }
  }
  .footer-btn-wrapper {
    flex-box();
    height: 44px;
    font-size: 16px;
    color: rgba(145, 156, 173, 1);
    @extend .border-1px-top;
    &:after {
      background: rgba(241, 243, 247, 1);
    }
    .footer-btn {
      flex-box(center);
      flex: 1;
      height: 100%;
      &.confirm {
        position: relative;
        color: rgba(76, 139, 255, 1);
        &:after {
          content: '';
          position: absolute;
          z-index: 1;
          width: 1px;
          height: 100%;
          top: 0;
          left: 0;
          transform-origin: 0 0;
          transform: scaleX(0.5);
          background: rgba(241, 243, 247, 1);
        }
      }
    }
  }
}
</style>
