<template>
	<main class='main'>
		<ul class="home">
			<li>
				<router-link to='/side'>
					<img src="../../assets/images/content.jpg"/>
				</router-link>
				<router-view></router-view>
			</li>
			<li>
				<input type="text" v-model="msg" @keyup="get"/>
			</li>
			<li>
				<router-link to='/car'>
					<img src="../../assets/images/car.jpg"/>
				</router-link>
			</li>
		</ul>
		<img src="../../assets/images/banner.jpg" width="100%"/>
		<ul class="nav">
			<li>
				
					<div>
						<img src="../../assets/images/con-ice.png"/>
					</div>
					<p>冰箱</p>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/wahsin.png"/>
					</div>
					<p>洗衣机</p>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/TV.png"/>
					</div>
					<p>电视</p>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/fridge.png"/>
					</div>
					<p>空调</p>
				
			</li>
		</ul>
		<ul class="perform">
			<p>热销产品</p>
			<li>
				
					<div>
						<img src="../../assets/images/imgs.jpg" />
					</div>
					<div class="one">空调专场</div>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/imgs.jpg"/>
					</div>
					<div class="one">冰箱专场</div>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/imgs.jpg"/>
					</div>
					<div class="one">冰箱专场</div>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/imgs.jpg"/>
					</div>
					<div class="one">冰箱专场</div>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/imgs.jpg"/>
					</div>
					<div class="one">冰箱专场</div>
				
			</li>
			<li>
				
					<div>
						<img src="../../assets/images/imgs.jpg"/>
					</div>
					<div class="one">冰箱专场</div>
				
			</li>
		</ul>
		<ul class="new">
			<p>新品首发</p>
			<li>
				
					<img src="../../assets/images/demo.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/demo.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/demo.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/demo.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/demo.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/demo.jpg"/>
				
			</li>
		</ul>
		<ul class="mybig">
			<p>私人定制</p>
			<li>
				
					<img src="../../assets/images/mybig.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/mybig.jpg"/>
				
			</li>
			<li>
				
					<img src="../../assets/images/mybig.jpg"/>
				
			</li>
		</ul>
			
	</main>
</template>

<script>
	export default{
		data(){
			return {
				msg:''
			}
		},
		methods:{
			get:function(){
				this.$http.jsonp('http://search.ehaier.com/suggestJson.html',{
					params:{
						q:this.msg,
					},jsonp:'Callback'
				}).then(function(res){
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		background: #0193e6;
		padding-bottom: 60px;
	}
	.home{
		width:100%;
		padding: 4px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.home>li{
		float: left;
		margin-top: 10px;
	}
	.home>li:nth-of-type(1){
		width: 20%;
	}
	.home>li:nth-of-type(2){
		width: 60%;
	}
	.home>li:nth-of-type(3){
		width: 20%;
	}
	.home>li input{
		    width: 95%;
		    height: 35px;
		    text-indent: 36px;
		    background: url(/dist/search.png?d433bf5…) no-repeat;
		    background-size: 16%;
		    border-radius: 10px;
		    margin-left: 10px;
		    margin-bottom:4px;
		    font-size: 20px;
		    color: #fff;
		    outline: none;
	}
	.home>li img{
		display: block;
		margin: auto;
		width: 63%;
	}
	.nav{
		overflow: hidden;
		margin:10px 0;
		width: 100%;
	}
	.nav>li{
		list-style: none;
		float: left;
		width: 25%;
	}
	.nav>li div{
		width: 50px;
		height: 50px;
	    border-radius: 50%;
	    border: 1px solid #fff;
	    margin: auto;
	}
	.nav>li div img{
		display: block;
		margin: 10px auto;
	}
	.nav>li p{
		text-decoration: none;
		font-size:16px;
		color: #fff;
		text-align: center;
	}
	.nav>li a{
		text-decoration: none;
	}
	.nav>li .location1{
		width: 100%;
		background: rgb(0,0,0,.5);
	}
	.perform{
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.perform p{
		font-size: 22px;
		color: #fff;
		text-align: center;
	}
	.perform>li{
		width: 50%;
		float: left;
		padding: 3px;
		box-sizing: border-box;
		text-align: center;
		position: relative;
	}
	.perform>li img{
		width: 100%;
	}
	.perform>li .one{
		width: 97%;
	    height: 15%;
	    background: rgba(0,0,0,.5);
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    margin: 7px 3px;
	    text-align: center;
	    color: #fff;
	}
	.new p{
		font-size: 22px;
		color: #fff;
		text-align: center;
	}
	.new{
		overflow: hidden;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.new li{
		float: left;
	    padding: 7px;
	    box-sizing: border-box;
	    width: 33%;
	}
	.new li img{
		width: 100%;
	}
	.mybig{
		width: 100%;
		padding:10px;
		box-sizing: border-box;
		overflow: hidden;
		padding-top: 0px;
	}
	.mybig li{
		float: left;
		padding: 6px;
		box-sizing: border-box;
	}
	.mybig li:nth-of-type(2n+1){
		width: 30%;
		padding-top:24px;
	}
	.mybig li:nth-of-type(2n){
		width: 40%;
	}
	.mybig li img{
		width: 100%;
	}
	.mybig p{
		font-size: 22px;
		color: #fff;
		text-align: center;
	}
</style>