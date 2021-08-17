import axios from 'axios'
const API_URL = 'https://picciotto-xm.tech/api/email/contact'

class contact {
    sendMail(data) {
        return axios.post(API_URL, {
            email : data.email,
            name: data.name || "pas de nom",
            company: data.entreprise || "pas d'entreprise",
            message: data.message
        }, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(() => {
            document.getElementById('submit').textContent = "déjà envoyé"
            document.getElementById('submit').setAttribute('disabled', 'true')
            document.getElementById('submit').style.background = "#80808099"
        } ).catch((err) =>{
            document.getElementById('report').style.background = "red"
            document.getElementById('report').textContent= 'Oups une erreur est survenue :' + err
            document.getElementById('submit').textContent = 'renvoyer'
        })
    }
}

export default new contact()