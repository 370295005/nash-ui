import { EVENT_TOGGLE } from '@/lib/constanceEvent'
export default {
  model: {
    prop: 'visible',
    event: EVENT_TOGGLE
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
      this.$emit(EVENT_TOGGLE, true)
    },
    hide() {
      this.isVisible = false
      this.$emit(EVENT_TOGGLE, false)
    }
  }
}
