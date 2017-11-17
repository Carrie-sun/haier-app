<template>
	<main>
		<div id="show-detail">
			<ul id="top">
				<li><router-link to="/buyshow">&lt;返回</router-link></li>
				<li>上传我的买家秀</li>
				<li>···</li>
			</ul>
			<div class="main">
				<div class="left"><router-link to=""><img src="../../assets/images/header.jpg" alt="" /></router-link></div>
				<div class="right">
					<p>随 风</p>
					<p>有一个巨商，为躲避动荡，把所有的家财置换成金银票，特制了一把油纸伞，将金银票小心地藏进伞柄之内，然后把自己装扮成普通百姓，带上雨伞准备归隐乡野老家。
						不料途中出了意外，只因他劳累之余在凉亭打了一个盹，醒来之后雨伞竟然不见了！
						巨商毕竟经商数年，面对突如其来的变故，他很快冷静下来，</p>
				<img src="../../assets/images/fridg.jpg" alt="" />
				</div>
				<div class="comment">
					<p>9</p>
					<ul>
						<li><img src="../../assets/images/header.jpg" alt="" /></li>
						<li><img src="../../assets/images/header.jpg" alt="" /></li>
						<li><img src="../../assets/images/header.jpg" alt="" /></li>
						<li><img src="../../assets/images/header.jpg" alt="" /></li>
						<li><img src="../../assets/images/header.jpg" alt="" /></li>
						<li><img src="../../assets/images/header.jpg" alt="" /></li>
					</ul>
				</div>
			</div>
			<ul class="list">
				<li>
					<router-link to="">点赞</router-link>
				</li>
				<li>
					<router-link to="">查看活动</router-link>
				</li>
				<li>
					<router-link to="">我也要秀</router-link>
				</li>
				<li>
					<router-link to="">查看更多秀</router-link>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	#show-detail{
				width:100%;
				height:100vh;
				margin: 0 auto;
				background-color: #6dbdfa;
				background-size: cover;
			}
			#top{
				width: 100%;
				height: 40px;
				line-height: 40px;
			}
			li{
				float: left;
				text-align: center;
				color: white;
			}
			#top li:nth-of-type(1){
				width: 20%;
			}
			#top li:nth-of-type(2){
				width: 60%;
			}
			#top li:nth-of-type(3){
				width: 20%;
			}
			.main{
				overflow: hidden;
				padding: 20px 20px;
				box-sizing: border-box;
			}
			.left{
				width: 15%;
				height: 100%;
				float: left;
			}
			.left img{
				width: 100%;
			}
			.right{
				float: left;
				width: 80%;
				color: #FFFFFF;
			}
			.right>p{
				font-size: 12px;
				padding: 10px 0;
			}
			.right>img{
				width: 100%;
				height: 150px;
			}
			.list{
				padding-top:20px;
				
			}
			.list li{
				float: left;
				width: 50%;
				height: 50px;
				text-align: center;
				color: white;
			}
			.comment{
				width: 100%;
				padding-top: 15px;
				overflow: hidden;
			}
			.comment>ul{
				width: 80%;
				float: left;
			}
			.comment>p{
				width: 15%;
				float: left;
				color: #FFFFFF;
				font-size: 15px;
			}
			.comment>ul>li{
				width: 10%;
				margin-left: 2px;
				height: 30px;
			}
			.comment>ul>li>img{
				width: 100%;
			}
			a{
				color: white;
				text-decoration: none;
			}
</style>