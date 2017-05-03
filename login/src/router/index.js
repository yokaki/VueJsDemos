import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import personal from '../components/personal.vue'
const login_page = login
const register_page = register
const personal_paeg = personal
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', redirect: '/login'},
    {path: '/login', name: 'login', component: login_page},
    {path: '/register', name: 'register', component: register_page},
    {path: '/personal', name: 'personal', component: personal_paeg}
  ]
})
