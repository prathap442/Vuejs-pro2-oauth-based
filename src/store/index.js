import Vue from 'vue';
import Vuex from 'vuex';
//importing module in the store/index.js
import auth from "./modules/auth";

//Vuex the data store source .
// using of the Vuex library
Vue.use(Vuex);
// Which makes Vue use modules from the Vuex
// Vuex would be a library .


// creating a new Vuex Store can expose the modules of the Application
// The modules of the application like the Auth module and then the 
// Image module to handle with the uploading of the images and other stuff .
export default new Vuex.Store({
  modules: {
    auth: auth // and here what ever the keys that we add will actually effect the data to be accessed inside your components
  }
})

