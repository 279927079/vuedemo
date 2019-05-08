<template>
  <section class="login">
    <div class="top-box">
      <span class="icon-back" onclick="window.history.go(-1);"></span>
      <router-link v-bind:to="'/Register'">注册</router-link>
    </div>
    <div class="logo">
      <img src="../../static/img/logo.png">
    </div>
    <div class="login-box">
      <ul>
        <li class="form-group">
          <div>
            <input
              class="login-input"
              type="text"
              maxlength="13"
              placeholder="手机号码"
              v-model="mobile"
            >
          </div>
        </li>
        <li class="form-group">
          <div class="password">
            <input class="login-input" type="password" placeholder="密码" v-model="password">
            <router-link v-bind:to="'/Forget'" class="find-password">找回密码</router-link>
          </div>
        </li>
        <li>
          <div class="form-btn">
            <button class="login-btn" type="primary" @click="login">登录</button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      password: ""
    };
  },

  methods: {
    login() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.mobile == "") {
        this.$vux.toast.text("手机号不能为空");
        return;
      } else if (!reg.test(this.mobile)) {
        this.$vux.toast.text("手机号格式不正确");
        return;
      } else if (this.password == "") {
        this.$vux.toast.text("密码不能为空");
        return;
      }
      this.$router.replace("/");
    }
  },
  created() {
    // window.document.title = "会员登录";
  }
};
</script>
<style scoped>
@import "../../static/css/login.css";
</style>


