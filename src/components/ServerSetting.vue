<template>
  <div>
    <div v-for="(item,index) in items" :key="item.index">
      <el-table :data="tableDatas[index]" border style="width: 100%" :key='index'>
        <el-table-column width="55" label="选择">
          <template slot-scope="scope">
            <el-checkbox @change="rowClick(scope.row)" v-bind:checked='Boolean(Number(scope.row.is_show))'></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column :label=items[index].name prop="name" width="180">
        </el-table-column>
        <el-table-column label='Cid' prop="cid" width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="message(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- <div style="margin: 0 auto">
      <el-button type="primary" round @click="push">提交</el-button>
    </div> -->
    <!-- <el-button>保存</el-button> -->
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
          <el-upload list-type="picture" action='http://huoke.chinabyte.net/index.php/generic/upload' :on-success="upIcon" drag class="upload-demo">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <p>导图</p>
          <el-upload list-type="picture" :on-success="updaotu" drag action='http://huoke.chinabyte.net/index.php/generic/upload' class="upload-demo">
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
                <el-option :label="fufenlei" value=""></el-option>
                <!-- <el-option label="天极网" value=""></el-option> -->
              </el-select>
            </el-form-item>
          </el-form>
          <el-form>
            <el-form-item label="">
              <div class="edit_container">
                <quill-editor style="height: 450px" v-model="infoForm.a_content" ref="myQuillEditor" class="editer" :options="infoForm.editorOption"
                  @ready="onEditorReady($event)">
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
  import {
    getmessage,
    changemessage
  } from '../api/login'
  import {
    quillEditor
  } from 'vue-quill-editor' //调用编辑器
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default {
    data() {
      return {

        fufenlei: '',
        infoForm: {
          // a_content:'',
          editorOption: {}
        },

        // rules: {
        //   a_title: [{
        //     required: true,
        //     message: '请输入标题',
        //     trigger: 'blur'
        //   }],
        //   a_content: [{
        //     required: true,
        //     message: '请输入详细内容',
        //     trigger: 'blur'
        //   }]
        // },
        dialogVisible: false,
        tb: [],
        selectTb: [],
        defaultMsg: '请输入文字',
        form: {
          name: '',
          region: ''
        },
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        tableDatas: [],
        items: [],
        ljh: {},
        icon: '',
        daotuimg: '',
        desc: ''
      }
    },
    created() {
      this.xuanran()
    },
    methods: {
      upIcon(file) {
        this.icon = file.data
      },
      updaotu(file) {
        this.daotuimg = file.data
        console.log(this.daotuimg)
      },

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
      xuanran() {
        getmessage().then(res => {
          console.log(res)
          let arr = []
          let headArr = res.data.data.filter(item => {
            return parseInt(item.pid) === 0
          })
          for (let i = 1; i < 11; i++) {
            let innerArr = []
            innerArr.push(headArr[i - 1])
            let tmpArr = res.data.data.filter(item => {
              return parseInt(item.pid) === i
            })
            innerArr.push(tmpArr)
            arr.push(innerArr)
          }
          for (let j = 0; j < 10; j++) {
            this.items.push({
              name: arr[j][0].name
            })
            this.tableDatas.push(arr[j][1])
          }
        })
      },
      message(row) {
        this.fufenlei = ''
        this.dialogVisible = true
        this.ljh = row
        console.log(this.ljh)
        console.log(row.pid)
        getmessage({
          'pid': '0'
        }).then(res => {
          console.log(res.data.data[row.pid - 1].name)
          this.fufenlei = res.data.data[row.pid - 1].name
        })
      },
      onEditorReady(editor) {},
      rowClick(row) {
        console.log(row.is_show)
        row.is_show = !Number(row.is_show)
        console.log(row.is_show)

        let msg = {
          auid: 1,
          cid: row.cid,
          is_show: Number(row.is_show)
        }
        changemessage(msg).then(res => {
          console.log(res)
        })
      },
      onSubmit() {
        let msg = {
          auid: 1,
          cid: this.ljh.cid,
          is_show: this.ljh.is_show,
          name: this.form.name.toString(),
          icon: this.daotuimg.toString(),
          image: this.daotuimg.toString(),
          desc: this.infoForm.a_content
        }
        changemessage(msg).then(res => {
          this.dialogVisible = false
          console.log(this)
          this.xuanran()
          // window.location.reload()
          // console.log(this.created)
        })
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
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
