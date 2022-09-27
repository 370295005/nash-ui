<template>
  <div class="loading-page">
    <nash-button type="primary" @click="showLoading('circle')">circle</nash-button>
    <nash-button type="primary" @click="showLoading('spinner')">spinner</nash-button>
    <nash-button type="primary" @click="showLoading('dynamic')">dynamic</nash-button>
    <nash-button type="primary" @click="showLoading('spinner-circle')">spinner-circle</nash-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoading(type) {
      // this.$loading({
      //   type
      // }).open()
      this.$loading.open({ type })
      setTimeout(() => {
        this.$loading.close()
      }, 2000)
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.loading-page {
  .flex-box(center,center,column);
  .nash-button {
    width: 343px;
    margin: 5px 0;
  }
}
</style>
