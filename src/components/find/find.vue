<template>
	<main>
		<ul class="head">
			<li><router-link to='/activity'><</router-link></li>				
		    <li>社区论坛</li>
		    <li><router-link to='/mall'>></router-link></li>
		</ul>
		<img src="../../assets/images/haier.jpg" class="img" />
		<ol>
			<li>
				<img src="../../assets/image/lun1.jpg" alt="" />
				<span>社区论坛</span>
				<span>></span>
			</li>
			<li><img src="../../assets/image/lun2.jpg" alt="" />
				<span>政策通知</span>
				<span>></span>
			</li>
			<li><img src="../../assets/image/lun3.jpg" alt="" />
				<span>办证预约</span>
				<span>></span>
			</li>
			<li><img src="../../assets/image/lun4.jpg" alt="" />
				<span>免费咨询</span>
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