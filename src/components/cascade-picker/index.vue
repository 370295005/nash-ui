<template>
  <nash-picker
    ref="picker"
    v-model="isVisible"
    :data="pickerData"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :title="title"
    :swipeTime="swipeTime"
    :selectedIndexList="pickerSelectedIndexList"
    :autoSaveIndex="autoSaveIndex"
    @confirm="confirm"
    @cancel="cancel"
    @change="change"
  ></nash-picker>
</template>

<script>
import visibleMixins from '@/mixins/visible'
import pickerMixins from '@/mixins/picker'
import NashPicker from '@/components/picker'
import { EVENT_CANCEL, EVENT_CONFIRM, EVENT_CHANGE } from '../../lib/constanceEvent'
const COMPONENTS_NAME = 'nash-cascade-picker'
export default {
  name: COMPONENTS_NAME,
  mixins: [visibleMixins, pickerMixins],
  components: {
    NashPicker
  },
  data() {
    return {
      cascadeData: this.data.slice(),
      pickerData: [],
      pickerSelectedIndexList: this.selectedIndexList.slice()
    }
  },
  watch: {
    isVisible(nv) {
      if (!nv) this.hide()
    },
    data: {
      handler(nv) {
        if (nv) {
          this.cascadeData = nv.slice()
          this.updatePickerData()
        }
      },
      deep: true
    },
    // TODO 时间选择器还没计算完选中的项,后续优化?
    selectedIndexList(nv) {
      this.pickerSelectedIndexList = nv
    }
  },
  mounted() {
    this.updatePickerData()
  },
  methods: {
    setData(data, selectedIndexList = []) {
      this.cascadeData = data.slice()
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
      let data = this.cascadeData
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
      if (i < this.pickerData.length) {
        this.pickerData.splice(i, this.pickerData.length - i)
      }
      this.pickerData = this.pickerData.slice()
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
