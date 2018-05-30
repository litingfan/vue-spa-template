<template>
  <el-row :gutter="20">
    <el-col :span="4">
        <h3 class="padt5">平台</h3>
    </el-col>
    <el-col :span="20">
    <el-form :inline="true" :model="formInline" size="small" class="small-form">
        <el-col :span="5">
        <el-form-item label="热线号码">
            <el-input v-model="formInline.hotmobile" placeholder="热线号码" disabled></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label="座席号">
            <el-input v-model="formInline.cno_current" placeholder="座席号" disabled></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label="密码">
            <el-input v-model="formInline.password" placeholder="密码" type="password" disabled></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="5">
        <el-form-item label="绑定电话">
            <el-input v-model="formInline.bind_number_current" placeholder="绑定电话"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="2">
        <el-form-item>
            <el-button type="primary" @click="onLogin">登录</el-button>
        </el-form-item>
        </el-col>
        </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import { Row, Col, Form, FormItem, Input, Button } from 'element-ui';
  export default {
    data() {
      return {
        formInline: {
          hotmobile: '1111111',
          cno_current: '',
          password: 'this is not a real password',
          bind_number_current: '',
        }
      }
    },
    methods: {
        onLogin: function () {
            console.log('submit!');
        }
    },
  }
</script>
<style lang="scss" rel="stylesheet/scss">
.small-form.el-form--inline {
  .el-form-item {
      display: flex;
      label + div {
          flex: 1
      }
  }
}
</style>
