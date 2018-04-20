<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <h1 >新闻-{{msgs}}</h1>
        </transition>
    </div>
</template>
<script>
export default {
    name: "NewsIndex",
    data() {
        return {
            msgs: 'NewsIndex.vue -- msg'
        }
    }
}
</script>
<style type="text/css" scoped>
h1 {
    width: 100%;
    height: 30vh;
    background-color: #ccc;
    color: #f00;
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