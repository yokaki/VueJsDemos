import Vue from 'vue'
import App from './App'
import router from './router'
// import resource from 'vue-resource'
import axios from 'axios'
// Vue.config.productionTip = false
Vue.prototype.$http = axios
// Vue.use(resource)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
