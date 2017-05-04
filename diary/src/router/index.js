import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import index from '../components/index.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import diary from '../components/diary.vue'
import edit_diary from '../components/edit_diary.vue'
import my_diary from '../components/my_diary.vue'
export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: index},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {path: '/diary', component: diary},
    {path: '/edit_diary', component: edit_diary},
    {path:'/my_diary',component:my_diary}

  ]
})
