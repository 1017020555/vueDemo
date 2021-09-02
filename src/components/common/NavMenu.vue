<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red">
    <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.name">
        {{item.navItem}}
    </el-menu-item>



    <a href="#nowhere" style="color: #222;float: right;padding: 20px;text-decoration: none;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>

    <span style="color: #222;float: right;padding: 20px;text-decoration: none;position: absolute;">图书馆</span>

  </el-menu>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '笔记本'},
          {name: '/library', navItem: '图书馆'},
          {name: '/admin', navItem: '个人中心'}
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
