
<template>
	<div>
		<h1>msg-{{msgs}}</h1>
	</div>
	
</template>

<script>
	
	export default {
		name:"ArticleFooter",
		data(){
			return {
				msgs:'ArticleFooter.vue -- msg'
			}
		}
	}
</script>

<style type="text/css" scoped>
	h1{
		width: 100%;height: 30vh;background-color: #ccc;color: #f00;
	}

</style>