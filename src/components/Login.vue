<template>
  <div>
    <h1>获客小程序后台系统</h1>
    <div class="contain">
      <el-form :model="form" status-icon @keyup.enter.native="show" :rules="rule1" ref="form">
        <el-form-item prop='name'>
          <el-input v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop='pass'>
          <el-input v-model="form.pass" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-button class="btn" @click="submit">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import store from '../store/index.js'

  export default {
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

      return {
        form: {
          name: '',
          pass: ''
        },
        rule1: {
          name: [{
            validator: validateName,
            trigger: 'blur'
          }],
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submit() {
        if (this.form.name === this.$store.state.name && this.form.pass === this.$store.state.pwd) {
          this.$router.push({
            path: '/1/customer'
          })
        } else {}
      },
      show() {
        if (this.form.name === this.$store.state.name && this.form.pass === this.$store.state.pwd) {
          this.$router.push({
            path: '/1/customer'
          })
        } else {
          
        }
      }
    },

  }

</script>
<style scoped>
  .contain {
    width: 300px;
    margin: 0 auto;
  }

  h1 {
    text-align: center
  }

  .btn {
    width: 100%;
    background-color: #409eff;
    color: white;
    font-size: 16px;
  }

</style>
