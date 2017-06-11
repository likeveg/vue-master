<template>
  <!-- 分页 -->
  <div class="paging-container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[2, 4, 6, 8,10,12]"
            :page-size="100"
            layout="prev, pager, next, jumper,sizes,total"
            :total="20">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'paging',
    data () {
      return {
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log('....')
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  .grid-content{
    background: #f2f4f3;
  }
  .paging-container{
  }

</style>
