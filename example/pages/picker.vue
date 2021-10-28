<template>
  <div class="picker-container">
    <nash-button :info="true" @click="showPicker">Picker</nash-button>
    <nash-picker v-model="pickerValue" :picker-list="pickerList"></nash-picker>
    {{ pickerValue }}
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
      pickerValue: '',
      pickerList: [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 5, 's', 'g', 'e', 'q', 'g', 'f']
      ]
    }
  },
  methods: {
    showPicker() {
      console.log('showpicker')
    }
  }
}
</script>
<style lang="stylus">
.picker-container
  .nash-btn
    width 100%
</style>
