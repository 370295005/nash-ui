<template>
  <nash-picker
    ref="picker"
    v-model="isVisible"
    :data="pickerData"
    :direction="direction"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :title="title"
    :swipeTime="swipeTime"
    :selectedIndexList="selectedIndexList"
    :autoSaveIndex="autoSaveIndex"
    @confirm="confirm"
    @cancel="cancel"
    @change="change"
  ></nash-picker>
</template>

<script>
import visibleMixins from '@/mixins/visible'
import NashPicker from '@/components/picker'
import { EVENT_CANCEL, EVENT_CONFIRM, EVENT_CHANGE } from '../../lib/constanceEvent'
const COMPONENTS_NAME = 'nash-cascade-picker'
export default {
  name: COMPONENTS_NAME,
  mixins: [visibleMixins],
  components: {
    NashPicker
  },
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
      pickerData: this.data.slice(),
      pickerSelectedIndexList: this.selectedIndexList.slice()
    }
  },
  watch: {
    isVisible(nv) {
      if (nv) {
        this.updatePickerData()
      } else {
        this.hide()
      }
    }
  },
  methods: {
    setData(data, selectedIndexList = []) {
      this.pickerData = data.slice()
      this.pickerSelectedIndexList = selectedIndexList.slice()
      this.updatePickerData()
    },
    // 滚动结束触发的函数
    // colIndex当前列的索引 index索引
    change(colIndex, index) {
      if (index !== this.pickerSelectedIndexList[colIndex]) {
        this.$set(this.pickerSelectedIndexList, colIndex, index)
        // this.pickerSelectedIndexList.splice(colIndex, 1, index)
        this.updatePickerData(colIndex + 1)
      }
      this.$emit(EVENT_CHANGE, colIndex, index)
    },
    updatePickerData(colIndex = 0) {
      let data = this.pickerData
      let i = 0
      while (data) {
        if (i >= colIndex) {
          const colData = []
          data.forEach((item) => {
            colData.push({
              value: item.value,
              text: item.text
            })
          })
          this.pickerData[i] = colData
          this.pickerSelectedIndexList[i] =
            colIndex === 0
              ? this.pickerSelectedIndexList[i] < data.length
                ? this.pickerSelectedIndexList[i] || 0
                : 0
              : this.$refs.picker.refillColumn(i, colData)
        }
        data = data.length ? data[this.pickerSelectedIndexList[i]].children : null
        i++
      }
    },
    confirm(value, text, index) {
      this.$emit(EVENT_CONFIRM, value, text, index)
    },
    cancel() {
      this.$emit(EVENT_CANCEL)
    }
  }
}
</script>
