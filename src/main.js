import Vue from 'vue';
import App from './App.vue';
import store from './store';
//Note here i'm not trying to do import Store from './store/index.js' instead we are doing import store from './store';
//Webpack does the process of importing index.js file from the /store folder by its intelligence .
Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')
