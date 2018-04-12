<template>
  <div class="containeer clearfix ">
    <div>
      <!-- table表格 -->
      <el-table :data="tableData" border style="width: 100%;cursor: pointer;">
        <el-table-column prop="id" label="ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
        <el-table-column prop="time" label="下单时间">
        </el-table-column>
        <el-table-column prop="contact" label="是否联系">
        </el-table-column>
        <!-- 详情按钮 -->
        <el-table-column prop="xiangqing" label="详情">
          <template slot-scope="scope">
            <el-button @click="message(scope.row, tableData)">查看详情信息</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹出层 -->
      <el-dialog title="详情信息" :visible.sync="dialogFormVisible">
        <div class="clearfix">
          <div style="float: left;width: 40%">
            <el-form :model="form">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="时间">
                <el-input v-model="form.time"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div style="float: right;width: 55%;padding-left: 2%">
            <p>营销名称</p>
            <el-tag v-for="item in tagss" :key="item.id">
              {{item.tag}}
            </el-tag>
            <p>其他详细描述文字</p>
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="textarea1" >
            </el-input>
            <el-button class="dialog-footer" @click='ok'>添加联系记录</el-button>
            <p>联系记录</p>
            <p>------------------------------------------------------------------</p>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 分页 -->
      <div style="margin: 0 auto;width: 50%;text-align: center">
        <el-pagination class="fenye" layout="prev, pager, next,total" :total="100" :page-size=15>
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        textarea1: '',
        rownow: {},
        form: {
          name: '',
          time: '',
          phone: ''
        },
        gridData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            textarea: '',
            tags: [{
                tag: '1'
              },
              {
                tag: '2'
              }
            ]
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            textarea: 'www',
            tags: [{
                tag: '1'
              },
              {
                tag: '2'
              },
              {
                tag: '3'
              }
            ]
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        tagss: {},
        tableData: [{
            id: '1',
            name: '王小虎1',
            phone: '166666666',
            time: '2018-55',
            contact: 'true',
            xiangqing: ''
          },
          {
            id: '2',
            name: '王小虎',
            phone: '46546456465',
            time: '2018-5-66',
            contact: '是 true',
            xiangqing: ''
          }
        ]
      }
    },
    methods: {
      message(row) {
        this.rownow = row
        this.dialogFormVisible = true
        this.form.name = row.name
        this.form.time = row.time
        this.form.phone = row.phone
        this.tagss = this.gridData[row.id - 1].tags
        // this.gridData[row.id - 1].textarea = this.textarea
        console.log(this.gridData[row.id - 1].textarea)
      },
      ok() {
        this.gridData[this.rownow.id - 1].textarea = this.textarea1
        console.log(this.gridData[this.rownow.id - 1].textarea)
      }
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

  .clearfix {
    zoom: 1;
  }

</style>
