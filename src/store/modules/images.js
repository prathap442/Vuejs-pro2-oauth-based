import api from '../../api/imgur';
const state = {
  images: []
};

const getters = {
  allImages(state){
    return state.images;
  }   
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

const actions = {
  fetchImages({ rootState }){
    const token = rootState.auth.token;//here we get the token
    console.log(`the token obtained is ${token}`);
    const response = api.fetchImages(token);
    console.log(response);
  }
}

//this is making basically images.getters to be made available
export default{
  state,
  getters,
  actions,
  mutations
};