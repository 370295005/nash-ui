<template>
  <nash-cascade-picker
    ref="cascadePicker"
    v-model="isVisible"
    :data="pickerData"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :title="title"
    :swipeTime="swipeTime"
    :selectedIndexList="currentIndexList"
    :autoSaveIndex="autoSaveIndex"
    @confirm="confirm"
    @cancel="cancel"
    @change="change"
  ></nash-cascade-picker>
</template>

<script>
import pickerMixins from '@/mixins/picker'
import visibleMixins from '@/mixins/visible'
import NashCascadePicker from '@/components/cascade-picker'
import { EVENT_CANCEL, EVENT_CONFIRM, EVENT_CHANGE } from '@/lib/constanceEvent'
import parseTime from '@/lib/parseTime'
const COMPONENT_NAME = 'nash-date-time-picker'
export default {
  name: COMPONENT_NAME,
  mixins: [visibleMixins, pickerMixins],
  components: {
    NashCascadePicker
  },
  props: {
    // 选择器类型 date(年月日) time(时分秒)
    type: {
      type: String,
      default: 'date'
    },
    // 起始时间默认2000年一月一日
    startTime: {
      type: [Date, String],
      default: () => (this.type === 'date' ? new Date('2000-01-01') : '00:00:00')
    },
    // 终止时间默认当前
    endTime: {
      type: [Date, String],
      default: () => (this.type === 'date' ? new Date() : parseTime(new Date(), '{h}:{i}:{s}'))
    },
    // 格式化函数
    formatter: {
      type: Function,
      default: () => {}
    },
    currentTime: {
      type: [Date, String],
      default: () => (this.type === 'date' ? new Date() : parseTime(new Date(), '{h}:{i}:{s}'))
    }
  },
  data() {
    return {
      pickerData: [],
      currentIndexList: []
    }
  },
  watch: {
    isVisible(nv) {
      if (!nv) this.hide()
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    confirm(value, text, index) {
      this.$emit(EVENT_CONFIRM, value, text, index)
    },
    cancel() {
      this.$emit(EVENT_CANCEL)
    },
    change(colIndex, index, newValue) {
      this.$emit(EVENT_CHANGE, colIndex, index, newValue)
    },
    initData() {
      this.createDataList()
    },
    createDataList() {
      const { type, startTime, endTime } = this
      if (type === 'date') {
        const startYear = startTime.getFullYear()
        const startMonth = startTime.getMonth() + 1
        const endYear = endTime.getFullYear()
        const endMonth = endTime.getMonth() + 1
        const endDay = endTime.getDate()
        let [currentYear, currentMonth] = [startYear, null]
        // 年份选择
        const list = Array.from({ length: endYear - startYear + 1 }).map((_, yearIndex) => {
          const value = this.getFlatDate(startTime)[0] - yearIndex + 1
          const text = value
          currentYear = value
          const children = Array.from({ length: currentYear === endYear ? endMonth - startMonth + 1 : 12 }).map(
            (_, monthIndex) => {
              const value = monthIndex + 1
              const text = value
              currentMonth = value
              const children = Array.from({
                length:
                  currentYear === endYear && currentMonth === endMonth
                    ? endDay
                    : new Date(currentYear, currentMonth, 0).getDate()
              }).map((_, dayIndex) => {
                const value = dayIndex + 1
                const text = value
                return {
                  value,
                  text
                }
              })
              return {
                value,
                text,
                children
              }
            }
          )
          return {
            value,
            text,
            children
          }
        })
        if (this.currentTime instanceof Date) {
          const [year, month, day] = this.getFlatDate(this.currentTime)
          // 找到年的索引
          const index = list.findIndex((item) => {
            return +item.value === +year
          })
          this.currentIndexList = [index + 1, month - 1, day - 1]
        }
        this.pickerData = list.reverse()
      } else if (type === 'time') {
        const { startTime, endTime, currentTime } = this
        const [startHour, startMin] =
          startTime instanceof Date ? parseTime(startTime, '{h}:{i}:{s}').split(':') : startTime.split(':')
        const [endHour, endMin, endSec] =
          endTime instanceof Date ? parseTime(endTime, '{h}:{i}:{s}').split(':') : endTime.split(':')
        let [currentHour, currentMin] = [startHour, null]
        const list = Array.from({ length: Math.abs(+endHour - +startHour) + 1 }).map((_, hourIndex) => {
          const value = +startHour + +hourIndex
          const text = value
          currentHour = value
          const children = Array.from({
            length: +currentHour === +startHour ? +startMin : +currentHour === +endHour ? +endMin + 1 : 60
          }).map((_, minIndex) => {
            const value =
              +currentHour === +startHour ? this.prefixValue(+startMin + +minIndex) : this.prefixValue(minIndex)
            const text = value
            currentMin = value
            const children = Array.from({ length: +currentMin === +endMin ? +endSec + 1 : 60 }).map((_, secIndex) => {
              const value = this.prefixValue(+secIndex)
              const text = value
              return {
                value,
                text
              }
            })
            return {
              value,
              text,
              children
            }
          })
          return {
            value,
            text,
            children
          }
        })
        if (this.currentTime) {
          const [hour, min, sec] =
            this.currentTime instanceof Date ? parseTime(currentTime, '{h}:{i}:{s}').split(':') : currentTime.split(':')
          const index = list.findIndex((item) => +item.value === +hour)
          // BUG 首次进入时，存在索引显示不正确的问题
          this.currentIndexList = [+index, +min, +sec]
        }
        this.pickerData = list
      }
    },
    getFlatDate(date) {
      const currentDate = +date || +new Date()
      const formatedDate = parseTime(currentDate, '{y}-{m}-{d}')
      const dateArr = formatedDate.split('-').map((e) => +e)
      return dateArr
    },
    prefixValue(value) {
      return +value >= 0 && +value < 10 ? '0' + value : value
    }
  }
}
</script>
