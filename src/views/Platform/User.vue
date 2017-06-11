<template>
  <!-- 用户维护 -->
  <div class="container">
    <div class="content">
      <div class="breadcrumb">
        <el-breadcrumb separator="/" style="line-height: 50px;">
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="select-wrapper">
        <el-form :inline="true" class="form-inline">
          <el-form-item class="item01">
            <el-input placeholder="输入名称查询" class="item01-input"></el-input>
          </el-form-item>
          <el-form-item class="item02">
            <el-button type="primary" icon="search" class="item02-button">查询</el-button>
          </el-form-item>
          <el-form-item class="item03">
            <el-button icon="setting" @click="resetPwd">密码重置</el-button>
          </el-form-item>
          <el-form-item class="item04">
            <el-button icon="edit" @click="edit">编辑</el-button>
          </el-form-item>
          <el-form-item class="item05">
            <el-button icon="plus" @click="add">增加</el-button>
          </el-form-item>        </el-form>
      </div>
      <div class="tree-form-wrapper">
        <div class="left">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[1]">
          </el-tree>
        </div>
        <div class="right">
          <p class="form-text">基本信息</p>
          <el-form labelPosition="right" label-width="140px">
            <el-form-item label="用户名:">
               <div class="input-wrapper"><el-input v-model="user.user" :disabled="flag"></el-input></div>
               <div class="user-error" v-if="isUserError">用户名不能为空</div>
            </el-form-item>
            <el-form-item label="姓名:">
              <div class="input-wrapper"><el-input v-model="user.name" :disabled="flag"></el-input></div>
              <div class="name-error"></div>
            </el-form-item>
            <el-form-item label="所属组织:">
              <div class="input-wrapper"><el-input v-model="user.organize" :disabled="flag"></el-input></div>
              <div class="organize-error"></div>
            </el-form-item>
            <el-form-item label="联系电话:">
              <div class="input-wrapper"><el-input v-model="user.phone" :disabled="flag"></el-input></div>
              <div class="phone-error" v-if="isPhoneError">联系电话不能为空</div>
              <div class="phone-error" v-if="isPhoneErrorFeiFa">联系电话非法</div>
            </el-form-item>
            <el-form-item label="邮箱:">
              <div class="input-wrapper"><el-input v-model="user.email" :disabled="flag"></el-input></div>
              <div class="email-error" v-if="isEmailError">邮箱不能为空</div>
              <div class="email-error" v-if="isEmailErrorFeiFa">邮箱非法</div>
            </el-form-item>
            <el-form-item label="性别:">
              <el-radio-group v-model="user.sex">
                <el-radio label="男" :disabled="flag"></el-radio>
                <el-radio label="女" :disabled="flag"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="用户状态:">
              <el-radio-group v-model="user.status">
                <el-radio label="启用" :disabled="flag"></el-radio>
                <el-radio label="禁用" :disabled="flag"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="管理员:">
              <el-radio-group v-model="user.manager">
                <el-radio label="是" :disabled="flag"></el-radio>
                <el-radio label="否" :disabled="flag"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="用户类型:">
              <el-radio-group v-model="user.type">
                <el-radio label="一般用户" :disabled="flag"></el-radio>
                <el-radio label="租户" :disabled="flag"></el-radio>
                <el-radio label="专家" :disabled="flag"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="用户头像:">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/">
                <el-button size="small" type="primary" :disabled="flag">点击上传</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item label="所负责组织:">

            </el-form-item>
            <el-form-item class="submit-button">
              <el-button type="primary" @click="save" :disabled="flag">保存</el-button>
              <el-button type="primary" @click="cancel" :disabled="flag">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'user',
    data () {
      return {
        currentPage: 1,
        pageSize: [6, 8, 10],
        user: {
          sex: '男',
          status: '启用',
          manager: '否',
          type: '一般用户'
        },
        data: [
          {
            id: '1',
            label: '云南神谷科技农业物联网云平台',
            children: [
              {
                id: '2',
                label: '二级 1-1',
                children: [
                  {
                    id: '7',
                    label: '三级 1-1-1'
                  }
                ]
              },
              {
                id: '3',
                label: '二级1-2'
              },
              {
                id: '4',
                label: '二级1-3'
              },
              {
                id: '5',
                label: '二级1-4'
              },
              {
                id: '6',
                label: '二级1-5'
              }
            ]
          }
        ],
        isUserError: false,
        isPhoneError: false,
        isPhoneErrorFeiFa: false,
        isEmailError: false,
        isEmailErrorFeiFa: false,
        flag: true
      }
    },
    methods: {
      handleCurrentChange () {
        console.log('handleCurrentChange')
      },
      handleSizeChange () {
        console.log('handleSizeChange')
      },
      add () {
        this.$message(
          {
            showClose: 'true',
            type: 'info',
            message: '提示信息'
          }
        )
        this.flag = false
      },
      edit () {
        this.$message(
          {
            showClose: 'true',
            type: 'info',
            message: '提示信息'
          }
        )
      },
      resetPwd () {
        this.$message(
          {
            showClose: 'true',
            type: 'info',
            message: '提示信息'
          }
        )
      },
      /* 保存 */
      save () {
        // 1.验证表单
        // 2.发送请求
        // 3.获取响应
        // 4.更新视图
        /* 验证 */
          var regPhone = /^1\d{10}$/
          var regEmail = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/
          /* 用户名 */
          if (!this.user.user) {
            this.isUserError = true
            return
          } else {
            this.isUserError = false
          }
          /* 手机 */
          if (!this.user.phone) {
            this.isPhoneError = true
            this.isPhoneErrorFeiFa = false
            return
          } else if (!regPhone.test(this.user.phone)) {
            this.isPhoneError = false
            this.isPhoneErrorFeiFa = true
            return
          } else {
            this.isPhoneError = false
            this.isPhoneErrorFeiFa = false
          }
          /* 邮箱 */
          if (!this.user.email) {
            this.isEmailError = true
            this.isEmailErrorFeiFa = false
            return
          } else if (!regEmail.test(this.user.email)) {
            this.isEmailError = false
            this.isEmailErrorFeiFa = true
            return
          } else {
            this.isEmailError = false
            this.isEmailErrorFeiFa = false
          }
          /*  */
          this.$notify({
            title: '成功',
            message: '这是一条成功的提示消息',
            type: 'success',
            offset: 400
          })
      },
      cancel () {
        /* 清空所有状态 */
        this.flag = true
        this.user.user = ''
        this.user.name = ''
        this.user.organize = ''
        this.user.phone = ''
        this.user.email = ''
        this.isUserError = false
        this.isPhoneError = false
        this.isPhoneErrorFeiFa = false
        this.isEmailError = false
        this.isEmailErrorFeiFa = false
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
       /* margin:15px;*/
        margin-left:30px;
        width:850px;
        .form-inline{
          .item01{
            margin-right:0px;
            .item01-input{
            }
          }
          .item02{
            margin-left:-5px;
            .item02-button{
            }
          }
          .item05{
            float:right;
          }
          .item04{
            float:right;
          }
          .item03{
            float:right;
          }
        }
      }
      .tree-form-wrapper{
        margin-top:-10px;
        .left{
          float:left;
          margin-left:30px;
          width:280px;
          height:680px;
          border:1px solid #CCC;
          .el-tree{
            margin:0px;
            background: #f9fafc;
            border: 0px solid #d1dbe5;
          }
        }
        .right{
          float:left;
          margin-left:15px;
          width:550px;
          height:720px;
          border:1px solid #CCC;
          .form-text{
            margin:15px;
          }
          .el-form{
            .el-form-item{
              height:36px;
              margin-bottom:15px;
              .input-wrapper{
                float:left;
                width:250px;
              }
              .user-error,.name-error,.organize-error,.phone-error,.email-error{
                width:135px;
                height:36px;
                padding-left:15px;
                color:red;
                float:left;
              }
            }
            .submit-button{
              margin-top: 70px;
              margin-left:60px;
            }
          }
        }
      }
    }
  }
</style>
