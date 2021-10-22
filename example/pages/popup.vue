<template>
  <div class="popup-container">
    <nash-button color="#4a4c5b" @click="showPop('top')">从上弹出</nash-button>
    <nash-button color="#4a4c5b" @click="showPop('left')">从左弹出</nash-button>
    <nash-button color="#4a4c5b" @click="showPop('right')">从右弹出</nash-button>
    <nash-button color="#4a4c5b" @click="showPop('bottom')">从下弹出</nash-button>
    <nash-popup v-model="isVisible" :direction="direction">
      <div class="popup-content">POPUP</div>
    </nash-popup>
    <nash-popup v-model="isVisible1" :direction="direction">
      <div class="popup-content1">POPUP</div>
    </nash-popup>
  </div>
</template>
<script>
import NashPopup from '../../src/components/popup/index.vue'
import NashButton from '../../src/components/button/index.vue'
export default {
  components: {
    NashButton,
    NashPopup
  },
  data() {
    return {
      isVisible: false,
      isVisible1: false,
      direction: 'top'
    }
  },
  methods: {
    showPop(direction) {
      this.direction = direction
      if (direction === 'left' || direction === 'right') {
        this.isVisible1 = true
      } else {
        this.isVisible = true
      }
    }
  }
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.popup-container {
  flex-box(flex-start, center, column);
  width: 100%;
  height: 100%;
  .nash-btn {
    width: 100%;
    margin: 5px 0;
    color: #ffffff;
  }
  .popup-content {
    width: 100vw;
    height: 120px;
    background-color: #fff;
    text-align: center;
  }
  .popup-content1 {
    width: 200px;
    height: 100vh;
    background-color: #fff;
    text-align: center;
  }
}
</style>