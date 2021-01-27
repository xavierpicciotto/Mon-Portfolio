<template>
  <div class="home">
    <header>
      <div class="container">
        <img alt="Une photo de xavier picciotto" src="../assets/Me.jpg">
        <div class="name">
          <h1 class="police_lobster">Xavier Picciotto</h1>
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
        <h2 class="police_lobster">Mes compétences en tant que Développeur Web</h2>
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
      <section class="personal">
        <div class="presentation">
          <h3 class="police_lobster">Mon profil</h3>
          <p class="police_prompt">Je suis récemment diplômé chez OpenClassrooms d'un titre RNCP (Bac +2) de développeur
            Web Junior. Cette
            formation en autonomie m’a permis d'acquérir des connaissances dans le développement web notamment sur les
            langages <strong>HTML, CSS, Javascript, MySQL</strong> et le framework <strong>Vue</strong>. je suis aussi
            ouvert à l'apprentissage de nouveaux
            langages et technologies.</p>
          <p class="police_prompt">Je suis capable de créer et améliorer des sites internet, d'utiliser des API.
            Concevoir et
            gérer des bases de données. Je suis une personne <strong>calme</strong> avec un bon sens de la déduction et
            de <strong>l'adaptation</strong>.
            J'aime particulièrement le <strong>travail en équipe</strong> et coopératif. Passionné de vulgarisation
            scientifique dans
            tous les domaines depuis mon plus jeune âge.</p>
        </div>
        <div class="cv">
          <h3 class="police_lobster">Mon CV</h3>
          <div class="img-box">
            <img src="../assets/CV.jpg" alt="Mon CV de développeur web format jpg">
            <a href="../assets/Xavier-Picciotto_CV.pdf" download class="police_prompt">Télécharger</a>
          </div>
        </div>
        <div class="contact police_lobster">Contactez moi</div>
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
  .police_lobster {
    font-family: 'Lobster Two', cursive;
  }

  .police_prompt {
    font-family: 'Prompt', sans-serif;
  }

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
      border-radius: 50%;
      box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.377);
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
      animation-name: blinks;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .point:nth-child(1) {
      animation-delay: 0.3s;
    }

    .point:nth-child(2) {
      animation-delay: 0.6s;
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
      justify-content: space-evenly;
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
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.698);
      }
    }
  }

  .personal {
    font-size: 1.7em;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.623);

    .presentation {
      margin: 5% 5%;
    }

    .cv {
      margin: 5% 5%;

      .img-box {
        width: 200px;

        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.493);
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            transform: translate(10px, -5px);
            box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.493);
          }
        }
      }
    }
  }

  //---Animations---
  @keyframes blinks {
    from {
      box-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #73d8f6 0px 0px 20px, #3e9bf1 0px 0px 30px, #36bee7 0px 0px 40px, #4f68f6 0px 0px 50px, #fafafa 0px 0px 75px;
    }

    to {
      box-shadow: #FFF 0px 0px 5px, #1c24d7 0px 0px 10px, #FFF 0px 0px 15px, #73d8f6 0px 0px 20px, #3e9bf1 0px 0px 30px, #36bee7 0px 0px 40px, #4f68f6 0px 0px 50px, #fafafa 0px 0px 75px;
    }
  }
</style>