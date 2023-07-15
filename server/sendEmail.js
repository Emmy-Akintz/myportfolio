require('dotenv').config()

const express = require('express')
const { log } = require('console');
const nodemailer = require('nodemailer');
const myEmail = process.env.MY_EMAIL;
const myEmailPassword = process.env.MY_EMAIL_PASSWORD;
// const clientEmail = document.getElementById('clientEmail');
const clientEmail = process.env.MY_SCHOOL_MAIL;
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

const app = express()

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})

console.log(myEmail);
console.log(myEmailPassword);
console.log(clientEmail);