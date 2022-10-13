const nodemailer = require('nodemailer')

// init email transporter
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 465,
    secure: false,
    auth: {
        user: "user",
        pass: "password"
    }
})

// format untuk alis -> "alias" <emailnya@gmail.com>

// send email with transporter
transport.sendMail({
    from: '"Ari Binar 👻" <noreply@binar-bej.com>', // sender address
    to: "contoh@contih.com", // list of receivers
    subject: "Chapter 9 Topic 2", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}).then(res => {
    console.log(
        res.messageId
    )
}).catch(err => {
    console.error(err)
})

console.log('ini harusnya selesai duluan...')

