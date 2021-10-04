<template>
  <el-container>

    <el-aside style="width: 220px;margin-top: 20px">
      <switch></switch>
      <side-menu @indexSelect="selectByCategory" ref="sideMenu"></side-menu>
    </el-aside>

    <el-main>
      <books class="books-area" ref="bookArea"></books>
    </el-main>

  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'

  export default {
    name: 'LibraryIndex',
    components: {Books, SideMenu},
    methods: {
      selectByCategory () {
        var _this = this
        var cid = this.$refs.sideMenu.cid
        this.$axios.get('/categories/' + cid + '/books').then(result => {
          if (result && result.status == 200) {
            _this.$refs.bookArea.books = result.data
            _this.$refs.bookArea.currentPage = 1
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
