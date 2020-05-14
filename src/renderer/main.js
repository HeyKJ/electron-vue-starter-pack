import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
// Bootstrap
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// FontAwesome
import './assets/fontawesome-free-5.13.0-web/fontawesome-free-5.13.0-web/css/all.min.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
