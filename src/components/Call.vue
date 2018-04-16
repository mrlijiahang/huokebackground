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
        <div class="clearfix" style="border: 1px solid #eee;padding: 20px">
          <div style="float: left;width: 28%">
            <div style="margin: 0 auto;width: 100%;text-align: left;border-right: 1px solid gray">
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
          <div style="float: left;width: 55%;padding-left: 2%;">
            <p>{{form.time1}}</p>
            <el-tag v-for="item in tagss" :key="item.id">
              {{item.tag}}
            </el-tag>
            <p>其他详细描述文字</p>
            <p>联系记录</p>
            <div style="border:1px dotted  black;width:100%"></div>
            <ul>
              <li v-for='item in items' :key="item.id">
                <div style="float: left;">{{item.mes}}</div>
                <div style="float: right;">{{item.tite}}</div>
              </li>
            </ul>
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
  /* eslint-disable */
  export default {
    data() {
      return {
        dialogFormVisible: false,
        textarea1: '',
        rownow: {},
        form: {
          name: '',
          time: '',
          phone: '',
          time1: '2018-06-06 18:24:02',
          mes: '11'

        },
        items: [{
            mes: 'Foo',
            tite: 'qwer'
          },
          {
            mes: 'Bar',
            tite: 'qwer'
          }
        ],
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
            tagss: {},
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
        // console.log(this.gridData[row.id - 1].textarea)
        this.$set(this.form , 'ljh' ,666)
        console.log(this)
        // console.log(this.$refs)
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
