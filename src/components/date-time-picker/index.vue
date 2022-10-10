<template>
  <nash-cascade-picker
    ref="cascadePicker"
    v-model="isVisible"
    :data="pickerData"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :title="title"
    :swipeTime="swipeTime"
    :selectedIndexList="currentDateIndexList"
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
import { EVENT_CANCEL, EVENT_CONFIRM } from '../../lib/constanceEvent'
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
    startDate: {
      type: Date,
      default: () => new Date('2000-01-01')
    },
    // 终止时间默认当前
    endDate: {
      type: Date,
      default: () => new Date()
    },
    // 格式化函数
    formatter: {
      type: Function,
      default: () => {}
    },
    // TODO增加默认进入时选中的天数
    currentDate: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    return {
      pickerData: [],
      currentDateIndexList: []
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
    change() {},
    initData() {
      this.createDataList()
    },
    createDataList() {
      const { type, startDate, endDate } = this
      const startYear = startDate.getFullYear()
      const startMonth = startDate.getMonth() + 1
      const endYear = endDate.getFullYear()
      const endMonth = endDate.getMonth() + 1
      const endDay = endDate.getDate()
      let [currentYear, currentMonth] = [startYear, null]
      if (type === 'date') {
        // 年份选择
        const list = Array.from({ length: endYear - startYear + 1 }).map((_, index) => {
          const value = this.getFlatDate(startDate)[0] - index + 1
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
        // TODO 滚动至currentDate
        if (this.currentDate instanceof Date) {
          const [year, month, day] = this.getFlatDate(this.currentDate)
          // 找到年的索引
          const index = list.findIndex((item) => {
            return +item.value === +year
          })
          this.currentDateIndexList = [index, month - 1, day - 1]
        }
        this.pickerData = list.reverse()
      }
    },
    getFlatDate(date) {
      const currentDate = +date || +new Date()
      const formatedDate = parseTime(currentDate, '{y}-{m}-{d}')
      const dateArr = formatedDate.split('-').map((e) => +e)
      return dateArr
    }
  }
}
</script>
