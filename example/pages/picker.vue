<template>
  <div class="picker-container">
    <nash-button :info="true" @click="showPicker">Picker</nash-button>
    <nash-picker></nash-picker>
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