<template>
<div>


  <el-table :data="tableServer" border style="width: 100%">
    <el-table-column type="index" label="顺序" width='50'>
    </el-table-column>
    <el-table-column label="ID" prop='id' width='70'>
    </el-table-column>
    <el-table-column label="速客调研" prop='second' width='100'>
    </el-table-column>
    <el-table-column type="selection" width="55" label='11'>
    </el-table-column>
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="message">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 弹出层 -->
  <el-dialog title="提示" :visible.sync="dialogVisible " width="30%">
    <span>这是一段信息</span>
  </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
     

      return {
        //  dialogVisible: true,
        tableServer: [{
            id: 'one',
            second: '消费者洞察',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id: 'two',
            second: '竞争分析',
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id: 'three',
            second: '行业报告',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            id: 'four',
            date: '2016-05-03',
            second: '专项报告',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      message() {
        // alert(1)
        this.dialogVisible =true
        this.$forceUpdate()
      }

    }
  }

</script>
