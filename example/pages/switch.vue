<template>
  <div class="switch-page">
    <div class="title">switch</div>
    <nash-switch v-model="checkValue">Switch</nash-switch>
    <div class="title">disabled</div>
    <nash-switch v-model="checkValue" disabled>Disabled Switch</nash-switch>
    <div class="title">slot</div>
    <nash-switch v-model="checkValue">
      <div class="switch-slot">
        <img :src="avatar" class="avatar" />
        <span style="color: red">图片</span>
      </div>
    </nash-switch>
  </div>
</template>
<script>
import avatar from '../assets/images/avatar.webp'
export default {
  data() {
    return {
      checkValue: false,
      avatar
    }
  }
}
</script>
<style lang="less" scoped>
.switch-page {
  .title {
    margin-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(231, 231, 231);
  }
  .switch-slot {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
