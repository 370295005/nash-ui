<template>
  <div id="app">
    <nash-page>
      <router-view />
    </nash-page>
  </div>
</template>

<script>
import NashPage from './components/NashPage.vue'
export default {
  components: {
    NashPage
  }
}
</script>
