import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Welcome'
import Login from '@/components/GoogleSignIn'
import Search from '@/components/Search'
import Dash from '@/components/Dash'
import Event from '@/components/EventDisplay'
import GoogleSignIn from '@/components/GoogleSignIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/googlesignin',
      name: 'Google Sign In',
      component: GoogleSignIn
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
      path: '/event/:eventID',
      name: 'EventDisplay',
      component: Event,
      props: true
    }
  ]
})
