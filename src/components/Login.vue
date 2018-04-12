<template>
  <div>
    <h1>获客小程序后台系统</h1>
    <div class="contain">
    <el-form label-width="50px" :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button class="btn" @click="submit" >登录</el-button>
    </div>
  </div>
</template>
  <script>
  /* eslint-disable */
import store from '../store/index.js'

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
      if(this.form.name === this.$store.state.name && this.form.pwd === this.$store.state.pwd){
          this.$router.push({path:'/1/customer'})
      }else {
        alert('账号密码不对')
 
      }
    }
  }
}
</script>
<style  scoped>
.contain{
  width: 500px;
  margin: 0 auto;
}
h1{
  text-align: center
}
.btn{
  margin: 0 auto
}

</style>

  
  
