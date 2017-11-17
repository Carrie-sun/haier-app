<template>
	<main>
		<div id="show">
			<ul id="top">
				<li><router-link to="">&lt;返回</router-link></li>
				<li>我的买家秀</li>
				<li>···</li>
			</ul>
			<img src="../../assets/images/banne.jpg" alt="" />
			<ul class="list">
				<li>
					<router-link to="/upshow">上传买家秀</router-link>
				</li>
				<li>
					<router-link to="/showdetail">精彩秀场</router-link>
				</li>
				<li>
					我的买家秀
				</li>
				<li>
					<router-link to="">活动规则</router-link>
				</li>
				
			</ul>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	#show{
				width:100%;
				height:100vh;
				margin: 0 auto;
				background: url(../../assets/images/sho.jpg) no-repeat;
				background-size: cover;
			}
			#top{
				width: 100%;
				height: 40px;
				line-height: 40px;
			}
			#top li:nth-of-type(1){
				width: 20%;
				visibility:hidden;
			}
			#top li:nth-of-type(2){
				width: 60%;
				font-size: 20px;
			}
			#top li:nth-of-type(3){
				width: 20%;
			}
			#show>img{
				    width: 70%;
                    padding-top: 60%;
                    padding-left: 15%;
                    padding-bottom: 6%;
			}
			
			#show ul li{
				float: left;
				width: 50%;
				height: 50px;
				text-align: center;
				color: white;
			}
			#show ul li a{
				color: white;
				text-decoration: none;
			}
</style>