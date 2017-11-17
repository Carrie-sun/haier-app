<template>
	<main>
		<div id="show-upload">
			<ul id="top">
				<li><router-link to="">&lt;返回</router-link></li>
				<li>上传我的买家秀</li>
				<li>···</li>
			</ul>
			<div class="txt">
				<span>X</span>
				<textarea name="" rows="" cols="">上传照片</textarea>
				<div class="phone">
					<button>手机号</button>
					<input type="text" />
				</div>
				<textarea name="" rows="" cols="">
					请写不少于30字的评论...
				</textarea>
			</div>
			<div class="submit">
				<input type="submit" value="确定上传"/>
			</div>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	#show-upload{
				width:25%;
				height:100vh;
				margin: 0 auto;
				background: url(../../assets/images/sho.jpg){
				width: 20%;
			}
			#top li:nth-of-type(2){
				width: 60%;
			}
			#top li:nth-of-type(3){
				width: 20%;
			}
			#show-upload>img{
				width: 65%;
				padding-top: 250px;
				padding-left: 60px;
			}
			textarea{
				width: 65%;
				margin:0px auto;
				display: block;
				resize: none;
				font-size: 30px;
				border: 5px solid #E1EDF7;
				background-color: #FFFFFF;
			}
			textarea:nth-of-type(1){
				margin-top: 50px;	
				height: 200px;
				text-align: center;
				line-height: 200px;
				
			}
			textarea:nth-of-type(2){
				height: 130px;
				font-size: 12px;
			}
			.txt{
				position: relative;
			}
			.txt>span{
				position: absolute;
				top: 5px;
				right: 62px;
				font-size: 25px;
				width: 25px;
				height: 25px;
				text-align: center;
				line-height: 25px;
				color: #FFFFFF;
				background-color: #CCCCCC;
			}
			.phone{
				padding: 20px 55px;
			}
			.phone>button{
				width: 25%;
				height: 30px;
				line-height: 30px;
				color: white;
				background-color:#357EBD;
				border: none;
			}
			.phone>input{
				width: 75%;
				height: 29px;
				margin-left: -5px;
				outline: none;
				border: none;
			}
			.submit{
				width: 100%;
				padding: 10% 35%;
			}
			.submit>input{
				width: 30%;
				height: 35px;
				line-height: 30px;
				color: white;
				background-color:#357EBD;
				border: none;
			}
</style>