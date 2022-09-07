<template>
  <div class="dialog-page">
    <nash-button type="primary" @click="showDialog">Dialog(alert)</nash-button>
    <nash-button type="primary" @click="showDialog1">Dialog(btn)</nash-button>
    <nash-button type="primary" @click="showDialog2">Dialog(close)</nash-button>
    <nash-button type="primary" @click="showDialog3">Dialog(slot)</nash-button>
  </div>
</template>
<script>
import avatar from '../assets/images/avatar.webp'
export default {
  data() {
    return {}
  },
  methods: {
    showDialog() {
      this.$dialog.open({
        type: 'alert',
        title: '我是标题',
        content: '我是内容',
        confirmText: '我知道了',
        onConfirm: () => {
          console.log('123')
        }
      })
    },
    showDialog1() {
      this.$dialog.open({
        type: 'btn',
        title: '我是标题',
        content: '我是内容',
        confirmText: '我知道了',
        onConfirm: () => {
          this.$toast('confirm回调')
        },
        onCancel: () => {
          this.$toast('cancel回调')
        }
      })
    },
    showDialog2() {
      this.$dialog.open({
        type: 'btn',
        title: '我是标题',
        content: '我是内容',
        confirmText: '我知道了',
        showClose: true,
        onClose: () => {
          this.$toast('close回调')
        },
        onConfirm: () => {
          this.$toast('confirm回调')
        },
        onCancel: () => {
          this.$toast('cancel回调')
        }
      })
    },
    showDialog3() {
      this.$dialog.open({
        type: 'btn',
        title: '我是标题',
        confirmText: '我知道了',
        showClose: true,
        slotContent: `<div class="dialog-slot"><img src="${avatar}" style="width:100px;height:100px;border-radius:50%;display:block;margin:0 auto;"/></div>`,
        onClose: () => {
          this.$toast('close回调')
        },
        onConfirm: () => {
          this.$toast('confirm回调')
        },
        onCancel: () => {
          this.$toast('cancel回调')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.dialog-page {
  .nash-btn {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
