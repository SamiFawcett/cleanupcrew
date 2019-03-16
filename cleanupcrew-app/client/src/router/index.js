import Vue from 'vue'
import Router from 'vue-router'
import Page2 from '@/components/page2'
import HelloWorld from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: Page2
    }
  ]
})
