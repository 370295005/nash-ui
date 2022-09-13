<template>
  <div class="tip-page">
    <nash-tip :position="position" content="Nash-Tip">
      <nash-button type="primary" @click="changePosition('top')">top</nash-button>
    </nash-tip>
    <!-- <nash-button type="primary" @click="changePosition('left')">left</nash-button>
    <nash-button type="primary" @click="changePosition('right')">right</nash-button>
    <nash-button type="primary" @click="changePosition('bottom')">bottom</nash-button> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      position: 'top'
    }
  },
  methods: {
    changePosition(position) {
      this.position = position
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.tip-page {
  .flex-box(center,center,column);
  .nash-btn {
    position: relative;
    width: 343px;
    margin: 5px 0;
    top: 100px;
  }
}
</style>
