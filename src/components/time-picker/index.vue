<template>
  <nash-cascade-picker
    ref="cascadePicker"
    v-model="isVisible"
    :data="pickerData"
    :cancelText="cancelText"
    :confirmText="confirmText"
    :title="title"
    :swipeTime="swipeTime"
    :selectedIndexList="pickerSelectedIndexList"
    :autoSaveIndex="autoSaveIndex"
    @confirm="confirm"
    @cancel="cancel"
    @change="change"
  ></nash-cascade-picker>
</template>

<script>
import pickerMixins from '@/mixins/picker'
import visibleMixins from '@/mixins/visible'
import NashCascadePicker from '@/components/cascade-picker'
import { EVENT_CANCEL, EVENT_CONFIRM } from '../../lib/constanceEvent'
const COMPONENT_NAME = 'nash-time-picker'
export default {
  name: COMPONENT_NAME,
  mixins: [visibleMixins, pickerMixins],
  components: {
    NashCascadePicker
  },
  methods: {
    confirm(value, text, index) {
      this.$emit(EVENT_CONFIRM, value, text, index)
    },
    cancel() {
      this.$emit(EVENT_CANCEL)
    }
  }
}
</script>
