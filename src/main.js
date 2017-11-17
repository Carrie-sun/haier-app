import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';

Vue.use(Mint);
Vue.use(VueRouter)
Vue.use(VueResource)

import router from './js/router.js'
import store from './store/store.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
