<template>
  <div class="wrapper">
    <div class="item" v-for="item in routerList" :key="item.name">
      <nash-button :warning="true" @click="toDetail(item)">{{ item.name }}</nash-button>
    </div>
  </div>
</template>
<script>
import NashButton from '../../src/components/button/index.vue'
import routerList from '../router/routes'
import NashPage from '../components/NashPage.vue'
export default {
  components: {
    NashPage,
    NashButton
  },
  computed: {
    routerList() {
      return routerList.filter((e) => {
        return e.name !== 'Index'
      })
    }
  },
  methods: {
    toDetail(item) {
      const { path } = item
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="stylus">
.wrapper {
  .item {
    .nash-btn {
      width: 100%;
      margin: 5px 0px;
    }
  }
}
</style>