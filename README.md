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
Just Like this

```
  http://localhost:8080/oauth2/callback#/access_token=9aa39238396aa245ad92cd23edf3e0c8d5e4867a&expires_in=315360000&token_type=bearer&refresh_token=51d5da799e906884ba2f36527da875bf632c8f12&account_username=mohanprathap2384948934&account_id=127565147
```
> What is the VueRouter?
- The VueRouter is the package that is used for the sake of the routings that take place in the Vuejs application .
- The VueRouter is going is being made to setup as shown in the below steps
```
in src/main.js
import "VueRouter" from 'vue-router';
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: AuthHandler
    }
  ]
})
new Vue({
  router: router,
  store: store,
  render: h => h(App)    
})

As we are using the vue-router npm it by deafults adds "#" symbol after the base url
and gives the output as .
```

> Problem(With the Vue Router Usage): 
localhost:8080/#/
  The Vue  router does the process of considering anything after the # sign to be the uri and then if take of this type to the oauth call back url then things would fail drastically .
Patch to the above problem.
```
  is to make the configuration to the Vue Router the setting in such way that it interprets the normal way and the way to do this is to setup the mode for the Vue Router during the process of the creation of the Vue instance and that is done as shown 


  new VueRouter({
    mode: "history",
    routes: [
      {
        component: AuthHandler,
        path: "/oauth2/callback"
      }
    ]
  })
```


What are the Lifecycle methods of the compoent?


Ans: Before the Component gets rendered on to the dom the component would be created, mounted and the events that exists in between and around these mile stones are called the Lifecycle methods for a sepcific component .

Vuejs.org has got the better documentation to it and since we are trying to play and deal wwith the data fecthing as per the docs that are being suggested in the vue js documentation we are going to use the "created" lifecycle method and this can be made to be visualised by.

in AuthHandler.vue
```
<script>
  export default({
    name: "AuthHandler",
    created(){
        //we write here the logic of dealing with fetching up the data.
    }  
  })
</script>
```



Let us have a brief picture of the images module in the store/modules/*.js

store/modules/images.js
```

const state = {
  images = []
};
const getters = {
  allImages: (state) => { state.images }
};

const mutations = {
  setImages(state, images){
    state.images = images;
  }
}

const actions = {
  fetchImages(){
    
  }
}
```