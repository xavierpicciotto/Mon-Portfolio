<template>
  <div class="home">
    <header>
      <div class="container">
        <img alt="Ma photo" src="../assets/Me.jpg">
        <div class="name">
          <h1>Xavier Picciotto</h1>
          <p>Développeur Web</p>
        </div>
        <div class="link-container">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
    </header>
    <div class="animed-point">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
    </div>
    <main>
      <section class="skills">
        <h2>Mes compétences en tant que Développeur Web</h2>
        <div class="flex-container">
          <div class="skills_box"><img src='../assets/html.jpg'></div>
          <div class="skills_box"><img src='../assets/css.png'></div>
          <div class="skills_box"><img src='../assets/JS.jpg'></div>
          <div class="skills_box"><img src='../assets/mysql.jpg'></div>
          <div class="skills_box"><img src='../assets/vue.jpg'></div>
          <div class="skills_box"><img src='../assets/nodejs.jpg'></div>
          <div class="skills_box"><img src='../assets/mongodb.jpg'></div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style lang="scss" scoped>
  header {
    text-align: center;
    background-image: url('../assets/cloud.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .name {
      display: flex;
      flex-direction: column;
      font-size: 2vw;
      margin: auto;
      text-shadow: 2px 5px 5px black;
    }

    .link-container {
      margin: 10px;

      i {
        color: white;
        margin: 40px;
        font-size: 3vw;
      }
    }

    img {
      margin: 10px 50px;
      width: 15%;
      height: auto;
      border-radius: 15%;
      box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.377);
    }
  }

  .animed-point {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    .point {
      width: 5px;
      height: 5px;
      margin: 7px 0;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      box-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #73d8f6 0px 0px 20px, #3e9bf1 0px 0px 30px, #36bee7 0px 0px 40px, #4f68f6 0px 0px 50px, #fafafa 0px 0px 75px;
    }
  }

  .skills {
    margin: 2% 2%;

    h2 {
      text-align: center;
      font-size: 2vw;
    }

    .flex-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
    }

    .skills_box {
      text-align: center;
      width: auto;
      margin: 10px 30px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 15%;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.698);
      }
    }
  }
</style>