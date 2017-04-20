import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import story from '../components/story.vue'
import content from '../components/content.vue'
const story_item = story
const story_list = content
export default new Router({
  routes: [
    {
      path:'/',
      name:'story_list',
      component:story_list
    },
    {
      path: '/stories/:id',
      name: 'story',
      component: story_item
    }
  ]
})
