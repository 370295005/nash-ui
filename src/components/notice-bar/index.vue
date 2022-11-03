<template>
  <div class="nash-notice-bar">
    <slot name="nash-notice-bar-left"></slot>
    <slot v-if="$slots.default"></slot>
    <div class="nash-notice-bar-content" v-else>
      {{ text }}
    </div>
    <slot name="nash-notice-bar-right"></slot>
  </div>
</template>
<script>
import slotMixins from '@/mixins/slots.js'
const COMPONENT_NAME = 'nash-notice-bar'
export default {
  name: COMPONENT_NAME,
  mixins: [slotMixins],
  props: {
    text: String,
    color: String,
    backgroundColor: String,
    delay: {
      type: [String, Number],
      default: 1
    },
    speed: {
      type: [String, Number],
      default: 60
    }
  },
  mounted() {
    console.log(this.slots())
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.nash-notice-bar {
  .flex-box(space-between,center);
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 24px;
}
</style>
