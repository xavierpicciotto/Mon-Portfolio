import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Picciottoxm from '../views/Picciotto-xm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/picciotto-xm',
    name: 'Picciotto-xm',
    component: Picciottoxm
  }

]

const router = new VueRouter({
  routes
})

export default router
