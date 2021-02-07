<template>
  <div class="home">
    <header>
      <nav class="link-container">
        <a class="police_lobster" href="#skills">Skills</a>
        <a class="police_lobster" href="#cv">CV</a>
        <a class="police_lobster" href="#projets">Projets</a>
        <a class="police_lobster" style="display:none;" href="#contact">Contact</a>
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
        <h3 data-aos="fade-right" class="police_lobster aos-init aos-animate">Mon profil:</h3>
        <div class="presentation_box">
          <img data-aos="fade-right" class="aos-init aos-animate" alt="Une photo de xavier picciotto"
            src="../assets/Me.jpg">
          <div class="presentaion_text">
            <p data-aos="fade-up-rigth" class="police_prompt aos-init aos-animate">Je suis récemment diplômé chez
              OpenClassrooms d'un titre
              RNCP (Bac +2) de
              développeur
              Web Junior. Cette
              formation en autonomie m’a permis d'acquérir des connaissances dans le développement web notamment sur
              les
              langages <strong>HTML, CSS / SASS, Javascript, MySQL</strong>, le framework<strong> Vue </strong>et
              le<strong> SEO</strong>.
            </p>
            <p data-aos="fade-down-right" class="police_prompt aos-init aos-animate">Je suis capable de créer des
              <strong>serveurs</strong>
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
        <h3 data-aos="zoom-in-right" class="police_lobster aos-init aos-animate">Mes compétences en tant que Développeur
          Web</h3>
        <div data-aos="zoom-out-right" class="flex-container aos-init aos-animate">
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
        <h3 class="police_lobster">Mes projets:</h3>
        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Transformer une maquette en site web</h4>
          <div v-on:click="p1 = !p1" class="projet_dropdown">
            <img src="../assets/p1.png" alt="projet de développement web de xavier picciotto réalizer un CV">
            <div v-if="p1" class="projet_text">
              <p>-Intégrer du contenu conformément à une maquette.</p>
              <p>-Utiliser un système de gestion de versions pour le suivi du projet et son hébergement.</p>
              <p>-Mettre en place son environnement Front-End.</p>
              <p>-Implémenter une interface responsive.</p>
              <div class="lien_git"><a href="https://github.com/xavierpicciotto/xavierpicciotto" target="blank">Voir
                  le code du projet</a></div>
            </div>
          </div>

        </div>
        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Dynamiser une page web avec des animations CSS</h4>
          <div v-on:click="p2 = !p2" class="projet_dropdown">
            <img src="../assets/p2.png"
              alt="projet de développement web de xavier picciotto réalizer un menu avec des animation css / sass">
            <div v-if="p2" class="projet_text">
              <p>-Créer une maquette qui répertorie les menus de restaurants gastronomiques en
                site web responsif.</p>
              <p>-Mettre en place une structure de navigation pour un site web.</p>
              <p>-Mettre en œuvre des effets CSS graphiques avancés.</p>
              <p>-Assurer la cohérence graphique d'un site web.</p>
              <div class="lien_git"><a href="https://github.com/xavierpicciotto/omyfood" target="blank">Voir le code
                  du projet</a></div>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Optimiser un site web existant</h4>
          <div v-on:click="p3 = !p3" class="projet_dropdown">
            <img src="../assets/p3.png" alt="projet de développement web de xavier picciotto SEO et optimisation">
            <div v-if="p3" class="projet_text">
              <p>-Réaliser une recherche des bonnes pratiques en développement web.</p>
              <p>-Assurer l'accessibilité d'un site web.</p>
              <p>-Écrire un code HTML et CSS maintenable.</p>
              <p>-Optimiser la taille et la vitesse d’un site web.</p>
              <p>-Optimiser le référencement d'un site web.</p>
              <div class="lien_git"><a href="https://github.com/xavierpicciotto/La-chouette-testing" target="blank">Voir
                  le code du projet</a></div>
            </div>
          </div>

        </div>

        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Construire un site de e-commerce</h4>
          <div v-on:click="p4 = !p4" class="projet_dropdown">
            <img src="../assets/p4.png" alt="projet de développement web de xavier picciotto réalizer site e-commerce">
            <div v-if="p4" class="projet_text">
              <p>-Créer un plan de test pour une application.</p>
              <p>-Gérer des événements JavaScript.</p>
              <p>-Interagir avec un web service avec JavaScript.</p>
              <p>-Valider des données issues de sources externes.</p>
              <div class="lien_git"><a href="https://github.com/xavierpicciotto/Orinoco" target="blank">Voir le code
                  du projet</a></div>
            </div>
          </div>

        </div>

        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Construire une API sécurisée pour une application d'avis gastronomiques</h4>
          <div v-on:click="p5 = !p5" class="projet_dropdown">
            <img src="../assets/p5.png"
              alt="projet de développement web de xavier picciotto Construire un API sécurisée">
            <div v-if="p5" class="projet_text">
              <p>-Mettre en œuvre des opérations CRUD (create, read, update, delete) de manière sécurisée.</p>
              <p>-Stocker des données de manière sécurisée.</p>
              <p>-Implémenter un modèle logique de données conformément à la réglementation.</p>
              <div class="lien_git"><a href="https://github.com/xavierpicciotto/Projet-6" target="blank">Voir le code
                  du projet</a></div>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Créer un réseau social d’entreprise.</h4>
          <div v-on:click="p6 = !p6" class="projet_dropdown">
            <img src="../assets/p6.png"
              alt="projet de développement web de xavier picciotto réalizer un réseau social d’entreprise">
            <div v-if="p6" class="projet_text">
              <p>-Personnaliser le contenu envoyé à un client web.</p>
              <p>-Gérer un stockage de données à l'aide de SQL.</p>
              <p>-Implémenter un stockage de données sécurisé en utilisant SQL.</p>
              <p>-Authentifier un utilisateur et maintenir sa session.</p>
              <div class="lien_git"><a href="https://github.com/xavierpicciotto/Projet-7" target="blank">Voir le code
                  du projet</a></div>
            </div>
          </div>
        </div>

      </section>

      <section class="personal">

        <div data-aos="fade-right" id="cv" class="cv aos-init aos-animate">
          <h3 class="police_lobster">Mon CV:</h3>
          <div class="img-box">
            <a href="../Xavier_picciotto_CV.pdf" target="blank">
              <img src="../assets/CV.jpg" alt="Mon CV de développeur web format jpg">
            </a>
            <p>Maintenir la photo du CV appuyé puis cliquer sur "télécharger le fichier".</p>
            <a href="../Xavier_picciotto_CV.pdf" download="Xavier_picciotto_CV.pdf"><button type="button"
                class="police_prompt">Télécharger <i class="fas fa-download"></i></button></a>
          </div>
        </div>

        <div data-aos="fade-right" id="contact" class="contact aos-init aos-animate">
          <h3 class="police_lobster">Contactez moi:</h3>
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
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
        textFocusOn: "",
      }
    },
    components: {

    },
    methods: {

    },
    computed:{
      
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
      position: fixed;
      width: 100%;
      z-index: 2;
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
    font-size: 1.6em;
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
      text-align: center;
      font-size: 2em;
      margin: 2%;
    }

    .projet_dropdown {
      cursor: pointer;
      width: 80%;
      max-width: 750px;
      height: auto;
      margin: 3% auto;
      background-color: #00000099;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      &:hover {
        img {
          transform: translate(0px, -15px);
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.411);
        }
      }
    }

    .projet_box {
      width: 100%;
      height: 25%;
      margin: 10% auto;

      img {
        width: 100%;
        height: auto;
        margin: auto;
        border-radius: 25px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.459);
        transition: 0.4s ease-in-out;
      }
    }

    .projet_text {
      font-size: 1.6em;
      width: 100%;
      height: auto;
      max-width: 650px;
    }

    .lien_git {
      width: 100%;
      height: auto;
      text-align: center;

      a {
        margin-bottom: 3%;
        box-shadow: 3px 4px 0px 0px #1564ad;
        background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
        background-color: #79bbff;
        border-radius: 30px;
        border: 1px solid #337bc4;
        display: inline-block;
        cursor: help;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        font-weight: bold;
        padding: 12px 44px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #528ecc;
      }

      a:hover {
        background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
        background-color: #378de5;
      }

      a:active {
        position: relative;
        top: 1px;
      }
    }
  }

  .personal {
    font-size: 1.7em;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.623);

    .cv {
      margin: 5% 10%;

      p {
        display: none;
      }

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
            transform: translate(0px, -15px);
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
    display: none;

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
        margin-top: 10%;

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
      margin: -10px;

      .point {
        width: 3px;
        height: 3px;
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

    .projets {
      margin: 5% 2%;

      h3 {
        font-size: 30px;
      }

      h4 {
        font-size: 20px;
      }

      .projet_dropdown {
        width: 100%;

        &:hover {
          img {
            transform: translate(0px, -5px);
          }
        }
      }

      .projet_text {
        font-size: 20px;
      }
    }

    .personal {

      h3 {
        font-size: 30px;
      }

      .cv {
        margin: 5% 2%;

        p {
          display: block;
          font-size: 15px;
        }

        h3 {
          font-size: 30px;
        }

        .img-box {
          width: 100%;
          max-width: 650px;
          margin: auto;
          text-align: center;

        }

        img:hover {
          transform: translate(0px, 0px);
        }

        a {
          button {
            font-size: 18px;
          }
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

  @keyframes growing {
    from {
      transform: translate(0%, 50%);
      transform: scale(0);
    }

    to {
      transform: translate(0%, 0%);
      transform: scale(1);
    }
  }
</style>