<template>
  <div>
    Please Wait .....
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default({
    name: "AuthHandler",
    methods: 
    created(){
      // by importing mapActions we have a method of availability here 
      // by name finalizedLogin and the actions in in the mapActions that are made available
      // to the methods can be called by using this.finalizedLogin
      this.finalizedLogin();
    }  
  })
</script>
<style>
</style>