<template>
	<main>
		<header>
			<input type="text" />
			
		</header>
		<div id="list">
			<ul class="left">
				<li>
					<router-link to="">
						<span class="icon1"></span>
						<p>冰箱</p>
					</router-link>
				</li>
				
				<li>
					<router-link to="">
						<span class="icon2"></span>
						<p>电视</p>
					</router-link>
				</li>
				
				<li>
					<router-link to="">
						<span class="icon1"></span>
						<p>冰箱</p>
					</router-link>
				</li>
				
				<li>
					<router-link to="">
						<span class="icon2"></span>
						<p>电视</p>
					</router-link>
				</li>
				
				<li>
					<router-link to="">
						<span class="icon1"></span>
						<p>冰箱</p>
					</router-link>
				</li>
				
			</ul>
			<ol class="right">
				<li>
					<router-link to="">
						<span class="icon3"></span>
						<p>洗衣机</p>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<span class="icon4"></span>
						<p>空调</p>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<span class="icon3"></span>
						<p>洗衣机</p>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<span class="icon4"></span>
						<p>空调</p>
					</router-link>
				</li>
				<li>
					<router-link to="">
						<span class="icon3"></span>
						<p>洗衣机</p>
					</router-link>
				</li>
			</ol>
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
	main{
		padding-bottom: 60px;
	}
	header {
		padding: 10px 25px;
		background-color: #0495e4;
		box-sizing: border-box;
		color: #FFFFFF;
	}

	input{
		width: 100%;
		height: 40px;
		text-indent: 40px;
		border-radius: 5px;
		border: none;
		outline: none;
		background: url(../../assets/image/search.png)no-repeat 10px 2px #a3d8f7;
		
	}
	#list{
		width: 96%;
		border: 1px solid #ccc;
		overflow: hidden;
		margin: 8px auto;
	}
	#list>.left{
		float: left;
		width: 49%;
	}
	#list>.right{
		float: right;
		width: 49%;
	}
	#list>.left>li{
		float: right;
		border-right: 1px solid #CCC;
	}
	#list>.right>li{
		float: left;
	}
	#list li{
		width:90%;
		height: 105px;	
		border-bottom: 1px solid #CCC;
	}
	span {
		width: 50px;
		height: 50px;
		float: left;
		display: inline-block;
		border-radius: 50%;
		margin-top: 25px;
		margin-left: 20px;
		border: 1px solid #0295e5;
		background-repeat: no-repeat;
		background-position: center;
	}
	.icon1{
		background-image: url(../../assets/image/icon-ice1.png);
	}
	.icon3{
		background-image: url(../../assets/image/washin1.png);
	}
	.icon2{
		background-image: url(../../assets/image/TV1.png);
	}
	.icon4{
		background-image: url(../../assets/image/fridge1.png);
	}
	p{
		float: left;

		font-size: 20px;
		color: #575757;
		margin-top: 35px;
		font-weight: 600;
	}
	
</style>