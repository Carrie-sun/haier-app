<template>
  <main>
  	<v-footer></v-footer>
  	<v-header></v-header>
  	<router-view></router-view>
  </main>
</template>

<script>
	import vfooter from './components/index/footer.vue'
	import vheader from './components/index/header.vue'
export default {
	components:{
		'v-footer':vfooter,
		'v-header':vheader
	}
 
}
</script>

<style>

</style>
