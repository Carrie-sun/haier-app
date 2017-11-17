<template>
	<main>
		<header>
			<div class="heading">
				<div class="back" @click="back">&lt;</div>
				<span>产品详情</span>
				<div class="head-right">
					<span>收藏</span>
					<span>更新</span>
				</div>
			</div>
		</header>
		<div class="content">
			<div class="icon">
				<img src="../../assets/image/fridge.jpg" alt="" />
				<div class="price">
					<div class="left">
						<p class="m">￥3299</p>
						<p class="p">987人想买</p>
					</div>
					<div class="right">
						<span class="f">￥</span>
						<span class="n">2299</span>
					</div>
				</div>
			</div>
			<ul>
				<li><img src="../../assets/image/fridge1.jpg" alt="" /></li>
				<li><img src="../../assets/image/fridge1.jpg" alt="" /></li>
				<li><img src="../../assets/image/fridge1.jpg" alt="" /></li>
				<li><img src="../../assets/image/fridge1.jpg" alt="" /></li>
			</ul>
			<h1>小超人无氟变频壁挂式空调</h1>
			<div class="a">fdvgdfnjdfkgvnfjkvn</div>
			<div class="msg a">
				<span>快递：0.00</span>
				<span>月销量：9897</span>
			</div>
			<div class="a">服务承若：送货上门，送装同步</div>
			<div class="a">
				<span>配送至：</span>
				<select name="">
					<option value="">广州</option>
				</select>
			</div>
			
		</div>
		<div class="res">
			<span class="left"></span>
			<p class="center">继续拖动，查看图文详情</p>
			<span class="right"></span>
		</div>
		<div class="con">
			<ul>
				<li><router-link to="picture">图文详情</router-link></li>
				<li><router-link to="picture">产品参数</router-link></li>
				<li><router-link to="picture">品牌推荐</router-link></li>
				<li><router-link to="picture">买家推荐</router-link></li>
			</ul>
			<ol>
				<li><img src="../../assets/image/fridge2.jpg" alt="" /></li>
				<li><img src="../../assets/image/fridge2.jpg" alt="" /></li>
				<li><img src="../../assets/image/fridge2.jpg" alt="" /></li>
			</ol>
			<img src="../../assets/image/fridge3.jpg"/>
		</div>
	</main>
</template>

<script scoped>
	export default {
		
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	main {
		background-color: #0495e4;
		padding-bottom: 76px;
		color: #FFFFFF;
	}
	
	header {
		padding: 10px 25px;
	}
	
	.heading {
		overflow: hidden;
		text-align: center;
	}
	
	.heading>span {
		font-size: 20px;
	}
	
	.back {
		font-size: 25px;
		float: left;
	}
	
	.head-right {
		line-height: 30px;
		float: right;
	}
	
	.content {
		width: 100%;
		padding: 10px 35px;
		box-sizing: border-box;
	}
	
	.icon {
		position: relative;
	}
	
	.icon>.price {
		width: 100%;
		height: 60px;
		padding: 0 8px;
		box-sizing: border-box;
		background: rgba(118, 118, 120, 0.3);
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	.icon>img {
		width: 100%;
	}
	
	.icon>.price>.left {
		float: left;
	}
	
	.m {
		font-size: 20px;
		color: red;
		margin-top: 10px;
		text-decoration: line-through;
	}
	
	.p {
		font-size: 12px;
	}
	
	.icon>.price>.right {
		float: right;
		color: red;
		line-height: 55px;
	}
	
	.f {
		font-size: 14px;
	}
	
	.n {
		font-size: 45px;
	}
	
	.content>ul {
		width: 100%;
		margin-top: 5px;
		overflow: hidden;
	}
	
	.content>ul>li {
		width: 25%;
		padding: 4px;
		box-sizing: border-box;
		float: left;
	}
	
	.content>ul>li>img {
		width: 100%;
	}
	
	.content>h1 {
		font-size: 18px;
	}
	.a{
		margin-top: 5px;
	}
	.res{
		width: 100%;
		overflow: hidden;
		background-color: #004a71;
		
	}
	.res>span{
		width: 24%;
		display: block;
		padding-top:35px;
		box-sizing: border-box;
		border-bottom: 1px solid #FFFFFF;
	}
	.res>.left{
		float: left;
	}
	.center{
		padding: 0 7px;
		line-height: 65px;
		float: left;
	}
	.res>.right{
		float: right;
	}
	.con{
		width: 100%;
		padding-top: 20px;
		background-color: #0094e4;
	}
	.con>ul>li{
		width: 25%;
		text-align: center;
		float: left;
		color: #FFFFFF;
	}
	.con>ul>li>a{
		font-size: 20px;
		color: #FFFFFF;
		text-decoration: none;
	}
	.con>ol{
		padding-left: 14px;
	}
	.con>ol>li{
		float: left;
		width: 32%;
		padding: 15px 5px;
		box-sizing: border-box;
	}
	.con>ol>li>img{
		width: 100%;
	}
	.con>img{
		width: 100%;
	}
	
</style>