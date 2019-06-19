<template>
        <div class="bscroll-container" ref="wrapper">
        <div class="tab-content">
            <div v-for="(m,index) in persons"  class="row" :key="m.id">
                <div  class="scenic-link" v-for='v in m' :key="v.id">
                    <div class="pro-img"><img :src="v.imgUrl" alt=""></div>
                    <div class="pro-detail">
                        <h3>{{v.name}}</h3>
                        <div class="scenic-label"><span v-for='l in v.label'>{{l}}</span></div>
                        <div class="scenic-desc">{{v.description}}</div>
                        <div class="scenic-price">
                            <i>¥</i>
                            <span>{{v.price}}</span>
                            起
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            dropDown:false,
            persons: [],
            list_param: {page: 1},
            no_data: false,
            has_log: 0
        }
    },
    methods:{
        request() {
            // for (var i = 0; i < 5; i++) {
                let that = this;
                var url = './static/json/goods-list.json';
                this.$ajax.get(url,this.list_param).then(response => {
                        that.persons.push(response.data.hotSceneData)
                        this.list_param.page += 1
                        console.log(response.data.hotSceneData,"000")
                        console.log(this.list_param.page,"111")
                })
                .catch(error => {
                    console.log(error);
                });
            // }
        },
        scroll(person) {
            let isLoading = false;
            window.onscroll = () => {
                var url = './static/json/goods-list.json';
                // 距离底部200px时加载一次
                let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 200
                if (bottomOfWindow && isLoading == false) {
                isLoading = true
                this.$ajax.get(url,this.list_param).then(response => {
                    console.log(response.data.hotSceneData.length,"0147")
                    if (response.data.hotSceneData.length > 0) {
                        person.push(response.data.hotSceneData)
                        this.list_param.page = this.list_param.page + 1
                        this.has_log = 0
                        console.log(response.data.hotSceneData,"222")
                        isLoading = false
                    }else{
                        this.has_log = 2
                        this.no_data = true
                    }
                })
                }
            }
        }
    },
    beforeMount() {
        // 在页面挂载前就发起请求
        this.request()
    },
    mounted() {
        this.scroll(this.persons)
    },

}
</script>
<style>
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

