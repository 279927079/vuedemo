<template>
  
  <nav class="tabbar-nav flex-box">
    <div class="h100"></div>
    <router-link v-bind:to="'/'" class="flex-item">
      <i class="home"></i>
      <span>首页</span>
    </router-link>
    <router-link v-bind:to="'/Sceneries'" class="flex-item">
      <i class="tickets"></i>
      <span>门票</span>
    </router-link>
    <router-link v-bind:to="'/share'" class="flex-item">
      <i class="my"></i>
      <span>分享</span>
    </router-link>
    <router-link v-bind:to="'/param '" class="flex-item">
      <i class="service"></i>
      <span>客服</span>
    </router-link>
    <router-link v-bind:to="'/Login'" class="flex-item">
      <i class="my"></i>
      <span>我的</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavList",
  data() {
    return {};
  }
};
</script>

<style>
.h100{
  height: 100px;
}
.tabbar-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  border-top: 1px solid #ddd;
  background: #f5f5f5;
  z-index: 99;
  background-color: #fff;
}
.flex-box {
  display: flex;
}
.flex-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.tabbar-nav a {
  padding: 20px 0;
}

.tabbar-nav i {
  display: block;
  background-image: url("../../static/img/wxicons.png");
  background-repeat: no-repeat;
}

.tabbar-nav i.home {
  width: 0.45rem;
  height: 0.44rem;
  margin: 0 auto;
  background-size: 3rem 2.4rem;
  background-position: 0 0;
}

.tabbar-nav .router-link-exact-active i.home {
  background-position: 0 -0.6rem;
}
.tabbar-nav i.tickets {
  width: 0.45rem;
  height: 0.44rem;
  margin: 0 auto;
  background-size: 3rem 2.4rem;
  background-position: -0.55rem 0;
}
.tabbar-nav .router-link-exact-active i.tickets {
  background-position: -0.55rem -0.6rem;
}
.tabbar-nav i.service {
  width: 0.45rem;
  height: 0.44rem;
  margin: 0 auto;
  background-size: 3rem 2.4rem;
  background-position: -1.2rem 0;
}
.tabbar-nav .router-link-exact-active i.service {
  background-position: -1.2rem -0.6rem;
}
.tabbar-nav i.my {
  width: 0.45rem;
  height: 0.44rem;
  margin: 0 auto;
  background-size: 3rem 2.4rem;
  background-position: -1.8rem 0;
}
.tabbar-nav .router-link-exact-active i.my {
  background-position: -1.8rem -0.6rem;
}
.tabbar-nav span {
  display: block;
  font-size: 24px;
  color: #5e5e5e;
  margin-top: 10px;
  transform: scale(0.83333333);
  text-align: center;
}
.tabbar-nav .router-link-exact-active span {
  color: #1fba22;
}
</style>
