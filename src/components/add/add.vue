<template>
	<main>
	<div class="head">
			<h2 @click="back"><收货地址管理</h2>
    </div>
    <ul>
    	
    	<li><span>请选择省份</span><span>></span></li>
    	<li><span>请选择街道</span><span>></span></li>
    	<li><span>请输入详细地址</span><span>></span></li>
    	<li><span>请输入收货人姓名</span><span>></span></li>
    </ul>
    <input type="button" id="" value="保存" />
	</main>
</template>

<script>
	export default{
		data(){
			return{
				address:[{广东},{广西}],
				street:[[{黄埔区},{天河区}],[{南宁},{柳州}]],
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	main{
		position: fixed;
		width: 100%;
		width: 100%;
	}
	.head{
		height: 46px;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		font-size: 18px;
	}
	ul{
		width: 100%;
		border: 1px solid #d6d6d6;
		background:#f5f5f5 ;
	}
	ul li span:nth-of-type(2){
		float: right;
	}
	li{
		width: 100%;
		box-sizing: border-box;
		padding:10px 20px;
		border-bottom: 1px solid #d6d6d6;
	}
	input{
		background: #ff4502;
		color: white;
		float: right;
		margin: 30px;
		height: 40px;
		width: 150px;
		border-radius: 8px;
	}
</style>