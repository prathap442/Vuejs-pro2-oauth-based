<template>
  <div id="root">
    <AppHeader></AppHeader>
    This is the App.vue component
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader';
export default({
  name: 'App',
  components: {
    AppHeader
  },
  data: function(){
     return {sf: "on"} 
  }
})
</script>
<style>
</style>