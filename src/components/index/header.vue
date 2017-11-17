<template>
	<main>
		<!--<button @click="get">提示</button>-->
	</main>
</template>
<!--ico图标在线制作-->
<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			get(){
				this.$toast('提示信息')
			}
		}
	}
</script>

