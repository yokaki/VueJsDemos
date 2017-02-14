import Vue from 'vue';
import App from './App';
import vueResource from  'vue-resource';
import Element from 'element-ui';
Vue.use(Element);
Vue.use(vueResource);
import 'element-ui/lib/theme-default/index.css'


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
