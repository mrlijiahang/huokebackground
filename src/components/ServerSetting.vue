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
    <el-dialog title="编辑模式" :visible.sync="dialogVisible " width="80%" close-on-press-escape>
      <div class="clearfix">
        <div style="width: 49%;float: left;background-color: #eee;border-radius:30px;text-align: center;padding-bottom: 15px">
          <el-form :model="form">
            <el-form-item>
              <p>名称</p>
              <el-input v-model="form.name" :clearable='true' style="width: 333px"></el-input>
            </el-form-item>
          </el-form>
          <p>图标</p>
          <el-upload list-type="picture" multiple drag action="https://jsonplaceholder.typicode.com/posts/" class="upload-demo">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <p>导图</p>
          <el-upload list-type="picture" multiple drag action="https://jsonplaceholder.typicode.com/posts/" class="upload-demo">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div style="width: 49%;float: right;background-color: #eee;border-radius: 30px;text-align: center">
          <el-form :model='form'>
            <el-form-item>
              <p>父分类</p>
              <el-select v-model="form.region" placeholder="请选择父分类" style="width: 317px">
                <el-option label="比特网" value=""></el-option>
                <el-option label="天极网" value=""></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-form>
            <el-form-item label="">
              <div class="edit_container">
                <quill-editor style="height: 450px" v-model="infoForm.a_content" ref="myQuillEditor" class="editer" :options="infoForm.editorOption" @ready="onEditorReady($event)">
                </quill-editor>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确认提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>


    </el-dialog>
  </div>
</template>

<script>
  /* eslint-disable */
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    data() {
      return {
        infoForm: {
          a_title: '',
          a_source: '',
          a_content: '',
          editorOption: {}
        },
        rules: {
          a_title: [{
            required: true,
            message: '请输入标题',
            trigger: 'blur'
          }],
          a_content: [{
            required: true,
            message: '请输入详细内容',
            trigger: 'blur'
          }]
        },
        dialogVisible: false,
        defaultMsg: '请输入文字',
        form: {
          name: '',
          region: ''
        },
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
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
      getUEContent() {
        let content = this.$refs.ue.getUEContent()
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        })
        console.log(content)
      },
      message() {
        // alert(1)
        this.dialogVisible = true
        // this.$forceUpdate()
        // 组件强制渲染非人类操作
      },
      onEditorReady(editor) {},
      onSubmit() {
        console.log(this.infoForm.a_content)
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      //初始化
    },

    components: {
      //使用编辑器
      quillEditor
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

  .info {
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }

  .clearfix {
    zoom: 1;
  }

</style>
