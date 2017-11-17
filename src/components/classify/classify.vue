<template>
	<main>
		<header>
			<div class="search">
				
					<div class="back" @click="back"></div>
				
				
				<input v-model="msg" @keyup="get" type="text" placeholder="波轮洗衣机" />
				<!--<ul id="list">
					<li v-for="v in list"></li>
				</ul>-->
				<router-link class="buy" to="/car"></router-link>
			</div>
		</header>
		<ul class="list">
			<li>
				<router-link to="fire">
					<span class="icon"></span>
					<p>火爆首发</p>
				</router-link>
			</li>
			<li>
				<router-link to="household">
					<span class="icon"></span>
					<p>精品家电</p>
				</router-link>
			</li>
			<li>
				<router-link to="fashion">
					<span class="icon"></span>
					<p>时尚单品</p>
				</router-link>
			</li>
			<li>
				<router-link to="pravite">
					<span class="icon"></span>
					<p>私人定制</p>
				</router-link>
			</li>
			<li>
				<router-link to="fridge">
					<span class="icon"></span>
					<p>冰箱</p>
				</router-link>
			</li>
			<li>
				<router-link to="washin">
					<span class="icon"></span>
					<p>洗衣机</p>
				</router-link>
			</li>
			<li>
				<router-link to="TV">
					<span class="icon"></span>
					<p>电视机</p>
				</router-link>
			</li>
			<li>
				<router-link to="fridge1">
					<span class="icon"></span>
					<p>空调</p>
				</router-link>
			</li>

		</ul>
		<ol>
			<li>
				<span class="icon"></span>
				<p class="text">冰箱</p>
				<div class="type">
					<a>单门</a>
					<a>两门</a>
					<a>三门</a>
					<a>多门</a>
					<a>对开门</a>
				</div>
			</li>
			<li>
				<span class="icon"></span>
				<p class="text">洗衣机</p>
				<div class="type">
					<a>单门</a>
					<a>两门</a>
					<a>三门</a>
					<a>多门</a>
					<a>对开门</a>
				</div>
			</li>
			<li>
				<span class="icon"></span>
				<p class="text">电视机</p>
				<div class="type">
					<a>单门</a>
					<a>两门</a>
					<a>三门</a>
					<a>多门</a>
					<a>对开门</a>
				</div>
			</li>
			<li>
				<span class="icon"></span>
				<p class="text">空调</p>
				<div class="type">
					<a>单门</a>
					<a>两门</a>
					<a>三门</a>
					<a>多门</a>
					<a>对开门</a>
				</div>
			</li>
		</ol>
	</main>
</template>
<script scoped>
	
	export default {
		data(){
			return{
				msg:""
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			get: function() {
						this.$http.jsonp('http://api.douban.com/book/subjects?&alt=xd&callback=fn1', {
							params: {
								q:this.msg
							},
							jsonp: 'fn1'
						}).then(function(res) {
							//console.log(res)
						}, function(res) {
//							console.log(1)
						})
						setTimeout(function(){
							console.log(n)
						},1000)
						
					}
		},		
	}
</script>
<style scoped>
	#list{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border: 1px solid #FFFFFF;
	}
	#list li{
		height: 20px;
		border-bottom: 1px solid #FFFFFF;
	}
	main {
		background-color: #0495e4;
		padding: 0px 25px 100px;
		padding-top: 0;
		color: #FFFFFF;
	}
	.search {
		padding-top: 10px;
		text-align: center;
	}
	
	.back {
		float: left;
		padding: 15px;
		box-sizing: border-box;
		background: url(../../assets/image/back.png) no-repeat center 5%;
	}
	
	.search input {
		height: 35px;
		width: 70%;
		text-indent: 40px;
		border-radius: 10px;
		background: url(../../assets/image/search.png) no-repeat 5px 6px #a3d8f7;
		background-size: 12%;
		outline: none;
		border: none;
	}
	
	.buy {
		float: right;
		padding: 35px 14px 0;
		box-sizing: border-box;
		display: block;
		background: url(../../assets/image/car.png)no-repeat center;
	}
	
	.list {
		padding-right: 0;
		text-align: center;
		padding-top: 20px;
	}
	
	.list,
	ol {
		overflow: hidden;
	}
	
	.list li {
		width: 25%;
		float: left;
		/*padding: 10px 15px;*/
		box-sizing: border-box;
		text-align: center;
	}
	
	.icon {
		width: 50px;
		height: 50px;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #ffff;
		background-repeat: no-repeat;
		background-position: center;
	}
	li:nth-of-type(1) span,.list>li:nth-of-type(5) span{
		background-image: url(../../assets/image/con-ice.png);
	}
	li:nth-of-type(2) span,.list>li:nth-of-type(6) span{
		background-image: url(../../assets/image/wahsin.png);
	}
	li:nth-of-type(3) span,.list>li:nth-of-type(7) span{
		background-image: url(../../assets/image/TV.png);
	}
	li:nth-of-type(4) span,.list>li:nth-of-type(8) span{
		background-image: url(../../assets/image/fridge.png);
	}
	
	.list li a{
		color: #FFFFFF;
		text-decoration: none;
	}
	.list li p {
		font-size: 15px;
		font-weight: 300;
		padding: 10px 0;
		box-sizing: border-box;
	}
	ol{
		padding-bottom: 2px;
	}
	ol li {
		padding: 19px 0;
		overflow: hidden;
		border-bottom: 1px solid #FFFFFF;
		box-sizing: border-box;
	}
	
	ol li .icon {
		float: left;
	}
	
	.text {
		float: left;
		font-size: 20px;
		margin-left: 20px;
		line-height: 50px;
	}
	
	.type {
		width: 50%;
		float: right;
		height: 100%;
	}
	
	.type a {
		display: block;
		float: left;
		padding: 0 12px;
		margin-top: 5px;
		box-sizing: border-box;
		border-right: 1px solid #FFFFFF;
	}
	
	.type a:nth-of-type(5) {
		border: none;
	}
</style>
