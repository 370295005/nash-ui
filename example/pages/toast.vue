<template>
  <div class="toast-container">
    <nash-button :info="true" @click="showToast">Toast 1s</nash-button>
  </div>
</template>
<script>
import NashButton from '../../src/components/button/index.vue'
export default {
  components: {
    NashButton
  },
  methods: {
    showToast() {
      console.log(123)
    }
  }
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.toast-container {
  flex-box(flex-start, center, column);
}
</style>