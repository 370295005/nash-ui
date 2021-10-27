<template>
  <div class="button-container">
    <nash-button :primary="true">主要按钮</nash-button>
    <nash-button :info="true">主要按钮</nash-button>
    <nash-button :disable="true">主要按钮</nash-button>
    <nash-button :warning="true">主要按钮</nash-button>
  </div>
</template>
<script>
import NashButton from '../../src/components/button/index.vue'
export default {
  components: {
    NashButton
  }
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.button-container {
  flex-box(flex-start, center, column);
  width: 100%;
  .nash-btn {
    margin: 5px 0;
  }
}
</style>
