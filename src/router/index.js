import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IncrementView from '../views/IncrementView.vue'
import DecrementView from '../views/DecrementView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/increment',
    name: 'increment',
    component: IncrementView
  },
  {
    path: '/decrement',
    name: 'decrement',
    component: DecrementView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
