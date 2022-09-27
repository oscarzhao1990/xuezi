<template>
  <div>
    <!--楼梯3f-->
    <div class="floor" id="f3">
      <div class="floor_top">
        <img
          src="https://web.codeboy.com/xuezi/img/index/computer_icon.png"
          alt=""
        />
        热销单品 /3F
      </div>
      <div class="floor_content">
        <div class="food">
          <div class="desc">
            <p class="name">灵越 燃7000系列</p>
            <p class="details">
              酷睿双核i5处理器|256GB SSD| 8GB内存<br />英特尔HD显卡620含共享显卡内存
            </p>
            <p class="price">￥4999.00</p>
            <div id="one" class="view">查看详情</div>
          </div>
          <img
            src="https://web.codeboy.com/xuezi/img/index/study_computer_img1.png"
            alt=""
          />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">颜值 框不住</p>
            <p class="details">
              酷睿双核i5处理器|256GB SSD| 8GB内存<br />英特尔HD显卡620含共享显卡内存
            </p>
            <p class="price">￥6888.00</p>
            <div id="two" class="view">查看详情</div>
          </div>
          <img
            src="https://web.codeboy.com/xuezi/img/index/study_computer_img2.png"
          />
        </div>
        <div class="food">
          <div class="desc">
            <p class="name">戴尔XPS13 13.3英寸<br />微边框笔记本</p>
            <p class="price">￥4600.00</p>
            <div id="three" class="view">查看详情</div>
          </div>
          <img
            src="https://web.codeboy.com/xuezi/img/index/study_computer_img3.png"
            alt=""
          />
        </div>
        <div class="product">
          <img
            src="https://web.codeboy.com/xuezi/img/index/study_computer_img3.png"
            alt=""
          />
          <h2>戴尔(DELL)XPS13-9360-R1609 13.3英寸微边框笔记本电脑</h2>
          <p>￥4600.00</p>
          <a href="product_details.html" id="four">查看详情</a>
        </div>
        <div class="product">
          <img
            src="https://web.codeboy.com/xuezi/img/index/study_computer_img3.png"
            alt=""
          />
          <h2>戴尔(DELL)XPS13-9360-R1609 13.3英寸微边框笔记本电脑</h2>
          <p>￥4600.00</p>
          <a href="product_details.html" id="five">查看详情</a>
        </div>
        <div class="product">
          <img
            src="https://web.codeboy.com/xuezi/img/index/study_computer_img3.png"
            alt=""
          />
          <h2>戴尔(DELL)XPS13-9360-R1609 13.3英寸微边框笔记本电脑</h2>
          <p>￥4600.00</p>
          <a href="product_details.html" id="fix">查看详情</a>
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
}
</script>

<style lang="scss" scoped></style>
<style scoped src="../assets/css/item_cat.css"></style>
