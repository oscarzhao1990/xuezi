<template>
  <div>
    <!-- 页面顶部-->
    <header id="top">
      <div class="top">
        <router-link to="/">
          <img src="https://web.codeboy.com/xuezi/img/header/logo.png" />
        </router-link>
        <span>欢迎登录</span>
      </div>
    </header>
    <div id="container">
      <div id="cover" class="rt">
        <form id="form-login">
          <div class="txt">
            <p>
              登录学子商城
              <span>
                <a href="register.html">新用户注册</a>
              </span>
            </p>
            <div class="text">
              <input
                type="text"
                placeholder="请输入您的用户名"
                name="uname"
                id="uname"
                required
                autofocus
                v-model="uname"
              />
              <span
                ><img src="https://web.codeboy.com/xuezi/img/login/yhm.png"
              /></span>
            </div>
            <div class="text">
              <input
                type="password"
                id="upwd"
                placeholder="请输入您的密码"
                name="upwd"
                required
                minlength="6"
                maxlength="15"
                v-model="upwd"
              />
              <span
                ><img src="https://web.codeboy.com/xuezi/img/login/mm.png"
              /></span>
            </div>
            <div class="chose">
              <input
                type="checkbox"
                class="checkbox"
                id="ck_rmbUser"
                value="0"
              />自动登录
              <span>忘记密码？</span>
            </div>
            <input
              class="button_login"
              type="button"
              value="登录"
              id="bt-login"
              @click="login"
            />
          </div>
        </form>
      </div>
    </div>
    <!--错误提示-->
    <div id="showResult"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
export default {
  data() {
    return {
      uname: "",
      upwd: "",
    }
  },
  methods: {
    ...mapMutations(["changeUname"]),
    login() {
      const url = "data/user/login.php"
      const params = `uname=${this.uname}&upwd=${this.upwd}`
      this.axios.post(url, params).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          alert("登陆成功")
          this.changeUname(this.uname)
          this.$router.push("/")
        } else {
          alert("登陆失败")
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/login.css"></style>
