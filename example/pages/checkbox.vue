<template>
  <div class="checkbox-page">
    <content-container title="基础用法">
      <nash-checkbox v-model="checkValue" type="circle">label</nash-checkbox>
    </content-container>
    <content-container title="方形图标">
      <nash-checkbox v-model="checkValue" type="square">label</nash-checkbox>
    </content-container>
    <content-container title="右侧显示">
      <nash-checkbox v-model="checkValue" type="circle" position="right">右侧显示</nash-checkbox>
    </content-container>
    <content-container title="禁用状态">
      <nash-checkbox v-model="checkValue" type="circle" position="right" disabled>禁用</nash-checkbox>
    </content-container>
    <content-container title="自定义颜色">
      <nash-checkbox v-model="checkValue" type="circle" position="right" color="green">绿色</nash-checkbox>
      <nash-checkbox v-model="checkValue" type="circle" position="right" color="purple">紫色</nash-checkbox>
    </content-container>
    <content-container title="按钮组">
      <nash-checkbox-group v-model="groupValue" ref="checkboxGroup">
        <nash-checkbox type="circle" position="right" color="green" name="1">绿色</nash-checkbox>
        <nash-checkbox type="circle" position="right" color="purple" name="2">紫色</nash-checkbox>
      </nash-checkbox-group>
      <nash-button @click="toggleAll(true)" type="success">全选</nash-button>
      <nash-button @click="toggleAll()" type="warning">反选</nash-button>
    </content-container>
    <content-container title="按钮组水平排列">
      <nash-checkbox-group v-model="groupValue" direction="horizontal" ref="checkboxGroup">
        <nash-checkbox type="circle" name="1">复选框1</nash-checkbox>
        <nash-checkbox type="circle" name="2">复选框2</nash-checkbox>
      </nash-checkbox-group>
    </content-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkValue: false,
      groupValue: ['2']
    }
  },
  methods: {
    toggleAll(value) {
      this.$refs.checkboxGroup.toggleAll(value)
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
