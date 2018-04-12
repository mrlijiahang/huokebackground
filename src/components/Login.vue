<template>
  <div>
    <h1 style="text-align: center">获客小程序后台系统</h1>
    <el-form label-width="100px" :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
      </el-form-item>
        <el-button @click="submit" >登录</el-button>
    </el-form>
  </div>
</template>
  <script>
/* eslint-disable */
export default {
  data() {
    return {
        form:{
            name:'',
            pwd:''
        }
    }
  },
  methods: {
    submit() {
      console.log(this.form)
      if(this.form.name === '1' && this.form.pwd === '1'){
          this.$router.push({path:'/1/customer'})
      }
    }
  }
}
</script>
  
  
