<template>
  <div class="checkbox-page">
    <div class="title">circle</div>
    <nash-checkbox v-model="checkValue" type="circle">label</nash-checkbox>
    <div class="title">square</div>
    <nash-checkbox v-model="checkValue" type="square">label</nash-checkbox>
    <div class="title">position:right</div>
    <nash-checkbox v-model="checkValue" type="circle" position="right">右侧显示</nash-checkbox>
    <div class="title">disabled</div>
    <nash-checkbox v-model="checkValue" type="circle" position="right" disabled>禁用</nash-checkbox>
    <div class="title">自定义颜色</div>
    <nash-checkbox v-model="checkValue" type="circle" position="right" color="green">绿色</nash-checkbox>
    <nash-checkbox v-model="checkValue" type="circle" position="right" color="purple">紫色</nash-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkValue: false
    }
  }
}
</script>
<style lang="less" scoped>
.checkbox-page {
  .title {
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(231, 231, 231);
  }
  .nash-checkbox {
    background-color: #fff;
  }
}
</style>
