import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Landing', component: Landing
  },
  {
    path: '/home', 
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/activitydetails',
    name: 'ActivityDetails',
    component: () => import(/* webpackChunkName: "activitydetails" */ '../views/ActivityDetails.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "documentation" */ '../views/Documentation.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/issue',
    name: 'Issue',
    component: () => import(/* webpackChunkName: "issue" */ '../views/Issue.vue')
  },
  {
    path: '/login', 
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup', 
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/admin', 
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/friends', 
    name: 'Friends',
    component: () => import(/* webpackChunkName: "friends" */ '../views/Friends.vue')
  },
  {
    path: '/goals', 
    name: 'Goals',
    component: () => import(/* webpackChunkName: "goals" */ '../views/Goals.vue')
  },
  {
    path: '/feed', 
    name: 'Feed',
    component: () => import(/* webpackChunkName: "feed" */ '../views/Feed.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
