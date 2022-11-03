<template>
  <div class="collapse-page">
    <content-container title="基础用法">
      <nash-collapse v-model="activeName">
        <nash-collapse-item title="标题" name="1">折叠面板基础用法</nash-collapse-item>
      </nash-collapse>
    </content-container>
    <content-container title="手风琴">
      <nash-collapse v-model="activeName1" accordion>
        <nash-collapse-item name="1" title="标题1">手风琴代码</nash-collapse-item>
        <nash-collapse-item name="2" title="标题2">手风琴代码</nash-collapse-item>
        <nash-collapse-item name="3" title="标题2">手风琴代码</nash-collapse-item>
      </nash-collapse>
    </content-container>
    <content-container title="禁用状态">
      <nash-collapse v-model="activeName2">
        <nash-collapse-item title="标题1" name="1" disabled>禁用状态的折叠面板</nash-collapse-item>
      </nash-collapse>
    </content-container>
    <content-container title="自定义图标">
      <nash-collapse v-model="activeName3">
        <nash-collapse-item title="标题1" name="1">
          <template #front-title>
            <i class="nashic-question"></i>
          </template>
          自定义图标折叠面板
        </nash-collapse-item>
        <nash-collapse-item title="标题2" name="2">
          自定义图标折叠面板
          <template #back-title>
            <i class="nashic-question"></i>
          </template>
        </nash-collapse-item>
      </nash-collapse>
    </content-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: ['1'],
      activeName1: '1',
      activeName2: ['1'],
      activeName3: ['1', '2']
    }
  }
}
</script>
<style>
@import '@/assets/icon/nash-icon.less';
</style>
