<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
    created(){
      if(this.$route.path !== "/" && this.$route.path !== "/picciotto-xm"){
        this.$router.push("/");
      }
    }
}
</script>

<style lang="scss">
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-image: -webkit-linear-gradient(0deg, #766dff 0%, #0296ff70 100%);
    overflow-x: hidden;
    text-shadow: 2px 2px 2px black;

  }

  #app {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: rgb(255, 255, 255);
    font-family: sans-serif;
  }
  a{
    text-decoration: none;
    color: unset;
  }
</style>