<template>
	<main>
		<div class="white">
		</div>
	    <div class="no">
			<ul>
				<li><span><router-link to='/pay'>X</router-link></span><span>付款详情</span></li>
				<li><span>支付宝账户</span><span>130****@qq.com</span></li>
				<li><span>支付宝账户</span><span>账户余额></span></li>
				<li><span>需付款</span><span style="color: red;">{{price | filt}}</span></li>
			</ul>
			<router-link to='/head'><input type="submit" id="" name="确认付款" @click="finish"/></router-link>
		</div>
	</main>
</template>

<script>
	export default{
		computed:{
        	price(){
        		
        		return this.$store.state.price
        	}
        
		},
		methods:{
			
			finish(){
				alert('付款成功！')
				this.$store.state.num=1
				this.$store.state.price=2299
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
	main{
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);

	}
	a{
		color: black;
		text-decoration: none;
	}
	.white{
		height: 40%;	
	}
	.no{
		background: white;
		height: 60%;
	}
	ul{
		width: 100%;
	}
	ul li{
		border: 1px solid #f1f1f1;
		padding: 16px 16px;
	}
	ul li span:nth-of-type(2){
		float: right;
	}
	ul li:nth-of-type(2),ul li:nth-of-type(3){
		color: #7e7e7e;
	}
    input{
    	width: 80%;
    	height: 40px;
    	border-radius: 8px;
    	color: white;
    	background: #0099ff;
    	position: absolute;
    	left: 10%;
    	bottom: 30px;
    }
</style>