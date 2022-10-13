<!-- 折叠面板 -->
<!-- https://vant-contrib.gitee.io/vant/#/zh-CN/collapse -->
<template>
  <div class="nash-collapse">
    <div class="title"></div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'isActive',
    event: 'toggle'
  },
  props: {
    // 是否为手风琴模式
    accordion: Boolean
  }
}
</script>
