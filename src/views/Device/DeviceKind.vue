<template>
	<!-- 设备类别 -->
  <div class="container">
    <div class="content">
      <div class="breadcrumb">
        <el-breadcrumb separator="/" style="line-height: 50px;">
          <el-breadcrumb-item>设备类别</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="select-wrapper">
        <el-form :inline="true" :model="formInline" class="form-inline">
          <el-form-item label="类别名称:">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="search">查询</el-button>
          </el-form-item>
          <el-form-item class="add">
            <el-button @click="onSubmit" icon="plus">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="deviceKind-list-wrapper">
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 60%">
          <el-table-column
            prop="deviceKindId"
            label="类别编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="deviceKindName"
            label="类别名称"
            width="500">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                icon="edit"
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="footer">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSize" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="120" class="pagination"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentPage: 1,
        pageSize: [6, 8, 10],
        tableData: [
          {
            deviceKindId: '1',
            deviceKindName: '1'
          },
          {
            deviceKindId: '2',
            deviceKindName: '2'
          },
          {
            deviceKindId: '4',
            deviceKindName: '4'
          },
          {
            deviceKindId: '3',
            deviceKindName: '3'
          }
        ]
      }
    },
    methods: {
      handleCurrentChange () {
        console.log('handleCurrentChange')
      },
      handleSizeChange () {
        console.log('handleSizeChange')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      background-color: #F9FAFC;
      overflow: hidden;
      .breadcrumb {
        margin: 15px;
        border: 1px solid #d1dbe5;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        .el-breadcrumb {
          line-height: 50px;
          padding-left: 15px;
        }
      }
      .select-wrapper{
        margin:15px;
        .add{
          float:right;
          margin-right:0px;
        }
      }
      .deviceKind-list-wrapper{
        margin:15px;
      }


    }
    .footer{
      height:54px;
      line-height: 54px;
      text-align: center;
      border-top:1px solid #d1dbe5;
      margin-bottom: 0px;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
      .pagination{
        margin-top: 10px;
        line-height:54px;
      }
    }
  }
</style>
