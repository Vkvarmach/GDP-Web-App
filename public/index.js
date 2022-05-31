// var express = require('express');
// var app = express();

// const admin = require('firebase-admin');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore, collection, getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDghAAvMSGvON4Lmd-jop0VyjOiAC5t8lM",
  authDomain: "smart-mobility-ios.firebaseapp.com",
  databaseURL: "https://smart-mobility-ios-default-rtdb .firebaseio.com",
  projectId: "smart-mobility-ios",
  storageBucket: "smart-mobility-ios.appspot.com",
  messagingSenderId: "727144855934",
  appId: "1:727144855934:web:2ca21a0d262114a85ddb2f",
  measurementId: "G-5SNWQ6NS22"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const analytics = getAnalytics(app);


// init services
 const db = getFirestore()


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});





// //init services
// const db = getFirestore()

// // collection reference

// const colRef = collection(db, 'users')

// // get collection

// getDocs(colRef)
//     .then((snapshot)  => {
//         let users =  []
        
//         snapshot.docs.forEach((doc)={
//             users.push({...doc.data()})
//         })
//         console.log(users)
//     })
//         .catch(err =>{
//             console.log(err.message)
//      })





// app.post('/create-user', (req, res) => {
//     const {name, email, password, phoneno, location } = req.body;
//     const auth = firebase.auth();
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((user) => {
//             firebase.firestore().collection("users").doc().set({
//                 "name": name,
//                 "email": email,
//                 "phoneno": phoneno,
//                 "address": address,
//             })
//             .then(() => {
//                 res.send('User created successfully');
//             });
//         })
//         .catch(err => {
//             res.send(err);
//         });
// });


// app.then((user) => {
//     firebase.firestore().collection("users").doc().set({
//         "name": name,
//         "email": email,
//         "phoneno": phoneno,
//         "address": address,
//     })
//     .then(() => {
//         res.send('User created successfully');
//     });
// })

// var port = 3200;

// app.listen(port, () => {
//     console.log("🟢 server is up and running at " + port);
// })