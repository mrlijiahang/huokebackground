<template>
  <div v-bind:class="{ active: isActive }">
    <div style="padding-top: 18%">
      <h1 style="color: white">获客小程序后台系统</h1>
      <div class="contain">
        <el-form :model="form" status-icon @keyup.enter.native="submitkeycode" :rules="rule1" ref="form">
          <el-form-item prop='name'>
            <el-input v-model="form.name" placeholder="请输入账号" value="管理员1"></el-input>
          </el-form-item>
          <el-form-item prop='pass'>
            <el-input v-model="form.pass" placeholder="请输入密码" type="password" value="111111"></el-input>
          </el-form-item>
          <el-button class="btn" @click="submit">登录</el-button>
        </el-form>
      </div>
    </div>

  </div>
</template>
<script>
  /* eslint-disable */
  import store from '../store/index.js'
  import Cookies from 'js-cookie'
  import {
    adminlogin
  } from '../api/login'
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
        isActive: true,
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
      login(msg) {
        adminlogin(msg).then(res => {
          if (res.data.code === 1000) {
            this.$store.state.auid = res.data.data.auid
            Cookies.set('auid', res.data.data.auid)
            console.log(1)
            this.$router.push({
              path: '/1/customer'
            })
          } else {
            alert('账户信息请联系chinabyte')
          }
        })
      },
      submit() {
        let msg = {
          username: this.form.name,
          password: this.form.pass
        }
        this.login(msg)
      },
      submitkeycode() {
        let msg = {
          username: this.form.name,
          password: this.form.pass
        }
        this.login(msg)
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

  .active {
    background-image: url('/static/images/time1.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
  }

</style>
