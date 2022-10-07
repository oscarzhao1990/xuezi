<template>
  <div>
    <!-- banner部分-->
    <div class="store">
      <img src="https://web.codeboy.com/xuezi/img/index/index_guild.png" />
    </div>

    <!--笔记本电脑列表-->
    <div class="store_action">
      <div class="store_action_left">
        <div class="store_action_left_content">
          <div id="plist">
            <div class="salc_top">笔记本电脑</div>
            <div class="salc_content">
              <img
                class="loading"
                src="https://web.codeboy.com/xuezi/img/loading.gif"
                v-if="!data"
              />
              <product-cell
                v-else
                v-for="item in data.data"
                :key="item.lid"
                :p="item"
              ></product-cell>
            </div>
            <!--分页条-->
            <div class="pages" v-if="data">
              <span @click="now--" :class="{ disabled: now === 1 }"
                >上一页</span
              >
              <span
                v-for="n in data.pageCount"
                :key="n"
                @click="now = n"
                :class="{ active: now === n }"
                >{{ n }}</span
              >
              <span @click="now++" :class="{ disabled: now === data.pageCount }"
                >下一页</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="store_action_right rt">
        <div class="store_action_right_top">
          <p>
            <img
              src="https://web.codeboy.com/xuezi/img/foodstore/foodstore_icon2.png"
              alt=""
            />商家公告
          </p>
          <div>
            <p>本店推出全网最低价套餐，保证比其他平台的价格要低！</p>
            <p>不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！</p>
            <p>晚上10点以后订餐需另加送餐费2元！谢谢合作！</p>
          </div>
        </div>
        <div class="store_action_right_cart">
          <div class="store_action_right_cart_top">
            购物车 <span class="clear rt">清空</span>
          </div>
          <div class="store_action_right_cart_content">
            <div></div>
            <!--<div id="5">-->
            <!--<span>精选双人餐</span>-->
            <!--<div><span class="cart_reduc lf">-</span><input type="text" value="1" class="lf"/><span class="cart_add lf">+</span></div>-->
            <!--<span class="rt pc">￥:<span class="cart_unit_price">20.00</span></span>-->
            <!--</div>-->
          </div>
          <div class="sarc">
            <div class="total_price lf">
              <img
                src="https://web.codeboy.com/xuezi/img/foodstore/foodstore_car_2.png"
                alt=""
              />￥:<span>0.00</span>
            </div>
            <div class="settle lf">
              <a href="cart.html" style="color: #fff">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCell from "@/components/ProductCell.vue"
export default {
  components: { ProductCell },
  props: {
    kw: {
      default: "",
    },
  },
  data() {
    return {
      data: null,
      now: 1,
    }
  },
  methods: {
    getData() {
      const url = `data/product/list.php?pno=${this.now}&kw=${this.kw}`
      this.axios.get(url).then((res) => {
        console.log(res)
        this.data = res.data
      })
    },
  },
  mounted() {
    this.getData()
  },
  watch: {
    now() {
      this.getData()
    },
    $route() {
      this.getData()
      this.now = 1
    },
  },
}
</script>

<style lang="scss" scoped>
.pages {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: #eee;
  > span {
    display: block;
    margin: 5px;
    background-color: #ddd;
    padding: 5px 10px;
    color: #52a5e3;
    user-select: none;
    cursor: pointer;
    &.active {
      background-color: #52a5e3;
      color: #fff;
      pointer-events: none;
    }
    &.disabled {
      background-color: #ccc;
      color: #bbb;
      pointer-events: none;
    }
  }
}
</style>
<style scoped src="../assets/css/products.css"></style>
