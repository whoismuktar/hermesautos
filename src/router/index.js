import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

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
    component: () => import('../views/finance.vue'),
    meta: {
      customUpperFooter: 'about'
    }
  },
  {
    path: '/protection',
    name: 'protection',
    component: () => import('../views/protection.vue')
  },
  {
    path: '/how-it-works',
    name: 'howItWorks',
    component: () => import('../views/howItWorks.vue'),
    meta: {
      customUpperFooter: 'about'
    }
  },
  {
    path: '/contact',
    alias: ["/contact-us"],
    name: 'contact',
    component: () => import('../views/contact.vue'),
    meta: {
      customUpperFooter: 'about'
    }
  },
  {
    path: '/csr',
    name: 'csr',
    component: () => import('../views/Csr.vue'),
    meta: {
      customUpperFooter: 'about'
    },
  },
  {
    path: '/car-valuation',
    name: 'carValuation',
    component: () => import('../views/carValuation.vue')
  },
  {
    path: '/electric-vehicle',
    name: 'ev',
    alias: ['/ev', '/electric-vehicles'],
    component: () => import('../views/Csr.vue'),
    meta: {
      customUpperFooter: 'about'
    }
  },
  {
    path: '/customer-reviews',
    name: 'customerReview',
    alias: ['/customer-review', '/reviews'],
    component: () => import('../views/reviews.vue'),
    meta: {
      customUpperFooter: 'about'
    }
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    alias: ['/customer-review', '/reviews'],
    component: () => import('../views/privacyPolicy.vue')
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
