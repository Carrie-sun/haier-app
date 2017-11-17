<template>
	<main>
		<header>
			<div class="search">
				<div class="back" @click="back"></div>
				<input type="text" value="波轮洗衣机" />
				<router-link class="buy" to="buy"></router-link>
			</div>
			<h1>海尔空调专享</h1>
		</header>
		<div>
			<ul class="left">
				<li>
					<router-link to="fridgedetail">
						<img src="../../assets/image/air-conditioning.jpg" alt="" />
						<p>空调专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="air-conditioning-detail">
						<img src="../../assets/image/air-conditioning.jpg" alt="" />
						<p>空调专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="air-conditioning-detail">
						<img src="../../assets/image/air-conditioning.jpg" alt="" />
						<p>空调专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="air-conditioning-detail">
						<img src="../../assets/image/air-conditioning.jpg" alt="" />
						<p>空调专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="air-conditioning-detail">
						<img src="../../assets/image/air-conditioning.jpg" alt="" />
						<p>空调专场</p>
					</router-link>
				</li>
			</ul>
			<ol class='right'>
				<li>
					<router-link to="fridgedetail">
						<img src="../../assets/image/fridge.jpg" alt="" />
						<p>冰箱专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="fridgedetail">
						<img src="../../assets/image/fridge.jpg" alt="" />
						<p>冰箱专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="fridgedetail">
						<img src="../../assets/image/fridge.jpg" alt="" />
						<p>冰箱专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="fridgedetail">
						<img src="../../assets/image/fridge.jpg" alt="" />
						<p>冰箱专场</p>
					</router-link>
				</li>
				<li>
					<router-link to="fridgedetail">
						<img src="../../assets/image/fridge.jpg" alt="" />
						<p>冰箱专场</p>
					</router-link>
				</li>
			</ol>
			<router-view></router-view>
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
		width: 100%;
		background-color: #0495e4;
		padding-bottom: 80px;
		padding-top: 0;
		overflow: hidden;
		color: #FFFFFF;
	}
	
	header {
		padding: 10px 25px;
	}
	
	
	.search {
		text-align: center;
	}
	
	.back {
		float: left;
		padding: 15px;
		box-sizing: border-box;
		background: url(../../assets/image/back.png) no-repeat center 5%;
	}
	
	.search input {
		height: 35px;
		width: 70%;
		text-indent: 40px;
		border-radius: 10px;
		background: url(../../assets/image/search.png) no-repeat 5px 6px #a3d8f7;
		background-size: 12%;
		outline: none;
		border: none;
	}
	
	.buy {
		float: right;
		padding: 18px 14px;
		box-sizing: border-box;
		display: block;
		background: url(../../assets/image/car.png)no-repeat center;
	}
	
	header>h1 {
		font-size: 22px;
		padding: 10px 0;
		text-align: center;
	}
	
	main>div {
		
		box-sizing: border-box;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.left,
	.right {
		width: 50%;
		padding: 2px 2px;
		box-sizing: border-box;
	}
	
	.right>li,
	.left>li {
		width: 100%;
		height: 157px;
		position: relative;
	}
	
	li>a {
		color: #FFFFFF;
	}
	
	li>a>p {
		width: 100%;
		height: 35px;
		text-align: center;
		line-height: 35px;
		background:rgba(118,118,120,0.5);
		opacity: 0.5;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	
	li>a>img {
		width: 100%;
		height: 100%;
	}
</style>