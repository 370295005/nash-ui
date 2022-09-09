<template>
  <div class="nash-switch">
    <input type="checkbox" class="nash-switch-input" v-model="checkValue" :disabled="disabled" />
    <i class="nash-switch-ui"></i>
    <span class="nash-switch-lable"><slot></slot></span>
  </div>
</template>

<script>
const CONPONENT_NAME = 'nash-switch'
const EVENT_INPUT = 'input'
export default {
  name: CONPONENT_NAME,
  props: {
    disabled: Boolean,
    value: Boolean
  },
  data() {
    return {
      checkValue: this.value
    }
  },
  watch: {
    value(newValue) {
      this.checkValue = newValue
    },
    checkValue(newValue) {
      this.$emit(EVENT_INPUT, newValue)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-switch {
  .flex-box(normal,center);
  padding: 10px 0;
  position: relative;
  .nash-switch-input {
    position: absolute;
    z-index: 1;
    width: 40px;
    height: 22px;
    opacity: 0;
    &:checked + .nash-switch-ui {
      border-color: @primary;
      background-color: @primary;
      &::before {
        transform: scale(0);
      }
      &::after {
        transform: translateX(40px - 22px);
      }
    }
    &:disabled + .nash-switch-ui {
      opacity: 0.3;
    }
  }
  .nash-switch-ui {
    position: relative;
    display: block;
    width: 40px;
    height: 22px;
    box-sizing: content-box;
    border: 1px solid @default-border;
    border-radius: 22px;
    background-color: @default-border;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 22px;
      background-color: #ccc;
      transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1.28);
    }
    &::after {
      width: 22px;
      background-color: @default;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
  }
  .nash-switch-lable {
    font-size: 18px;
    color: @black;
    display: block;
    margin-left: 10px;
    line-height: 22px;
    &:empty {
      margin-left: 0;
    }
  }
}
</style>
