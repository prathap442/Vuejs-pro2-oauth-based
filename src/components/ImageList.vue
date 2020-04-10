<template>
  <div>
    This is the IMageList.vue
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :src="image.link"  v-bind:key="image"/>
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>  
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default({
    name: 'ImageList',
    computed: mapGetters(['allImages', 'isLoggedIn']),
    components: {
    },
    methods: mapActions(['fetchImages','allImages']),      
    created() {
      this.fetchImages()
    }
  })
</script>

<style scoped>
div {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>