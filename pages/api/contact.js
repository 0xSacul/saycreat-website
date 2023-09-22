export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: 'contact@saycreat.fr',
            pass: process.env.MAIL_PASS,
        }
    })
    const mailData = {
        from: 'contact@saycreat.fr',
        to: 'contact@saycreat.fr',
        subject: `Nouvelle demande de contact - ${req.body.name}`,
        text: "Nouvelle demande de contact - ${req.body.name}" +
            "Sujet: ${req.body.subject}" +
            "Budget: ${req.body.budget}" +
            "Message: ${req.body.message}" +
            "Envoyé par: ${req.body.email}",


        html: `<div>
            <h1>Nouvelle demande de contact</h1>
            <p><strong>Sujet:</strong> ${req.body.subject}</p>
            <p><strong>Budget:</strong> ${req.body.budget}</p>
            <p><strong>Message:</strong> ${req.body.message}</p>
            <p><strong>Envoyé par:</strong> ${req.body.email}</p>
        </div>`

    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200)

    return res.status(200).json({ status: 'OK' })
}