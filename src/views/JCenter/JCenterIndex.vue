<template>
	<div class="container">
		<div class="content">
			<div class="breadcrumb">
				<el-breadcrumb separator="/" style="line-height: 50px;">
					<el-breadcrumb-item>监控中心</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="seach">
				<div class="left">
					<i style="color:#20A0FF" class="iconfont icon-fangkuang"></i><span>&nbsp;连接正常</span>
					<i style="color:red" class="iconfont icon-fangkuang"></i><span>&nbsp;设备告警</span>
					<i style="color:#D3DCE6" class="iconfont icon-fangkuang"></i><span>&nbsp;连接断开</span>
					<i style="color:#F7BA2A" class="iconfont icon-fangkuang"></i><span>&nbsp;连接异常</span>
				</div>
				<div class="right">
					<el-form :inline="true" :model="formInline" class="demo-form-inline">
						<el-form-item>
							<el-input v-model="formInline.user" placeholder="请输入查询条件"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" icon="search">快速查找</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
			<div class="list">

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
				}
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
	.container{
		display: flex;
		flex-direction:column;
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
		.content{
			flex:1;
			background-color: #F9FAFC;
			overflow: hidden;
			.breadcrumb{
				margin: 15px;
				border:1px solid #d1dbe5;
				background-color: #fff;
				box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
				.el-breadcrumb{
					line-height: 50px;
					padding-left: 15px;
				}
			}
			.seach{
				font-size: 14px;
				height: 50px;
				line-height:50px;
				border-bottom: 3px solid #58B7FF;
				margin: 15px;
				padding-left: 15px;
				.left{
					float:left;
					span{
						color: #48576a;
					}
				}
				.right{
					float: right;
				}
			}
		}
	}
</style>
