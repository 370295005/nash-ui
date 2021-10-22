<template>
  <div class="nash-ui-page">
    <div class="back" @click="goBack"><img src="../assets/images/icon_navbar_back@2x.png" /></div>
    <div class="title">{{ title || $route.meta.title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus">
@import '@/assets/css/style.styl';
.nash-ui-page {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f7f8fa;
  .back {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 11px;
    left: 16px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    width: 100%;
    height: 44px;
    background-color: $normal-white;
    font-size: 18px;
    font-weight: bold;
    line-height: 44px;
    text-align: center;
    color: $normal-black;
  }
  .content {
    height: calc(100vh - 44px);
    padding: 20px 16px;
    overflow-y: auto;
  }
}
</style>