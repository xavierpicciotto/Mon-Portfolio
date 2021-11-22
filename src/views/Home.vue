<template>
  <div class="home">
    <header>
      <nav class="link-container">
        <a class="police_lobster" id="indiceSkills" href="#skills">Skills</a>
        <a class="police_lobster" id="indiceProjets" href="#projets">Projets</a>
        <a class="police_lobster" id="indiceCv" href="#cv">CV</a>
        <a class="police_lobster" id="indiceContact" href="#contact">Contact</a>
        <a href="https://github.com/xavierpicciotto?tab=repositories" target="blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/xavier-picciotto-developpeur-web/" target="blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </nav>
      <div class="name" itemtype="https://schema.org/Person">
        <img itemprop="image" data-aos="fade-right" class="aos-init aos-animate" alt="Une photo de xavier picciotto"
          src="../assets/me.jpg">
        <h1 itemprop="familyName" class="police_lobster">Xavier Picciotto</h1>
        <h2>Développeur Web</h2>
      </div>
    </header>
    <main>
      <div class="presentation">
        <div id="description"></div>
        <h3 data-aos="fade-right" class="aos-init aos-animate">Mon profil:</h3>
        <div class="presentation_box">
          <div class="presentaion_text">
            <p>Après une reconversion dans le développement web, diplôme obtenu en 2021. Je n'ai de cesse de développer
              mes compétences dans ce domaine qui me passionne, notamment le Backend avec Node.js Javascript /
              Typescript, MySQL pour les bases de données et du Frontend avec le Framework Vue.js.
              J'aimerais trouver un premier emploi dans ce secteur. Je suis éligible POEI / AFPR avec Pôle emplois (aide
              aux entreprises pour accepter et former des jeunes à leurs premières expériences), vous pouvez me demander
              plus de renseignements en priver.</p>
            <p>Mes meilleures compétences: <strong>JavaScript</strong>, <strong>Express</strong>,<strong>MySQL</strong>,
              <strong>Vue.js</strong></p>
          </div>
        </div>
      </div>
      <section class="skills">
        <h3 data-aos="zoom-in-right" class="police_lobster aos-init aos-animate">Mes compétences en tant que
          Développeur
          Web</h3>
        <div data-aos="zoom-out-right" class="flex-container aos-init aos-animate">
          <div id="skills" class="skill_block">
            <h4>Langage Web</h4>
            <div class="skill_block-container">
              <div class="skills_box"><img src='../assets/html.jpg' alt="logo html"></div>
              <div class="skills_box"><img src='../assets/css.png' alt="logo css"></div>
              <div class="skills_box"><img src='../assets/JS.jpg' alt="logo js"></div>
            </div>
          </div>
          <div class="skill_block">
            <h4>Framework</h4>
            <div class="skill_block-container">
              <div class="skills_box"><img src='../assets/vue.jpg' alt="logo Vue"></div>
              <div class="skills_box"><img src='../assets/express.png' alt="logo express"></div>
            </div>
          </div>
          <div class="skill_block">
            <h4>Databases</h4>
            <div class="skill_block-container">
              <div class="skills_box"><img src='../assets/mysql.jpg' alt="logo MySql"></div>
              <div class="skills_box"><img src='../assets/mongodb.jpg' alt="logo mongodb"></div>
            </div>
          </div>
          <div class="skill_block">
            <h4>Cloud service</h4>
            <div class="skill_block-container">
              <div class="skills_box"><img src='../assets/firebase.png' alt="logo firebase"></div>
              <div class="skills_box"><img src='../assets/cloudflare.png' alt="logo cloudflare"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="projets">
        <h3 id="projets" class="police_lobster">Mes projets :</h3>
        <router-link to="/picciotto-xm">
         <div class="myServer">
            <h4>Testez l'API de mon serveur privé en cliquant ici</h4>
         </div>
        </router-link>
        <div class="linkServer">
          <a href="https://picciotto-xm.tech/" target="_blank" rel="noopener noreferrer">
            <h3>https://picciotto-xm.tech/</h3>
          </a>
        </div>
        <!--Picciotto-xm.tech-->
        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Picciotto-xm.tech</h4>
          <div v-on:click="enableText(7)" class="projet_dropdown">
            <img src="../assets/picciotto-xm.png"
              alt="projet de développement web de xavier picciotto réaliser un server privé">
            <transition name="bounce">
              <div v-if="textFocusOn == 7" class="projet_text">
                <p>-Configuration de A à Z d'un vps Ubuntu 20.04 avec Ngix et Pm2</p>
                <p>-CRUD Utilisateur sécurisé.</p>
                <p>-Envoie d'emails serveur.</p>
                <p>-Rendu HTML côté serveur.</p>
                <p>-Database MySQL</p>
                <p>*Cloné plus de 49fois sur github*</p>
                <div class="lien_git"><a href="https://github.com/xavierpicciotto/picciotto-server" target="blank">Voir
                    le
                    code
                    du projet</a></div>
              </div>
            </transition>
          </div>
        </div>
        <!--Projet 7-->
        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Créer un réseau social d’entreprise.</h4>
          <div v-on:click="enableText(6)" class="projet_dropdown">
            <img src="../assets/p6.png"
              alt="projet de développement web de xavier picciotto réaliser un réseau social d’entreprise">
            <transition name="bounce">
              <div v-if="textFocusOn == 6" class="projet_text">
                <p>-Personnaliser le contenu envoyé à un client web.</p>
                <p>-Gérer un stockage de données à l'aide de SQL.</p>
                <p>-Implémenter un stockage de données sécurisé en utilisant SQL.</p>
                <p>-Authentifier un utilisateur et maintenir sa session.</p>
                <div class="lien_git"><a href="https://github1s.com/xavierpicciotto/Projet-7" target="blank">Voir le
                    code
                    du projet</a></div>
              </div>
            </transition>
          </div>
        </div>

        <div data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Construire une API sécurisée pour une application d'avis gastronomiques</h4>
          <div v-on:click="enableText(5)" class="projet_dropdown">
            <img src="../assets/p5.png"
              alt="projet de développement web de xavier picciotto Construire un API sécurisée">
            <transition name="bounce">
              <div v-if="textFocusOn == 5" class="projet_text">
                <p>-Mettre en œuvre des opérations CRUD (create, read, update, delete) de manière sécurisée.</p>
                <p>-Stocker des données de manière sécurisée.</p>
                <p>-Implémenter un modèle logique de données conformément à la réglementation.</p>
                <div class="lien_git"><a href="https://github1s.com/xavierpicciotto/Projet-6" target="blank">Voir le
                    code
                    du projet</a></div>
              </div>
            </transition>
          </div>
        </div>

        <div v-if="showProject >= 3" data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Construire un site de e-commerce</h4>
          <div v-on:click="enableText(4)" class="projet_dropdown">
            <img src="../assets/p4.png" alt="projet de développement web de xavier picciotto réalizer site e-commerce">
            <transition name="bounce">
              <div v-if="textFocusOn == 4" class="projet_text">
                <p>-Créer un plan de test pour une application.</p>
                <p>-Gérer des événements JavaScript.</p>
                <p>-Interagir avec un web service avec JavaScript.</p>
                <p>-Valider des données issues de sources externes.</p>
                <div class="lien_git"><a href="https://github1s.com/xavierpicciotto/Orinoco" target="blank">Voir le code
                    du projet</a></div>
              </div>
            </transition>
          </div>
        </div>

        <div v-if="showProject >= 4" data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Optimiser un site web existant</h4>
          <div v-on:click="enableText(3)" class="projet_dropdown">
            <img src="../assets/p3.png" alt="projet de développement web de xavier picciotto SEO et optimisation">
            <transition name="bounce">
              <div v-if="textFocusOn == 3" class="projet_text">
                <p>-Réaliser une recherche des bonnes pratiques en développement web.</p>
                <p>-Assurer l'accessibilité d'un site web.</p>
                <p>-Écrire un code HTML et CSS maintenable.</p>
                <p>-Optimiser la taille et la vitesse d’un site web.</p>
                <p>-Optimiser le référencement d'un site web.</p>
                <div class="lien_git"><a href="https://github1s.com/xavierpicciotto/La-chouette-testing"
                    target="blank">Voir
                    le code du projet</a></div>
              </div>
            </transition>
          </div>
        </div>
        <div v-if="showProject >= 5" data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Dynamiser une page web avec des animations CSS</h4>
          <div v-on:click="enableText(2)" class="projet_dropdown">
            <img src="../assets/p2.png"
              alt="projet de développement web de xavier picciotto réalizer un menu avec des animation css / sass">
            <transition name="bounce">
              <div v-if="textFocusOn == 2" class="projet_text">
                <p>-Créer une maquette qui répertorie les menus de restaurants gastronomiques en
                  site web responsif.</p>
                <p>-Mettre en place une structure de navigation pour un site web.</p>
                <p>-Mettre en œuvre des effets CSS graphiques avancés.</p>
                <p>-Assurer la cohérence graphique d'un site web.</p>
                <div class="lien_git"><a href="https://github1s.com/xavierpicciotto/omyfood" target="blank">Voir le code
                    du projet</a></div>
              </div>
            </transition>
          </div>
        </div>

        <div v-if="showProject >= 6" data-aos="fade-right" class="projet_box aos-init aos-animate">
          <h4>Transformer une maquette en site web</h4>
          <div v-on:click="enableText(1)" class="projet_dropdown">
            <img src="../assets/p1.png" alt="projet de développement web de xavier picciotto réalizer un CV">
            <transition name="bounce">
              <div v-if="textFocusOn == 1" class="projet_text">
                <p>-Intégrer du contenu conformément à une maquette.</p>
                <p>-Utiliser un système de gestion de versions pour le suivi du projet et son hébergement.</p>
                <p>-Mettre en place son environnement Front-End.</p>
                <p>-Implémenter une interface responsive.</p>
                <div class="lien_git"><a href="https://github1s.com/xavierpicciotto/xavierpicciotto" target="blank">Voir
                    le code du projet</a></div>
              </div>
            </transition>
          </div>
        </div>
        <div class="button-box">
          <button v-on:click="displayProject()" id="display-project" type="button">Afficher 4 autres projets</button>
        </div>

      </section>
      <div id="cv"></div>
      <section class="personal">
        <div data-aos="fade-right" class="cv aos-init aos-animate">
          <h3 class="police_lobster">Mon CV :</h3>
          <div class="img-box">
            <p>Maintenir la photo du CV appuyé puis cliquer sur "télécharger le fichier".<br>(mobiles)</p>
            <a href="../Xavier_picciotto_CV.pdf" target="blank">
              <img src="../assets/CV.jpg" alt="Mon CV de développeur web format jpg">
            </a>
            <a href="../Xavier_picciotto_CV.pdf" download="Xavier_picciotto_CV.pdf"><button type="button"
                class="police_prompt">Télécharger <i class="fas fa-download"></i></button></a>
          </div>
        </div>
        <div id="contact"></div>
        <div data-aos="fade-right" class="contact aos-init aos-animate">
          <h3 class="police_lobster">Contactez moi :</h3>
          <div v-if="sendReport" id="report" class="message police_prompt">
            <p>Votre message a bien été envoyé.</p>
          </div>
          <form @submit.prevent="sendEmail" class="form_contact police_prompt" id="form_contact" name="form">
            <label for="name">Nom et prénom :</label>
            <input v-model="contact.name" type="text" name="name" placeholder="Nom Prénom (facultatif)" id="name">
            <label for="entreprise">Entreprise :</label>
            <input v-model="contact.entreprise" type="text" name="entreprise" id="entreprise"
              placeholder="Entreprise (facultatif)">
            <label for="email">E-mail :</label>
            <input v-model="contact.email" type="email" name="email" placeholder="exemple@domaine.com (requis)"
              id="email" required>
            <label for="message">Message :</label>
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
  import service from '../service/contact.service';

  export default {
    name: 'Home',
    data() {
      return {
        contact: new Contact('', '', '', ''),
        textFocusOn: 0,
        showProject: 2,
        alreadySend: false,
        sendReport: false,

      }
    },
    mounted() {
      this.$nextTick(() => {
        const skills = document.getElementById('skills')
        const projets = document.getElementById('projets')
        const cv = document.getElementById('cv')
        const contact = document.getElementById('contact')
        const indiceContact = document.getElementById('indiceContact')
        const indiceCv = document.getElementById('indiceCv')
        const indiceProjets = document.getElementById('indiceProjets')
        const indiceSkills = document.getElementById('indiceSkills')
        const description = document.getElementById('description')

        function isInViewport(el) {
          try {
            const rect = el.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
          } catch {
            console.log("err")
          }
        }
        document.addEventListener('scroll', function () {
          isInViewport(skills) ? setIndice(indiceSkills) : isInViewport(projets) ? setIndice(indiceProjets) :
            isInViewport(cv) ? setIndice(indiceCv) : isInViewport(contact) ? setIndice(indiceContact) :
            isInViewport(description) ? setIndice(0) : ""
        }, {
          passive: true
        })

        let lastIndice;

        function setIndice(el) {
          lastIndice !== undefined ? lastIndice.removeAttribute('class', 'indiceSection') : ""
          if (el !== 0) {
            el.setAttribute('class', 'indiceSection')
            lastIndice = el
          } else {
            lastIndice = undefined
          }
        }
      })
    },
    methods: {

      displayProject: function () {
        if (this.showProject > 2) {
          this.showProject = 2
          document.getElementById('display-project').textContent = 'Afficher 4 autres  projets'
        } else {
          document.getElementById('display-project').textContent = '- réduire -'
          this.showProject += 4
        }
      },
      enableText: function (n) {
        return this.textFocusOn == n ? this.textFocusOn = 0 : this.textFocusOn = n
      },
      sendEmail: function () {
        if (this.alreadySend) {
          if (!confirm('Vous avez déjà envoyé un message, voulez-vous en renvoyer un autre ?')) {
            return
          }
        }
        this.alreadySend = true
        this.sendReport = true
        return service.sendMail(this.contact)
      },
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

  h3:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.356), 0 0 10px rgba(255, 255, 255, 0.356), 0 0 15px rgba(255, 255, 255, 0.356), 0 0 20px #6200ff50, 0 0 30px #ea07ff54, 0 0 40px #181cff38, 0 0 55px #18ffa688, 0 0 75px #18ffa688
  }

  .indiceSection {
    transform: scale(1.2);
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #04ffeadc, 0 0 30px #04ffeadc, 0 0 40px #04ffeadc, 0 0 55px #04ffeadc, 0 0 75px #04ffeadc
  }

  header {
    display: flex;
    flex-direction: column;

    .name {
      text-align: center;
      margin: 3.5% 10% 0%;
      text-shadow: 2px 5px 5px black;
      font-size: 4vh;

      img {
        width: 400px;
        height: auto;
        float: left;
        border-radius: 25%;
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.685);
        animation: pendulum 2s infinite alternate ease-in-out;
      }

      h2 {
        font-size: 0.9em;
      }
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
        font-size: 35px;
        transition: 0.3s ease-in-out;

        &:hover {
          transform: scale(1.5);
          text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18
        }
      }
    }
  }

  h3 {
    margin: 1% 0%;
  }

  .presentation {
    float: right;
    font-size: 2em;
    margin: 0 10%;
    text-shadow: 2px 3px 2px 2px rgb(0, 0, 0);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    h3 {
      font-size: 3vw;
    }

    p {
      text-align: left;
    }
  }

  .skills {

    h3 {
      text-align: center;
      font-size: 3vw;
    }

    h4 {
      font-size: 20px;
      text-align: center;
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
          animation: flip 0.4s infinite alternate-reverse forwards ease-in-out;
        }
      }
    }
  }

  .projets {
    margin: 5% 6.5%;

    .myServer {
      width: 80%;
      margin: auto;
      padding: 15px;
      background-color: #497fe0;
      border-radius: 10px;
      box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.5);

      &:hover {
        animation: newFocus 0.2s forwards ease-in-out;
      }
    }

    .linkServer {
      text-align: center;
    }

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

  .button-box {
    width: 100%;
    text-align: center;

    button {
      cursor: pointer;
      outline: none;
      color: rgb(255, 255, 255);
      font-size: 26px;
      line-height: 20px;
      padding: 10px;
      border-radius: 10px;
      background-image: linear-gradient(to right, rgb(54, 166, 241) 0%, rgb(18, 151, 240) 50%, #0d52f7 100%);
      box-shadow: rgba(0, 0, 0, 0.151) 5px 5px 15px 5px;
      border: 2px solid rgb(255, 255, 255);
    }

    button:hover {
      background: #1C6EA4;
    }

    button:active {
      background: #144E75;
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
        width: 25%;
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

    h3 {
      font-size: 3vw;
    }

    .message {
      background-color: #5fcc37;
      border-radius: 5px;
      text-align: center;
      width: auto;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.424); 
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
        color: white;
        margin: 4% auto;
        box-shadow: inset 0px 1px 0px 0px #a4e271;
        background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
        background-color: #89c403;
        border-radius: 15px;
        border: 1px solid #74b807;
        cursor: pointer;
        font-size: 30px;
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
  @media only screen and (max-width: 1000px) {

    header {
      flex-direction: column;


      .name {
        font-size: 3.50vh;
        margin-top: 10%;

        img {
          width: 200px;
          float: none;
        }

        h1 {
          margin: 0;
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

      h3 {
        font-size: 30px;
      }

      p {
        margin: 0% 5% 5%;
      }
    }

    .skills {
      margin: auto;

      .flex-container {
        flex-direction: column;
      }

      h3 {
        font-size: 30px;
      }

      .skill_block-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      .skills_box {
        margin: 10px 35px;

        img {
          width: 75px;
          height: 75px;
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
          font-size: 21px;
        }

        h3 {
          font-size: 30px;
        }

        .img-box {
          width: 100%;
          margin: auto;

          img {
            width: 50%;
          }
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
      border-radius: 25%;
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.685);
    }

    to {
      border-radius: 30%;
      box-shadow: 5px 5px 5px 5px rgba(28, 218, 113, 0.685);
    }
  }

  @keyframes newFocus {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.07);
      box-shadow: 2px 10px 3px rgba(0, 0, 0, 0.424);
    }
  }

  @keyframes flip {
    from {
      transform: rotateZ(0deg);
    }

    to {
      transform: rotateZ(360deg);
      opacity: 0.2;
    }
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>