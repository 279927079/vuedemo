<template>
<div>
    <div class="navbar">
        <div class="nav-wrap-left">
            <a  class="react">
                <span class="nav-city icon-gray-color">{{LocationCity}}<i></i></span>
            </a>
        </div>
        <div class="box-search">
            <input type="text" v-model="searchString" placeholder="输入景区名称">
        </div>
    </div>
    <div class="bscroll-container" ref="wrapper">
        <div class="tab-content" >
            <div class="row">
                <div class="scenic-link" v-for="articles in filteredArticles"  :key="articles.id">
                    <div class="pro-img"><img :src="articles.imgUrl" alt=""></div>
                    <div class="pro-detail">
                        <h3>{{articles.name}}</h3>
                        <div class="scenic-label"><span v-for='l in articles.label'>{{l}}</span></div>
                        <div class="scenic-desc">{{articles.description}}</div>
                        <div class="scenic-price">
                            <i>¥</i>
                            <span>{{articles.price}}</span>
                            起
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import BMap from 'BMap'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            LocationCity:"正在定位",
            searchString: "",
            dropDown:false,
            persons:[],
            articles: [],
            list_param: {page: 1},
            no_data: false,
            has_log: 0
        }
    },
    mounted(){
        this.city();
    },
    computed: {
        // 计算数学，匹配搜索
        filteredArticles: function () {
            var articles_array = this.articles;
            var searchString = this.searchString;
            if(!searchString){
                return articles_array;
            }
            searchString = searchString.trim().toLowerCase();
            articles_array = articles_array.filter(function(item){
                if(item.name.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
             // 返回过来后的数组
             return articles_array;

        }
    },
    created () {
        let that = this;
        this.$ajax.get('./static/json/goods-list.json', this.list_param).then((response) => {
            that.persons=[response.data.hotSceneData]
             console.log(that.persons[0],"987897")
             that.articles=that.persons[0]
            this.list_param.page += 1
            console.log(this.list_param.page,"111")
        })
        window.addEventListener('scroll', this.onScroll)
    },
    methods:{
        city(){    //定义获取城市方法
            const geolocation = new BMap.Geolocation();
            var _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                let city = position.address.city;             //获取城市信息
                let province = position.address.province;    //获取省份信息
                _this.LocationCity = city
            }, function(e) {
                _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});		
        }
    }
    // methods: {
    //     onScroll () {
    //         let that = this;
    //         this.has_log = 1
    //         let innerHeight = document.querySelector('#app').clientHeight
    //         let outerHeight = document.documentElement.clientHeight
    //         let scrollTop = document.documentElement.scrollTop
    //         console.log(innerHeight + ' ' + outerHeight + ' ' + scrollTop)
    //         // console.log(outerHeight + scrollTop - 30)
    //         // console.log(outerHeight + scrollTop,"333")
    //         if (outerHeight + scrollTop < innerHeight) {

    //             if (this.no_data === true) {
    //                 console.log(this.no_data,"8888888888888888")
    //                 this.has_log = 2
    //                 return false
    //             }
    //             this.$ajax.get('./static/json/goods-list.json', this.list_param).then((response) => {
    //                 if (response.data.resortHotelsData.length > 0) {
    //                     that.persons = [that.articles[0],response.data.resortHotelsData]
    //                     // that.persons.push(response.data.resortHotelsData)
    //                     this.list_param.page = this.list_param.page + 1
    //                     this.has_log = 0
    //                 } else {
    //                     this.has_log = 2
    //                     this.no_data = true
    //                 }
    //             })
    //         }
    //     }
    // }

}
</script>
<style>
.navbar {
    height: 100px;
    color: #333;
    background: #fff;
    display: -webkit-box;
    position: relative;
}
.navbar .nav-wrap-left {
    height: 100px;
    line-height: 100px;
    margin-right: 20px;
}
.navbar .nav-city {
    position: relative;
    line-height: 100px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    font-size: 28px;
    color: #333;
}
.icon-gray-color{
    position: relative;
}
.icon-gray-color:before {
    position: absolute;
    top: 33%;
    right: 0;
    width: 15px;
    height: 15px;
    content: "";
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    -webkit-transform: rotate(135deg) translateY(-50%);
    transform: rotate(135deg) translateY(-50%);
}
.navbar .box-search {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border-radius: 50px;
    height: 60px;
    line-height: 60px;
    -webkit-box-sizing: border-box;
    position: relative;
    margin-top: 20px;
    margin-right: 20px;
    color: #9f9f9f;
    text-align: left;
    font-size: 24px;
}
.navbar .box-search input{
    background: #efefef;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 50px;
    padding: 0 20px;
    box-sizing: border-box
}
.navbar .box-search a {
    padding: 0 20px;
}
.tab-content{
    padding-bottom: 100px;
}
.tablist{
        background: #fff;
        padding:0 0 30px 0;
        margin-top: 20px;
    }
    .tab-title{
        height: 90px;
        line-height: 90px;
        position: relative;
        display: -webkit-box;
        margin-bottom: 20px;
    }
    .tab-title:before{
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        border-bottom: 1px solid #999;
        height: 1px;
        -webkit-transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
    }
    .tab-title li{
        position: relative;
        display: block;
        -webkit-box-flex: 1;
        vertical-align: middle;
        font-size: 28px;
        color: #333;
        font-weight: bold;
        text-align: center;
    }
    .tab-title li.active:after{
        content: "";
        position: absolute;
        right: 20%;
        left: 20%;
        bottom: 0;
        border-bottom: 6px solid #39aae5;
    }
    /* 点击对应的标题添加对应的背景颜色 */
    .tab-title.active{
        background-color: #09f;
        color: #fff;
    }

    .scenic-link{
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: flex-start;
        -moz-align-items: flex-start;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        padding: 20px 30px 20px 30px;
        min-height: 90px;
    }
    .scenic-link:before{
        content: " ";
        position: absolute;
        left: 30px;
        bottom: 0;
        right: 30px;
        height: 1px;
        border-bottom: 1px solid #999;
        color: #e4e4e4;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .scenic-link .pro-img{
        width: 160px;
        height: 160px;
        margin-right: 20px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-flex-shrink: 0;
        -moz-flex-shrink: 0;
        position: relative;
        background-color: #eef3f5;
    }
    .scenic-link .pro-img img{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .scenic-link .pro-detail{
        position: relative;
        text-align: left;
        width: 100%;
        min-height: 95px;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-flex-direction: column;
    }
    .scenic-link .pro-detail h3{
        display: inline-block;
        max-width: 80%;
        font-size: 28px;
        color: #333;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .scenic-price{
        position: absolute;
        min-width: 50px;
        top: 2px;
        right: 0px;
        color: #9f9f9f;
    }
    .scenic-price i{
        font-style: normal;
    }
    .scenic-price i,
    .scenic-price span{
        color: #fe5a00;
    }
    .scenic-price span{
        font-size: 36px;
    }
    .scenic-label{
        margin-top: 30px;
    }
    .scenic-label span{
        display: inline-block;
        font-size: 20px;
        border: 1px solid #61aefd;
        margin-right: 5px;
        padding: 4px 8px;
        border-radius: 5px;
        color: #61aefd;
    }
    .scenic-label span:first-child {
        color: #f7921c;
        border-color: #f7921c;
    }

    .scenic-desc{
        margin-top: 30px;
    }
</style>

