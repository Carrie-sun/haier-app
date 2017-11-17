<template>
	<main>
		<div class="register">
			<div class="main">
				<router-link to='/home'>
					<h1>></h1>
				</router-link>
				<h2>注册</h2>
				<input type="text" value="密码:" class="one"/>
				<input type="text" value="账号:" class="two"/>
				<input type="text" value="验证码:" class="three"/>
				<input type="button" value="获取验证码"  class="btn"/>
				<input type="checkbox" class="check"/>
				<span>我已阅读并同意《使用条款和隐私政策》</span>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			next(){
				this.$router.go(1)
			}
		}
	}
</script>

<style scoped>
	.register{
		position: fixed;
		width: 100%;
		height: 100%;
		background: url(../../assets/images/zhuce.jpg) no-repeat center;
		background-size: 100%;
		z-index: 4;
	}
	.main>h2{
		padding: 10px;
	    box-sizing: border-box;
	    font-size: 30px;
	    color: #fff;
	    text-align: center;
	}
	.main h1{
		float: right;
		font-size: 20px;
		color: #fff;
	}
	.main{
		padding: 20px;
		box-sizing: border-box;
		width: 100%;
		height: 100%;
	}
	.main>.one,.two,.three{
		width: 100%;
	    height: 40px;
	    margin-bottom: 12px;
	    border-radius: 6px;
	    font-size: 20px;
	    color: #666;
	    outline: none;
	}
	.btn{
		width: 100%;
	    height: 50px;
	    margin-bottom: 10px;
	    border-radius: 6px;
	    font-size: 25px;
	    color: #fff;
	    outline: none;
		background: #ffc600;
	}
	.check{
		width: 15px;
		height: 15px;
		background: transparent;
	}
	span{
		font-size: 15px;
		color: #fff;
		line-height: 20px;
	}
</style>