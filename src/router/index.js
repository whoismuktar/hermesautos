import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    alias: ["about-us"],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sell',
    name: 'FinaSellnce',
    component: () => import('../views/sell.vue')
  },
  {
    path: '/finance',
    name: 'Finance',
    component: () => import('../views/finance.vue')
  },
  {
    path: '/protection',
    name: 'Finance',
    component: () => import('../views/protection.vue')
  },
  {
    path: '/how-it-works',
    name: 'howItWorks',
    component: () => import('../views/howItWorks.vue')
  },
  {
    path: '/reviews',
    name: 'howItWorksreviews',
    component: () => import('../views/reviews.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../components/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
