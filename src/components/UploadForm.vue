<template>
  <div class="dropper">
    <input type="file"  v-on:change="uploadImages($event.target.files)"  accept="image/*" mutliple/>
    <span>Drop Your Files Here</span>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default ({
  name: "UploadForm",
  methods: mapActions(['uploadImages']),
  components: {
  }
})
</script>
<style scoped>
  .dropper{
    height: 20vh;
    border: 2px solid black;
    border-radius: 5px;
  }
  input {
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
  }
</style>