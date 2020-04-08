# imgur-based

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Agenda of the project:

- To develop the oauth based application
- Imgur:
    This is the Api provider for the sake of the storage of the images
- To show the images of the user that only belong to that user this is possible by doing the purpose of the api .


# Packages about to be used:

- axios
- loadash
- qs
- vuex
- vue-router
- semantic-ui
  (semantic-ui.com) and the cdnjs.com take the cdn for the semantic-ui and take semantic.min.css

- Need to have the imgur acccount 



- Some setup for the store
  - The store/index.js we have this
  ```

    import Vue from 'vue';
    import Vuex from 'vuex';

    //Vuex the data store source .
    // using of the Vuex library
    Vue.use(Vuex);
    // Which makes Vue use modules from the Vuex
    // Vuex would be a library .


    // creating a new Vuex Store can expose the modules of the Application
    // The modules of the application like the Auth module and then the 
    // Image module to handle with the uploading of the images and other stuff .
    export default new Vuex.Store({
      modules: {}
    }) 


  ```

  and then in main.js file we import the created Vuex.store instance by doing this in main.js file .

  ```
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

  ```
So in order make utilisation of the modules we make a folder called as the modules in the store directory 

> store/modules/auth.js



```
https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE
```