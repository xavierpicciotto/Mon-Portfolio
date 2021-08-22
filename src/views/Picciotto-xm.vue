<template>
    <div class="picciotto-xm">
        <h1>Bienvenue sur la page de test de mon serveur privé</h1>
            <router-link to="/">
                <button class="retour" type="button">Retour accueil</button>
            </router-link>
        <div class="fonctionalite">
            <div class="user card">
                <h2>CRUD utilisateur :</h2>
                <div class="inscription">
                    <div class="switch">
                        <h3 v-if="!connected" v-on:click="switchMode('inscription')" id="mode_insc">Inscription</h3>
                        <h3 v-if="!connected" v-on:click="switchMode('connection')" id="mode_conn">Connection</h3>
                        <h3 v-if="connected" id="mode_user">Connecté : {{user.user_name}}</h3>
                    </div>
                    <!--inscription & connection-->
                    <form v-if="!connected" @submit.prevent="userAuth">
                        <label for="username">Username :</label><br>
                        <div class="box_input">
                            <input required autocomplete="username" v-model="userNew.user_name" type="text"
                                name="username" id="username" placeholder="Entrer un nom d'utilisateur">
                        </div>
                        <p>Le Username doit contenir aux moins 4 caractères et peux être composé de lettres, chiffres et
                            [ . - _ ].</p>
                        <label for="password">Password :</label><br>
                        <div class="box_input"><input autocomplete="new-password" required v-model="userNew.password"
                                type="password" name="password" id="password" placeholder="Entrer un password"></div>
                        <p>Le Password doit contenir aux moins 4 caractères et une majuscule.</p>
                        <label v-if="inscription" for="confirm-password">Confirm password :</label><br>
                        <div v-if="inscription" class="box_input"><input autocomplete="new-password" required
                                v-model="userNew.passwordVerif" type="password" name="confirm-password"
                                id="confirm-password" placeholder="confirmer le password"><br>
                        </div>
                        <h4 class="signupMsg">{{signupMsg}}</h4>
                        <div class="box_btn">
                            <button>Envoyer</button>
                        </div>
                    </form>
                    <div v-if="connected" class="userInterface">
                        <h4>{{signinMsg}}</h4>
                        <div v-if="!modifyUser" class="box_btn">
                            <button v-on:click="modifyUser = true">Modifier les identifiants</button>
                        </div>
                        <form @submit.prevent="userModification" v-if="modifyUser">
                            <p>Compléter les champs que vous souhaitez modifier.</p>
                            <label for="username">Username :</label><br>
                            <div class="box_input">
                                <input autocomplete="username" v-model="userNew.user_name" type="text" name="username"
                                    id="username" placeholder="Entrer un nom d'utilisateur">
                            </div>
                            <p>Le Username doit contenir aux moins 4 caractères et peux être composé de lettres,
                                chiffres et
                                [ . - _ ].</p>
                            <label for="password">Password :</label><br>
                            <div class="box_input"><input autocomplete="new-password" v-model="userNew.password"
                                    type="password" name="password" id="password" placeholder="Entrer un password">
                            </div>
                            <p>Le Password doit contenir aux moins 4 caractères et une majuscule.</p>
                            <div class="box_btn">
                                <button type="submit">Modifier les changements</button><br>
                                <button v-on:click="modifyUser = false" type="button" class="deconexion">X</button>
                            </div>
                        </form>
                        <div class="box_btn">
                            <button v-on:click="deconnexion" class="deconexion">Déconnexion</button>
                        </div>
                        <div class="box_btn suppression">
                            <button v-on:click="suppression" class="deconexion">Supprimer le compte</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="email card">
                <h2>Envoie d'email serveur :</h2>
                <h3>confirmer votre email</h3>
                <label for="email">Votre email :</label><br>
                <div class="box_input"><input v-model="email" type="email" placeholder="exemple@test.com"></div>
                <p>L'email serra suprimé du serveur après 5min ou une fois validé.</p>
                <div class="box_btn"><button v-on:click="emailConfirmation" type="button" class="register_email"
                        id="register_email">Envoyer une
                        vérification</button></div><br>
                <label for="code">Code de confirmation</label>
                <div class="box_input">
                    <input v-model="code" type="text" placeholder="ex: 0123">
                </div>
                <p>L'email qui serra verifier serra le dernier renseigné.</p>
                <div class="box_btn"><button v-on:click="codeValidation" type="button" class="verifCode"
                        id="verifCode">Vérifier</button></div>
                <h4 class="emailMsg"> {{emailMsg}} </h4>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        name: "Picciotto-xm",
        data() {
            return {
                userNew: {
                    user_name: '',
                    password: '',
                    passwordVerif: ''
                },
                user: {
                    user_name: '',
                    id: ''
                },
                signupMsg: '',
                signinMsg: '',
                email: '',
                code: '',
                emailMsg: '',
                inscription: true,
                connection: false,
                connected: false,
                modifyUser: false,
            }
        },
        methods: {
            switchMode(data) {
                const inscription = document.getElementById('mode_insc')
                const connection = document.getElementById('mode_conn')
                if (data == 'inscription') {
                    this.inscription = true
                    this.connection = false
                    inscription.style.color = "#00f578"
                    connection.style.color = "#00a9f9"
                }
                if (data == 'connection') {
                    this.inscription = false
                    this.connection = true
                    connection.style.color = "#00f578"
                    inscription.style.color = "#00a9f9"
                }
            },
            userAuth() {
                if (this.inscription) {
                    this.signupMsg = "Conection en cours..."
                    const verifPassword = this.userNew.password === this.userNew.passwordVerif
                    if (!verifPassword) {
                        return this.signupMsg = '*Les passwords ne sont pas identiques*'
                    }
                    axios.post('https://picciotto-xm.tech/api/user/signup', {
                        user_name: this.userNew.user_name,
                        password: this.userNew.password
                    }, {
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json'
                        }
                    }).then(res => {
                        return this.signupMsg = res.data.message
                    }).catch(err => {
                        return this.signupMsg = err.response.data.message
                    })
                }
                if (this.connection) {
                    this.signupMsg = "Conection en cours..."
                    axios.post('https://picciotto-xm.tech/api/user/signin', {
                        user_name: this.userNew.user_name,
                        password: this.userNew.password
                    }, {
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json'
                        }
                    }).then(res => {
                        this.user = {
                            user_name: res.data.user_name,
                            id: res.data.id
                        }
                        this.connection = false
                        this.connected = true
                        localStorage.setItem('userToken', res.data.accessToken)
                        return this.signinMsg = `utilisateur ${res.data.user_name} connecté id: ${res.data.id}`
                    }).catch(err => {
                        return this.signupMsg = err.response.data.message
                    })
                }
            },
            userModification() {
                const token = localStorage.getItem('userToken')
                this.signinMsg = "Envoie des modifications en cours..."
                if (this.userNew.user_name === "" && this.userNew.password === "") {
                    return this.signinMsg = "Pas de modification détecté"
                }
                axios.put(`https://picciotto-xm.tech/api/user/modify/${this.user.id}`, {
                    user_name: this.userNew.user_name || undefined,
                    password: this.userNew.password || undefined,
                }, {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                        'x-access-token': `${token}`,
                    }
                }).then(res => {
                    this.modifyUser = false
                    return this.signinMsg = res.data.message
                }).catch(err => {
                    return this.signinMsg = err.response.data.message
                })
            },
            deconnexion() {
                this.connected = false
                this.inscription = true
                this.signupMsg = "Vous êtes déconnecté"
            },
            emailConfirmation() {
                this.emailMsg = "Connexion au serveur..."
                axios.post('https://picciotto-xm.tech/api/email/register', {
                    email: this.email
                }, {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    }
                }).then(res => {
                    sessionStorage.setItem('email', this.email);
                    return this.emailMsg = res.data.message
                }).catch(err => {
                    return this.emailMsg = err.response.data.message
                })
            },
            codeValidation() {
                this.emailMsg = "Connexion au serveur..."
                const email = sessionStorage.getItem('email')
                axios.post('https://picciotto-xm.tech/api/email/validate', {
                    email: email,
                    code: this.code
                }, {
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    }
                }).then(res => {
                    return this.emailMsg = res.data.message
                }).catch(err => {
                    return this.emailMsg = err.response.data.message
                })
            },
            suppression() {
                this.signinMsg = "Demande de suppression en cours..."
                const token = localStorage.getItem('userToken')
                const agree = confirm("Vous allez supprimer le compte")
                if (agree) {
                    axios.delete(`https://picciotto-xm.tech/api/user/delete/${this.user.id}`, {
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json',
                            'x-access-token': `${token}`,
                        }
                    }).then(res => {
                        this.deconnexion()
                        return this.signupMsg = res.data.message
                    }).catch(err => {
                        return this.signinMsg = err.response.data.message
                    })
                }
            },
        }

    }
