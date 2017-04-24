import Vue from 'vue'
import App from './App'
import resource  from 'vue-resource'
// import AMap from 'vue-amap';
// Vue.use(AMap);
// AMap.initAMapApiLoader({
//   key: 'a5808e579688ac62707f0187addc0b86',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// });

Vue.use(resource)

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
