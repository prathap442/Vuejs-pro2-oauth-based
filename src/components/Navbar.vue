<template>
  <div id="navbar-root">
    <h1> This is the Navbar Root</h1>
    <AppHeader></AppHeader>
  </div>
</template>
<script>
  import 'AppHeader' from './AppHeader';
  export default ({
    name: "Navbar",
    data: function(){
      return {}   
    },
    components: {
      AppHeader  
    }
  })
</script>
<style>
  
</style>