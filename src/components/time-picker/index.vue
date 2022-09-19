<template>
  <nash-picker></nash-picker>
</template>

<script>
import visibleMixins from '@/mixins/visible'
import NashPicker from '@/components/picker'
const name = 'nash-time-picker'
export default {
  mixins: [visibleMixins],
  components: {
    NashPicker
  }
}
</script>
