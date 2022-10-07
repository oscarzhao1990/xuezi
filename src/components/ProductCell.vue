<template>
  <div class="product" :id="p.lid">
    <router-link :to="'/pro_details?lid=' + p.lid"
      ><img v-src="p.pic" :alt="p.title"
    /></router-link>
    <div>
      <p>
        <span class="price">￥{{ p.price }}</span
        ><router-link
          :to="'/pro_details?lid=' + p.lid"
          class="title"
          title="${p.title}"
          >{{ p.title }}</router-link
        >
      </p>
      <div>
        <span class="reduc lf">-</span
        ><input type="text" value="1" class="lf" /><span class="add lf">+</span>
        <div class="addcart">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    p: {
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/products.css"></style>
