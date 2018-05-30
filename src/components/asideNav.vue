<template>
<el-row class="tac">
  <el-col :span="22">
    <el-menu
      :default-openeds="getFirstLevelKey(this.$route.name, this.navs) || [navs[0].key]"
      :default-active="this.$route.name"
      class="el-menu-vertical-demo">
      <el-submenu :index="nav.key" v-for="nav in navs" :key="nav.key">
        <template slot="title">
          <span>{{ nav.name }}</span>
        </template>
        <el-menu-item-group>
          <router-link v-for="subnav in nav.children" :key="subnav.key" :to="subnav.path">
            <el-menu-item
              :index="subnav.key"
              >{{ subnav.name }}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  import { Row, Col, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui';
  import navs from '../config/nav';
  export default {
    data () {
      return {
        navs: navs,
      }
    },
    methods: {
      changeNav(nav) {
        this.$router.push({ path: nav.path });
      },
      getFirstLevelKey(curNam, nav) { // 获取当前一级的key
        let firstLevel = {};
        if (!curNam || !nav) return false;
        nav.map((item) => {
          if (item.children) {
            item.children.map((sub_item) => {
              if (sub_item.key === curNam) {
                firstLevel = item;
                return;
              }
            });
          }
        });
        return [firstLevel.key];
      },
    },
  }
</script>