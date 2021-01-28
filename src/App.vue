<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-image: -webkit-linear-gradient(0deg, #766dff 0%, #0296ff70 100%);
  }

  #app {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: rgba(12, 2, 3, 0.068);
    color: rgb(255, 255, 255); 
  }
  a{
    text-decoration: none;
    color: unset;
  }
</style>