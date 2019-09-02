

try{
const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to : 'sondakarshital@gmail.com',
    from : 'sondakarshital@gmail.com',
    subject : 'This is my first mail',
    text : 'I hope you will get this'
})
}catch(e){
    console.log("error ",e);
}