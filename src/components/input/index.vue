<template>
  <div class="nash-input" :class="{ 'nash-input-active': isFocus }">
    <div class="nash-input-before" v-if="$slots.before">
      <slot name="before"></slot>
    </div>
    <input
      class="nash-input-field"
      ref="input"
      v-bind="$props"
      :type="_type"
      v-model="inputValue"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="HandleChange"
    />
    <div class="nash-input-clear-icon" v-show="_showClear" @click="clearInput">
      <i class="nashic-wrong"></i>
    </div>
    <div class="nash-input-password-icon" v-show="showEye" @click="toggleEye">
      <i :class="eyeClass"></i>
    </div>
    <div class="nash-input-after" v-if="$slots.after">
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'nash-input'
const EVENT_INPUT = 'input'
const EVENT_BLUR = 'blur'
const EVENT_FOCUS = 'focus'
export default {
  name: COMPONENT_NAME,
  props: {
    value: [String, Number],
    id: String,
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    placeholder: String,
    minlength: Number,
    maxlength: Number,
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否显示眼睛图标来显示密码
    showEye: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: this.value,
      isFocus: false,
      showPassword: false
    }
  },
  computed: {
    eyeClass() {
      return this.showPassword ? 'nashic-eye-visible' : 'nashic-eye-invisible'
    },
    _type() {
      const type = this.type
      if (type === 'password' && this.showEye && this.showPassword) {
        return 'text'
      }
      return type
    },
    _showClear() {
      let visible = this.clearable && this.inputValue && !this.readonly && !this.disabled
      if (!this.isFocus) {
        visible = false
      }
      return visible
    }
  },
  methods: {
    toggleEye(e) {
      this.showPassword = !this.showPassword
    },
    // TODO 点击事件无效，且会失去焦点，导致图标不显示，如果图标一直显示则功能正常
    clearInput(e) {
      this.inputValue = ''
      this.$refs.input.focus()
    },
    handleFocus(e) {
      this.isFocus = true
      this.$emit(EVENT_FOCUS, e)
    },
    handleBlur(e) {
      this.isFocus = false
      this.$emit(EVENT_BLUR, e)
    },
    HandleChange(e) {
      this.$emit(EVENT_INPUT, e)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-input {
  .flex-box(flex-start,center);
  width: 100%;
  height: 40px;
  padding: 6px 8px;
  line-height: 1;
  border-radius: 2px;
  font-size: 14px;
  position: relative;
  border: 1px solid @default-border;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-sizing: border-box;
  background-color: @default;
  &.nash-input-active {
    border-color: @primary;
  }
  .nash-input-field {
    width: 100%;
    padding: 0;
    outline: none;
    border: none;
    z-index: 100;
    background-color: @default;
    &::-webkit-input-placeholder {
      color: @info;
    }
  }
  .nash-input-clear-icon {
    padding: 4px;
    font-size: 16px;
    color: @info;
    z-index: 200;
  }
  .nash-input-password-icon {
    padding: 4px;
    font-size: 16px;
    color: @black;
  }
}
</style>