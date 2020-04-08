<template>
  <div>
    this is the AppHeader.vue
    <!-- the button onclick the login functionality over here is enabled by the mapActions
    in the mapActions we have something called as the login and the login does the operation 
    of the getting logged in into the Application by directing the window to the oauth url -->
    <button v-on:click="login">Login</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';  
export default({
  name: "AppHeader",
  methods: mapActions(['login'])
})
</script>

<style>
</style>