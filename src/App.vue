<template>
  <div id="app">
    <NavList v-if="$route.meta.keepAlive"/>
    <router-view/>
  </div>
</template>
<script>
import NavList from '@/components/NavList'
export default {
  name: 'App',
  components:{
    NavList,
  }
}
</script>

<style>
body,html{
  line-height: 1;
  font-weight :200;
  font-family : 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif;
  background: #f0f0f0;
}
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}

.clearfix {
    zoom: 1;
    clear: both;
}
</style>
