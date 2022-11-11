<template>
  <div class="nash-notice-bar" :style="{ backgroundColor, color }">
    <slot name="nash-notice-bar-left"></slot>
    <div class="nash-notice-bar-warpper">
      <div class="nash-notice-bar-content" ref="content">
        {{ text }}
      </div>
    </div>
    <slot name="nash-notice-bar-right"></slot>
  </div>
</template>
<script>
const COMPONENT_NAME = 'nash-notice-bar'
export default {
  name: COMPONENT_NAME,
  props: {
    text: String,
    color: {
      type: String,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: '#409eff'
    },
    // 延迟时间 s
    delay: {
      type: [String, Number],
      default: 1
    },
    // 速度
    speed: {
      type: [String, Number],
      default: 60
    },
    // 是否滚动s
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.startScroll()
  },
  methods: {
    startScroll() {
      const content = this.$refs.content
      console.log(content.offsetWidth)
      window.requestAnimationFrame(() => {
        content.style.transform = 'translateX(10px)'
      })
      // if (!this.scrollable) return
    }
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
  overflow: hidden;
  .nash-notice-bar-warpper {
    .flex-box(normal,center);
    flex: 1;
    overflow: hidden;
    .nash-notice-bar-content {
      white-space: nowrap;
    }
  }
}
</style>
