<template>
  <div>
     This is to explain about the ImageList.vue
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default({
    name: 'ImageList',
    components: {

    },
    methods: mapActions(['fetchImages']),      
    created() {
      this.fetchImages();
    }
  })
</script>
<style scoped>
</style>