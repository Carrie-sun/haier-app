<template>
	<main>
		<div class="head">
			<span><router-link to='/head'><我的订单</router-link></span>
		</div>	
		<ul class="nav">
			<li v-for="(v,i) in list" @click="get(i)" :class='{active:i==msg}'><router-link :to='v.toad'>{{v.name}}</router-link></li>			
		</ul>	
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
			<div class="div"><span>共一件商品</span><span>(含运费￥0.00)</span><span>￥2299</span><span>合计：</span></div>			
			<div class="btn"><button>延长收货</button><button>查看物流</button></div>
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
			<div class="div"><span>共一件商品</span><span>(含运费￥0.00)</span><span>￥2299</span><span>合计：</span></div>			
			<div class="btn"><button>延长收货</button><button>查看物流</button></div>
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
			<div class="div"><span>共一件商品</span><span>(含运费￥0.00)</span><span>￥2299</span><span>合计：</span></div>			
			<div class="btn"><button>延长收货</button><button>查看物流</button></div>
		</div>
	</main>
</template>

<script>
	export default {
		data(){
			return{
				list:[
				{id:0,toad:'/order',name:'全部'},
				{id:1,toad:'/pay',name:'待付款'},
				{id:2,toad:'/send',name:'待发货'},
				{id:3,toad:'/take',name:'待收货'},
				{id:4,toad:'/appraise',name:'待评价'}
				], 
                msg:0
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},			
			get(i){
				this.msg=i
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
		height: 100%;
		background: #f2f2f2;
		color: #9c9c9c;
	}
	.head a{
		color: black;
		font-size: 18px;
	}
    .head {
		background: #f2f2f2;		
		height: 40px;
		border-bottom: 1px solid #9c9c9c;
		padding: 8px 20px;
		box-sizing: border-box;
	}
    .nav{
    	width: 100%;
    	height: 24px;
    	padding: 6px 0;
    
    }
    .nav li{
    	padding-bottom: 6px;
    	width: 20%;
    	float:left;
    	box-sizing: border-box;
    	text-align: center;   	
    }
    .active{
    	border-bottom:2px solid #0194e4;
    	-background: white;
    }
    .content{
    	font-size: 14px;
    	margin: 10px auto;
    	width: 94%;
    	padding: 10px 10px;
    	box-sizing: border-box;  	
    	background: white;
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
    .detail{
    	box-sizing: border-box;
    	padding: 8px 0;
    	overflow: hidden;
    }
    .detail img{
    	height: 76px;
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
    	box-sizing: border-box;
    }
    button:nth-of-type(1){
    	margin-left: 40%;
    }
    button{
    	height:26px;
    	margin-left: 10px;
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