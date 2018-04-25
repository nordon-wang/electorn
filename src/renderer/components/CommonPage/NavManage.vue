<template>
    <div id="my-nav">
        <!-- <router-link to="/article">article</router-link>
        <router-link to="/news">news</router-link> -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/" :router="true">
                首页
                <!-- <router-link to="/">首页</router-link> -->
            </el-menu-item>
            <el-menu-item index="/article">
                文章
                <!-- <router-link to="/article">文章</router-link> -->
            </el-menu-item>
            <el-menu-item index="/news">
                新闻
                <!-- <router-link to="/news">新闻</router-link> -->
            </el-menu-item>
            <el-menu-item index="/lp">
                LP
                <!-- <router-link to="/lp">LP</router-link> -->
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: "NavManage",
    data() {
        return {
            activeIndex: '/',
            msgs: 'NavManage.vue -- msg'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            this.activeIndex = key + '';
            this.$router.push(key);

            localStorage.setItem('names',key);
        }
    }
}
</script>
<style type="text/css" scoped>
div#my-nav {
    margin-bottom: 6px;
}

h1 {
    width: 100%;
    height: 30vh;
    background-color: #ccc;
    color: #f00;
}
</style>