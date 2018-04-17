<template>
  <div class="bg clearfix">
    <div>
      <el-table stripe :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="time" label="注册时间">
        </el-table-column>
        <el-table-column label="详情">
          <template slot-scope="scope">
            <el-button @click="message(scope.row, tableData)">查看详情信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible" width='60%'>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="dataim.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="dataim.phone"></el-input>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="dataim.id"></el-input>
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
            <el-input v-model=dataim.time></el-input>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    data() {
      return {
        dataim:{},
        dialogTableVisible: false,
        tableData: [{
            id: '1',
            name: '王小虎',
            phone: '123456789',
            time: '2018-1-1'
          },
          {
            id: '2',
            name: '王小虎',
            phone: '123456789',
            time: '2018-1-1'
          },
          {
            id: '3',
            name: '王小虎',
            phone: '123456789',
            time: '2018-1-1'
          },
          {
            id: '4',
            name: '王小虎',
            phone: '123456789',
            time: '2018-1-1'
          }
        ],
        form: {
          name: '',
          phone: '',
          company: '',
          address: '',
          indestry: '',
          size: '',
          product: '',
          email: '',
          url: ''
        }
      }
    },
    methods: {
      message(row) {
        this.dialogTableVisible = true
        this.dataim = row
      }
    }
  }

</script>

<style scoped>
  .bg {
    width: 100%;
    /* border: 2px solid gray; */
    margin: 0 auto;
    box-sizing: border-box;
  }
  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .clearfix {
    zoom: 1;
  }
</style>
