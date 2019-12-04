import Vue from 'vue'
import VueRouter from 'vue-router'
import Message from "../views/Message";
import Friends from "../views/Friends";
import User from "../views/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'msg',
    component: Message
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
