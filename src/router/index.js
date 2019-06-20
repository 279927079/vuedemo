import Vue from "vue";
import Router from "vue-router";
// import Home from "@/page/Home.vue";
// import Share from "@/page/Share.vue";
// import City from "@/page/city/City.vue";
// import Login from "@/page/Login.vue";
// import Forget from "@/page/Forget.vue";
// import Register from "@/page/Register.vue";
// import Sceneries from "@/page/Sceneries.vue";
import store from '../store/index'
Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      // name: "Home",
      component:(resolve)=>require(['@/page/Home.vue'],resolve),
      meta: {
        title:"首页",
        keepAlive: true
      }
    },
    {
      path: "/Share",
      component:(resolve)=>require(['@/page/Share.vue'],resolve),
      meta: {
        title:"门票",
        keepAlive: true
      }
    },
    {
      path: "/Login",
      name: "Login",
      component:(resolve)=>require(['@/page/Login.vue'],resolve),
      meta: {
        keepAlive: false
      }
      // meta: {
      //   isLogin: false
      // }
    },
    {
      path: "/Forget",
      name: "Forget",
      component:(resolve)=>require(['@/page/Forget.vue'],resolve),
      meta: {
        keepAlive: false
      }
      // meta: {
      //   isLogin: false
      // }
    },
    {
      path: "/Register",
      name: "Register",
      component:(resolve)=>require(['@/page/Register.vue'],resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/City",
      name: "City",
      component:(resolve)=>require(['@/page/city/City.vue'],resolve),
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/Sceneries",
      name: "Sceneries",
      component:(resolve)=>require(['@/page/Sceneries.vue'],resolve),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
});

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login',
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router

