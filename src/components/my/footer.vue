<template>
	<main>
		<ul>
			<router-link to="index">
				<li><img src="../../assets/image/j.jpg"/><p>首页</p></li>
			</router-link>
			<router-link to='/classify'>
				<li><img src="../../assets/image/k.jpg"/><p>分类</p></li>
			</router-link>
			<router-link to='/buyshow'>
				<li><img src="../../assets/image/l.jpg"/><p>买家秀</p></li>
			</router-link>
			
			<li><img src="../../assets/image/u.jpg"/><p>社区</p></li>
			<li><router-link to="head"><img src="../../assets/image/a3.jpg"/><p>我的</p></router-link></li>
		</ul>		
	</main>
</template>

<script>
</script>

<style scoped>	
	ul{
		height: 216px;
		background: #0e9ae7;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	
	ul li{
		text-align: center;
		width: 20%;
		float: left;
	}
</style>