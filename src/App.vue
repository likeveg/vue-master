<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app'
}
</script>
<style>
@import url('//at.alicdn.com/t/font_p7n2f6taoyh3q5mi.css');
@import url('//at.alicdn.com/t/font_23478o4fft21emi.css');
html,body{
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	box-sizing:border-box;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 16px;
	-webkit-font-smoothing: antialiased;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	min-width: 1259px;
}
</style>
