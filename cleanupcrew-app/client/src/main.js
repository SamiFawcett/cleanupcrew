import Vue from 'vue'
import App from './App'
import GSignInButton from 'vue-google-signin-button'
import VueSession from 'vue-session'
import style from './index.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(GSignInButton)
Vue.use(VueSession)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
