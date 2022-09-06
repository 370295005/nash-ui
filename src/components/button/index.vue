<template>
  <div class="nash-btn" :class="btnClass" @click="click">
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'nash-button'
export default {
  name: COMPONENT_NAME,
  props: {
    // 按钮类型 primary info success warning error
    type: {
      type: String,
      default: ''
    },
    // 自定义背景颜色
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnClass() {
      return this.type === '' ? 'nash-btn' : `nash-btn-${this.type}`
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

<style lang="less" scoped>
@import '@/assets/css/color.less';
.btn-active(@color) {
  &:active {
    color: @color;
    background-color: @color;
    border-color: @color;
  }
}
.btn-hover(@bgColor, @fontColor, @borderColor) {
  &:hover {
    background-color: @bgColor;
    color: @fontColor;
    border-color: @borderColor;
  }
}
.border-color (@color) {
  border: 1px solid @color;
}
.nash-btn {
  .btn-active(@default-active);
  .btn-hover(@default-hover,@primary,#ecf5ff);
  .border-color(@default-border);
  padding: 12px 20px;
  position: relative;
  display: inline-block;
  text-align: center;
  line-height: 1;
  outline: 0;
  font-size: 14px;
  color: @black;
  border-radius: 4px;
  background-color: @default;
  transition: 0.2s;
  box-sizing: border-box;
  cursor: pointer;
}
.nash-btn-primary {
  .btn-active(@default-active);
  .btn-hover(@primary-hover,@default,@primary-hover);
  .border-color(@primary-border);
  background-color: @primary;
  color: @default;
}
.nash-btn-success {
  .btn-active(@success-active);
  .btn-hover(@success-border,@default,@success-border);
  .border-color(@success-border);
  background-color: @success;
  color: @default;
}
.nash-btn-info {
  .btn-active(@info-active);
  .btn-hover(@info-hover,@default,@info-hover);
  .border-color(@info-border);
  background-color: @info;
  color: @default;
}
.nash-btn-warning {
  .btn-active(@warning-active);
  .btn-hover(@warning-hover,@default,@warning-hover);
  .border-color(@warning);
  background-color: @warning;
  color: @default;
}
.nash-btn-error {
  .btn-active(@error-active);
  .btn-hover(@error-hover,@default,@error-hover);
  .border-color(@error);
  background-color: @error;
  color: @default;
}
</style>
