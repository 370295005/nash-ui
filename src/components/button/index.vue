<template>
 <div class="nash-button" :style="{ backgroundColor: color }" :class="btnClass" @click="click">{{ text }}</div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
const emit = defineEmits(['click'])
const prop = defineProps({
 // 按钮类型
 type: {
  type: String,
  default: () => ''
 },
 // 按钮显示的文字
 text: {
  type: String,
  default: '按钮'
 },
 // 按钮自定义背景颜色
 color: {
  type: String,
  default: () => ''
 }
})
const btnClass = computed(() => {
 return prop.type ? `nash-button-${prop.type}` : ''
})
const click = (event: any) => {
 emit('click', event)
}
</script>
<style lang="less" scoped>
@import '@/assets/style/util.less';

.btn-active (@color) {
 &:active {
  background-color: @color;
 }
}

.nash-button {
 height: 44px;
 margin: 0;
 padding: 0 10px;
 position: relative;
 display: inline-block;
 text-align: center;
 line-height: 44px;
 font-size: 14px;
 color: @normal-black;
 border-radius: 3px;
 background-color: @normal-white;
 opacity: 1;
 transition: opacity 0.2s;
 outline: 0;
 cursor: pointer;
 border: 1px solid #dcdfe6;
 border-radius: 4px;
 .btn-active (#ccc)
}

.nash-button-primary {
 background-color: @button-primary;
 color: @normal-white;
 .btn-active(#00a24d);
}

.nash-button-info {
 background-color: @button-info;
 color: @normal-white;
 .btn-active(#3c6fcd);
}

.nash-button-warning {
 background-color: @button-warning;
 color: @normal-white;
 .btn-active(#d84a4a);
}
</style>