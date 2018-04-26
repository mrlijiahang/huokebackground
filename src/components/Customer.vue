<template>
  <div class="bg clearfix">
    <div>
      <el-table stripe :data="TB" border style="width: 100%">
        <el-table-column prop="uid" label="UID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="telephone" label="电话">
        </el-table-column>
        <el-table-column prop="create_time" label="注册时间">
        </el-table-column>
        <el-table-column label="详情">
          <template slot-scope="scope">
            <el-button @click="message(scope.row, TB)">查看详情信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible" width='60%'>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="UID">
            <el-input v-model="form.uid"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.telephone"></el-input>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="行业">
            <el-input v-model="form.industry"></el-input>
          </el-form-item>
          <el-form-item label=" 规 模">
            <el-input v-model="form.size"></el-input>
          </el-form-item>
          <el-form-item label="主要产品">
            <el-input v-model="form.product"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="网址">
            <el-input v-model="dataim.url"></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {
    getUserlistmsg
  } from '../api/login'
  export default {
    data() {
      return {
        dataim: {},
        dialogTableVisible: false,
        TB: [],
        form: {}
      }
    },
    methods: {
      message(row) {
        this.dialogTableVisible = true
        this.dataim = row
        console.log(row)
        this.form = row
      }
    },
    created() {
      let msg = {
        auid: 1
      }
      getUserlistmsg(msg).then(res => {
        this.TB = res.data.data.users
      })
    }
  }

</script>

<style scoped>
  .bg {
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .clearfix:after {
    display: block;
    clear: both;
    content: '';
    visibility: hidden;
    height: 0;
  }

  .clearfix {
    zoom: 1;
  }

</style>
