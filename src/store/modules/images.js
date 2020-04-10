import api from '../../api/imgur';
import { router } from '../../main';
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
    console.log("root State images are:")
    const token = rootState.auth.token;//here we get the token
    console.log(`the token obtained is ${token}`);
    const response = api.fetchImages(token);
    console.log(response)
  },

  allImages({rootState}){
    console.log(rootState.auth);
  },

  async uploadImages({ rootState }, images){
    console.log("the root state would be as follows");
    console.log(rootState);
    const token = rootState.auth.token;

    // Call our API module to do the upload
    await api.uploadImages(images, token);


    // Redirect our user to ImageList component
    router.push('/');
  }
}

//this is making basically images.getters to be made available
export default{
  state,
  getters,
  actions,
  mutations
};