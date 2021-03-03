import axios from 'axios'
import API_KEY from './api.key'
const API_URL = 'https://api.sendinblue.com/v3/smtp/email'

class contact {
    sendMail(data) {
        return axios.post(API_URL, {
                sender:{  
                   name:`${data.name || 'Sans nom'}`,
                   email:`${data.email}`
                },
                to:[  
                   {  
                      email:"xavierpicciotto@gmail.com",
                      name:"Me"
                   }
                ],
                subject:"Contact portfolio",
                htmlContent:`<html><head></head><body><p>Hello,</p>${data.message} <br> ${data.entreprise || 'entreprise non renseignée'}</p></body></html>`
        }, {
            headers: {
                'api-key': API_KEY,
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(() => {
            document.getElementById('submit').textContent = 'SUCCESS!!'
            document.getElementById('submit').setAttribute('disabled', 'true')
        } ).catch(() =>{
            document.getElementById('report').style.backgroundColor = "red"
            document.getElementById('report').textContent= 'Oups une erreur est survenue'
            document.getElementById('submit').textContent = 'renvoyer'
        })
    }
}

export default new contact()