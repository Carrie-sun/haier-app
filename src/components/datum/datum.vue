<template>
	<main>
		<div class="head">
			<router-link to='/head'><img src="../../assets/image/a.jpg" /></router-link>
			<input type="search" name="" required="" placeholder="波轮洗衣机" x-webkit-speech="" x-webkit-grammar="builtin:search" lang="zh-CN">
			<router-link to='/car'><img src="../../assets/image/a (2).jpg" /></router-link>
		</div>
		<ul>
			<li><span @click="back" style="font-size: 18px;"><个人资料</span><img src="../../assets/image/a5.jpg" alt="" /></li>
			<li>
				<span>旺旺的头像</span><span>></span>
				<div><img src="../../assets/image/a7.jpg" /></div>
			</li>
			<li><span>昵称：旺旺</span><span>></span></li>
			<li><span>性别：女</span><span>></span></li>
			<li><span>我片的二维码名片</span><span>></span><img src="../../assets/image/a4.jpg" /></li>
			<li><span>我的收货地址</span><span>></span></li>
		</ul>
	</main>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.head {
		text-align: center;
		height: 46px;
		width: 100%;
		box-sizing: border-box;
		background: #0094e4;
		padding: 10px 14px;
	}
	
	.head img {
		height: 26px;
	}
	
	.head a:nth-of-type(1) {
		float: left;
	}
	
	.head a:nth-of-type(2) {
		float: right;
	}
	
	.head input {
		border-radius: 6px;
		width: 50%;
		height: 26px;
	}
	
	ul {
		width: 100%;
	}
	
	ul div {
		border-radius: 50%;
		overflow: hidden;
		float: right;
	}
	
	ul div img {
		display: block;
		height: 50px;
	}
	
	ul li {
		overflow: hidden;
		padding-bottom: 10px;
		margin: 20px;
		border-bottom: 1px solid #cfcfcf;
	}
	
	ul li:nth-of-type(1) {
		font-weight: 500;
		border-bottom: 1px solid white;
	}
	
	ul li>img {
		float: right;
		height: 24px;
	}
	
	ul li span:nth-of-type(2) {
		float: right;
	}
</style>