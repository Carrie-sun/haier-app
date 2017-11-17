<template>
	<main>
		<div class="head">
			<h2 @click="back"><收货地址管理</h2>
		</div>
		<ul>			
			<li>
				<span>旺旺</span><span>18500002468</span>
				<div>
					<span style="color: red;">[默认]</span>
					<span>></span>
					<p>广东省深圳市宝安区旺星街道旺财小区3栋66号606室</p>
				</div>				
			</li>
			<li>
				<span>旺旺</span><span>18500002468</span>
				<div>
					<span>[默认]</span>
					<span>></span>
					<p>广东省深圳市宝安区旺星街道旺财小区3栋66号606室</p>
					
				</div>				
			</li>
			<li>
				<span>旺旺</span><span>18500002468</span>
				<div>
					<span>[默认]</span>
					<span>></span>
					<p>广东省深圳市宝安区旺星街道旺财小区3栋66号606室</p>
					
				</div>				
			</li>
		</ul>
		<router-link to='/add'><button>新增收货地址</button></router-link>	
		<router-view></router-view>
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

<style scoped>
	main{
		z-index: 99;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background:#f5f5f5 ;
	}
	.head{
		height: 46px;
		width: 100%;
		background: #f5f5f5;
		padding: 10px;
		box-sizing: border-box;
		font-size: 18px;
	}
	ul{
		border: 1px solid #e2e2e2;
	}
	ul li{
		width: 100%;
		box-sizing: border-box;		
		padding: 20px 20px;
		border-bottom: 1px solid #e2e2e2;
		background: white;
		overflow: hidden;
	}
	ul li>span:nth-of-type(1){
		-font-size: 30px;
	}
	ul li>span:nth-of-type(2){
		-font-size: 30px;
		float: right;
	}
	div{
		width: 100%;
	}
	ul li>div span:nth-of-type(1){
		float: left;
	}
	ul li>div span:nth-of-type(2){
		float:right;
	}
	button{
		position: fixed;
		border-radius: 6px;
		bottom:30px;
		left: 16%;
		display: block;
		width: 64%;
		height: 52px;
		margin: 0 auto;
		font-size: 20px;
		background: #ff5001;
		color: white;
	}
	a{
		text-decoration: none;
		color: white;
	}
</style>