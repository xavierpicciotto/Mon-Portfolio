<template>
  <div class="home">
    <header>
      <img alt="Une photo de xavier picciotto" src="../assets/Me.jpg">
      <div class="name">
        <h1 class="police_lobster">Xavier Picciotto</h1>
        <p>Développeur Web</p>
      </div>
      <div class="link-container">
        <a href="https://github.com/xavierpicciotto?tab=repositories" target="blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/xavier-picciotto-developpeur-web/" target="blank">
          <i class="fab fa-linkedin"></i>
        </a>
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
            langages <strong>HTML, CSS, Javascript, MySQL, référencement</strong> et le framework <strong>Vue</strong>.
            je suis aussi
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
            <a href="../assets/Xavier-Picciotto_CV.pdf" download class="police_prompt">Télécharger <i
                class="fas fa-download"></i></a>
          </div>
        </div>
        <div class="contact ">
          <h3 class="police_lobster">Contactez moi</h3>
          <form class="form_contact police_prompt" id="form_contact">
            <label for="firstName">Prénom* :</label>
            <input v-model="contact.firstName" type="text" name="firstName" placeholder="Prénom (requis)" id="firstName"
              pattern="[a-zA-z/ /-]+" required>
            <label for="lastName">Nom :</label>
            <input v-model="contact.lastName" type="text" name="lastName" placeholder="Nom (facultatif)" id="lastName"
              pattern="[a-zA-z/ /-]+">
            <label for="entreprise">Entreprise :</label>
            <input v-model="contact.entreprise" type="text" name="entreprise" id="entreprise"
              placeholder="Entreprise (facultatif)" pattern="[a-zA-z/ /-]+">
            <label for="email">E-mail* :</label>
            <input v-model="contact.email" type="email" name="email" placeholder="exemple@domaine.com (requis)"
              id="email" required>
            <label for="message">Message* :</label>
            <textarea v-model="contact.message" id="address" name="message" rows="4"
              placeholder="Vous pouvez m'écrire ici (requis)." required></textarea>
            <button type="submit" class="form_button" id="submit">Envoyer</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import Contact from '../models/contact';
  export default {
    name: 'Home',
    data() {
      return {
        contact: new Contact('', '', '', '', ''),
        successfull: false
      }
    }
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
    background-image: url('../assets/cloud.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 20% 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
      margin: auto;
      text-shadow: 2px 5px 5px black;
      animation: pendulum 2s infinite alternate ease-in-out;
    }

    .link-container {
      width: 14%;
      display: flex;
      justify-content: space-around;

      i {
        font-size: 3vw;
        text-shadow: 3px 3px rgba(0, 0, 0, 0.534);
        transition: 0.3s ease-out;

        &:hover {
          transform: translate(0px, -7px);
          text-shadow: 3px 10px rgba(0, 0, 0, 0.534);
        }
      }
    }

    img {
      margin: 0;
      min-width: 100px;
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
      margin: 10px 0;
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
    margin: auto 5%;

    h2 {
      text-align: center;
      font-size: 2.5em;
      margin-top: auto;
      margin-bottom: 5%;
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
        box-shadow: 4px 6px 3px rgba(0, 0, 0, 0.37);

        &:hover {
          animation: newFocus 0.6s forwards ease-in-out;
        }
      }
    }
  }

  .personal {
    font-size: 1.7em;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.623);

    .presentation {
      margin: 5% 10%;
    }

    .cv {
      margin: 5% 10%;

      .img-box {
        width: 200px;
        height: auto;

        a {
          text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.493);
        }

        i {
          animation: jumps 0.7s infinite alternate-reverse ease-in-out;
        }

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

  .contact {
    margin: 5% 10%;

    form {
      margin: auto 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      label {
        margin: auto 10%;
      }

      input {
        margin: 2% 20%;
        font-size: 1em;
        border-radius: 5px;
        border-style: none;
        outline: none;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.424);

        &:focus {
          animation: newFocus 0.6s forwards ease-in-out;
        }
      }

      textarea {
        outline: none;
        margin: 2% 10%;
        border-radius: 5px;
        font-size: 1em;

        &:focus {
          animation: newFocus 0.6s forwards ease-in-out;
        }
      }

      button {
        margin: 4% auto;
        box-shadow: inset 0px 1px 0px 0px #a4e271;
        background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
        background-color: #89c403;
        border-radius: 6px;
        border: 1px solid #74b807;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 20px;
        font-weight: bold;
        padding: 6px 24px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #528009;
        animation: jumps 1s infinite alternate-reverse ease-in-out;

        &:hover {
          background: linear-gradient(to bottom, #77a809 5%, #89c403 100%);
          background-color: #77a809;
        }

        &:active {
          position: relative;
          top: 1px;
        }
      }
    }
  }

  //--Responsive--
  @media only screen and (max-width: 900px) {
    header {
      flex-direction: column;
      border-radius: 10px;

      .name {
        font-size: 3.5vh;

        h1 {
          margin: 0;
        }
      }

      img {
        margin-top: 5%;
        width: 30%;
      }

      .link-container {
        width: 100%;
        margin-bottom: 1%;
        i {
          font-size: 2.5em;
        }
      }
    }

    .animed-point {
      .point {
        margin: 5px auto;
      }
    }

    .skills {
      h2 {
        font-size: 4.5vh;
      }

      .skills_box {
        img {
          width: 65px;
          height: 65px;
        }
      }

    }
    .personal{
      .contact{
        form{
         margin: auto; 
        }
        label{
          margin: auto 0;
        }
        input{
          margin: 2% 0;
        }
        textarea{
          margin: 2% 0;
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

  @keyframes jumps {
    from {
      transform: translate(0px, 0px);
    }

    to {
      transform: translate(0px, -7px);
    }
  }

  @keyframes pendulum {
    from {
      transform: translate(0px, 0px) scale(1);
    }

    to {
      transform: translate(0px, 5px) scale(1.005);
    }
  }

  @keyframes newFocus {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.10);
      box-shadow: 2px 10px 3px rgba(0, 0, 0, 0.424);
    }
  }
  @-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

</style>