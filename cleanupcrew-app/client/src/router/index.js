import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import SignUp from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: SignUp
    }
  ]
})
