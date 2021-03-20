import Vue from 'vue'
import Router from 'vue-router'

import usersPage from '../pages/user/users.vue'
import userProfilePage from '../pages/user/userProfile.vue'
import homePage from '../pages/home.vue'

Vue.use(Router)

const router = new Router ({
  root: '/home',
  routes: 
  [
    {
      path: '/users',
      name: 'users',
      component: usersPage
    },
    {
      path: '/userprofile/:id',
      name: 'userProfile',
      component: userProfilePage
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router