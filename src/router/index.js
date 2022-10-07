import Vue from "vue"
import VueRouter from "vue-router"
import IndexView from "../views/IndexView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      hideHeader: true,
      title: "登陆页面 - 学子商城",
    },
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      hideHeader: true,
      title: "注册页面 - 学子商城",
    },
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "404 - 学子商城",
    },
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/products/:kw?",
    props: true,
    name: "Products",
    meta: {
      title: "商品列表 - 学子商城",
    },
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/pro_details",
    name: "ProDetails",
    meta: {
      title: "商品详情 - 学子商城",
    },
    component: () => import("../views/ProDetails.vue"),
  },
  {
    path: "/",
    name: "inde",
    meta: {
      title: "首页 - 学子商城",
    },
    component: IndexView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
