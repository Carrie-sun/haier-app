<template>
	<main class='t-login'>
		<div class='login'>
			<div class="content">
				<div class="top">
					<h1>欢迎登录海尔商城</h1>
					<router-link to='/register'>
						<span>免费注册></span>
					</router-link>
				</div>
				<input type="text" class="name" value="用户名:"/>
				<input type="text" class="password"  value="密码:"/>
				<div class="info">
					<input type="checkbox" name="" id="" value=""/>
					<span>两周内免登录</span>
					<span>忘记密码？</span>
				</div>
				<input type="button" name="" id="" value="登录" class="btn"/>
				<div class="cooper">
					<div>
						<div>
							<img src="../../assets/images/qq.png"/>
						</div>
					</div>
					
					<div>
						<div>
							<img src="../../assets/images/weibo.png"/>
						</div>
					</div>
					<div>
						<div>
							<img src="../../assets/images/weixin.png"/>
						</div>
					</div>
					
				</div>
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
	.login{
		width: 100%;
		height: 100%;
		background: #1da1e9;
		position: fixed;
		left: 0;
		top:0;
		width: 100%;
		z-index: 3;
		background: url(../../assets/images/login.jpg);
		background-size: 100%;
	}
	.t-login>.login>.content{
		position: fixed;
		left: 0;
		top:0;
		width: 86%;
		box-sizing: border-box;
		margin: 30px;
	}
	.t-login>.login>.content>.top{
		overflow: hidden;
		border-bottom: 2px solid #fff;
	}
	.top>h1{
		font-size: 22px;
	    color: #fff;
	    float: left;
	}
	.top span{
		float: right;
	    font-size: 17px;
	    color: #fff;
	    line-height: 36px;
	}
	.login>.content>.name,.password{
	    margin-top: 24px;
	    width: 98%;
	    height: 40px;
	    border-radius: 8px;
	    font-size: 20px;
	    color: #666;
	    outline: none;
	}
	.login>.content.>.info{
		padding: 58px;
		box-sizing: border-box;
		color: #fff;
		font-size: 50px;
	}
	.login>.info>input{
		width: 50px;
		height: 50px;
		background: transparent;
		color: transparent;
	}
	.content>.btn{
		width: 100%;
	    height: 40px;
	    background: deepskyblue;
	    font-size: 20px;
	    color: #fff;
	    border-radius: 8px;
	}
	.login>img{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.info{
		padding: 0px;
		box-sizing: border-box;
		margin-bottom: 58px;
	}
	.info>input{
		width: 16px;
		height: 16px;
		float: left;
		margin-top: 14px;
	}
	.info>span:nth-of-type(1){
		color: #666;
		font-size: 16px;
		float: left;
		margin-top: 10px;
		color: #fff;
	}
	.info>span:nth-of-type(2){
		color: #666;
		font-size: 16px;
		float:right;
		margin-top: 10px;
		color: #fff;
	}
	.cooper{
		overflow: hidden;
		width: 100%;
	}
	.cooper>div{
		width: 33.3%;
		float: left;
	}
	.cooper>div>div{
		width: 49px;
		height: 49px;
		border: 1px solid #fff;
		border-radius: 50%;
		margin:20px auto;
	}
	.cooper img{
		width: 100%;
		height: 100%;
		display: block;
	}
</style>