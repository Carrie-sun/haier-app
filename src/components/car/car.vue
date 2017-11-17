<template>
	<main class='main'>
		<div class="head">
			<span><router-link to='/head'><购物车</router-link></span>
		</div>

		<router-view></router-view>
		
		<div class="content">
			<div class="name">
				<input type="checkbox" name="" id="check1" value=""/>
				<span>海尔商城</span>
				<span>有货</span>
			</div>
			<div class="detail">
				<img src="../../assets/image/a8.jpg" />
				<p>小超人无氟变频空调</p>
				<span>￥2299</span>
				<div>
					<span @click="add">+</span>
				    <span>{{num}}</span>
				    <span @click="down">-</span>
				</div>				
			</div>
			<div class="div"><span>共{{num}}件商品</span><span>(含运费￥0.00)</span><span>{{price|filt}}</span><span>合计：</span></div>
			
		</div>
		
        <div class="foot">
        	<input type="checkbox" name="" id="check2" value="" @click="check"/>
        	<span>全选</span>
            <span>合计：</span>
            <span>{{price|filt}}</span>
            <router-link to="/paying">
            	<button @click="less">结算({{price|filt}})</button>
            </router-link>
        </div>
	</main>
</template>

<script>
	export default {
		computed:{
			num(){
        		return this.$store.state.num
        	},
        	price(){
        		return this.$store.state.price
        	},
        	money(){
				return this.$store.state.qian
			},
			allprice(){
				return this.$store.state.allprice
			}
        
		},
		methods:{
			add(){
				this.$store.state.num=this.$store.state.num+1;
				this.$store.state.price=2299*this.$store.state.num
				this.$store.state.allprice=2299*this.$store.state.num
			},
			down(){
				this.$store.state.num=this.$store.state.num-1;
				if(this.$store.state.num<=1){
            		this.$store.state.num=1
            	}
				console.log(this.$store.state.price)
				this.$store.state.price=this.$store.state.price/this.$store.state.num
			},
			less(){
				this.$store.state.qian=this.$store.state.qian-this.$store.state.qian
			},
			check(){
				var check1=document.getElementById("check1"); 
				var check2=document.getElementById("check2"); 
				check1.checked=check2.checked;
			}
			
		},
		filters: {
					filt(n) {
						return '￥' + n;
					}
				}
        

	}

</script>

<style scoped>
	a {
		color: #9c9c9c;
		text-decoration: none;
	} 	
	.main {
		width: 100%;
		height: 100%;
		font-size: 14px;
		-background: #ececec;
		color: #9c9c9c;
		z-index:999;
	}
	
	.head a {
		color: black;
		font-size: 18px;
	}
	
	.head {
		background: #ececec;		
		height: 40px;
		border-bottom: 1px solid #9c9c9c;
		padding: 8px 20px;
		box-sizing: border-box;
	}
	
	 .content{
	 	border-radius: 10px;
	 	-border: 1px solid #CDCDCD;
    	margin: 10px auto;
    	width: 94%;
    	padding: 10px 10px;
    	box-sizing: border-box;
    }
	.content:nth-last-of-type(1){
		margin-bottom: 240px;
	}
	.content:nth-of-type(1){
		padding-bottom: 240px;		
	}
	.name {
		overflow: hidden;
	}
	
	.name span:nth-of-type(1) {
		float: left;
	}
	
	.name span:nth-of-type(2) {
		float: right;
	}
	
	.content {
		height: 418px;
		background: white;
	}
	
	input {		
		float: left;
		width:16px;
		height: 18px;
	}
	
	.detail {
		box-sizing: border-box;
		padding: 10px 0;
		overflow: hidden;
	}
	
	.detail img {
		height: 76px;
		float: left;
	}
	.detail div span:nth-of-type(2){
		width: 22px;
		height: 22px;
		border: 50%;
		border: 1px solid #9C9C9C;
		text-align: center;
		margin:0 10px ;
	}
	.detail div{
		margin: 38px;
	}
	.detail p {
		box-sizing: border-box;
		padding: 0 6px;
		float: left;
	}
	
	.detail span {
		float: right;
	}
	
	.btn {
		width: 100%;
		padding-left: 300px;
		box-sizing: border-box;
	}
	
	button {
		-font-size: 30px;
		margin-left: 20px;
		color: #9c9c9c;
		background: white;
		border-radius: 6px;
	}
	
	.div span:nth-of-type(4) {
		float: right;
	}
	
	.div span:nth-of-type(3) {
		float: right;
		color: red;
	}
	
	.div span:nth-of-type(2) {
		float: right;
	}
	.foot{
		width: 100%;
		border-top: 1px solid #e6e6e6;
		height: 44px;
		position: fixed;
		left: 0;
		bottom: 64px;
		background: white;
		padding: 10px 10px;
		box-sizing: border-box;
	}
	.foot span:nth-of-type(3){
		color: red;
	}
	.foot span:nth-of-type(2){
		padding-left: 30px;
	}
	button{
		margin: -8px 0;
		height: 40px;
		float: right;
		background: #ff5001;
		color:white;
		width: 36%;
		
	}
</style>