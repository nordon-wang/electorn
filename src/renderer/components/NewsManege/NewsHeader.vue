
<template>
	<div>
		<h1>新闻-{{msgs}}</h1>
	</div>
	
</template>

<script>
	
	export default {
		name:"NewsHeader",
		data(){
			return {
				msgs:'NewsHeader.vue -- msg'
			}
		}
	}
</script>

<style type="text/css" scoped>
	h1{
		width: 100%;height: 30vh;background-color: #ccc;color: #f00;
	}

</style>