<template>
	<div class="container">
		<div class="content">
			<div class="breadcrumb">
				<el-breadcrumb separator="/" style="line-height: 50px;">
					<el-breadcrumb-item>故障列表</el-breadcrumb-item>
				</el-breadcrumb>	
			</div>
			<div class="seach">
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="当前企业">
						<el-select v-model="formInline.region" placeholder="选择企业">
						<el-option label="不限" value="123"></el-option>
						<el-option label="银河之星农业物联网云平台" value="shanghai"></el-option>
						<el-option label="文山三七" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属基地">
						<el-input v-model="formInline.user" placeholder="请输入基地名称"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary">查询</el-button>
					</el-form-item>
				</el-form>
				<div class="seachRight">
					<span>所有企业：2&nbsp;&nbsp;&nbsp;所有基地：1&nbsp;&nbsp;&nbsp;故障基地：0&nbsp;&nbsp;&nbsp;<el-button type="primary">刷新</el-button></span>
				</div>
			</div>
			<div class="list">
				<i class="el-icon-check"></i>
				<p>当前所有设备运转正常！</p>
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
				height: 50px;
				border-bottom: 3px solid #58B7FF;
				margin: 15px;
				padding-left: 15px;
				display: flex;
				.demo-form-inline{
					flex:1;
				}
				.seachRight{
					width: 370px;
					color:#48576a;
				}
			}
			.list{
				text-align: center;
				padding: 100px;
				i{
					font-size: 60px;
					color: #C0CCDA;
				}
				p{
					font-size:15px;
					color:#C0CCDA;
				}
			}
		}
	}
</style>
