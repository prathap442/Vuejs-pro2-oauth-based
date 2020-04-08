import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
//Note here i'm not trying to do import Store from './store/index.js' instead we are doing import store from './store';
//Webpack does the process of importing index.js file from the /store folder by its intelligence .

import AuthHandler from './components/AuthHandler';

Vue.config.productionTip = false


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { 
      path: "/oauth2/callback",
      component: AuthHandler
    }
  ] 
})
new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
