<template>
	<main>	
		<router-view></router-view>
		<div class="content">
			<div class="name">
				<span>海尔商城</span>
			    <span>卖家已发货</span>
			</div>
			<div class="detail">
				<img src="../../assets/image/a8.jpg"/>
				<p>小超人无氟变频空调</p>
				<span>￥2299</span>
			</div>
			<div class="div"><span>共一件商品</span><span>(含运费￥0.00)</span><span>￥2299</span><span>合计：</span></div>			<di			
			<div class="btn"><button>延长收货</button><button>查看物流</button><button>付款</button></div>
		</div>
		<div class="content">
			<div class="name">
				<span>海尔商城</span>
			    <span>卖家已发货</span>
			</div>
			<div class="detail">
				<img src="../../assets/image/a8.jpg"/>
				<p>小超人无氟变频空调</p>
				<span>￥2299</span>
			</div>
			<div class="div"><span>共一件商品</span><span>(含运费￥0.00)</span><span>￥2299</span><span>合计：</span></div>			<di			
			<div class="btn"><button>延长收货</button><button>查看物流</button><button>付款</button></div>
		</div>
		<div class="content">
			<div class="name">
				<span>海尔商城</span>
			    <span>卖家已发货</span>
			</div>
			<div class="detail">
				<img src="../../assets/image/a8.jpg"/>
				<p>小超人无氟变频空调</p>
				<span>￥2299</span>
			</div>
			<div class="div"><span>共一件商品</span><span>(含运费￥0.00)</span><span>￥2299</span><span>合计：</span></div>			<di			
			<div class="btn"><button>延长收货</button><button>查看物流</button><button>付款</button></div>
		</div>
	</main>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1)
			}
			
		}
	}
</script>

<style scoped>
	a{
		color:  #9c9c9c;
	    text-decoration: none;
	}
	main{
		position: fixed;
		width: 100%;
		height: 1800px;
		font-size: 40px;
		background: #ececec;
		color: #9c9c9c;
	}
	.head a{
		color: black;
	}
    .head{   	
    	height: 112px;
    	font-size: 50px;
    	border-bottom: 1px solid #9c9c9c;
    	padding: 30px 20px;
    	box-sizing: border-box;
    }
    .nav{
    	width: 100%;
    	height: 92px;
    	border-bottom: 1px solid #9c9c9c;
    }
    .nav li{
    	width: 20%;
    	float:left;
    	padding: 20px 20px;
    	box-sizing: border-box;
    	text-align: center;   	
    }
   .content{
    	margin: 10px auto;
    	width: 94%;
    	padding: 20px 20px;
    	box-sizing: border-box;
    }
    .name{
    	overflow:hidden ;
    }
    .name span:nth-of-type(1){
    	float: left;
    }
     .name span:nth-of-type(2){
    	float:right;
    }
    .content{
    	
    	height: 418px;
    	background: white;
    }
    .detail{
    	box-sizing: border-box;
    	padding: 30px 0;
    	overflow: hidden;
    }
    .detail img{
    	height: 160px;
    	float: left;
    }
     .detail p{
     	box-sizing: border-box;
     	padding: 0 20px;
    	float: left;
    }
    .detail span{
    	float: right;
    }
  .btn{
    	width: 100%;
    	padding-left:160px;
    	box-sizing: border-box;
    }
    button{
    	width: 200px;
    	height: 70px;
    	font-size: 30px;
    	margin-left: 20px;
		color: #9c9c9c;
		background: white;
		border-radius: 6px;	
    }
   
    .div span:nth-of-type(4){
    	float: right;
    }
    .div span:nth-of-type(3){
    	float: right;
    	color: red;
    }
    .div span:nth-of-type(2){
    	float: right;
    }
</style>