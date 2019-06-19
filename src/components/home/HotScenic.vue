<template>
  <section class="hot-scenic-spot">
    <h3 class="title">热门景点</h3>
    <swiper :options="swiperScenic" class="scenic-list">
      <swiper-slide v-for="item in hotScenicData" :key="item.id">
        <router-link v-bind:to="item.url">
          <img :src="item.imgUrl" class="img">
          <div class="hot-des">
            <div class="text">{{item.name}}</div>
            <div class="price">
              <i class="rmb-symbol">¥</i>
              <span class="money">{{item.price}}</span>起
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
export default {
  name: "HotScenic",
  data() {
    return {
      hotScenicData: [],
      swiperScenic: {
        slidesPerView: 3,
        spaceBetween: 8
      },
    }
  },
  created() {
    var url = "./static/json/hot-scenic-spot.json";
    var that = this;
    this.$ajax.get(url).then(res => {
        console.log(res, "1111");
        that.hotScenicData = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style>
.hot-scenic-spot {
  background: #fff;
  padding: 0 30px 20px 30px;
  text-align: left;
  margin-top: 20px;
}
.hot-scenic-spot .title {
  font-size: 28px;
  font-weight: bold;
  height: 90px;
  line-height: 90px;
  color: #333;
}
.scenic-list .swiper-slide {
  float: left;
  margin-right: 5px;
}
.scenic-list .img {
  width: 220px;
  height: 180px;
}
.scenic-list .text {
  display: block;
  font-size: 24px;
  color: #333;
  height: 46px;
  line-height: 46px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.scenic-list .price {
  color: #9f9f9f;
}
.scenic-list .price i {
  font-style: normal;
}
.scenic-list .price .rmb-symbol,
.scenic-list .price .money {
  color: #fe5a00;
}
.scenic-list .price .money {
  font-size: 36px;
  margin-right: 5px;
}
</style>
