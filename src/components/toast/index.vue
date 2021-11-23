<template>
  <transition name="nash-popup-fade">
    <div class="nash-toast" v-show="isVisible">
      <div class="nash-mask" v-show="mask"></div>
      <div class="nash-toast-container">
        <div class="nash-toast-text">
          {{ text }}
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
const COMPONENTS_NAME = 'nash-toast'
export default {
  name: COMPONENTS_NAME,
  props: {
    mask: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 1000
    }
  },
  watch: {
    isVisible(nv) {
      if (nv) {
        this.show()
      } else {
        this.hide()
      }
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    show() {
      this.isVisible = true
      setTimeout(() => {
        this.isVisible = false
      }, this.delay)
    },
    hide() {
      this.isVisible = false
    }
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/style.styl';
@import '../../assets/css/animate.styl';
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
  .nash-toast-container {
    flex-box(center, center);
    min-width: 200px;
    max-width: 300px;
    min-height: 44px;
    max-height: 88px;
    padding: 10px 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: justify;
    color: #ccc;
    z-index: 999;
    font-size: 14px;
    background-color: #25262d;
    border-radius: 3px;
  }
}
</style>
