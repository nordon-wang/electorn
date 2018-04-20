
<template>
	<div>
        <transition name="fade" mode="out-in" appear>
			<h1>文章-{{msgs}}</h1>
        </transition>
	</div>
	
</template>

<script>
	
	export default {
		name:"ArticleIndex",
		data(){
			return {
				msgs:'ArticleIndex.vue -- msg'
			}
		}
	}
</script>

<style type="text/css" scoped>
	h1{
		width: 100%;height: 30vh;background-color: #ccc;color: #f00;
	}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to{
    opacity: 0;
}
</style>