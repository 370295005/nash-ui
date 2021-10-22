<template>
  <div class="nash-toast" v-show="isVisible">
    <div class="nash-mask"></div>
    <div class="toast-container">
      <div class="toast-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(nv) {
      if (nv) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.nash-toast {
  position: relative;
  .nash-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    z-index: 900;
    background-color: #25262d;
  }
  .toast-container {
    max-width: 200px;
    height: 44px;
    position: absolute;
    text-align: justify;
    color: #ccc;
    z-index: 999;
  }
}
</style>