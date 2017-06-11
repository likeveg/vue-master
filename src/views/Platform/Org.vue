<s></s><template>
	<div class="container">
		<div class="content">
			<div class="breadcrumb">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item　:to="{	path:	'/Org'}">平台管理</el-breadcrumb-item>
					<el-breadcrumb-item>组织机构管理</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<div class="seachBar">
				<div class="left">
					<el-input placeholder="请输入名称查询" v-model="searchWords"></el-input>
					<el-button type="primary" icon="search" @click.native.prevent="queryOrgTree()" class="searchButton">查找</el-button>
				</div>
				<div class="right">
					<el-button type="primary" icon="plus">增加</el-button>
					<el-button type="primary" icon="edit">编辑</el-button>
					<el-button type="primary" icon="minus">删除</el-button>
				</div>
			</div>
			<div class="contentView">
				<div class="orgTreeView">
					<el-tree :data="treeData"
									 :props="defaultTreeProps"
									 default-expand-all
									 ref="tree"
									 node-key="orgId"
									 highlight-current
									 @node-click="handleNodeClick"></el-tree>
				</div>
				<div class="orgFromView">
					<div class="formView">
						<div class="viewItem">
								<div class="viewItemDetail">
									<label class="viewItemLabel">机构名称</label>
									<el-input placeholder="机构名称" class="viewItemInput" v-model="vm.orgName"></el-input>
								</div>
								<div class="viewItemDetail">
									<label　class="viewItemLabel">父级机构</label>
									<el-input placeholder="父级机构" class="viewItemInput" v-model="vm.parentOrgName"></el-input>
								</div>
						</div>
						<div class="viewItem">
							  <div class="viewItemDetail">
							  	<label　class="viewItemLabel">机构类型</label>
									<el-select placeholder="请选择机构类型" class="viewItemInput"　v-model="vm.orgType">
										<el-option
											v-for="item in vm.orgTypes"
											:key="item.value"
											:label="item.label"
											:value="item.value"></el-option>
									</el-select>
							  </div>
								<div class="viewItemDetail">
									<div class="itemMultiAlign">
										<label　class="viewItemLabel">所在城市</label>
										<el-select placeholder="省(市)" class="viewItemInput multiInput" v-model="vm.orgProvince">
											<el-option v-for="item in vm.orgProvinces"
																 :key="item.value"
																 :label="item.label"
																 :value="item.value"></el-option>
										</el-select>
										<el-select placeholder="市(州)" class="viewItemInput multiInput" v-model="vm.orgCity">
											<el-option v-for="item in vm.orgCities"
																 :key="item.value"
																 :label="item.label"
																 :value="item.value"></el-option>
										</el-select>
										<el-select placeholder="区(县)" class="viewItemInput multiInput" v-model="vm.orgCountry">
											<el-option v-for="item in vm.orgCountries"
																 :key="item.value"
																 :label="item.label"
																 :value="item.value"></el-option>
										</el-select>
										<!-- <el-select placeholder="镇(乡)" class="viewItemInput multiInput">
											<el-option label="金碧镇"　value="0"> </el-option>
											<el-option label="石羊镇"　value="1"> </el-option>
										</el-select> -->
									</div>
								</div>
						</div>
					</div>
					<div class="saveBar">
						<el-button type="primary" icon="edit">保存</el-button>
						<el-button type="primary" icon="minus">取消</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import api from '@/api'
export default {
	data () {
		return {
			loading: false,
			treeData: [],
			defaultTreeProps: {
				children: 'children',
				label: 'label',
				orgType: 'orgType',
				orgId: 'orgId',
				orgName: 'orgName',
				parentOrgId: 'parentOrgId',
				parentOrgName: 'parentOrgName'
			},
			searchWords: '',
			vm: {
				orgId: 1,
				orgName: '苗乡三七科技',
				parentOrgId: 0,
				parentOrgName: '神谷云平台',
				orgType: 1,
				orgTypes: [{
						value: 0,
						label: '平台'
				}, {
					value: 1,
					label: '公司'
				}, {
					value: 2,
					label: '地块'
				}, {
					value: 3,
					label: '大棚'
				}, {
					value: 4,
					label: '车间'
				}],
				orgProvince: 1,
				orgProvinces: [
					{
						value: 1,
						label: '云南省'
					},
					{
						value: 2,
						label: '贵州省'
					},
					{
						value: 3,
						label: '四川省'
					},
					{
						value: 4,
						label: '陕西省'
					},
					{
						value: 5,
						label: '广西省'
					}
				],
				orgCity: 1,
				orgCities: [
					{
						value: 1,
						label: '昆明'
					},
					{
						value: 2,
						label: '曲靖'
					},
					{
						value: 3,
						label: '楚雄'
					},
					{
						value: 4,
						label: '玉溪'
					},
					{
						value: 5,
						label: '红河'
					}
				],
				orgCountry: 1,
				orgCountries:	[
					{
						value: 1,
						label: '五华区'
					},
					{
						value: 2,
						label: '官渡区'
					},
					{
						value: 3,
						label: '西山区'
					},
					{
						value: 4,
						label: '盘龙区'
					},
					{
						value: 5,
						label: '石林县'
					}
				]
			}
		}
	},
	created () {
		this.queryOrgTree()
	},
	methods: {
		handleNodeClick: function (data) {
			let orgName = data.label
			console.log(orgName)
			this.vm.orgName = data.orgName
			this.vm.parentOrgName = data.parentOrgName
			this.vm.orgType = data.orgType
		},
		queryOrgTree: function () {
			let params = {
				id: 1
			}
			this.loading = true
			api.OrgTreeRequst(params).then(res => {
				this.treeData = res.data.orgTreeData.data
				this.loading = false
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.container{
	display: flex;
	margin: 15px 15px;
	flex-direction: column;
	.content{
		display: flex;
		flex-direction: column;
		border: 1px solid #F9FAFC;
		.breadcrumb{
			background-color: #F9FAFC;
			.el-breadcrumb{
				height: 40px;
				line-height: 40px;
				font-size: 15px;
			}
		}
		.seachBar{
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			// border-bottom: 3px solid #58B7FF;
			align-items: center;
			margin-top: 10px;
			padding-bottom: 10px;
			.left{
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				.searchButton{
					margin-left: 5px;
				}
			}
			.right{
				padding-right: 40px;
			}
		}
		.contentView{
			border: 1px solid #d1dbe5;
			height: 460px;
			display: flex;
			flex-direction: row nowrap;
			margin-top: 0px;
			.orgTreeView{
				border: 1px solid red;
				height: 460px;
				width: 300px;
				border: 1px solid #d1dbe5;
				.el-tree{
					border: none;
				}
			}
			.orgFromView{
				border: 1px solid #F9FAFC;
				padding-top: 5px;
				margin-left: 5px;
				display: flex;
				flex-flow: column;
				justify-content: space-between;
				.formView{
					display: flex;
					flex-flow: column nowrap;
					.viewItem{
						display: flex;
						flex-flow: row nowrap;
						font-size: 14px;
						align-items: center;
						.viewItemDetail{
							display: flex;
							flex-flow: row nowrap;
							align-items: center;
							padding: 5px 5px;
							.viewItemLabel{
								padding-right: 5px;
								width: 60px;
							}
							.viewItemInput{
								width: 390px;
							}
							.itemMultiAlign{
								display: flex;
								flex-flow: row nowrap;
								align-items: center;
								.multiInput{
									width: 130px;
								}
							}
						}
					}
				}
				.saveBar{
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-end;
					padding-right: 5px;
				}
			}
		}
	}
}
</style>
