<template>
  <div class="product" :id="p.lid">
    <router-link href="product_details.html?lid=${p.lid}"
      ><img src="${p.pic}" alt="${p.title}"
    /></router-link>
    <div>
      <p>
        <span class="price">￥${p.price}</span
        ><a
          href="product_details.html?lid=${p.lid}"
          class="title"
          title="${p.title}"
          >${p.title}</a
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
