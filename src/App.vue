<template>
  <div id="app">
	  <router-view></router-view>
  </div>
</template>

<script>
	export default{
		name: "app"
	}
</script>

<style lang = "sass">
#app, html, body 
	width: 100%
	height: 100%

body, html
	margin: 0 
	padding: 0 

</style>
