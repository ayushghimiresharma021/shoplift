const nodemailer = require('nodemailer');

const sendMail = async(options) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port : 465,
        service:'gmail',
        auth :{
            user: 'ayushsharmaghimire@gmail.com',
            pass: 'vvzzjatbllsmoxrs'
        }
    })
    const mailOptions = {
        from : 'ayushsharmaghimire@gmail.com',
        to : options.email,
        subject : options.subject,
        text: options.message
    }
    await transport.sendMail(mailOptions)
}




module.exports = sendMail