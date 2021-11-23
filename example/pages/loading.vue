<template>
  <div class="loading-container">
    <nash-button :info="true" @click="showLoading('circle')">静态圆圈</nash-button>
    <nash-button :info="true" @click="showLoading('spinner')">动态闪烁</nash-button>
    <nash-button :info="true" @click="showLoading('dynamic')">动态圆圈</nash-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoading(type) {
      console.log(this.$loading)
      this.$loading.open({ type, text: '加载中' })
      setTimeout(() => {
        this.$loading.close()
      }, 5000)
    }
  }
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.loading-container {
  flex-box(flex-start, center, column);
  .nash-btn {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
