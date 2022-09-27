<template>
  <div class="tip-page">
    <nash-tip position="left" content="Nash-Tip">
      <nash-button type="primary" @click="changePosition('left')">left</nash-button>
    </nash-tip>
    <nash-tip position="top" content="Nash-Tip">
      <nash-button type="primary" @click="changePosition('top')">top</nash-button>
    </nash-tip>
    <nash-tip position="bottom" content="Nash-Tip">
      <nash-button type="primary" @click="changePosition('bottom')">bottom</nash-button>
    </nash-tip>
    <nash-tip position="right" content="Nash-Tip">
      <nash-button type="primary" @click="changePosition('right')">right</nash-button>
    </nash-tip>
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
  .flex-box(center, center, column);

  .nash-button {
    position: relative;
    width: 100px;
    margin: 5px auto;
    top: 100px;

    &:nth-child(2) {
      margin-top: 50px;
    }
  }
}
</style>
