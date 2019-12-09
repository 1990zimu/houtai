import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const login = () => import("@/view/login.vue")
const base = () => import("@/view/base.vue")
const fxUser = () => import("@/components/fenxi/user.vue")
const fxOrder = () => import("@/components/fenxi/order.vue")
const qxglList = () => import("@/components/qxgl/list.vue")
const qxglAdd = () => import("@/components/qxgl/add.vue")
const jsList = () => import("@/components/jsgl/list.vue")
const jsAdd = () => import("@/components/jsgl/add.vue")




import axios from "axios"
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/base',
      name: 'base',
      component: base,
      children: [
        {
          path: 'fxuser',
          name: 'fxuser',
          component: fxUser,
        },
        {
          path: 'fxorder',
          name: 'fxorder',
          component: fxOrder,
        },
        {
          path: 'qxgllist',
          name: 'qxgllist',
          component: qxglList,
        },
        {
          path: 'qxgladd',
          name: 'qxgladd',
          component: qxglAdd,
        },
        {
          path: 'jslist',
          name: 'jslist',
          component: jsList,
        },
        {
          path: 'jsadd',
          name: 'jsadd',
          component: jsAdd,
        },
      ]
    },
    {
      path: "/",
      redirect: "/base/fxuser"
    }
  ]
})

//全局路由守卫 -- 当路由进入页面 -- 验证 token 是否过期 或者 是否存在
// token 验证失败 --- 登录页面
// 成功 ---进入
router.beforeEach((to, from, next) => {
  // console.log(to)

  let token = localStorage.getItem("houtaitoken") ? JSON.parse(localStorage.getItem("houtaitoken")).token : ""
  // 排除 登录页面
  if (to.name != "login") {
    axios.get("/checktoken", {
      headers: { token: token }
    }).then(res => {
      // console.log(res.data.err_code)
      //如果 res.data.err_code== 400 失败--- 跳转到登录页面
      if (res.data.err_code == 200) {
        next();
      } else {
        console.log("token 过期")
        router.push({ name: "login" })
      }
    })
  } else {
    next();
  }
})


export default router;
