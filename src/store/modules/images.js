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
  async fetchImages({ rootState }){
    let { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
  }
}