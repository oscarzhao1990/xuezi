<template>
  <div v-if="data">
    <h1>首页</h1>
    <swiper
      ref="mySwiper"
      class="swiper"
      :options="swiperOption"
      @mouseover.native="stop"
      @mouseout.native="start"
    >
      <swiper-slide v-for="{ cid, img } in data.carouselItems" :key="cid"
        ><img v-src="img" alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <index-floor title="首页推荐 /1F" :items="newArrivalItems"></index-floor>
    <index-floor title="最新上架 /2F" :items="recommendedItems"></index-floor>
    <index-floor title="热销单品 /3F" :items="topSaleItems"></index-floor>
  </div>
</template>

<script>
import IndexFloor from "@/components/IndexFloor.vue"
export default {
  components: { IndexFloor },
  data() {
    return {
      data: null,
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 1000,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    }
  },
  methods: {
    stop() {
      this.$refs.mySwiper.$swiper.autoplay.stop()
    },
    start() {
      this.$refs.mySwiper.$swiper.autoplay.start()
    },
    getData() {
      const url = "data/product/index.php"
      this.axios.get(url).then((res) => {
        console.log(res)
        this.data = res.data
      })
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 1000px;
  margin: 10px auto;
}
</style>
