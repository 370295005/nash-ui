<template>
  <div class="toast-container">
    <nash-button :info="true" @click="showToast1s">Toast 1s</nash-button>
  </div>
</template>
<script>
import NashToast from '../../src/components/toast/index.vue'
import NashButton from '../../src/components/button/index.vue'
export default {
  components: {
    NashButton,
    NashToast
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    showToast1s() {
      this.$toast.open({ text: '阿巴巴', delay: 3000 })
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