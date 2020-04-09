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
  fetchImages(){

  }  
}