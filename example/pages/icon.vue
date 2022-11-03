<template>
  <div class="icon-page">
    <div class="icon-item" v-for="item in iconList" :key="item">
      <i :class="item"></i>
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iconList: [
        'nashic-eye-invisible',
        'nashic-eye-visible',
        'nashic-square-right',
        'nashic-select',
        'nashic-pulldown',
        'nashic-pullup',
        'nashic-more',
        'nashic-back',
        'nashic-arrow',
        'nashic-close',
        'nashic-warn',
        'nashic-question',
        'nashic-right',
        'nashic-wrong',
        'nashic-info',
        'nashic-remove',
        'nashic-add',
        'nashic-share',
        'nashic-no-wifi',
        'nashic-smile',
        'nashic-sad',
        'nashic-email',
        'nashic-game',
        'nashic-wifi',
        'nashic-hot',
        'nashic-notification',
        'nashic-delete',
        'nashic-vip',
        'nashic-mute',
        'nashic-danger',
        'nashic-volume',
        'nashic-bad',
        'nashic-mobile-phone',
        'nashic-aim',
        'nashic-navigation',
        'nashic-safe-pay',
        'nashic-tag',
        'nashic-lock',
        'nashic-unlock',
        'nashic-edit',
        'nashic-scan',
        'nashic-qr-code',
        'nashic-calendar',
        'nashic-time',
        'nashic-red-packet',
        'nashic-star',
        'nashic-setting',
        'nashic-home',
        'nashic-credit-card',
        'nashic-mall',
        'nashic-microphone',
        'nashic-search',
        'nashic-good',
        'nashic-alert',
        'nashic-picture',
        'nashic-message',
        'nashic-phone',
        'nashic-location',
        'nashic-like',
        'nashic-camera',
        'nashic-person',
        'nashic-round-border',
        'nashic-important',
        'nashic-ok',
        'nashic-square-border'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
@import '@/assets/icon/nash-icon.less';
.icon-page {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  .icon-item {
    margin-top: 5px;
    .flex-box(flex-start,center,column);
    i {
      padding: 3px;
      font-size: 30px;
      color: black;
    }
    span {
      font-size: 12px;
      margin-top: 3px;
      color: black;
    }
  }
}
</style>
