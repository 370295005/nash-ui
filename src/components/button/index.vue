<template>
  <div class="nash-button" :class="[btnClass, btnDisabled, btnRound]" @click="click">
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
    },
    // 圆角按钮
    round: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      return this.type === '' ? 'nash-button' : `nash-button-${this.type}`
    },
    btnDisabled() {
      return this.disabled ? 'nash-button-disabled' : ''
    },
    btnRound() {
      return this.round ? 'nash-button-round' : ''
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
<style lang="less" scoped>
@import '@/assets/css/color.less';
@import '@/assets/css/style.less';
.btn-active(@color:null) {
  &:active {
    background-color: @color;
    border-color: @color;
  }
}
.nash-button {
  .btn-active(@default-active);
  .border(@default-border);
  padding: 12px 20px;
  margin: 0;
  position: relative;
  display: inline-block;
  white-space: nowrap;
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
.nash-button-round {
  border-radius: 999px;
}
.nash-button-primary {
  .btn-active(@primary-active);
  .border(@primary-border);
  background-color: @primary;
  color: @default;
}
.nash-button-success {
  .btn-active(@success-active);
  .border(@success-border);
  background-color: @success;
  color: @default;
}
.nash-button-info {
  .btn-active(@info-active);
  .border(@info-border);
  background-color: @info;
  color: @default;
}
.nash-button-warning {
  .btn-active(@warning-active);
  .border(@warning);
  background-color: @warning;
  color: @default;
}
.nash-button-error {
  .btn-active(@error-active);
  .border(@error);
  background-color: @error;
  color: @default;
}
.nash-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
