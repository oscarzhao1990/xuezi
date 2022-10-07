<template>
  <div>
    <header id="top">
      <div class="top">
        <router-link to="/">
          <img src="https://web.codeboy.com/xuezi/img/header/logo.png" alt="" />
        </router-link>
        <span>欢迎注册</span>
      </div>
    </header>
    <div class="parent">
      <div class="container">
        <div class="panel rt">
          <form id="form-register">
            <div class="txt">
              <p>
                新用户注册
                <span>
                  <router-link to="/login">直接登录</router-link>
                </span>
              </p>
            </div>
            <div class="form-group">
              <label for="uname">用户名：</label>
              <input
                autocomplete
                required
                minlength="3"
                maxlength="12"
                type="text"
                placeholder="请输入用户名"
                autofocus
                name="uname"
                id="uname"
                v-model="uname"
              />
              <span class="msg-default">用户名长度在3到12位之间</span>
            </div>
            <div class="form-group">
              <label for="upwd">登录密码：</label>
              <input
                required
                type="password"
                minlength="6"
                maxlength="12"
                placeholder="请输入密码"
                name="upwd"
                autofocus
                id="upwd"
                v-model="upwd"
              />
              <span class="msg-default hidden">密码长度在6到12位之间</span>
            </div>
            <div class="form-group">
              <label for="upwdconfirm">确认密码：</label>
              <input
                required
                type="password"
                minlength="6"
                maxlength="12"
                placeholder="请确认密码"
                name="upwdconfirm"
                autofocus
                id="upwdconfirm"
                v-model="re_upwd"
              />
              <span class="msg-default hidden">密码长度在6到12位之间</span>
            </div>
            <div class="form-group">
              <label for="email">邮箱：</label>
              <input
                autocomplete
                required
                type="email"
                placeholder="请输入邮箱地址"
                name="email"
                id="email"
                v-model="email"
              />
              <span class="msg-default hidden">请输入合法的邮箱地址</span>
            </div>
            <div class="form-group">
              <label for="phone">手机号：</label>
              <input
                id="phone"
                name="phone"
                placeholder="请输入您的手机号"
                pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$"
                required
                type="text"
                v-model="phone"
              />
              <span class="msg-default hidden">请输入合法的手机号</span>
            </div>
            <div class="form-group">
              <label></label>
              <input
                @click="register"
                type="button"
                value="提交注册信息"
                id="bt-register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      re_upwd: "",
      email: "",
      phone: "",
    }
  },
  methods: {
    register() {
      const url = "data/user/register.php"
      const params = `uname=${this.uname}&upwd=${this.upwd}&email=${this.email}&phone=${this.phone}`
      this.axios.post(url, params).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          alert("注册成功")
          this.$router.push("/login")
        } else {
          alert("注册失败")
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/login.css"></style>
