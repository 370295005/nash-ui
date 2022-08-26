<template>
 <div class="button-page">
  <nash-button v-for="item in btnList" :key="item.text" :text="item.text" :type="item.type" @click="handleClick(item)">
  </nash-button>
 </div>
</template>
<script lang="ts" setup>
import NashButton from 'component/button/index.vue'
import { ref } from 'vue';
const btnList = ref([{
 text: '默认按钮',
 type: ''
},
{
 text: '主要按钮',
 type: 'primary'
}])

const handleClick = (event: any) => {
 console.log(event);
}
</script>

<style lang="less" scoped>
</style>