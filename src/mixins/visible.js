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
      nv ? this.show() : this.hide()
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
