<template>
  <div class="hello">
    <p :text="title"></p>
    <p class="welcome">欢迎使用 vue</p>
  </div>
</template>

<script>

  import {mapState} from 'vuex';

  export default {
    data () {
      return {
        title: 'Hello Vue!',
        content: ''
      }
    },
    methods: {
      
    },
    mounted () {
      
    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
