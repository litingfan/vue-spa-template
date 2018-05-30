<!--suppress ALL -->
<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerbar></headerbar>
      </el-header>
      <el-container>
        <el-aside width="250px"><aside-nav></aside-nav></el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { Container, Header, Aside, Main } from 'element-ui';
import headerbar from 'components/headerbar';
import asideNav from 'components/asideNav';
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    headerbar,
    'aside-nav': asideNav,
  },
  // computed: {
  //   ...mapState('src/vue/module', {
  //     auth: state => state.auth,
  //   })
  // },
  created() {
    // this.$store.dispatch('auth/getCurUserInfo')
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  * { padding: 0; margin: 0; }
  .padt5 { padding-top: 5px; }
  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    a {
      color: #42b983;
      text-decoration: none;
    }
    .el-header{
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      padding-top: 10px;
    }
    .el-aside {
      color: #333;
      text-align: center;
    }
  }

</style>
