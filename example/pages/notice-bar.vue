<template>
  <div class="notice-bar-page">
    <content-container title="基础用法">
      <nash-notice-bar :text="text"></nash-notice-bar>
    </content-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
    }
  }
}
</script>
