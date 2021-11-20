import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/')
  },
  {
    path: '/about',
    name: 'About',
    alias: ["/about-us"],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sell',
    name: 'Finance',
    component: () => import('../views/sell.vue')
  },
  {
    path: '/finance',
    name: 'finance',
    component: () => import('../views/finance.vue')
  },
  {
    path: '/protection',
    name: 'protection',
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
    path: '/contact',
    alias: ["/contact-us"],
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
  {
    path: '/csr',
    name: 'csr',
    component: () => import('../views/Csr.vue')
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else { 
      if (to.hash) {
        // hash selection scroll
        return {
          selector: to.hash,
          behavior: 'smooth',
        }
      } else {
        // scroll to top
        return { x: 0, y: 0 }
      }
    }
  },
  routes
})

export default router
