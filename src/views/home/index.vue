<!-- home -->
<template>
  <div class="index-bg">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner">
        <van-image :src="item.bannerUrl" class="img" />
      </van-swipe-item>
    </van-swipe>
    <van-tabs>
      <van-tab v-for="item in list" :title="item.className">
        内容
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {
    getBanner,
    getCategory
  } from '@/api/home.js'
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        banner: [],
        list: []
      }
    },
    computed: {
      ...mapState({
        merInfo: state => state.app.merInfo,
      })
    },
    created() {
      this.init()
    },
    mounted() {

    },

    methods: {
      init() {
        const {
          merInfo
        } = this
        getBanner({
            locationType: 'home',
            MerTemplateId: merInfo.merTemplateId,
            sysTemplateId: merInfo.templateInfoId
          })
          .then((res) => {
            this.banner = res.data.list
          })
          .catch((err) => {})

        getCategory({})
          .then((res) => {
            const {
              list
            } = res.data
            this.list = list
            this.getSecond(list[0].id)
          })
          .catch((err) => {})
      },
      getSecond(id){
        
      }
    }
  }
</script>
<style lang="scss" scoped>
  .index-bg {
    width: 375px;

    .my-swipe {
      margin-bottom: 10px;

      .img {
        width: 375px;
        height: 200px;
      }
    }
  }
</style>
