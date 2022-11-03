<template>
  <div class="nash-collapse-item" :class="{ 'is-open': open, disabled }">
    <div class="nash-collapse-item-header" @click.stop="toggleCollapseItem">
      <div class="nash-collapse-item-title">
        <slot name="front-title"></slot>
        <div>{{ title }}</div>
        <slot name="back-title"></slot>
      </div>
      <div class="nash-collapse-item-icon">
        <i class="nashic-select"></i>
      </div>
    </div>
    <div class="nash-collapse-item-wrapper" ref="wrapper">
      <div class="nash-collapse-item-content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'nash-collapse-item'
export default {
  name: COMPONENT_NAME,
  props: {
    title: String,
    name: [Number, String],
    disabled: Boolean
  },
  computed: {
    // 是否为打开状态
    open() {
      const parent = this.parent
      const value = parent?.value || null
      const accordion = parent?.accordion || false
      const name = this.name
      return accordion ? value === this.name : value.some((item) => item === name)
    },
    // 获取父元素
    parent() {
      return this.$parent || null
    },
    height() {
      return this.$refs.content.offsetHeight
    }
  },
  watch: {
    open(nv) {
      const { wrapper, content } = this.$refs
      const { offsetHeight } = content
      wrapper.style.height = nv ? `${offsetHeight}px` : '0'
    }
  },
  mounted() {
    const { wrapper, content } = this.$refs
    const { offsetHeight } = content
    wrapper.style.height = this.open ? `${offsetHeight}px` : '0'
  },
  methods: {
    // 切换展开
    toggleCollapseItem() {
      if (!this.parent || this.disabled) return
      const name = this.name
      this.parent.toggleCollapse(name, !this.open)
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/color.less';
@import '@/assets/css/style.less';
@import '@/assets/icon/nash-icon.less';
.nash-collapse-item {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  .nash-collapse-item-header {
    .flex-box(space-between,center);
    padding: 10px 16px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      pointer-events: none;
      right: 16px;
      left: 16px;
      bottom: 0;
      border-bottom: 1px solid @collapse-border;
    }
    .nash-collapse-item-title {
      .flex-box(flex-start,center);
      font-size: 14px;
      line-height: 24px;
    }
    .nash-collapse-item-icon {
      transition: transform 0.2s ease-in-out;
      i {
        font-size: 16px;
      }
    }
    &:active {
      background-color: @collapse-active;
    }
  }
  .nash-collapse-item-wrapper {
    position: relative;
    transition: height 0.2s ease-in-out;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      pointer-events: none;
      right: 16px;
      left: 16px;
      bottom: 0;
      border-bottom: 1px solid @collapse-border;
    }
    .nash-collapse-item-content {
      padding: 12px 16px;
      font-size: 14px;
      line-height: 1.5;
    }
  }

  &.is-open {
    .nash-collapse-item-header {
      .nash-collapse-item-icon {
        transform: rotate(180deg);
      }
    }
  }
  &.disabled {
    cursor: not-allowed;
    color: @collapse-disabled;
    .nash-collapse-item-header {
      &:active {
        background-color: transparent;
      }
    }
  }
}
</style>
