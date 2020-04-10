<template>
  <div class="dropper">
    <input type="file" mutliple="true" />
    <span>Drop Your Files Here</span>
  </div>
</template>
<script>
export default ({
  name: "UploadForm",
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