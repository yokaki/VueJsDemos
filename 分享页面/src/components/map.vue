<template lang="html">
  <div id="demoComponent" class="demo-component">
    <el-amap vid="amap" :zoom="zoom" :center="center" :amapManager="amapManager">
      <el-amap-polyline :editable="polyline.editable" :path="polyline.path"
                        :events="polyline.events"></el-amap-polyline>
    </el-amap>
    <button type="button" name="button" @click="changeEditable">change editable</button>
  </div>
</template>

<script>
  import {AMapManager} from 'vue-amap';
  let amapManager = new AMapManager();
  const POLYGON_ID = 'POLYGON_ID';
  export default {
    name: 'demoComponent',
    data() {
      return {
        zoom: 12,
        amapManager: amapManager,
        center: [104.066139578821 ,30.5517380480533],
        polyline: {
          vid: POLYGON_ID,
          path: [],
          events: {
            click(e) {
              alert('click polyline');
            },
            end: (e) => {
              let newPath = e.target.getPath().map(point => [point.lng, point.lat]);
//              console.log(newPath);
            }
          },
          editable: false
        }
      };
    },
    mounted(){
      this.$http.get('http://runmate.runtogether.cn/api/v3/users/57b83a60fccf11e6bd7900163e0221a7/runs/3c75e0a01d8a11e7879e00163e0221a7/tracks').then(res => {
        const data = res.body;
        const path = [];
        for (let i of data) {
          path.push([i.longitude, i.latitude])
        }
        this.polyline.path = path;
      })
    },
    methods: {
      changeEditable() {
        this.polyline.editable = !this.polyline.editable;
      }
    }
  };
</script>

<style>
  .demo-component {
    height: 400px;
    width: 100%;
  }
</style>
