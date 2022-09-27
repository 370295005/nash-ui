<template>
  <div class="content-container-comp">
    <div class="content-container-title">{{ title }}</div>
    <div class="content-container-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="less">
.content-container-comp {
  .content-container-title {
    font-size: 12px;
    margin: 15px 0;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
