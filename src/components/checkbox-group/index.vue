<template>
  <div class="nash-checkbox-group" :class="checkboxGroupClass">
    <slot></slot>
  </div>
</template>
<script>
const COMPONENT_NAME = 'nash-checkbox-group'
export default {
  name: COMPONENT_NAME,
  props: {
    // 排列防线 vertical垂直排列 horizontal水平排列
    direction: {
      type: String,
      default: 'vertical'
    },
    // v-model
    value: Array
  },
  computed: {
    checkboxGroupClass() {
      return {
        'nash-checkbox-group-horizontal': this.direction === 'horizontal'
      }
    }
  },
  methods: {
    toggleCheckValue(name, checkValue) {
      let value = this.value.slice()
      value = checkValue ? value.concat(name) : value.filter((item) => item !== name)
      this.$emit('input', value)
    },
    // 全选与反选 true全选 不传值则为反选
    toggleAll(all) {
      const value = this.value.slice()
      const children = this.$children
      const nameList = children.map((checkbox) => checkbox.name)
      this.$emit('input', all ? nameList : nameList.filter((checkboxName) => !value.includes(checkboxName)))
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.nash-checkbox-group {
  &.nash-checkbox-group-horizontal {
    .flex-box(flex-start,center);
  }
  .nash-checkbox {
    width: auto;
  }
}
</style>
