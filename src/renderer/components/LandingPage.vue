<template>
    <div id="wrapper">
        <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
        <main>
            <el-button type="primary" @click="save">save</el-button>
            <div id="draggable" class="ui-widget-content">
                <div v-for="item in draObj" class="drags" :id="item.uid">{{item.top}}</div>
            </div>
            <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="createtime" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="subject" label="职位" width="180">
                </el-table-column>
                <el-table-column prop="unit" label="名称">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div id="msg-page">
                <msg-page></msg-page>
            </div>
            <!-- <div class="left-side">
              <system-information></system-information>
          </div> -->
            <!-- <div class="right-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button>
        </div>
      </div> -->
        </main>
    </div>
</template>
<script>
import SystemInformation from './LandingPage/SystemInformation'
import MsgPage from './MsgPage/MsgPage.vue'
import axios from 'axios'
import $ from '@/assets/jquery-ui';
import * as d3 from 'd3'

export default {
    name: 'landing-page',
    data() {
        return {
            tableData2: [],
            draObj: []
        };
    },
    components: { SystemInformation, MsgPage },
    methods: {
        open(link) {
            // 跳转至外部浏览器 打开页面
            this.$electron.shell.openExternal(link)
        },
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex % 2 === 0) {
                return 'warning-row';
            } else if (rowIndex % 2 === 1) {
                return 'success-row';
            }
            return '';
        },
        handleClick(row) {
            console.log(row);
        },
        save() {

        },
        d3Create() {
            var width = 500,
                height = 250,
                margin = { left: 50, top: 30, right: 20, bottom: 20 },
                g_width = width - margin.left - margin.right,
                g_height = height - margin.top - margin.bottom;
            //svg
            d3.select('#draggable')
                .append('svg')
                .attr('width', width)
                .attr('height', height)
            var g = d3.select('svg')
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
            var data = [1, 3, 5, 7, 8, 4, 3, 7];
            var scale_x = d3.scaleLinear() // v4修改方法
                .domain([0, data.length - 1])
                .range([0, g_width])
            var scale_y = d3.scaleLinear() // v4修改方法
                .domain([0, d3.max(data)])
                .range([g_height, 0])
            var line_generator = d3.line() // v4修改方法
                .x(function(d, i) { return scale_x(i); })
                .y(function(d) { return scale_y(d); })
                .curve(d3.curveMonotoneX) // v4修改方法
            d3.select('g')
                .append('path')
                .attr('d', line_generator(data))
            // x
            var x_axis = d3.axisBottom(scale_x); // v4修改方法
            var y_axis = d3.axisLeft(scale_y);
            g.append('g')
                .call(x_axis)
                .attr('transform', 'translate(0,' + g_height + ')')
            // y
            g.append('g')
                .call(y_axis)
                .append('text')
                .text('价格')
                .attr('transform', 'rotate(-90)')
                .attr('class', 'y-title')
                .attr('text-anchor', 'end')
                .attr('dy', '2em')
        }
    },
    async created() {
        let data = await axios.get('http://127.0.0.1:3000/rows')

        // console.log(draObj.data);
        this.tableData2 = data.data
    },
    async mounted() {
        let draObj = await axios.get('http://127.0.0.1:3000/drgobj')
        this.draObj = draObj.data

        this.$nextTick(() => {
            this.draObj.forEach(item => {
                $(`#${item.uid}`).draggable({
                    containment: "parent"
                })
                // $(`#${item.uid}`).resizable();
            })

            this.d3Create()
        })

        // console.log(d3);
        // d3.select('#draggable').append('svg').attr('width', '100vw').attr('height', '50vh')
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}

#draggable {
    width: 100vw;
    height: 80vh;
    padding: 0.5em;
    position: relative;
}

#draggable>div {
    width: 100px;
    height: 100px;
    background-color: #f00;
    cursor: pointer;
    position: absolute;
}




/*
  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
  */
</style>
<style type="text/css">
/*  这部分svg的样式 若是放在scoped 会导致加载不上，因此需要提出来 */
#draggable {
    background: #ddd;
    width: 500px;
    height: 250px;
}

#draggable path {
    fill: none;
    stroke: #000;
    stroke-width: 2px;
}

#draggable .y-title {
    fill: #000;
}

#draggable .domain,
#draggable .tick line {
    stroke: red;
    stroke-width: 1;
}
</style>