<template>
  <div class="picker-container">
    <nash-button :info="true" @click="showPicker">Picker</nash-button>
    <nash-picker v-model="isVisible" :picker-list="pickerList" @valueChange="valueChange"></nash-picker>
  </div>
</template>
<script>
import NashButton from '../../src/components/button/index.vue'
import NashPicker from '../../src/components/picker/index.vue'
export default {
  components: {
    NashButton,
    NashPicker
  },
  data() {
    return {
      pickerValue: {},
      pickerList: [
        [
          {
            text: '剧毒',
            value: '剧毒'
          },
          {
            text: '蚂蚁',
            value: '蚂蚁'
          },
          {
            text: '幽鬼',
            value: '幽鬼'
          },
          {
            text: '主宰',
            value: '主宰'
          },
          {
            text: '卡尔',
            value: '卡尔'
          },
          {
            text: '宙斯',
            value: '宙斯'
          },
          {
            text: '巫医',
            value: '巫医'
          },
          {
            text: '巫妖',
            value: '巫妖'
          },
          {
            text: '神谕者',
            value: '神谕者'
          },
          {
            text: '撼地神牛',
            value: '神谕者'
          },
          {
            text: '蓝胖子',
            value: '蓝胖子'
          },
          {
            text: '水晶室女',
            value: '水晶室女'
          },
          {
            text: '莉娜',
            value: '莉娜'
          },
          {
            text: '斯拉克',
            value: '斯拉克'
          },
          {
            text: '斯拉达',
            value: '斯拉达'
          }
        ]
      ],
      isVisible: false
    }
  },
  watch: {
    pickerValue(nv) {
      console.log(nv)
    }
  },
  methods: {
    showPicker() {
      this.isVisible = true
    },
    valueChange(value) {
      this.$toast({ text: value })
    }
  }
}
</script>
<style lang="stylus">
.picker-container
  .nash-btn
    width 100%
</style>
