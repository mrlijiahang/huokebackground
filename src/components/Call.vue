<template>
  <div class="containeer clearfix bg">
    <div>
      <!-- table表格 -->
      <el-table :data="TB" border style="width: 100%;cursor: pointer;" :row-class-name="tableRowClassName">
        <el-table-column prop="uid" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="telephone" label="电话">
        </el-table-column>
        <el-table-column prop="create_time" :formatter="fotTime"   label="下单时间">
        </el-table-column>
        <!-- 详情按钮 -->
        <el-table-column prop="xiangqing" label="详情">
          <template slot-scope="scope">
            <el-button @click="getMessage(scope.row, TB)">查看详情信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: center">
          <el-pagination layout="prev, pager, next,total" :total="sum1" :page-size=5 @current-change='page1'>
          </el-pagination>
        </div>
      <!-- 弹出层 -->
      <el-dialog title="详情信息" :visible.sync="dialogFormVisible">
        <div class="clearfix" style="border: 1px solid #eee;padding: 20px">
          <div style="float: left;width: 28%">
            <div  class ='left'style="margin: 0 auto;width: 100%;text-align: left;border-right: 1px solid gray">
              <p>姓名：{{form.name}}</p>
              <p>联系电话：{{form.phone}}</p>
              <p>公司名称：{{form.company}}</p>
              <p>联系地址：{{form.address}}</p>
              <p>行业：{{form.hangye}}</p>
              <p>规模：{{form.size}}</p>
              <p>主要产品：{{form.product}}</p>
              <p>邮箱：{{form.email}}</p>
              <p>网址：{{form.url}}</p>
            </div>
          </div>
          <div class="clearfix" style="float: left;width: 55%;padding-left: 2%;">
            <p>{{form.time1}}</p>
            <el-tag v-for="item in TB1" :key="item.id" style="margin-left: 10px;margin-top: 5px">
              {{item}}
            </el-tag>
            <p>其他详细描述文字</p>
            <el-input :rows="3" type='textarea' v-model='desc' placeholder="请输入内容"></el-input>
            <div class="clearfix">
              <el-button style="float: right;" @click="AddRelation">添加详细记录</el-button>
            </div>
            <p>联系记录</p>
            <div style="border:1px dotted  black;width:100%" class="clearfix"></div>
            <ul>
              <li v-for='item in relations' :key="item.id" class="clearfix">
                <div style="float: left;">{{item.desc}}</div>
                <div style="float: right;">{{item.create_time}}</div>
              </li>
            </ul>
            <div style="position: absolute;bottom: 16%">
                <el-pagination layout="prev, pager, next,total" :total="sum" :page-size=5 @current-change='page'>
                  </el-pagination>
            </div>
 
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  /* eslint-disable */
  import {
    calllist,
    orderlist,
    addRelation,
    getRelation,
    transformDateWithTime
  } from '../api/login'
  export default {
    data() {
      return {
        callheader: 'callheader',
        dialogFormVisible: false,
        desc: '',
        TB: [],
        TB1: [],
        relations: [],
        oid: '',
        sum: 0,
        sum1:0,
        form: {
          name: '',
          phone: '',
          company: '',
          address: '',
          industry: '',
          scale: '',
          product: '',
          email: '',
          url: '',
          time1: ''
        },
      }
    },
    created() {
      this.getOrderList()
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
        return '';
      },
      getOrderList() {
        let msg = {
          auid: 1,
          num:5
        }
        orderlist(msg).then(res => {
          this.TB = res.data.data.orders
          this.sum1=res.data.data.sum
        })

      },
      fotTime(row, column, cellValue){
         return transformDateWithTime(cellValue)
      },
      page(index) {
        let msg = {
          auid: 1,
          oid: this.oid,
          num: 5,
          page: index
        }
        // 得到联系记录列表
        this.getRelationList(msg)
      },
      page1(index){
        
        orderlist({
          auid:1,
          page:index,
          num:5
        }).then(res => {
          this.TB = res.data.data.orders
        })

      },
      // 添加联系记录
      AddRelation() {
        let msg = {
          auid: 1,
          desc: this.desc,
          oid: this.oid
        }
        addRelation(msg).then(res => {
          this.desc = ''
          let msg1 = {
            auid: 1,
            oid: this.oid,
            num: 5,
          }
          // 得到联系记录列表
          getRelation(msg1).then(res => {
            this.relations = res.data.data.relations
           
            this.sum = res.data.data.sum
          })
        })
      },
      getRelationList(msg) {
        // 得到联系记录列表
        getRelation(msg).then(res => {
          this.relations = res.data.data.relations
          this.relations.map(item => {
            item.create_time = transformDateWithTime(item.create_time)
          })
          this.sum = res.data.data.sum
        })
      },
      // 得到用户详细信息列表
      getMessage(row) {
        this.dialogFormVisible = true
        this.form.name = row.name
        this.form.phone = row.telephone
        this.form.company = row.company
        this.form.address = row.address
        this.form.industry = row.industry
        this.form.scale = row.scale
        this.form.product = row.product
        this.form.email = row.email
        this.form.url = row.url
        this.form.time1 = transformDateWithTime(row.create_time)
        this.TB1 = row.cname.split(',')
        this.input = ''
        this.oid = row.oid
        let msg = {
          auid: 1,
          oid: this.oid,
          num: 5,
          page: 1
        }
        this.getRelationList(msg)
      },
    }
  }

</script>
<style scoped>
  .clearfix:after {
    display: block;
    clear: both;
    content: '';
    visibility: hidden;
    height: 0;

     }
     .bg{
           width: 80%;
    margin: 10% auto 
     }

  .clearfix {
    zoom: 1;
  }
  .left p{
    margin-top: 10%
  }

  li {
    list-style: none ;
  }


</style>


