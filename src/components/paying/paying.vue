<template>
	<main>
		<div class="head">
			<span><router-link to='/head'><确认订单</router-link></span>
		</div>

		<router-view></router-view>
		<ul>
			<li>
				<span>旺收货人：旺旺</span><span>18500002468</span>
				<div>
					<span>地址：</span>
					<span>></span>
					<p>广东省深圳市宝安区旺星街道旺财小区3栋66号606室</p>

				</div>
			</li>
		</ul>
		<div class="content">
			<div class="name">
				<span>海尔商城</span>
				<span>付款中</span>
			</div>
			<div class="detail">
				<img src="../../assets/image/b.jpg" />
				<p>小超人无氟变频空调</p>
				<span>{{price | filt}}</span>
			</div>
			<div class="div"><span>共{{num}}件商品</span><span>(含运费￥0.00)</span><span>{{price | filt}}</span><span>合计：</span></div>
		</div>
		<ol>
			<li><span>配送方式</span><span>快递 免邮></span></li>
			<li><span>运费险</span><span>></span></li>
			<li><span style="color: #CCCCCC;">卖家留言：选填</span><span>></span></li>
			<li>
				<p>共{{num}}件商品</p>
				<p>{{price|filt}}</p>
				<p>合计：</p>
			</li>
		</ol>
		<div class="foot">
			<router-link :to="{name:'affirm',params:{price:price}}"><button>确认</button></router-link>
			<!--<button @click="payed">确认</button>-->
			<span>{{price|filt}}</span>
			<span>合计：</span>
		</div>
		<!--<mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText='确认'>
		</mt-actionsheet>
		<router-view></router-view>-->
       
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
        	}
        
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			payed() {
				this.sheetVisible = true
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
	
	main {
		z-index: 99;
		position: fixed;
		width: 100%;
		height: 100%;
		background: #ececec;
		font-size: 14px;
	}
	
	.head a {
		color: black;
	}
	
	.head {
		height: 46px;
		font-size: 18px;
		border-bottom: 1px solid #9c9c9c;
		padding: 10px;
		box-sizing: border-box;
	}
	
	ul {
		border: 1px solid #e2e2e2;
	}
	
	ul li {
		width: 100%;
		box-sizing: border-box;
		padding: 10px 10px;
		border-bottom: 1px solid #e2e2e2;
		background: white;
		overflow: hidden;
	}
	
	div {
		width: 100%;
	}
	
	ul li>span:nth-of-type(2) {
		float: right;
	}
	
	ul li>div span:nth-of-type(1) {
		float: left;
	}
	
	ul li>div span:nth-of-type(2) {
		float: right;
	}
	
	.content {
		margin: 10px 0;
		width: 100%;
		padding: 20px 0;
		box-sizing: border-box;
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
		background: white;
	}
	
	.detail {
		box-sizing: border-box;
		padding: 30px 0;
		overflow: hidden;
	}
	
	.detail img {
		height: 160px;
		float: left;
	}
	
	.detail p {
		box-sizing: border-box;
		padding: 0 20px;
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
		height: 40px;
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
	
	.content {
		font-size: 14px;
		margin: 10px auto;
		padding: 10px 10px;
		box-sizing: border-box;
		background: white;
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
	
	.detail {
		box-sizing: border-box;
		padding: 8px 0;
		overflow: hidden;
	}
	
	.detail img {
		height: 76px;
		float: left;
	}
	
	.detail p {
		box-sizing: border-box;
		padding: 0 20px;
		float: left;
	}
	
	.detail span {
		float: right;
	}
	
	.btn {
		width: 100%;
		box-sizing: border-box;
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
	
	ol {
		width: 100%;
	}
	
	ol li {
		overflow: hidden;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 10px;
		margin-bottom: -1px;
		border: 1px solid #cdcdcd;
	}
	
	ol li span:nth-of-type(2) {
		float: right;
	}
	
	ol li p {
		float: left;
	}
	
	ol li p:nth-of-type(2) {
		float: right;
		color: red;
	}
	
	ol li p:nth-of-type(3) {
		float: right;
	}
	
	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30px;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.foot button {
		width: 30%;
		float: right;
		background: #ff5001;
		color: white;
	}
	
	.foot span {
		margin-top: 10px;
		float: right;
	}
	
	.foot span:nth-of-type(1) {
		color: red;
	}
</style>