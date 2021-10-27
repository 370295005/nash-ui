<template>
  <transition name="nash-popup-fade">
    <div class="nash-popup" v-show="isVisible">
      <div class="nash-popup-mask" @click="maskClick"></div>
      <transition :name="'nash-popup-' + direction">
        <div class="nash-popup-container" :class="'container-position-' + direction" v-show="isVisible">
          <div class="nash-popup-content">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
const EVENT_NAME = 'toggle'
const COMPONENTS_NAME = 'POPUP'
export default {
  name: COMPONENTS_NAME,
  model: {
    prop: 'visible',
    event: EVENT_NAME
  },
  props: {
    direction: {
      type: String,
      default: 'top'
    },
    visible: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  watch: {
    visible(nv, ov) {
      if (nv) {
        this.show()
      } else if (ov) {
        this.hide()
      }
    },
    direction(nv) {
      console.log(nv)
    }
  },
  methods: {
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    },
    maskClick() {
      this.hide()
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="stylus">
@import '../../assets/css/default.styl'
.nash-popup-fade-enter, .nash-popup-fade-leave-active {
  opacity: 0;
}
.nash-popup-fade-enter-active, .nash-popup-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.nash-popup-top-enter, .nash-popup-top-leave-active {
  transform: translate(0, -100%);
}
.nash-popup-top-enter-active, .nash-popup-top-leave-active {
  transition: all 0.3s ease-in-out;
}
.nash-popup-right-enter, .nash-popup-right-leave-active {
  transform: translate(100%, 0);
}
.nash-popup-right-enter-active, .nash-popup-right-leave-active {
  transition: all 0.3s ease-in-out;
}
.nash-popup-left-enter, .nash-popup-left-leave-active {
  transform: translate(-100%, 0);
}
.nash-popup-left-enter-active, .nash-popup-left-leave-active {
  transition: all 0.3s ease-in-out;
}
.nash-popup-bottom-enter, .nash-popup-bottom-leave-active {
  transform: translate(0, 100%);
}
.nash-popup-bottom-enter-active, .nash-popup-bottom-leave-active {
  transition: all 0.3s ease-in-out;
}
.nash-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  .nash-popup-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: $mask-bg;
    opacity: 0.4;
    z-index: 900;
    transition: opacity 0.3s ease-in-out;
  }
  .nash-popup-container {
    width: auto;
    height: auto;
    position: absolute;
    max-height: 100%;
    z-index: 900;
    background-color: #fff;
  }
  .container-position-top {
    top: 0;
  }
  .container-position-right {
    right: 0;
  }
  .container-position-left {
    left: 0;
  }
  .container-position-bottom {
    bottom: 0;
  }
}
</style>
