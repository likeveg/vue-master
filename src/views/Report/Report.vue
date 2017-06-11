<template>
	<div class="container">
    <div class="content">
      <div class="breadcrumb">
        <el-breadcrumb separator="/" style="line-height: 50px;">
          <el-breadcrumb-item>报表设备选择</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="select-base-wrapper">
        <p><i class="iconfont icon-1" style="font-size:20px;color:#33d7d5;"></i>&nbsp;&nbsp;<span style="color:#33d7d5">第一步&nbsp;&nbsp;:</span>&nbsp;&nbsp;选择基地</p>
        <div class="select-base-input">
          <div class="input1">
            <div>当前企业</div>
            <div class="input-right1">
              <!--<el-select v-model="company" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>-->
              <el-select v-model="company" placeholder="不限">
                <el-option
                  v-for="item in optionBuXian"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
                <el-option-group
                  v-for="group in companys"
                  :key="group.label"
                  :label="group.label">
                  <el-option
                    v-for="item in group.company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-option-group>
              </el-select>
            </div>
          </div>
          <div class="input2">
            <div>当前基地</div>
            <div class="input-right2">
              <el-select v-model="base" placeholder="不限">
              <el-option
                v-for="item in bases"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </div>
          </div>
          <div class="input3">
            <div>环境</div>
            <div class="input-right3"><el-select v-model="environment" placeholder="请选择">
              <el-option
                v-for="item in environments"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div>
          </div>
        </div>
      </div>
      <div class="select-device-wrapper">
        <p><i class="iconfont icon-2" style="font-size:20px;color:#33d7d5;"></i>&nbsp;&nbsp;<span style="color:#33d7d5">第二步&nbsp;&nbsp;:</span>&nbsp;&nbsp;选择设备</p>
        <div class="fengexian"></div>
        <div class="device-list">
          <div class="list" v-if="isShowList">列表</div>
          <div class="nolist" v-else>
            <!--<i class="iconfont icon-diannao" style="font-size:100px;"></i>-->
            <img src="../../assets/lock.png"/>
            <p>无设备信息</p>
            <p class="nolist-text2">请操作第一步选择企业和基地信息</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'report',
    data () {
      return {
        /* 当前企业 */
        companys: [
          {
            label: '云南神谷科技农业物联网云平台',
            company: [
              {
                value: 'sanqi',
                label: '文山三七科技'
              },
              {
                value: '1',
                label: '银河之星1'
              },
              {
                value: '2',
                label: '银河之星2'
              },
              {
                value: '3',
                label: '银河之星3'
              },
              {
                value: '4',
                label: '银河之星4'
              },
              {
                value: '5',
                label: '银河之星5'
              },
              {
                value: '7',
                label: '银河之星6'
              },
              {
                value: '8',
                label: '银河之星7'
              }
            ]
          }
        ],
        /* 不限 */
        optionBuXian: [
          {
            value: '选项1',
            label: '不限'
          }
        ],
        /* 当前基地 */
        bases: [
          {
            value: '1',
            label: '当前基地1'
          },
          {
            value: '2',
            label: '当前基地2'
          },
          {
            value: '3',
            label: '当前基地3'
          },
          {
            value: '4',
            label: '当前基地4'
          },
          {
            value: '5',
            label: '当前基地5'
          },
          {
            value: '6',
            label: '当前基地6'
          }
        ],
        /* 环境 */
        environments: [
          {
            value: '1',
            label: '棚外'
          },
          {
            value: '2',
            label: '棚内'
          }
        ],
        company: '',
        base: '',
        environment: '',
        isShowList: false
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction:column;
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
      .select-base-wrapper{
        margin-left:40px;
        margin-top:50px;
        p{

        }
        .select-base-input{
          height:36px;
          margin-left:20px;
          margin-top:30px;
          .input1{
            float:left;
            div{
              float:left;
              line-height:36px;
            }
            .input-right1{
              margin-left:20px;
            }

          }
          .input2{
            float:left;
            margin-left:30px;
            div{
              float:left;
              line-height:36px;
            }
            .input-right2{
              margin-left:20px;
            }
          }
          .input3{
            float:left;
            margin-left:30px;
            div{
              float:left;
              line-height:36px;
            }
            .input-right3{
              margin-left:20px;
            }
          }
        }
      }
      .select-device-wrapper{
        margin-left:40px;
        margin-right:15px;
        margin-top:50px;
        .fengexian{
          height:3px;
          margin-left:-25px;
          margin-top:25px;
          background: #ccc;
        }
        .device-list{
          .list{

          }
          .nolist{
            width:400px;
            height:200px;
            text-align:center;
            margin: 100px 600px;
            .nolist-text2{
            }
          }
        }
      }
    }
  }
</style>
