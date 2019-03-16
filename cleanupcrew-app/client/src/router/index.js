import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import SignUp from '@/components/signup'
import GoogleSignIn from '@/components/GoogleSignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: GoogleSignIn
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: GoogleSignIn
    },
    {
      path: '/googlesignin',
      name: 'Sign In with Google',
      component: GoogleSignIn
    }
  ]
})