</script>
<style lang="scss" scoped>
    h1 {
        text-align: center;
        margin-bottom: 3%;
    }
    .retour{
        cursor: pointer;
        margin: 1%;
        font-size: 20px;
        color: cornflowerblue;
        background-color: rgb(247, 247, 247);
        border:3px solid cornflowerblue;
        border-radius: 15px;
    }
    .fonctionalite {
        display: flex;
        justify-content: space-around;
    }

    .card {
        width: 40%;
        margin-top: 2%;
        font-size: 20px;
        padding: 1%;
        background: linear-gradient(to bottom, #4b4b4b 5%, #010229 100%);
        border-radius: 30px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.733);

        h2 {
            margin-top: 0;
            margin-bottom: 0;
            text-align: center;
            color: rgb(0, 240, 20);
        }

        .switch {
            display: flex;
            justify-content: space-around;

            h3 {
                cursor: pointer;
                color: rgb(0, 119, 255);

                &:hover {
                    transform: scale(1.2);
                    transition-duration: 0.9s;
                }
            }

            h3:nth-child(1) {
                color: #00f578;
            }
        }

        h4 {
            text-align: center;
        }

        label {
            color: rgb(0, 162, 255);
            margin: 1%;
        }

        .box_input {
            margin-top: 3%;
            text-align: center;
        }

        input {
            background-color: rgb(250, 250, 250);
            width: 80%;
            text-align: center;
            font-size: 25px;
            border-radius: 15px;
            border-style: none;
            outline: none;
            color: cornflowerblue;
            transition-duration: 0.8s;
        }

        p {
            margin-top: 0;
            text-align: center;
            width: 100%;
        }

        .signupMsg {
            text-align: center;
        }

        .box_btn {
            width: 100%;
            margin-top: 2%;
            display: flex;
            justify-content: center;

            button {
                cursor: pointer;
                font-size: 30px;
                border-radius: 5px;
                border-style: none;
                box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.671);
                color: white;
                background-color: rgb(0, 132, 255);

                &:hover {
                    background-color: rgb(0, 73, 190);
                    transform: scale(1.05);
                }
            }

            .deconexion {
                background-color: crimson;

                &:hover {
                    background-color: rgb(255, 7, 7);
                    transform: scale(1.05);
                }
            }

            .suppression {
                position: relative;
                top: 40px;
            }
        }
    }

    @media only screen and (max-width: 650px) {
        h1 {
            font-size: 13px;
        }

        h2 {
            font-size: 18px;
        }

        h3 {
            font-size: 18px;
        }

        .fonctionalite {
            flex-direction: column;
            align-items: center;
        }

        .card {
            width: 100%;
            margin-bottom: 5%;

            input {
                font-size: 17px;
            }

            p {
                font-size: 15px;
            }

            .box_btn {
                button {
                    font-size: 24px;
                }
            }
        }
    }
</style>