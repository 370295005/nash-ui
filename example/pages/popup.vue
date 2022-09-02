<template>
  <div class="popup-page">
    <nash-button v-for="item in direction" :key="item" @click="showPopup(item)" type="primary">{{ item }}</nash-button>
    <nash-popup :direction="popupDirection" v-model="isVisible">
      <template #content>
        <div class="popup-content">
          <div class="my-title">{{ title }}</div>
          <div class="my-content">
            <img :src="avatar" />
          </div>
        </div>
      </template>
    </nash-popup>
  </div>
</template>
<script>
import avatar from '../assets/images/avatar.webp'
export default {
  data() {
    return {
      title: '标题',
      content: '我是内容',
      direction: ['top', 'bottom', 'left', 'right'],
      popupDirection: 'top',
      isVisible: false,
      avatar
    }
  },
  methods: {
    showPopup(direction) {
      this.popupDirection = direction
      this.isVisible = true
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.popup-page {
  .flex-box(center,center,column);
  .nash-btn {
    width: 343px;
    margin: 5px 0;
  }
  .popup-content {
    width: 100vw;
    .my-title {
      text-align: center;
      font-size: 14px;
      margin: 10px 0;
    }
    .my-content {
      font-size: 16px;
      height: 200px;
      img {
        width: 150px;
        height: 150px;
        margin: 20px auto 0;
        display: block;
        border-radius: 50%;
      }
    }
  }
}
</style>
