import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import Game from './components/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/game', name: 'Game', component: Game }
  ]
})
