import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)
axios.defaults.baseURL = "https://web.codeboy.com/xuezi/"
Vue.directive("src", function (el, bindings) {
  el.src = "https://web.codeboy.com/xuezi/" + bindings.value
})
import VAS from "vue-awesome-swiper"
Vue.use(VAS)
import "swiper/css/swiper.css"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
