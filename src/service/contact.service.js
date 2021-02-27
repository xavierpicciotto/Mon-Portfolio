import axios from 'axios'

const API_URL = 'https://api.sendinblue.com/v3/smtp/email'

class contact {
    sendMail(data) {
        return axios.post(API_URL, {
                sender:{  
                   name:`${data.name}`,
                   email:`${data.email}`
                },
                to:[  
                   {  
                      email:"xavierpicciotto@gmail.com",
                      name:"Me"
                   }
                ],
                subject:"Contact portfolio",
                htmlContent:`<html><head></head><body><p>Hello,</p>${data.message} <br> ${data.entreprise}</p></body></html>`
        }, {
            headers: {
                'api-key': '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',
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(() => console.log('send successfull')).catch(() => console.log('error email'))
    }
}

export default new contact()