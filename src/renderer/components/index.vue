<template>
    <div>
        <!-- <el-row>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
        </el-row>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row> -->
    </div>
</template>
<script type="text/javascript">
import axios from 'axios'

export default {
    name: 'index',
    data() {
        return {

        };
    },
    async created(){
        let datas = await axios.get('https://www.easy-mock.com/mock/5aaf58ca4208430f514c6df5/electron-api/jobs')
        console.log('test',datas);
    }
}
</script>
<style type="text/css">
</style>