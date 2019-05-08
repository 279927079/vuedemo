<template>
    <div id="home">
        <Banner/>
        <Category/>
        <section class="nearby-attractions clearfix">
            <div class="nearby-left"><img  src="../../static/img/nearby-icon.png"/></div>
            <div class="nearby-right">
                <a class="price">
                    <span>深圳欢乐谷</span><em>￥</em><i>85</i>起
                </a>
            </div>
        </section>
        <HotScenic/>
        <TabList/>
    </div>
</template>
<script>
import Banner from '@/components/home/Banner'
import Category from '@/components/home/Category'
import HotScenic from '@/components/home/HotScenic'
import TabList from '@/components/home/TabList'
export default {
  data () {
    return {
         show : false,
    }
  },
  components:{
      Banner,
      Category,
      HotScenic,
      TabList
  }
}
</script>
<style>
#home {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 100px;
    min-height: 100%;
    padding-bottom: 100px;
    overflow: auto;
}
.nearby-attractions{
        padding: 30px 30px 30px 30px;
        background-color: #fff;
    }
    .nearby-left{
        float: left;
        width: 26%;
        text-align: center;
        vertical-align: top;
        border-right: 1px solid #999;
    }
    .nearby-left img{
        width: 124px;
        height: 31px;
        vertical-align: top;
    }
    .nearby-right{
        padding-left: 30%;
        text-align: left;
        height: 31px;
    }
    .nearby-right a{
        position: relative;
        display: block;
        font-size: 28px;
        color: #333;
        line-height: 28px;
        vertical-align: top;
    }
    .nearby-right a:before{
        position: absolute;
        top: 8px;
        right: 0px;
        display: block;
        width: 15px;
        height: 15px;
        content: "";
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        border-top: 4px solid #b5b6b6;
        border-left: 4px solid #b5b6b6;
    }
    .nearby-right .price{
        color: #fe5a00;
    }
    .nearby-right .price span{
        color: #333;
    }
    .nearby-right .price em{
        font-style: normal;
    }
    .nearby-right .price i{
        font-size: 40px;
        font-style: normal;
        margin: 0 2px;
    }
</style>


