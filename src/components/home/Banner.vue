<template>
  <section class="wrapper-banner">
    <swiper :options="swiperOption" v-if="bannerData.length>1">
      <swiper-slide v-for="item of bannerData" :key="item.id">
        <router-link v-bind:to="item.url">
          <img :src="item.imgUrl" class="swiper-img" :id="item.id">
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css"; //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Banner",
  data() {
    return {
      bannerData: [],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        speed: 300,
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      },
      components: {
        swiper,
        swiperSlide
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
      }
    };
  },
  created() {
    var url = './static/json/home-banner.json';
    var that= this;
    this.$ajax.get(url).then(res => {
        console.log(res,"0000")
        that.bannerData = res.data;
    })
    .catch(error => {
        console.log(error);
    });
  }
}
</script>

<style>
.wrapper-banner {
  position: relative;
}
.swiper-slide {
  height: auto;
  vertical-align: top;
}
.swiper-img {
  display: block;
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.swiper-pagination {
  position: absolute;
  bottom: 0.4rem;
  left: 50%;
  line-height: 0;
  padding: 4px 5px 4px 15px;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 22;
  -webkit-transform: translateX(-50%); /*垂直居中*/
}
.my-bullet {
  width: 12px;
  height: 12px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  background: #fff;
  margin-right: 10px;
}
.my-bullet-active {
  background: #f08062;
}
</style>
