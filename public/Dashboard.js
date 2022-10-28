// var express = require('express');
// var app = express();

// const admin = require('firebase-admin');


const admin = require("firebase-admin")
admin.initializeApp()



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





