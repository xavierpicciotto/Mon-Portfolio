import axios from 'axios'

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
                'api-key': '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',
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