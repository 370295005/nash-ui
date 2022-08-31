<template>
  <div class="nash-loading" v-show="isVisible" :class="text === '' ? 'center' : ''">
    <div class="loading" :class="type">
      <div class="spinners" v-for="item in 5" :key="item" v-show="type === 'spinner'"></div>
      <svg width="30" height="30" viewBox="0 0 30 30" class="dynamic-container" v-show="type === 'dynamic'">
        <circle cx="15" cy="15" r="14" fill="none" class="dynamic"></circle>
      </svg>
    </div>
    <div class="loading-text">{{ text }}</div>
  </div>
</template>
<script>
import visibleMixins from '@/mixins/visible'
const COMPONENT_NAME = 'nash-loading'
export default {
  name: COMPONENT_NAME,
  mixins: [visibleMixins],
  props: {
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '加载中'
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/css/animate.less';
@import '@/assets/css/style.less';
@import '@/assets/css/color.less';

.spinners-cal(@index) when(@index <= 6) {
  &:nth-child(@{index}) {
    animation-delay: ((@index - 1) / 6s);
  }
  .spinners-cal(@index + 1);
}

.nash-loading {
  .flex-box(space-evenly,center,column);
  min-width: 100px;
  min-height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: @mask-background-color;
  opacity: 0.7;
  border-radius: 10px;
  &.center {
    justify-content: center;
  }
  .loading {
    width: 30px;
    height: 30px;
  }
  .circle {
    border-radius: 50%;
    border: 3px solid @default-border;
    border-top: 3px solid @info;
    animation: rotate360 1s infinite linear;
  }
  .spinner {
    .flex-box(space-evenly, flex-end);
    width: 32px;
    height: 32px;
    .spinners {
      width: 3px;
      height: 20px;
      background-color: @default;
      animation: toggleHeight 0.7s infinite ease-in-out;
      .spinners-cal(1);
    }
  }
  .dynamic-container {
    animation: rotate360 2s infinite linear;
    .dynamic {
      stroke: #f3f3f3;
      stroke-width: 2;
      animation: stroke 2s infinite linear;
    }
  }
  .loading-text {
    color: @default;
    font-size: 12px;
  }
}

@keyframes toggleHeight {
  0% {
    height: 20px;
  }
  50% {
    height: 10px;
  }
  100% {
    height: 20px;
  }
}
@keyframes stroke {
  0% {
    stroke-dasharray: 5, 89;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 75, 89;
    stroke-dashoffset: -30px;
  }
  100% {
    stroke-dasharray: 10, 80;
    stroke-dashoffset: -90px;
  }
}
</style>
