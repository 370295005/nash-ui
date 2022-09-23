<template>
  <div class="nash-btn" :class="[btnClass, btnDisabled]" @click="click">
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
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return this.type === '' ? 'nash-btn' : `nash-btn-${this.type}`
    },
    btnDisabled() {
      return this.disabled ? 'nash-btn-disabled' : ''
    }
  },
  methods: {
    click(event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>
<!-- TODO 移动端下按钮active触发不正常 PC正常 SBIOS-->
<!-- -webkit-tap-highlight-color:transparent -->
<style lang="less" scoped>
@import '@/assets/css/color.less';
.btn-active(@color) {
  &:active {
    background-color: @color;
    border-color: @color;
  }
}
.border-color (@color) {
  border: 1px solid @color;
}
.nash-btn {
  .btn-active(@default-active);
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
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.nash-btn-primary {
  .btn-active(@default-active);
  .border-color(@primary-border);
  background-color: @primary;
  color: @default;
}
.nash-btn-success {
  .btn-active(@success-active);
  .border-color(@success-border);
  background-color: @success;
  color: @default;
}
.nash-btn-info {
  .btn-active(@info-active);
  .border-color(@info-border);
  background-color: @info;
  color: @default;
}
.nash-btn-warning {
  .btn-active(@warning-active);
  .border-color(@warning);
  background-color: @warning;
  color: @default;
}
.nash-btn-error {
  .btn-active(@error-active);
  .border-color(@error);
  background-color: @error;
  color: @default;
}
.nash-btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
