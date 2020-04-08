import api from "../../api/imgur";
import qs from 'qs';
const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};


// brief sketching of the screenshot as per the
// brief-sketch.png we can see that there exists an action called as the finalizeLogin that calls 
// SetToken mutation and it passes the token to which the mutation needs to be set to and changes the initial state.
const mutations = {
  setToken: (state,Token)=>{
    //Here the Token object would be obtained from the action of the finalizeLogin 
    state.token = Token;
  }  
};

const actions = {
  finalizeLogin: ( { commit }, hash ) => {
    const qs_object = qs.parse(hash.replace('#',''));
    console.log(qs_object.access_token);
    commit('setToken',qs_object.access_token);
    return qs_object.access_token;
  },
  login: ()=>{
    api.login();
  },
  logout: ({ commit }) => {
    commit('setToken',null)
  }
};

export default ({
  state,
  actions,
  mutations,
  getters  
})
// the exported things are imported in the store/index.js