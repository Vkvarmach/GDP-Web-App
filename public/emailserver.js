const { initializeApp } = require('firebase-admin/app');
import { initializeApp } from 'firebase-admin/app';


const admin = require("firebase-admin")
admin.initializeApp()

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'chunchuvijaykumar96@gmail.com',
        pass: 'hkikbhbdhdgsqcjq'
    }
});


exports.sendEmail = functions.firestore
    .document('https://console.firebase.google.com/u/2/project/smart-mobility-ios/firestore/data/~2Fadmin-user~2Fu38qYv9uqaPPquublCJa/{chunchuvijaykumar96@gmail.com}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: `chunchuvijaykumar96@gmail.com`,
            to: snap.data().email,
            subject: 'contact form message',
            html: `<h1>From Smart Mobility</h1>
             <p> <b>Email: </b>${snap.data().email} </p>`

};


 return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("Sent!")
   });
});

exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: `chunchuvijaykumar96@gmail.com`,
        to: req.body.email,
        subject: 'From Smart Mobility',
        html: `<h1>From admin page</h1>
                            <p>
                               <b>Email: </b>${req.body.email}<br>
                            </p>`
    };


    return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            return res.send(error.toString());
        }
        var data = JSON.stringify(data)
        return res.send(`Sent! ${data}`);
    });

});



/* 
const express = require('express');
const app = express();

const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5051;

//Middleware

app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/emailriders.html')
})

app.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
            user: 'chunchuvijaykumar96@gmail.com',
            pass: 'hkikbhbdhdgsqcjq'
       }
    })

    const mailOptions = {
        from: 'chunchuvijaykumar96@gmail.com',
        to: req.body.email ,
        subject: `Message from chunchuvijaykumar96@gmail.com: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:' + info.response);
            res.send('success')
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})  */