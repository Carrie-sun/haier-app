<template>
	<main>
		<ul class="head">
			<li><router-link to='/find'><</router-link></li>				
		    <li>社区商城</li>
		    <li><router-link to='/activity'>></router-link></li>
		</ul>
		<img src="../../assets/images/haier2.jpg" class="img" />
		<ol>
			<li>
				<img src="../../assets/image/lun1.jpg" alt="" />
				<span>海尔无氟空调1</span>
				<span>></span>
			</li>
			<li><img src="../../assets/image/lun2.jpg" alt="" />
				<span>海尔无氟空调2</span>
				<span>></span>
			</li>
			<li><img src="../../assets/image/lun3.jpg" alt="" />
				<span>海尔无氟空调3</span>
				<span>></span>
			</li>
		
			<li><img src="../../assets/image/lun5.jpg" alt="" />
				<span>更多</span>
				<span>></span>
			</li>
		</ol>
	</main>
</template>

<script>
</script>
<style scoped>
	a{
		text-decoration: none;
		color: white;
	}
	.head {
		overflow: hidden;
		background: #0495e4;
		padding: 14px 0;
		box-sizing: border-box;
		color: white;
		font-size: 20px;
	}
	
	.head li {
		width: 33%;
		text-align: center;
		float: left;
	}
	
	.img {
		width: 100%;
		height: 160px;
	}
	ol li{
		padding: 10px 30px;
		border: 1px solid #ECECEC;
		box-sizing: border-box;
	}
	ol li img{
		margin-right: 10%;
		float: left;
		display: block;
		height: 30px;
	}
	ol li span:nth-of-type(2){
		float: right;
	}
</style>