<template>
  <div class="toast-container">
    <nash-button :info="true" @click="showToast1s">Toast 1s</nash-button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    showToast1s() {
      this.$toast({ text: '阿巴巴', delay: 1000 })
    }
  }
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.toast-container {
  flex-box(flex-start, center, column);
  .nash-btn {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
