<template>
  <div class="login-bg">
    <van-form @submit="onSubmit">
      <div class="row-bg">
        <van-field v-model="userInfo.username" name="username" label="用户名" placeholder="用户名" />
      </div>
      <div class="row-bg">
        <van-field v-model="userInfo.password" type="password" name="password" label="密码" placeholder="密码" />
      </div>
      <div class="row-bg">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          username: '',
          password: ''
        }
      }
    },
    computed: {},
    mounted() {},
    methods: {
      onSubmit(values) {
        console.log(values)
        this.$store.commit('setUserInfo',values);
        this.$router.push({path:'/'});
      }
    },
  }
</script>

<style lang="scss" scoped>
  .login-bg {
    padding: 12px;

    .row-bg {
      margin-bottom: 12px;
    }
  }
</style>
