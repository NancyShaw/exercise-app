import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Session, { IsAuthenticated } from '../models/Session';

Vue.use(VueRouter)

const routes = [
  /** Unauthenticated routes */
  {
    path: '/', name: 'Landing', component: Landing,
    meta: {
      requiresAuth: false,
    },
  },
  { path: '/login', name: 'Login', component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  { path: '/signup', name: 'SignUp', component: SignUp, 
    meta: {
      requiresAuth: false,
    },
  },
  /** Authenticated routes */
  {
    path: '/home', 
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/activitydetails',
    name: 'ActivityDetails',
    component: () => import(/* webpackChunkName: "activitydetails" */ '../views/ActivityDetails.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import(/* webpackChunkName: "documentation" */ '../views/Documentation.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/issue',
    name: 'Issue',
    component: () => import(/* webpackChunkName: "issue" */ '../views/Issue.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin', 
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/friends', 
    name: 'Friends',
    component: () => import(/* webpackChunkName: "friends" */ '../views/Friends.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/goals', 
    name: 'Goals',
    component: () => import(/* webpackChunkName: "goals" */ '../views/Goals.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/feed', 
    name: 'Feed',
    component: () => import(/* webpackChunkName: "feed" */ '../views/Feed.vue'),
    meta: {
      requiresAuth: true,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !IsAuthenticated()) {
    Session.nextRoute = to;
    next('/login')
  }
  else {
    next()
  }
})

export default router
