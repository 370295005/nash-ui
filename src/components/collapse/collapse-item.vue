<template>
  <div class="nash-collapse-item">
    <div class="nash-collapse-item-title">{{ title }}</div>
    <div class="nash-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    name: [Number, String]
  }
}
</script>
