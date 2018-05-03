<template>
  <div class="bg clearfix">
    <div>
      <el-table  :data="TB" border style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="uid" label="UID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="telephone" label="电话">
        </el-table-column>
        <el-table-column prop="create_time" :formatter="fotTime" label="注册时间">
        </el-table-column>
        <el-table-column label="详情">
          <template slot-scope="scope">
            <el-button @click="message(scope.row, TB)">查看详情信息</el-button>
          </template>   
        </el-table-column>
      </el-table>
      <button @click="sub">+++</button>
      <h1>{{$store.state.auid}}</h1>
            <!-- 分页器 -->
      <div style="text-align: center;margin-top: 3%">
        <el-pagination layout="prev, pager, next,total" :total="sum" :page-size=5 @current-change='page'>
        </el-pagination>

      </div>

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
    getUserlistmsg,
    transformDateWithTime
  } from '../api/login'
  import store from '../store/Customer'
  export default {
    data() {
      return {
        dataim: {},
        dialogTableVisible: false,
        TB: [],
        form: {},
        sum: 0,
      }
    },
    created() {
      this.getUserlist()
    },
    methods: {
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex%2 === 0) {
          return 'warning-row';
        } else if (rowIndex%2 !== 0) {
          return 'success-row';
        }
        return 'default';
      },
      sub(){
        this.$store.dispatch('get')
      },
      message(row) {
        this.dialogTableVisible = true
        this.dataim = row
        console.log(row)
        this.form = row
      },
      page(index) {
        getUserlistmsg({
          auid: 1,
          num: 5,
          page: index
        }).then(res => {
          this.sum = res.data.data.sum
          this.TB = res.data.data.users
        })
      },
      fotTime(row, column, cellValue) {
        return transformDateWithTime(cellValue)
      },
      getUserlist() {
        let msg = {
          auid: 1,
          num: 5
        }
        getUserlistmsg(msg).then(res => {
          this.sum = res.data.data.sum
          this.TB = res.data.data.users
        })

      }
    },


  }

</script>

<style scoped>
  .bg {
    width: 80%;
    margin: 10% auto;
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

<style>

 
  .el-table .warning-row {
    background: #f0f9eb;
  }

  .el-table .success-row {
    background: white;
  }
  .el-table th{
    background-color: #ecf8ff
  }


</style>
