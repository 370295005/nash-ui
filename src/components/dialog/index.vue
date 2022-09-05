<template>
  <transition name="fade">
    <nash-mask :maskCloseable="false"></nash-mask>
    <div class="nash-dialog">
      <div class="dialog-title">{{ title }}</div>
      <div class="dialog-content">{{ content }}</div>
      <div class="dialog-btns">
        <div class="dialog-btn confirm">{{ confirmText }}</div>
        <div class="dialog-btn cancel" v-if="type === 'btn'">{{ cancelText }}</div>
      </div>
    </div>
  </transition>
</template>
<script>
import NashMask from '@/components/mask'
import visibleMixins from '@/mixins/visible'
export default {
  mixins: [visibleMixins],
  components: {
    NashMask
  },
  props: {
    // alert btn close slot
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
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-dialog {
  width: 90%;
  min-height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: @default;
  border-radius: 5px;
  .dialog-title {
    margin: 15px 0;
    font-size: 16px;
    text-align: center;
  }
  .dialog-content {
    font-size: 14px;
    text-align: center;
  }
}
</style>
