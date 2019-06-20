
<template>
    <div class="header">
      <router-link to="/Share">
        <span class="header-left icon-gray-color"></span>
      </router-link>
      选择城市
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>
<style scoped>
  .header{
    position: relative;
    overflow: hidden;
    height: 100px;
    line-height: 100px;
    color: #333;
    background: #fff;
    text-align: center;
    font-size: 28px
  }
  .header-left{
    color: #333;
    top: 0;
    left: 0;
    bottom: 0;
    font-size :24px;
    width: 60px;
    height: 100px;
    position: absolute;
    text-align: center;
  }
.icon-gray-color:before {
    position: absolute;
    top: 30%;
    right: 0;
    width: 20px;
    height: 20px;
    content: "";
    border-top: 2px solid #333;
    border-right: 2px solid #333;
    -webkit-transform: rotate(-135deg) translateY(-50%);
}
</style>