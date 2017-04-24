<template>
  <div id="weatherAPP">
    <p>请选择城市：
      <!--添加下拉框选择事件，选择的结果双向绑定到data下的'city'变量-->
      <select v-model="city" @change="search">
        <option>成都</option>
        <option>北京</option>
        <option>上海</option>
        <option>香港</option>
        <option>杭州</option>
      </select>
    </p>
    <!--seen默认为false-->
    <div id="app" v-if="seen">
      <div class="today">
        <p class="weather-title">{{city}}{{day | getDate}}天气情况</p>
        <div class="weather">
          <img :src="weatherObj.day_weather_pic" alt="">
          <ul>
            <li>气温：{{weatherObj.day_air_temperature}}°C</li>
            <li>天气情况：{{weatherObj.day_weather}}</li>
            <li>日出日落时间：{{weatherObj.sun_begin_end}}</li>
            <li>降水概率：{{weatherObj.jiangshui}}</li>
          </ul>
        </div>
      </div>
      <div class="axita">
        <p class="weather-title">{{city}}{{day2 | getDate}}天气情况</p>
        <div class="weather">
          <img :src="weatherObj2.day_weather_pic" alt="">
          <ul>
            <li>气温：{{weatherObj2.day_air_temperature}}°C</li>
            <li>天气情况：{{weatherObj2.day_weather}}</li>
            <li>日出日落时间：{{weatherObj2.sun_begin_end}}</li>
            <li>降水概率：{{weatherObj2.jiangshui}}</li>
          </ul>
        </div>
      </div>
      <div class="asste">
        <p class="weather-title">{{city}}{{day3 | getDate}}天气情况</p>
        <div class="weather">
          <img :src="weatherObj3.day_weather_pic" alt="">
          <ul>
            <li>气温：{{weatherObj3.day_air_temperature}}°C</li>
            <li>天气情况：{{weatherObj3.day_weather}}</li>
            <li>日出日落时间：{{weatherObj3.sun_begin_end}}</li>
            <li>降水概率：{{weatherObj3.jiangshui}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  export default {
    data(){
      return {
        weatherDataList: [],
        seen: false,
        city: '成都',
        day: '',
        day2: '',
        day3: '',
        weatherObj: {},
        weatherObj2: {},
        weatherObj3: {}
      }
    },
    filters: {
      /*原本的数据：'12345678',需要用过滤器吧原始数据转换为'1234年56月78日'的格式，用到了substring()方法*/
      getDate: (val) => {
        let year = val.substring(0, 4);
        let month = val.substring(4, 6);
        let day = val.substring(6, 8);
        let time = year + '年' + month + '月' + day + '日';
        return time;
      }
    },
    methods: {
      /*将ajax请求封装成一个getWeatherDate()的函数，当select的change事件触发时被触发，city参数被绑定到this.city*/
      getWeatherDate: function () {
        let url = 'https://route.showapi.com/9-2';
        let showapi_appid = 'showapi_appid=32114';
        let showapi_sign = 'showapi_sign=6b8a7f08662149a98783bd2d401e984a';
        let city = 'area=' + this.city
        this.$http.get(url + '?' + showapi_appid + '&' + showapi_sign + '&' + city)
            .then(res => {
              this.weatherObj = res.body.showapi_res_body.f1;
              this.weatherObj2 = res.body.showapi_res_body.f2;
              this.weatherObj3 = res.body.showapi_res_body.f3;
              this.day = this.weatherObj.day;
              this.day2 = this.weatherObj2.day;
              this.day3 = this.weatherObj3.day;
              this.weatherDataList = [];
              this.weatherDataList.push(
                  res.body.showapi_res_body.f1.day_air_temperature / 1,
                  res.body.showapi_res_body.f2.day_air_temperature / 1,
                  res.body.showapi_res_body.f3.day_air_temperature / 1);
              this.draw();
            });
      },
      /*search()触发getWeatherDate()，并且将seen的值变为true。*/
      search: function () {
        this.getWeatherDate();
        this.seen = true;
      },
      draw: function () {
        let myChart = echarts.init(document.getElementById('main'));
        let option = {
          title: {
            text: '气温变化',
            textStyle:{
              color:'#1c8de0'
            }
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ["今天", "明天", "后天"]
          },
          yAxis: {
            type: 'value',
            data: []
          },
          series: [{
            name: '气温',
            type: 'line',
            data: [],
            itemStyle:{
              normal:{
                color: "#1c8de0",//图标颜色
                lineStyle:{
                  color:'#0bccc4'
                }
              }
            }

          }]
        };
        option.yAxis.data = this.weatherDataList;
        option.series[0].data = option.yAxis.data;
        myChart.setOption(option);
      }
    },
    mounted(){
      this.getWeatherDate();
      this.seen = true;
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    font: 12px/24px "微软雅黑";
  }

  ul {
    list-style: none;
  }

  #weatherAPP {
    width: 100%;
  }

  #app {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  #main {
    margin: 0 auto;
    width: 400px;
    height: 200px;
  }

  #app > div {
    padding-bottom: 20px;
  }

  .weather-title {
    text-align: center;
    font-size: 18px;
    color: #1c8de0;
  }

  .weather {
    padding-top: 10px;
    display: flex;
  }

  .weather img {
    padding-right: 20px;
  }

</style>
