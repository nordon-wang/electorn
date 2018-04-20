<template>
  <div id="app">
  	<nav-manage></nav-manage>
  	
    <router-view></router-view>
  </div>
</template>

<script>
import NavManage from './components/CommonPage/NavManage' 
  export default {
    name: 'wy-ele',
    components:{
    	NavManage
    }
  }
</script>

<style>
  /* CSS */

@import url('~animate.css');
</style>
