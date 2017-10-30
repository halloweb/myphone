import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import chat from '@/components/chat'
import user from '@/components/user'
import article from '@/components/commonParts/article'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',redirect:'/home'},
    {path: '/home',name: 'Home',component: Home},
    {path: '/chat',name: 'chat',component: chat},
    {path: '/user',name: 'user',component: user},
    {path: '/article',name: 'article',component: article}
  ]
})
