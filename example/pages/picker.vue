<template>
  <div class="picker-page">
    <nash-button type="primary" @click="isVisible = true">Picker</nash-button>
    <nash-button type="primary" @click="isVisible1 = true">Muti-Column-Picker</nash-button>
    <nash-picker
      v-model="isVisible"
      title="标题"
      :data="data"
      :selected-index-list="selectedIndexList"
      @confirm="confirm"
      @cancel="cancel"
    ></nash-picker>
    <nash-picker
      v-model="isVisible1"
      title="标题"
      :data="data1"
      :selected-index-list="selectedIndexList"
      @confirm="confirm"
      @cancel="cancel"
    ></nash-picker>
  </div>
</template>
<script>
// TODO 关闭picker时会自动选中项会瞬间变为第一项
export default {
  data() {
    return {
      pickerValue: {},
      data: [
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
      data1: [
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
          },
          {
            text: '广州',
            value: '广州'
          }
        ]
      ],
      type: '',
      isVisible: false,
      isVisible1: false,
      selectedIndexList: []
    }
  },
  methods: {
    confirm(value, text, index) {
      this.$dialog.open({
        type: 'alert',
        slotContent: `<div style="line-height:1.5">value:${value.join(',')}</br>text:${text.join(
          ','
        )}</br>index:${index.join(',')}</div>`
      })
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
    margin: 5px 0;
  }
}
</style>
