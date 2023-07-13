const { log } = require('console');
const nodemailer = require('nodemailer');
const myEmail = 'emzyakints2005@gmail.com';
const myEmailPassword = 'drhorlmes2005';
// const clientEmail = document.getElementById('clientEmail');
const clientEmail = 'akintan.ayomide@lmu.edu.ng';
// var clientSubject = document.getElementById('clientSubject');
var clientSubject = 'testing smtp service';
// var clientMessage = document.getElementById('clientMessage');
var clientMessage = 'this is my first time using smtp services!';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myEmail,
        pass: myEmailPassword
    }
});

const mailOptions = {
    from: clientEmail,
    to: myEmail,
    subject: clientSubject,
    text: clientMessage
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error)
    } else (
        console.log('Email sent: ' + info.response)
    )
});