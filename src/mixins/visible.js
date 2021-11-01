const EVENT_NAME = 'toggle'
export default {
  model: {
    prop: 'visible',
    event: EVENT_NAME
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  watch: {
    visible(nv) {
      if (nv) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  methods: {
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}
