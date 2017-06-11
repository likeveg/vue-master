<template>
	<el-row class="container">
		<el-col :span="24" class="header" >
			<el-col :span="10"  class="logo" :class="collapsed?'logo-width':'logo-collapse-width'"></el-col>
			<el-col :span="10" style="margin-left: 5px;"></el-col>
			<el-col :span="4"></el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-expanded':'menu-collapsed'">
				<el-menu default-active="/TroubleIndex" v-show="collapsed" class="el-menu-vertical-demo"  unique-opened router>
					<template v-for="(item,index) in authMenu" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title">&nbsp;&nbsp;&nbsp;<i :class="item.iconCls">&nbsp;&nbsp;&nbsp;</i>{{item.name}}</template>
							<el-menu-item style="" v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{child.name}}</el-menu-item>
						</el-submenu>    
						<el-menu-item v-if="item.leaf"  :index="item.children[0].path">&nbsp;&nbsp;&nbsp;<i :class="item.iconCls"></i>&nbsp;&nbsp;&nbsp;{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>

				<ul class="el-menu collapsed" ref="menuCollapsed" v-show="!collapsed">
					<li v-for="(item,index) in authMenu" v-if="!item.hidden" class="el-submenu item">
						<template v-if="item.leaf"> 
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 0px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
						<template v-else>
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu tipMenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
					</li>
				</ul>
				<div class="changeState" @click="collapsed=!collapsed">
					<i v-if="collapsed" class="iconfont icon-shousuo"></i>
					<i v-else class="iconfont icon-shousuo1"></i>
				</div>	
			</aside>
			<section class="content-container">
				<router-view></router-view>
			</section>	
		</el-col>
	</el-row>
</template>
<script>
	export default{
		data () {
			return {
				collapsed: false
			}
		},
		computed: {
			authMenu: function () {
				return JSON.parse(sessionStorage.getItem('menu'))
			}
		},
		mounted () {
			// console.log(this.authMenu)
		},
		methods: {
			xx (child) {
				console.log(child.path)
			},
			showMenu (i, status) {
				let s = 'submenu-hook-' + i
				let tmp = this.$refs.menuCollapsed.getElementsByClassName(s)
				tmp[0].style.display = status ? 'block' : 'none'
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './../style/vars.scss';
	.container{
		top: 0px;
		bottom: 0px;
		width: 100%;
		height: 100%;
		.header{
			height: 60px;
			background-color: $color-lightblack;
			color:#fff;
			.logo{
				background-color: $color-lightblack;
				height: 60px;
			}
			.logo-width{
				width: 230px;
			}
			.logo-collapse-width{
				width: 60px;
			}
		}
		.main{
			display: flex;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside{
				position:relative;
				flex:0 0 230px;
				width: 230px;
				.collapsed{
					width: 60px;
					.item{
						position: relative;
					}
					.tipMenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display: none;
					}
				}
				.el-menu{
					height: 100%;
				}
				.iconfont{
					font-size: 20px;
				}
				.changeState{
					position:absolute;
					bottom:0px;
					background-color: #324057;
					width: 100%;
					height: 55px;
					text-align: center;
					line-height: 55px;
					color: $color-lightwhite;
				}
			}
			.menu-collapsed{
					flex: 0 0 60px;
					width: 60px;
				}
				.menu-expanded{
					flex: 0 0  230px;
					width: 230px;
				}
			.content-container{
				flex:1;
			}
		}
	}
</style>
