<template>
  <transition name="dialog">
    <div class="nash-dialog" v-show="isVisible">
      <nash-mask :maskCloseable="false" v-show="mask"></nash-mask>
      <div class="nash-dialog-container">
        <div class="nash-dialog-close" @click="close" v-if="showClose">
          <i class="nashic-close"></i>
        </div>
        <div class="nash-dialog-title" v-if="title">{{ title }}</div>
        <div class="nash-dialog-content" v-if="content && !slotContent">{{ content }}</div>
        <div class="nash-dialog-slot-content" v-if="slotContent && !content" v-html="slotContent"></div>
        <div class="nash-dialog-btns">
          <div
            class="nash-dialog-btn nash-dialog-confirm"
            :style="{ width: type === 'btn' ? '49%' : '100%' }"
            @click="confirm"
          >
            {{ confirmText }}
          </div>
          <div class="nash-dialog-line" v-if="type === 'btn'"></div>
          <div class="nash-dialog-btn nash-dialog-cancel" v-if="type === 'btn'" @click="cancel">{{ cancelText }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import NashMask from '@/components/mask'
const COMPONENT_NAME = 'nash-dialog'
export default {
  name: COMPONENT_NAME,
  components: {
    NashMask
  },
  props: {
    // alert btn slot
    type: {
      type: String,
      default: 'alert'
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    mask: {
      type: Boolean,
      default: true
    },
    showClose: { type: Boolean, default: false },
    slotContent: {
      type: String,
      default: ''
    },
    onConfirm: Function,
    onCancel: Function,
    onClose: Function
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    confirm() {
      this.onConfirm && this.onConfirm()
      this.isVisible = false
    },
    cancel() {
      this.onCancel && this.onCancel()
      this.isVisible = false
    },
    close() {
      this.onClose && this.onClose()
      this.isVisible = false
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-dialog-container {
  width: 90%;
  min-height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: @default;
  border-radius: 5px;
  z-index: @mask-content-zIndex;
  animation: dialog-zoom 0.4s;
  .nash-dialog-close {
    position: absolute;
    right: 0;
    width: 30px;
    height: 30px;
    padding: 4px;
    font-size: 22px;
  }
  .nash-dialog-title {
    margin: 15px 0;
    font-size: 16px;
    text-align: center;
  }
  .nash-dialog-content {
    min-height: 100px;
    margin-bottom: 15px;
    font-size: 14px;
    text-align: center;
    color: @info;
  }
  .nash-dialog-slot-content {
    min-height: 100px;
    margin-bottom: 44px;
    padding: 16px;
  }
  .nash-dialog-btns {
    .flex-box(space-between,center);
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid @default-border;
    .nash-dialog-line {
      width: 1px;
      height: 44px;
      background-color: @default-border;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .nash-dialog-btn {
      height: 44px;
      text-align: center;
      flex: 1;
      &.nash-dialog-confirm {
        color: @primary;
      }
      &.nash-dialog-cancel {
        width: 49%;
        color: @info;
      }
    }
  }
}
@keyframes dialog-zoom {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
