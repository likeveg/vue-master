<template>
  <!-- 设备类型 -->
	<div class="container">
    <div class="content">
      <div class="breadcrumb">
        <el-breadcrumb separator="/" style="line-height: 50px;">
          <el-breadcrumb-item>设备类型</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="select-wrapper">
        <el-form :inline="true" :model="formInline" class="form-inline">
          <el-form-item label="设备类别">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="类型名称">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item class="add">
            <el-button @click="onSubmit" icon="plus">新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="deviceType-list-wrapper">
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 70%">
          <el-table-column
            prop="deviceTypeXuHao"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="deviceTypeId"
            label="设备类型编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="deviceTypeName"
            label="设备类型名称">
          </el-table-column>
          <el-table-column
            prop="deviceTypeLeiBie"
            label="设备类别">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                icon="edit"
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                icon="minus"
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
        formInline: {
          user: '',
          region: ''
        },
        /* 列表数据源 */
        tableData: [
          {
            deviceTypeXuHao: '1',
            deviceTypeId: '1',
            deviceTypeName: '1',
            deviceTypeLeiBie: '1',
            deviceTypeOperate: '1'
          },
          {
            deviceTypeXuHao: '2',
            deviceTypeId: '2',
            deviceTypeName: '2',
            deviceTypeLeiBie: '2',
            deviceTypeOperate: '2'
          },
          {
            deviceTypeXuHao: '3',
            deviceTypeId: '3',
            deviceTypeName: '3',
            deviceTypeLeiBie: '3',
            deviceTypeOperate: '3'
          },
          {
            deviceTypeXuHao: '4',
            deviceTypeId: '4',
            deviceTypeName: '4',
            deviceTypeLeiBie: '4',
            deviceTypeOperate: '4'
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
      },
      onSubmit () {
        console.log('submit!')
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
        .form-inline{
          height:40px;
          .add{
            float:right;
            margin-right:0px;
          }
        }
      }
      .deviceType-list-wrapper{
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
