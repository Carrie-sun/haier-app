<template>
	<main>
		<div class="head">
			<div>
				<router-link to='/home'>
					<img src="../../assets/image/a.jpg" class="a" />
				</router-link>
				
				<ul>
					<li>
						<h1>我的海尔之家</h1>
						<li>
							<div class="img"><router-link to='/datum'><img src="../../assets/image/b.jpg" class="photo"/></router-link></div>
						</li>
						<li>
							<p>旺旺</p>
						</li>
				</ul>
				<router-link to='car'><img src="../../assets/image/a (2).jpg" class="b" /></router-link>
			</div>
		</div>
		<div class="content">
			<div class="order">
				<img src="../../assets/image/d.jpg" />
				<h3>我的订单</h3>
				<router-link to='/order'><span>查看订单></span></router-link>
				<hr />
			</div>
			<ul class="orders">
				<li><router-link to='/pay'><img src="../../assets/image/h.jpg"/></router-link><p>待付款</p></li>
				<li><router-link to='/send'><img src="../../assets/image/m.jpg"/></router-link><p>待发货</p></li>
				<li><router-link to='/take'><img src="../../assets/image/e.jpg"/></router-link><p>待收货</p></li>
				<li><router-link to='/appraise'><img src="../../assets/image/f.jpg"/></router-link><p>待评价</p></li>
				<li><img src="../../assets/image/g.jpg"/></router-link><p>退款/退货</p></li>
			</ul>
			<div class="order">
				<img src="../../assets/image/h.jpg" />
				<h3>我的钱包</h3>
				<router-link to='/order'><span>有货金币、金钱等></span></router-link>
				<hr />
			</div>
			<ul class="wallet">
				<li><p>{{money}}</p><p>账户余额</p></li>
				<li><p>0</p><p>优惠券</p></li>
				<li><p>0</p><p>有货资源</p></li>
				<li><p>0</p><p>IC卡</p></li>
			</ul>
			<div class="order">
				<img src="../../assets/image/o.jpg" />
				<h3>我的动态</h3>
				<router-link to='/order'><span>收藏、足迹等></span></router-link>
				<hr />
			</div>
			<ul class="orders">
				<li><img src="../../assets/image/p.jpg" alt="" /><p>收藏店铺</p></li>
				<li><img src="../../assets/image/q.jpg" alt="" /><p>足迹</p></li>
				<li><img src="../../assets/image/r.jpg" alt="" /><p>福利包</p></li>
				<li><img src="../../assets/image/s.jpg" alt="" /><p>帮助/反馈</p></li>
				<li><img src="../../assets/image/t.jpg" alt="" /><p>日历</p></li>
			</ul>
			<div class="order">
				<img src="../../assets/image/i.jpg" />
				<h3>管理收货地址</h3>
				<router-link to='/address'><span>></span></router-link>
				<hr />
				<router-view></router-view>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		computed:{
			money(){
				return 32299-this.$store.state.allprice
			}
        
		},
		methods:{
			
			
			
		}
		
        

	}

</script>

<style scoped>
	main {
		width: 100%;
		height: 100%;
		color: #bebebe;
		font-size: 14px;
	}
	h1{
		font-size: 18px;
	}
	.head {
		width: 100%;
		background: #0e9ae7;
	}
	
	.head>div {
		width: 90%;	    
		margin: 20px 20px;
		position: relative;
	}
	.head img{
		height: 26px;
	}
	.a{
		position: absolute;
		left: 0;
		top: 0;
	}

	.b{
		position: absolute;
		top: 0;
		right: 0;
	}
	
	h1,.head li,.head li a {
		text-align: center;
	}
	.head{
		overflow: hidden;
	}
	.head h1{
		margin-bottom: 10px;
	}
	.head h1,.head p{
		color: white;
	}
	.img{
		margin: 0 auto;
		width: 280px;
		border-radius: 50%;
		overflow: hidden;
	}
	.img img{
		height: 80px;
	}
	
	.content {
		margin: 20px;
	}
	.order{
		margin-top: 20px;
	}
    .order h3{
    	color: black;
		float: left;
		margin-top: 8px;
	}
	.order a span{
		display: block;
		color: #bebebe;
	}
	.order img{
		height:28px;
		float: left;
	}
	.order span {
		float: right;
		margin-top: 8px;
	}
	hr{
		width: 100%;
		background:#bebebe;
	}
	.orders,.wallet{
		overflow: hidden;
		text-align: center;
		width: 100%;
	}
	.order:nth-last-of-type(1){
		margin-bottom: 100px;
	}
	.orders li{
		font-size: 10px;
		text-align: center;
		
		float: left;
		width: 20%;
		
	}
	.orders img{
		height: 30px;
		display: block;
		margin:0 auto;
	}
	.wallet li{
		float: left;
		width: 25%;
	}
	.wallet li p:nth-of-type(1){
		color: red;
	}
</style>