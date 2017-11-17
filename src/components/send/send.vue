<template>
    <main>
        <div>
        	<img src="../../assets/image/b2.jpg"/>
        </div>
        <div>
        	<hr />
        	<span>你可能想买</span>
        	<hr />
        </div>
        <ul>
        	<li><img src="../../assets/image/b1.jpg" alt="" /></li>
        	<li><img src="../../assets/image/b1.jpg" alt="" /></li>
        	<li><img src="../../assets/image/b1.jpg" alt="" /></li>
        </ul>
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
    main{
    	background: #f2f2f2;
    }
    div img{
    	width: 50%;
    	margin:30px auto;
    	display: block;
    }
    hr{
    	background:#e21e1f;
    	width: 30%;
    }
    hr:nth-of-type(1){
    	float: left;
    }
    hr:nth-of-type(2){
    	float: right;
    }
    span{
    	width:24%;
    	padding-left: 8%;
    	box-sizing: border-box;
    }
    ul{
    	margin: 30px auto;
    	overflow: hidden;
    	width: 90%;
    }
    ul li{
    	text-align: center;
    	width: 33%;
    	float: left;
    }
    ul li img{
    	width: 100%;
    	display: block;
    }
</style>