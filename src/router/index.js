import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/education',
      name: 'Education',
      // component: () => import('../views/Education.vue')
    },
    {
      path: '/sign_up',
      name: 'Record',
      component: () => import('../views/Record.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contacts.vue')
    },
]

const scrollBehavior = function (to, from, savedPosition) {

  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes,
})

export default router
