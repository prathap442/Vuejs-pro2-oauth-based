<template>
  <div>
    <span> This is the AppHeader.vue</span>
    <div v-if="isLoggedIn">
      <a class="item">Images</a>
      <a class="item">Upload Images</a>
      <button class="item" v-on:click="logout">Logout</button>
      {{ isLoggedIn }}  
    </div>
    <div v-else>
      <button v-on:click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';  
export default({
  name: "AppHeader",
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn']),
  beforeUpdate: ()=>{
    console.log("I am the first hook to get called");
    this.isLoggedIn;
  }
})
</script>

<style>
</style>