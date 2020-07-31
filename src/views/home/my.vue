<!-- home -->
<template>
  <div class="about-container">
    <img :src="url" />
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      url:`${this.$fuluImg}/aa270b2a7f804c70a817d41d197a9acd.png`
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    // this.initData()
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => { })
        .catch(() => { })
    }
  }
}
</script>
<style lang="scss">
.about-container {

}
</style>
