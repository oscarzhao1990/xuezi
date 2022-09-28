<template>
  <div>
    <!--楼梯3f-->
    <div class="floor" id="f3">
      <div class="floor_top">
        <img
          src="https://web.codeboy.com/xuezi/img/index/computer_icon.png"
          alt=""
        />
        {{ title }}
      </div>
      <div class="floor_content">
        <div class="food">
          <div class="desc">
            <p class="name">{{ items[0].title }}</p>
            <p class="details">
              {{ items[0].details }}
            </p>
            <p class="price">￥{{ items[0].price }}</p>
            <div @click="goto(0)" id="one" class="view">查看详情</div>
          </div>
          <img v-src="items[0].pic" alt="" />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">{{ items[1].title }}</p>
            <p class="details">
              {{ items[1].details }}
            </p>
            <p class="price">￥{{ items[1].price }}</p>
            <div @click="goto(1)" id="two" class="view">查看详情</div>
          </div>
          <img v-src="items[1].pic" />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">{{ items[2].title }}</p>
            <p class="price">￥{{ items[2].price }}</p>
            <div @click="goto(2)" id="three" class="view">查看详情</div>
          </div>
          <img v-src="items[2].pic" alt="" />
        </div>
        <div class="product">
          <img v-src="items[3].pic" alt="" />
          <h2>{{ items[3].title }}</h2>
          <p>￥{{ items[3].price }}</p>
          <a @click="goto(3)" id="four">查看详情</a>
        </div>
        <div class="product">
          <img v-src="items[4].pic" alt="" />
          <h2>{{ items[4].title }}</h2>
          <p>￥{{ items[4].price }}</p>
          <a @click="goto(4)" id="five">查看详情</a>
        </div>
        <div class="product">
          <img v-src="items[5].pic" alt="" />
          <h2>{{ items[5].title }}</h2>
          <p>￥{{ items[5].price }}</p>
          <a @click="goto(5)" id="fix">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      title: String,
    },
    items: {
      type: Array,
    },
  },
  methods: {
    goto(index) {
      const lid = this.items[index].href.split("=")[1]
      this.$router.push("/pro_details?lid=" + lid)
    },
  },
}
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/item_cat.css"></style>
