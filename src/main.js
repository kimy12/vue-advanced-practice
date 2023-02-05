import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
// import Vuex from 'vuex';
import { store } from './store/index.js';

Vue.config.productionTip = false

// new Vuex.Store({

// })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
