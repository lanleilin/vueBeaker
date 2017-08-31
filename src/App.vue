<template>
  <div id="app">
    <!-- the router outlet, where all matched components would ber viewed -->
    <router-link v-bind:to="'/'">Home</router-link>
    <!-- 为我们创建两个锚点标签，并动态路由，使页面不需要重新加载-->

    <router-link v-bind:to="'/about'">About</router-link>
    <router-view></router-view>
    <hello msg-father="hello this is lan"></hello>
  </div>
</template>

<script>
  import hello from  './components/hello'
  export default {
    name: 'app',
    components:{
      hello
    }
  }
</script>
<!-- styling for the component -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
