<template>
  <div>
    Is the person Logged In ? {{isLoggedIn}}
    Please Wait .....
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
      this.finalizeLogin(window.location.hash);
    },
    computed: mapGetters(['isLoggedIn'])
  };
</script>
<style>
</style>