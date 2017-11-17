<template>
	<main class='all'>
		<div class="side">
			<h1 @click="back">&rang;</h1>
			<div class="sidebar">
				<img src="../../assets/images/sidebar.png"/>
			</div>
			<div class="head">
				<div class="header">
					<router-link to='/datum'>
						<img src="../../assets/images/head.jpg"/>
					</router-link>
					
				</div>
				<div>
					<h2 class="name">昵称</h2>
					<h2 class="rank">
						<img src="../../assets/images/star.png"/>
						<img src="../../assets/images/star.png"/>
						<img src="../../assets/images/star.png"/>
					</h2>
				</div>
			</div>
			<p>个性签名:个性签名 个性签名 个性签名</p>
			<ul class="list">
				<li>	
					<span>精品汇</span>
				</li>
				<li>	
					<span>我的定制</span>
				</li>
				<li>	
					<span>酷玩新品</span>
				</li>
				<li>	
					<span>会员俱乐部</span>
				</li>
				<li>	
					<span>线下体验店</span>
				</li>
				<li>	
					<span>推荐给朋友</span>
				</li>
			</ul>
			<div class="weather">
					<p>2&nbsp;1°</p>
					<p>深圳</p>
			</div>
			<ul class="bonav">
				<li>
					<router-link to='/set'>
						<span>设置</span>
					</router-link>
				</li>
				<li>
					<router-link to='/night'>
						<span>夜间</span>
					</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.all .side>h1{
		font-size: 20px;
		position: fixed;
		right: 15%;
		top: 0;
		z-index: 5;
		color: #fff;
	}
	.all .side{
		width: 90%;
		height: 100%;
		background: #0193e6;
		position: fixed;
		top:0;
		left: 0;
		z-index:3;
	}
	.all .side .sidebar img{
		width: 20%;
		position: fixed;
		left:71%;
		top:0;
	}
	.all .head{
		width: 60%;
		margin: 0 10px;
		margin-top: 40px;
		overflow: hidden;
		padding-left:20px ;
	}
	.all .head>div{
		line-height: 28px;
	}
	.all .head img{
		width: 100%;
		float: left;
	}
	.all .head>div>.name{
		color: #fff;
		font-size: 20px;
		padding-left: 10px;
		margin-top: 20px;
	}
	.all .head>div> .rank{
		color: #fff;
		font-size: 20px;
		padding-left: 10px;
	}
	.all .head>div>.rank>img{
		width: 10%;
	}
	.all .header{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		float: left;
		overflow: hidden;
	}
	.all .side>p{
		width: 70%;
		font-size: 12px;
		color: #fff;
		margin-top: 5px;
		padding-left: 30px;
	}
	.all .list{
		width: 65%;
	    margin-left: 42px;
	}
	.all .list li span{
		width: 100%;
		display: block;
		margin-top: 20px;
		
	}
	.all .list li{
		font-size: 16px;
	    color: #fff;
	    border-bottom: 1px solid #fff;
	    margin-bottom: 19px;
	    text-indent: 35px;
	    padding-bottom: 2px;
	}
	.all .list li:nth-of-type(1){
		background: url(../../assets/images/buy.png) no-repeat ;
		background-size: 13%;
	}
	.all .list li:nth-of-type(2){
		background: url(../../assets/images/my.png) no-repeat ;
		background-size: 13%;
	}
	.all .list li:nth-of-type(3){
		background: url(../../assets/images/buy.png) no-repeat ;
		background-size: 13%;
	}
	.all .list li:nth-of-type(4){
		background: url(../../assets/images/buy.png) no-repeat ;
		background-size: 13%;
	}
	.all .list li:nth-of-type(5){
		background: url(../../assets/images/buy.png) no-repeat ;
		background-size: 13%;
	}
	.all .list li:nth-of-type(6){
		background: url(../../assets/images/community.png) no-repeat ;
		background-size: 13%;
	}
	.weather{
		width: 200px;
		margin: 0 auto;
	}
	.weather>p:nth-of-type(1){
		font-size: 30px;
		color: #fff;
		text-align: center;
	}
	.weather>p:nth-of-type(2){
		font-size: 10px;
		color: #fff;
		padding-right:10px;
		text-align: center;
	}
	.bonav{
		overflow: hidden;
		width: 70%;
		height: 30px;
		margin: 10px 34px;
	}
	.bonav>li{
		float: left;
	}
	.bonav>li:nth-last-of-type(1){
		display: block;
		font-size: 20px;
		color: #fff;
		width: 50%;
		float: left;
	}
	.bonav>li:nth-last-of-type(2){
		display: block;
		font-size: 20px;
		color: #fff;
		width: 50%;
		float: right;
	}
	.bonav>li:nth-last-of-type(2) span{
		display: block;
		float: right;
	}
	.bonav>li a{
		text-decoration: none;
		color: #fff;
	}
</style>