<template>
  <!-- "您的位置" 导航栏 -->
  <div class="locationNav-container">
    <el-row>
      <el-col :span=24>
        <div class="grid-content">您的位置&nbsp;&nbsp;:&nbsp;&nbsp;<slot></slot></div>
      </el-col>
    </el-row>
  </div>
</template>
<script></script>
<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  .grid-content{
    min-height: 36px;
    min-width:450px;
    line-height:36px;
    margin:15px;
    padding-left:35px;
    background-color: #f2f4f3;
    background-image: url('../assets/icon_location_now.png');
    background-position:10px center; /* 距左  距上 */
    background-repeat: no-repeat;

  }
</style>
