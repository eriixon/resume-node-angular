"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const nodemailer = require('nodemailer');

app.set('port', process.env.PORT||8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

let EMAIL = process.env.EMAIL || config.get("EMAIL");
let PASS = process.env.PASS || config.get("PASS");

app.put('/sendEmail', function(req,res){
    let opts = {service:'Gmail', auth: {user: EMAIL, pass: PASS}};
    let transporter = nodemailer.createTransport(opts);
    let message = {
        from: EMAIL,
        to: "radkovsn@gmail.com",
        subject: 'Email from Resume',
        html: `<h2>Someone wants to connect</h2><p>Name: ${req.body.name}</p><p>Email: '${req.body.email}</p><p>Text: ${req.body.text}</p>`
    };
    transporter.sendMail(message, (error, info) => {
            if(error) return console.log(error);
            else res.send(200);
            console.log('Message sent: ' + info.response);
        });
    });

app.listen(app.get('port'), () => console.log(`Resume starts on port ${app.get('port')}`));