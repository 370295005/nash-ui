<template>
  <div class="nash-checkbox" :class="checkboxClass" :data-pos="position">
    <label class="nash-checkbox-container">
      <input class="nash-checkbox-input" type="checkbox" :disabled="disabled" v-model="checkValue" />
      <span class="nash-checkbox-icon" :class="borderClass">
        <i :class="checkboxIconClass"></i>
      </span>
      <span class="nash-checkbox-label">
        <slot>
          {{ label }}
        </slot>
      </span>
    </label>
  </div>
</template>

<script>
const COMPONENT_NAME = 'nash-checkbox'
const EVENT_INPUT = 'input'
export default {
  name: COMPONENT_NAME,
  props: {
    value: Boolean,
    label: String,
    disabled: Boolean,
    type: {
      Type: String,
      default: 'circle'
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    checkValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit(EVENT_INPUT, newValue)
      }
    },
    isSquare() {
      return this.type === 'square'
    },
    checkboxIconClass() {
      return this.isSquare ? 'nashic-square-right' : 'nashic-right'
    },
    checkboxClass() {
      return {
        'nash-checkbox-checked': this.checkValue,
        'nash-checkbox-disabled': this.disabled
      }
    },
    borderClass() {
      return this.isSquare ? 'nashic-square-border' : 'nashic-round-border'
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-checkbox {
  width: 100%;
  height: 44px;
  position: relative;
  padding: 0 16px;
  text-align: left;
  font-size: 16px;
  color: @black;
  .nash-checkbox-container {
    .flex-box(normal,center);
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 11px 0;
    line-height: 44px;
    word-break: break-word;
    word-wrap: break-word;
    .nash-checkbox-input {
      z-index: @checkbox-zIndex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    .nash-checkbox-icon {
      position: relative;
      width: 20px;
      height: 20px;
      font-size: 18px;
      margin-right: 8px;
      line-height: 1;
      border-radius: 50%;
      &.nashic-square-border {
        border-radius: 2px;
      }
      &::before,
      i {
        transition: all 0.2s;
      }
      &::before {
        color: #ccc;
        display: inline-block;
        transform: scale(1.24);
      }
      i {
        position: absolute;
        top: 0;
        left: 0;
        color: @primary;
        transform: scale(0);
      }
    }
    .nash-checkbox-label {
      font-size: 18px;
      color: @black;
    }
  }
  &.nash-checkbox-checked {
    .nash-checkbox-icon {
      &::before {
        color: transparent;
      }
      i {
        color: @primary;
        transform: scale(1.23);
      }
    }
  }
  &.nash-checkbox-disabled {
    .nash-checkbox-icon {
      &::before,
      i {
        transition: all 0.2s;
      }
      &::before {
        color: #ccc;
        display: inline-block;
        transform: scale(1.24);
      }
      i {
        color: @disabled;
      }
    }
  }
  &[data-pos='right'] {
    .nash-checkbox-icon {
      margin-right: 0;
      position: absolute;
      right: 0;
    }
    .nash-checkbox-label {
      margin-right: 3px;
    }
  }
}
</style>
