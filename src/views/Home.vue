<template>
  <div class="home">
    <header>
      <nav class="link-container">
        <a href="#skills">Skills</a>
        <a href="#cv">CV</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/xavierpicciotto?tab=repositories" target="blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/xavier-picciotto-developpeur-web/" target="blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </nav>
      <div class="name">
        <h1 class="police_lobster">Xavier Picciotto</h1>
        <p>Développeur Web</p>
      </div>
    </header>
    <div class="animed-point">
      <div class="point"></div>
      <div class="point"></div>
      <div class="point"></div>
    </div>
    <main>
      <div class="presentation">
        <h3 data-aos="fade-right" class="police_lobster">Mon profil</h3>
        <div class="presentation_box">
          <img data-aos="zoom-in-up" alt="Une photo de xavier picciotto" src="../assets/Me.jpg">
          <div class="presentaion_text">
            <p data-aos="fade-up-left" class="police_prompt">Je suis récemment diplômé chez OpenClassrooms d'un titre
              RNCP (Bac +2) de
              développeur
              Web Junior. Cette
              formation en autonomie m’a permis d'acquérir des connaissances dans le développement web notamment sur
              les
              langages <strong>HTML, CSS / SASS, Javascript, MySQL</strong>, le framework<strong> Vue </strong>et
              le<strong> SEO</strong>.
            </p>
            <p data-aos="fade-down-left" class="police_prompt">Je suis capable de créer des <strong>serveurs</strong>
              avec Javascript et
              d'utiliser
              des<strong> API</strong>.
              Implémenter une maquette ou template en<strong> site web</strong>.
              Concevoir et
              administrer des<strong> bases de données</strong>.<br> Je suis une personne <strong>calme</strong> avec un
              bon sens de la
              déduction et
              de <strong>l'adaptation</strong>.
              J'aime particulièrement le <strong>travail en équipe</strong> et coopératif. Passionné de vulgarisation
              scientifique dans
              tous les domaines depuis mon plus jeune âge.</p>
          </div>
        </div>
      </div>
      <section id="skills" class="skills">
        <h3 data-aos="zoom-out-right" class="police_lobster">Mes compétences en tant que Développeur Web</h3>
        <div data-aos="zoom-out-left" class="flex-container">
          <div class="skills_box"><img src='../assets/html.jpg' alt="logo html"></div>
          <div class="skills_box"><img src='../assets/css.png' alt="logo css"></div>
          <div class="skills_box"><img src='../assets/JS.jpg' alt="logo js"></div>
          <div class="skills_box"><img src='../assets/mysql.jpg' alt="logo MySql"></div>
          <div class="skills_box"><img src='../assets/vue.jpg' alt="logo Vue"></div>
          <div class="skills_box"><img src='../assets/nodejs.jpg' alt="logo nodeJs"></div>
          <div class="skills_box"><img src='../assets/mongodb.jpg' alt="logo mongodb"></div>
        </div>
      </section>
      <section class="projets" id="projets">
        <h3>Mes projets</h3>
        <div class="projets_container">
          <div class="projet_box">
            <img src="../assets/p1.png" alt="projet de développement web de xavier picciotto réalizer un CV">
            <div class="projet_text">
              <h4>Transformer une maquette en site web</h4>
              <p>Le projet consistait à intégrer une maquette de CV en site web responsif.</p>
              <p>-Intégrer du contenu conformément à une maquette.</p>
              <p>-Utiliser un système de gestion de versions pour le suivi du projet et son hébergement.</p>
              <p>-Mettre en place son environnement Front-End.</p>
              <p>-Implémenter une interface responsive.</p>
            </div>
          </div>
          <div class="projet_box">
            <img src="../assets/p2.png" alt="projet de développement web de xavier picciotto réalizer un CV">
          </div>
          <div class="projet_box">
            <img src="../assets/p3.png" alt="projet de développement web de xavier picciotto réalizer un CV">
          </div>
          <div class="projet_box">
            <img src="../assets/p4.png" alt="projet de développement web de xavier picciotto réalizer un CV">
          </div>
          <div class="projet_box">
            <img src="../assets/p5.png" alt="projet de développement web de xavier picciotto réalizer un CV">
          </div>
          <div class="projet_box">
            <img src="../assets/p6.png" alt="projet de développement web de xavier picciotto réalizer un CV">
          </div>
        </div>
      </section>

      <section class="personal">

        <div data-aos="zoom-out-down" id="cv" class="cv">
          <h3 class="police_lobster">Mon CV</h3>
          <div class="img-box">
            <a href="../cv.pdf" download="Xavier_picciotto_CV.pdf" target="blank">
              <img src="../assets/CV.jpg" alt="Mon CV de développeur web format jpg">
            </a>
            <a href="../cv.pdf" download="Xavier_picciotto_CV.pdf"><button type="button"
                class="police_prompt">Télécharger <i class="fas fa-download"></i></button></a>
          </div>
        </div>

        <div data-aos="zoom-out-right" id="contact" class="contact ">
          <h3 class="police_lobster">Contactez moi</h3>
          <form method="post" action="form.php" class="form_contact police_prompt" id="form_contact" name="envoi"
            enctype="text/plain">
            <label for="firstName">Prénom* :</label>
            <input v-model="contact.firstName" type="text" name="firstName" placeholder="Prénom (requis)" id="firstName"
              required>
            <label for="lastName">Nom :</label>
            <input v-model="contact.lastName" type="text" name="lastName" placeholder="Nom (facultatif)" id="lastName">
            <label for="entreprise">Entreprise :</label>
            <input v-model="contact.entreprise" type="text" name="entreprise" id="entreprise"
              placeholder="Entreprise (facultatif)">
            <label for="email">E-mail* :</label>
            <input v-model="contact.email" type="email" name="email" placeholder="exemple@domaine.com (requis)"
              id="email" required>
            <label for="message">Message* :</label>
            <textarea v-model="contact.message" id="message" name="message" rows="4"
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
      }
    },
    components: {

    },
    methods: {

    },

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
    display: flex;
    flex-direction: column;

    .name {
      text-align: center;
      margin: 2.5%;
      font-size: 2.5vw;
      text-shadow: 2px 5px 5px black;
      animation: pendulum 2s infinite alternate ease-in-out;
    }

    .link-container {
      width: auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-family: sans-serif;
      background-color: black;

      a {
        font-size: 40px;
        transition: 0.3s ease-in-out;

        &:hover {
          transform: rotate(360deg);

        }
      }
    }
  }

  .presentation {
    margin: 5% 10%;
    font-size: 1.7em;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.623);

    h3 {
      font-size: 3vw;
    }

    img {
      float: left;
      width: 35%;
      min-width: 250px;
      height: auto;
      margin-right: 5%;
      border-radius: 4%;
      box-shadow: 0px 5px 50px 5px rgba(255, 255, 255, 0.267);
    }

    p {
      text-align: left;
    }
  }

  .animed-point {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    .point {
      width: 6px;
      height: 6px;
      margin: auto;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      box-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #73d8f6 0px 0px 20px, #3e9bf1 0px 0px 30px, #36bee7 0px 0px 40px, #4f68f6 0px 0px 50px, #fafafa 0px 0px 75px;
      animation-name: blinks;
      animation-duration: 0.6s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .point:nth-child(1) {
      animation-delay: 0.2s;
    }

    .point:nth-child(2) {
      animation-delay: 0.4s;
    }
  }

  .skills {
    margin: 10% 10%;

    h3 {
      text-align: center;
      font-size: 3vw;
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

  .projets {
    margin: 5% 10%;

    h3 {
      font-size: 3vw;
    }

    h4 {
      font-size: 1vw;
    }

    .projets_cpntainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }

    .projet_box {
      width: 100%;
      height: 25%;
      display: flex;
      align-items: center;
      border: 3px solid black;

      img {
        width: 25%;
        height: auto;
      }
    }
    .projet_text{
      font-size: 1.7em;
    }
  }

  .personal {
    font-size: 1.7em;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.623);

    .cv {
      margin: 5% 10%;

      h3 {
        font-size: 3vw;
      }

      .img-box {
        width: 40%;
        height: auto;

        i {
          animation: jumps 0.7s infinite alternate-reverse ease-in-out;
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.493);
          cursor: pointer;
          transition: 0.45s ease-in-out;

          &:hover {
            transform: translate(50px, -5px);
            box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.493);
          }
        }

        button {
          box-shadow: inset 0px -3px 7px 0px #29bbff;
          background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
          background-color: #2dabf9;
          border-radius: 3px;
          border: none;
          display: inline-block;
          cursor: pointer;
          color: #ffffff;
          font-family: Arial;
          font-size: 21px;
          font-weight: bold;
          padding: 8px 23px;
          text-decoration: none;
          text-shadow: 0px 1px 0px #263666;

          &:hover {
            background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
            background-color: #0688fa;
          }

          &:active {
            position: relative;
            top: 1px;
          }
        }
      }
    }
  }

  .contact {
    margin: 5% 10%;

    h3 {
      font-size: 3vw;
    }

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

      .name {
        font-size: 3.50vh;
        margin-top: 5%;

        h1 {
          margin: 0;
        }

        p {
          font-size: 4.5vh;
        }
      }

      .link-container {
        padding: 1%;

        a {
          font-size: 20px;
        }
      }
    }

    .presentation {
      margin: 5% 2%;

      .presentation_box {
        text-align: center;
      }

      img {
        float: none;
        margin: 0;
        width: 100%;
        max-width: 400px;
        border-radius: 10px;
      }

      h3 {
        font-size: 30px;
      }
    }


    .animed-point {
      height: auto;
      flex-direction: row;
      margin: 0;

      .point {
        width: 4px;
        height: 4px;
      }
    }

    .skills {
      margin: auto;

      h3 {
        font-size: 30px;
      }

      .skills_box {
        margin: 10px 15px;

        img {
          width: 65px;
          height: 65px;
        }
      }

    }

    .personal {
      h3 {
        font-size: 30px;
      }

      .cv {
        margin: 5% 2%;

        h3 {
          font-size: 30px;
        }

        .img-box {
          margin: auto;
          text-align: center;
        }
      }

      .contact {
        margin: 5% 4%;

        form {
          margin: auto;
        }

        label {
          margin: auto 0;
        }

        input {
          margin: 2% 0;
        }

        textarea {
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
</style>