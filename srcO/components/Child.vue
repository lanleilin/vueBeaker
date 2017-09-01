<template>
  <div class="child">
    <p>{{mes}}</p>
    <p>test</p>
    <button @click="sendmsg">给爸爸发送消息</button>
  </div>
</template>

<script>
  export default {
    name: 'child',
    data () {
      return {
      }
    },
//    components:{
//      child
//    },
    methods:{
      sendmsg:function () {
        this.$emit('listenChild',"消息来自祖国的花朵")
      }
    },
    props:['mes']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
