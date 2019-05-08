<template>
  <section class="login">
    <div class="top-box">
      <span class="icon-back" onclick="window.history.go(-1);"></span>
      <router-link v-bind:to="'/Register'">注册</router-link>
    </div>
    <h2 class="title">找回密码</h2>
    <div class="login-box">
      <ul>
        <li class="form-group">
          <div>
            <input class="login-input" type="text" v-model="mobile" placeholder="手机号码">
          </div>
        </li>
        <li class="form-group">
          <div class="password">
            <input class="login-input" type="password" v-model="password" placeholder="密码">
            <button class="find-password" :disabled="getCode.disabled" @click="handleGetCode">{{getCode.txt}}</button>
          </div>
        </li>
        <li>
          <div class="form-btn">
            <button class="login-btn" type="button" @click="login">确定</button>
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
      password: "",
      getCode: {
        txt: "获取验证码",
        disabled: false
      },
      userToken: "",
      show: false
    };
  },
  methods: {
    login() {
      let _this = this;
      if (this.mobile === "" || this.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.$axios
          .post("/xxx/login", { user: mobile, password: pwd })
          .then(data => {
            //登录失败,先不讨论
            if (data.data.status != 200) {
              //iViewUi的友好提示
              this.$Message.error(data.data.message);
              //登录成功
            } else {
              //设置Vuex登录标志为true，默认userLogin为false
              this.$store.dispatch("userLogin", true);
              //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
              //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
              localStorage.setItem("Flag", "isLogin");
              //iViewUi的友好提示
              this.$Message.success(data.data.message);
              //登录成功后跳转到指定页面
              this.$router.push("/home");
            }
          })
          .then(res => {
            console.log(res.data);
            _this.userToken = "Bearer " + res.data.data.body.token;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            _this.$router.push("/home");
            alert("登陆成功");
          })
          .catch(error => {
            alert("账号或密码错误");
            console.log(error);
          });
      }
    },
    handleGetCode() {
      console.log("sdfs");
      if (this.mobile) {
        this.getCode.disabled = true;
        this.getCode.txt = "获取中...";
        let seconds = 10;
        let self = this;
        let time = setInterval(function() {
          --seconds;
          self.getCode.txt = seconds + "s";
          if (seconds <= 0) {
            clearInterval(time);
            self.getCode.disabled = false;
            self.getCode.txt = "获取验证码";
          }
        }, 1000);
      } else {
        this.$vux.toast.text("请先填写手机号");
      }
    }
  },
  created() {
    window.document.title = "找回密码";
  }
};
</script>
<style scoped>
@import "../../static/css/login.css";
</style>


