var express = require('express');
var app = express();

// const admin = require('firebase-admin');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2pKTrou5HNd3HCsOB_DwAq8DtX2pp0ak",
  authDomain: "gdp-web-app.firebaseapp.com",
  projectId: "gdp-web-app",
  storageBucket: "gdp-web-app.appspot.com",
  messagingSenderId: "528474869207",
  appId: "1:528474869207:web:0b5ed70aed04915af78f92",
  measurementId: "G-LZDRVYC083"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


app.post('/create-user', (req, res) => {
    const {name, email, password, phoneno, location } = req.body;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            firebase.firestore().collection("users").doc().set({
                "name": name,
                "email": email,
                "phoneno": phoneno,
                "address": address,
            })
            .then(() => {
                res.send('User created successfully');
            });
        })
        .catch(err => {
            res.send(err);
        });
});


app.then((user) => {
    firebase.firestore().collection("users").doc().set({
        "name": name,
        "email": email,
        "phoneno": phoneno,
        "address": address,
    })
    .then(() => {
        res.send('User created successfully');
    });
})

var port = 3200;

app.listen(port, () => {
    console.log("🟢 server is up and running at " + port);
})