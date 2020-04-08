<template>
  <div>
    <div v-if="isLoggedIn">
      <!-- the button onclick the login functionality over here is enabled by the mapActions
      in the mapActions we have something called as the login and the login does the operation 
      of the getting logged in into the Application by directing the window to the oauth url -->
      <a class="item">Images</a>
      <a class="item">Upload Images</a>
      <a class="item">Logout</a>
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
  methods: mapActions(['login']),
  computed: mapGetters(['isLoggedIn'])
})
</script>

<style>
</style>