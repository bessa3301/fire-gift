import '../css/main.css'
import Vue from 'vue'
//import Game from './components/Game'
import App from './components/app.vue'
import store from './vuex/store'
import router from './router.js'

// the main entrance
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render(h) {
    return h(App)
  }
}).$mount('#app')
