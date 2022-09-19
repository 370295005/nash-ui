<template>
  <nash-picker
    v-model="isVisible"
    :direction="direction"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :title="title"
    :swipeTime="swipeTime"
    :selectedIndexList="selectedIndexList"
    :autoSaveIndex="autoSaveIndex"
    @confirm="confirm"
    @cancel="cancel"
  ></nash-picker>
</template>

<script>
import visibleMixins from '@/mixins/visible'
import NashPicker from '@/components/picker'
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
      pickerData: this.data.slice()
    }
  },
  watch: {
    isVisible(nv) {
      if (nv) {
        console.log(1)
      }
    }
  },
  methods: {
    initPickerData() {
      const data = (this.pickerData || []).reduce((pre, curr, currIndex) => {
        return []
      })
    }
  }
}
</script>
