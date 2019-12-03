import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:"/all",
    children:[
      {
        path: '/all',
        name: 'all',
        component: () => import('../views/home/all.vue')
      },{
        path: '/ing',
        name: 'ing',
        component: () => import('../views/home/ing.vue')
      },{
        path: '/stop',
        name: 'stop',
        component: () => import('../views/home/stop.vue')
      },{
        path: '/over',
        name: 'over',
        component: () => import('../views/home/over.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
})

export default router
