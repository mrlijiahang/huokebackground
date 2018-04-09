<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b" :router='true'>
      <el-menu-item index="1" disabled >☆☆☆获客营销平台☆☆☆</el-menu-item>
      <el-menu-item index="/1/customer">
        客户信息
      </el-menu-item>
      <el-menu-item index="/1/sale">销售机会</el-menu-item>
      <el-menu-item index="/1/call">外呼记录</el-menu-item>
      <el-menu-item index="/1/servicesetting">服务设置</el-menu-item>
      <el-menu-item index="/1/formsetting">表单设置</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {

    return {

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '2') {
        this.$router.push('/1/customer')
      } else if (key === '3') {
        this.$router.push('/1/sale')
      } else if (key === '4') {
        this.$router.push('/1/call')
      } else if (key === '5') {
        this.$router.push('/1/servicesetting')
      } else if (key === '6') {
        this.$router.push('/1/formsetting')
      }
    }
  },
  created () {
    // this.$route.path='/1/customer'
    console.log(this.$route)
    console.log(this.$route.path)
    // this.$route.path = "/1/customer"
  }
}
</script>
<style scoped>

</style>
