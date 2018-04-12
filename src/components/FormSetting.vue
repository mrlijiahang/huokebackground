<template>
  <div>
    <el-form>
      <el-form-item label="">
        <div class="edit_container">
          <quill-editor v-model="infoForm.a_content" ref="myQuillEditor" class="editer" :options="infoForm.editorOption" @ready="onEditorReady($event)">
          </quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认提交</el-button>
      </el-form-item>
    </el-form>
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
        //表单验证
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
    methods: {
      onEditorReady(editor) {},
      onSubmit() {
        console.log(this.infoForm.a_content)
      }
    },
    components: {
      //使用编辑器
      quillEditor
    }
  }

</script>
