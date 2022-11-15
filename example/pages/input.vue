<template>
  <div class="input-page">
    <content-container title="基础用法">
      <nash-input placeholder="请输入内容"></nash-input>
    </content-container>
    <content-container title="密码类型">
      <nash-input placeholder="请输入密码" type="password" showEye></nash-input>
    </content-container>
    <content-container title="只读">
      <nash-input placeholder="请输入内容" value="只读类型" readonly></nash-input>
    </content-container>
    <content-container title="禁用">
      <nash-input placeholder="请输入内容" value="禁用" disabled></nash-input>
    </content-container>
    <content-container title="显示图标">
      <nash-input placeholder="请输入手机号">
        <template #before>
          <i class="nashic-phone"></i>
        </template>
        <template #after>
          <i class="nashic-important"></i>
        </template>
      </nash-input>
    </content-container>
    <content-container title="可消除">
      <nash-input placeholder="请输入内容" clearable></nash-input>
    </content-container>
    <content-container title="自定义active边框颜色">
      <nash-input placeholder="请输入内容" activeBorderColor="#dd6161"></nash-input>
    </content-container>
  </div>
</template>

<script>
export default {}
</script>
