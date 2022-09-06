<template>
  <div class="button-page">
    <div class="item" v-for="item in buttonList" :key="item.text">
      <nash-button :type="item.type">{{ item.text }}</nash-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonList: [
        {
          type: '',
          text: '默认按钮'
        },
        {
          type: 'primary',
          text: '主要按钮'
        },
        {
          type: 'success',
          text: '成功按钮'
        },
        {
          type: 'warning',
          text: '警告按钮'
        },
        {
          type: 'error',
          text: '错误按钮'
        },
        {
          type: 'info',
          text: '信息按钮'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.item {
  .flex-box(center,center);
  margin: 6px 0;
}
</style>
