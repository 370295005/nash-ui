<template>
  <transition name="nash-tip-zoom">
    <!-- <div class="nash-tip" :data-pos="position" @click="handleClick">
      <i class="nash-tip-angle" ref="angle"></i>
      <i class="nash-tip-close nashic-close" @click.stop="closeTip"></i>
      <div class="nash-tip-content" v-html="content"></div>
    </div> -->
    <div class="nash-tip">
      <div class="nash-tip-slot">
        <slot></slot>
        <div class="nash-tip-container" :data-pos="position">
          <i class="nash-tip-angle" ref="angle"></i>
          <i class="nash-tip-close nashic-close" @click.stop="closeTip"></i>
          <div class="nash-tip-content" v-html="content"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import visibleMixins from '@/mixins/visible'
const COMPONENT_NAME = 'nash-tip'
const EVENT_CLICK = 'click'
const EVENT_CLOSE = 'close'
export default {
  name: COMPONENT_NAME,
  mixins: [visibleMixins],
  props: {
    position: {
      type: String,
      default: 'top'
    },
    content: String
  },
  methods: {
    handleClick() {
      this.hide()
      this.$emit(EVENT_CLICK)
    },
    closeTip() {
      this.hide()
      this.$emit(EVENT_CLOSE)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/default.less';
.nash-tip {
  position: relative;
  .nash-tip-slot {
    .nash-tip-container {
      .flex-box(normal,normal);
      max-height: 60px;
      padding: 10px 38px 10px 16px;
      position: absolute;
      z-index: @tip-zIndex;
      font-size: 12px;
      color: @black;
      background: @tip-background;
      border-radius: 5px;
      transition: opacity 0.2s;
      &[data-pos='top'],
      &[data-pos='bottom'] {
        .nash-tip-angle {
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &[data-pos='top'] {
        top: -100%;
        left: 50%;
        transform: translateX(-50%);
        .nash-tip-angle {
          top: 0;
          &::before {
            margin-top: -6px;
            transform: rotate(0deg);
          }
        }
      }
      &[data-pos='bottom'] {
        .nash-tip-angle {
          bottom: 0;
          &::before {
            margin-bottom: -6px;
            transform: rotate(180deg);
          }
        }
      }
      &[data-pos='left'],
      &[data-pos='right'] {
        .nash-tip-angle {
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &[data-pos='left'] {
        .nash-tip-angle {
          left: 0;
          &::before {
            margin-left: -9px;
            transform: rotate(-90deg);
          }
        }
      }
      &[data-pos='right'] {
        .nash-tip-angle {
          right: 0;
          &::before {
            margin-right: -9px;
            transform: rotate(90deg);
          }
        }
      }
      .nash-tip-angle {
        position: absolute;
        &::before {
          content: '';
          display: block;
          border-width: 0 6px 6px;
          border-style: solid;
          border-color: transparent transparent @tip-background;
        }
      }
      .nash-tip-close {
        position: absolute;
        right: 14px;
        top: 12px;
        width: 12px;
        height: 12px;
        padding: 0;
        color: inherit;
        outline: none;
        border: none;
        background: none;
        transform: scale(1.3);
      }
      .nash-tip-content {
        max-width: 200px;
        min-height: 18px;
        line-height: 18px;
        display: flex;
        flex: 1;
        overflow: hidden;
      }
    }
  }
}
.nash-tip-zoom-enter-active {
  animation: tip-in 0.4s;
}
.nash-tip-zoom-leave-active {
  animation: tip-out 0.2s;
}
@keyframes tip-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes tip-out {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
