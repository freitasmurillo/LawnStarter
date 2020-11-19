import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueRouter)

import People from './views/People.vue'
import Film from './views/Film.vue'
import Search from './views/Search.vue'
import Stats from './views/Stats.vue'
import { SQSClient } from './services'

setInterval(
  function () {
    SQSClient.consumeStats();
  },
  300000
);

const routes = [
  { path: '/people/:peopleId', component: People },
  { path: '/films/:filmId', component: Film },
  { path: '/stats', component: Stats },
  { path: '/', component: Search },
]

const router = new VueRouter({ 
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
