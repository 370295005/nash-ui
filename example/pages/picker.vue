<template>
  <div class="picker-page">
    <nash-button type="primary" @click="showPicker">Picker</nash-button>
    <nash-picker
      v-model="isVisible"
      subTitle="标题"
      :picker-list="pickerList"
      :selected-index="selectedIndex"
      @confirm="confirm"
      @cancel="cancel"
      @indexChange="indexChange"
    ></nash-picker>
  </div>
</template>
<script>
// TODO 关闭picker时会自动选中项会瞬间变为第一项
export default {
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
        ],
        [
          {
            text: '深圳',
            value: '深圳'
          }
        ]
      ],
      isVisible: false,
      selectedIndex: [3, 0]
    }
  },
  methods: {
    showPicker() {
      this.isVisible = true
    },
    confirm(value) {
      this.$toast({ text: value, delay: 1000 })
    },
    indexChange(list) {
      this.selectedIndex = list
    },
    cancel() {
      this.$toast('picker cancel')
    }
  }
}
</script>
<style lang="less" scoped>
.picker-page {
  .nash-btn {
    width: 100%;
  }
}
</style>
