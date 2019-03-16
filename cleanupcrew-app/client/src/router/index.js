import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Welcome'
import Login from '@/components/Login'
import Search from '@/components/Search'
import Dash from '@/components/Dash'
import GoogleSignIn from '@/components/GoogleSignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Log In',
      component: Login
    },
    {
      path: '/search',
      name: 'Search Cleanup',
      component: Search
    },
    {
      path: '/dash',
      name: 'Dashboard',
      component: Dash
    },
    {
      path: '/googlesignin',
      name: 'Sign In with Google',
      component: GoogleSignIn
    }
  ]
})
