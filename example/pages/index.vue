<template>
  <div class="index-page">
    <div class="item" v-for="item in routerList" :key="item.name">
      <nash-button type="primary" @click="toPage(item)">{{ item.name }}</nash-button>
    </div>
  </div>
</template>
<script>
import routerList from '../router/routes'
import NashButton from '@/components/button/index'
export default {
  components: {
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
    toPage(item) {
      const { path } = item
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/assets/css/style.less';
.index-page {
  .item {
    .flex-box(center,center);
    .nash-btn {
      width: 50%;
      margin: 5px auto;
    }
  }
}
</style>
