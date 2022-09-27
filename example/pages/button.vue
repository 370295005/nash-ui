<template>
  <div class="button-page">
    <content-container title="基本按钮">
      <div class="item" v-for="item in buttonList" :key="item.text">
        <nash-button :type="item.type" :disabled="item.disabled" :round="item.round" :inline="item.inline">
          {{ item.text }}
        </nash-button>
      </div>
    </content-container>
    <content-container title="圆角按钮">
      <nash-button type="primary" round>圆角按钮</nash-button>
      <nash-button type="success" round>圆角按钮</nash-button>
    </content-container>
    <content-container title="禁用状态">
      <nash-button type="primary" disabled>禁用按钮</nash-button>
      <nash-button type="warning" disabled>禁用按钮</nash-button>
    </content-container>
    <content-container title="按钮组">
      <nash-button-group>
        <nash-button type="primary">上</nash-button>
        <nash-button type="success">播放</nash-button>
        <nash-button type="info">暂停</nash-button>
        <nash-button type="primary">喜欢</nash-button>
        <nash-button type="error">下</nash-button>
      </nash-button-group>
    </content-container>
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
