<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import * as utils from '@/utils/index.js'
  import store from '@/store/index.js'
  import {
    mapActions,
    mapState
  } from 'vuex'
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
    }
  }
</script>
<style lang="scss"></style>
