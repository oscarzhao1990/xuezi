<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import "./assets/css/base.css"
import "./assets/css/animate.css"
import MyHeader from "./components/MyHeader.vue"
import MyFooter from "./components/MyFooter.vue"
export default {
  components: { MyHeader, MyFooter },
}
</script>

<style lang="scss" scoped></style>
