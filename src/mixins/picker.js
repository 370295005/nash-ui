export default {
  props: {
    data: {
      type: Array,
      default: () => []
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
  }
}
