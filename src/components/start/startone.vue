<template>
	<main class="slide">
		
			<mt-swipe :auto="4000" :continuous='false'>
			  <mt-swipe-item>
			  	<img src="../../assets/images/lunbo01.jpg"/>
			  	<router-link to='/home'>
			  		<button class="one">跳过</button>
			  	</router-link>
			  	
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/images/lunbo02.jpg"/>
			  	<router-link to='/home'>
			  		<button class="one">跳过</button>
			  	</router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/images/lunbo03.jpg"/>
			  	<router-link to='/home'>
			  		<button class="one">跳过</button>
			  	</router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/images/lunobo04.jpg"/>
			  	<router-link to='/home'>
			  		<button class="one">跳过</button>
			  	</router-link>
			  	<router-link to='/login'>
			  		<button class="two">立即体验</button>
			  	</router-link>
			  </mt-swipe-item>
			</mt-swipe>
			
	</main>
</template>

<script>
	export default{
		methods:{
			next(){
				this.$router.go(1)
			}
		}
	}
</script>

<style scoped>
	.slide{
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
	}
	.slide img{
		width: 100%;
		height: 100%;
	}
	.one{
		position: absolute;
	    right: 20px;
	    top: 34px;
	    border-radius: 30px;
	    width: 70px;
	    height: 30px;
	    background: dodgerblue;
	    color: #fff;
	    font-size: 15px;
	    z-index: 4;
	}
	.two{
		position: absolute;
	    z-index: 4;
	    right: 50%;
	    margin-right: -70px;
	    bottom: 170px;
	    border-radius: 30px;
	    width: 140px;
	    height: 44px;
	    background: #048fe3;
	    color: #fff;
	    font-size: 22px;
	}
</style>
	
