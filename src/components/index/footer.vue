<template>
	<main class="footer">
		<ul>
			<li>
				<span class="icon"></span>
				<router-link to="/home">首页</router-link>
			</li>
			<li>
				<span class="icon"></span>
				<router-link to="/classify">分类</router-link>
			</li>
			<li>
				<span class="icon"></span>
				<router-link to="/buyshow">买家秀</router-link>
			</li>
			<li>
				<span class="icon"></span>
				<router-link to="/find">社区</router-link>
			</li>
			<li>
				<span class="icon"></span>
				<router-link to="/head">我的</router-link>
			</li>
			<router-link to='/a'>
				<button>></button>
			</router-link>
			<!--不要改，重定向使用-->
		</ul>
		
		
		
	</main>

</template>

<script>
</script>

<style scoped>
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		font-size: 20px;
		background-color: #0495e4;
		z-index: 3;
	}
	.footer button{
		display: none;
	}
	li{
		width: 20%;
		float: left;
		text-align: center;
		padding:5px 0;
		box-sizing: border-box;
	}
	.footer a{
		color: #FFFFFF;
		font-size: 15px;
		text-decoration: none;
	}
	li>.icon{
		width: 100%;
		height: 28px;
		display: block;
		background-repeat: no-repeat;
		background-position: center;
	}
	li:nth-of-type(1) .icon{
		background-image: url(../../assets/image/first.png);
	}
	li:nth-of-type(2) .icon{
		background-image: url(../../assets/image/type.png);
	}
	li:nth-of-type(3) .icon{
		background-image: url(../../assets/image/buy.png);
	}
	li:nth-of-type(4) .icon{
		background-image: url(../../assets/image/community.png);
	}
	li:nth-of-type(5) .icon{
		background-image: url(../../assets/image/my.png);
	}
	
</style>