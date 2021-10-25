<template>
  <div class="nash-btn" :class="btnClass" :style="{ backgroundColor: color }" @click="click">
    <slot></slot>
  </div>
</template>
<script>
const COMPONENTS_NAME = 'BUTTON'
export default {
  name: COMPONENTS_NAME,
  props: {
    text: {
      default: '按钮'
    },
    primary: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    },
    // 自定义背景颜色
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnClass() {
      return {
        'nash-btn-primary': this.primary,
        'nash-btn-warning': this.warning,
        'nash-btn-disable': this.disable,
        'nash-btn-info': this.info
      }
    }
  },
  methods: {
    click(event) {
      if (this.disable) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/default.styl'
btn-active($bg) {
  &:active {
    background-color: $bg;
  }
}
.nash-btn {
  padding: 0 10px;
  position: relative;
  display: inline-block;
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  color: $normal-black;
  border-radius: 3px;
  background-color: $normal-white;
  opacity: 1;
  transition: opacity 0.2s;
  cursor: pointer;
  btn-active(#ccc);
}
.nash-btn-primary {
  background-color: $button-primary;
  color: $normal-white;
  btn-active(#00a24d);
}
.nash-btn-info {
  background-color: $button-info;
  color: $normal-white;
  btn-active(#3c6fcd);
}
.nash-btn-warning {
  background-color: $button-warning;
  color: $normal-white;
  btn-active(#d84a4a);
}
</style>