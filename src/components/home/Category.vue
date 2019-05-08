<template>
  <section class="category-nav">
    <ul class="clearfix">
      <li v-for="item in category" :key="item.id">
        <router-link v-bind:to="item.link">
          <img :src="item.imgurl" :alt="item.desc">
          <p class="desc">{{item.desc}}</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      category: [
        { desc: "全部景点", imgurl: "./static/img/category/icon-1.png" ,link:""},
        { desc: "特价优惠", imgurl: "./static/img/category/icon-2.png" ,link:""},
        { desc: "欢乐海岸", imgurl: "./static/img/category/icon-3.png" ,link:""},
        { desc: "游乐场",   imgurl: "./static/img/category/icon-4.png" ,link:""},
        { desc: "限时抢购", imgurl: "./static/img/category/icon-5.png" ,link:""},
        { desc: "亲子互动", imgurl: "./static/img/category/icon-6.png" ,link:""},
        { desc: "古城古镇", imgurl: "./static/img/category/icon-7.png" ,link:""},
        { desc: "城市风光", imgurl: "./static/img/category/icon-8.png" ,link:""}
      ]
    }
  }
};
</script>

<style>
.category-nav {
  background-color: #fff;
  padding: 10px 0;
}
.category-nav li {
  float: left;
  width: 25%;
  text-align: center;

}
.category-nav li a{
  display: block;
  padding: 20px 0;
}
.category-nav li img {
  width: 96px;
  height: 96px;
}
.category-nav li img {
  width: 71px;
  height: 71px;
}
.category-nav li p {
  font-size: 24px;
  color: #333;
  margin-top: 20px;
}
</style>
