<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">主页</router-link></li>
      <li><router-link to="/news">新闻页</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>
