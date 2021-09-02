<template>
  <el-container>

      <el-aside width="200px">
        <side-menu></side-menu>
      </el-aside>

      <el-main>
        <books></books>
      </el-main>

  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'
  export default {
    name: 'LibraryIndex',
    components: {Books, SideMenu}
  }
</script>

<style scoped>

</style>
