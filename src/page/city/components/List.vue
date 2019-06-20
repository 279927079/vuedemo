<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button" ref="mycity">{{this.current_city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"  v-for="city in hotcities" :key="city.id">
            <div class="button" @click="HandleCity(city.name)">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(city,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="c in city" :key="c.id" @click="HandleCity(c.name)">{{c.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props: ['cities', 'hotcities', 'letter'],
  methods: {
    HandleCity (value) {
      console.log("0000")
      // this.$store.commit('citychanged', value)
      this.citychanged(value)
      this.$router.push('/')
    },
    ...mapMutations([
      'citychanged'
    ])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: mapState({
    current_city: 'city'
  })
  
}
</script>
<style scoped>
.list{
    overflow: hidden;
    position: absolute;
    top: 172px;
    right: 0;
    bottom: 0;
    left: 0;
}
.border-topbottom:before {
    border-color: #ccc;
}
.border-topbottom{
    border-color: #ccc;
}
.list .title{
    line-height: 60px;
    padding-left: 20px;
    background: #eee;
    color: #666;
    font-size: 28px;
}
.list .item-list{
  background: #fff;
}
.list .item-list .item{
  line-height: 60px;
  padding-left: 20px;
}
.border-bottom:before {
  content: " ";
  overflow: hidden;
  position: absolute;
  border-color: #ccc;
  border-bottom: 1px solid #eaeaea;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  left: 0;
  width: 100%;
  height: 1px;
}
.list .button-list{
  background: #fff;
    padding: 10px 60px 10px 10px;
    overflow: hidden;
}
.list .button-list .button-wrapper{
    float: left;
    padding: 10px;
}
.list .button-list .button-wrapper .button{
    text-align: center;
    margin: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px 20px;
}
</style>

