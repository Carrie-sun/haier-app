<template>
    <main>
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
			<div class="btn"><button>延长收货</button><button>查看物流</button><button>确认收货</button></div>
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
		color: #9c9c9c;
		text-decoration: none;
		color: white;
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
    	margin-left: 10%;
    }
    button{
    	width: 26%;
    	height:26px;
    	margin-left: 10px;
		color: #9c9c9c;
		background: white;
		border-radius: 6px;	
    }
    button:nth-of-type(3){
     	color: white;
    	background: #ff6801;
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