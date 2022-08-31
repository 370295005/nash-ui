<template>
  <div class="toast-page">
    <nash-button type="primary" @click="showToast({ text: '提示', delay: 1000, mask: false })">无遮罩层</nash-button>
    <nash-button type="primary" @click="showToast({ text: '提示', delay: 1000, mask: true })">有遮罩层</nash-button>
    <nash-button type="primary" @click="showToast({ text: '提示', delay: 3000, mask: true })">自定义时间3s</nash-button>
  </div>
</template>
<script>
export default {
  methods: {
    showToast(options) {
      this.$toast(options)
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.toast-page {
  .flex-box(center,center,column);
}
</style>
