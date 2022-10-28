
const contactForm = document.querySelector('.contact-form');

let Firstname = document.getElementById("Firstname"); 
let Lastname = document.getElementById("Lastname");
let email = document.getElementById("email");
let phonenumber = document.getElementById("phonenumber"); 
let Password = document.getElementById("password");
   

contactForm.addEventListener('submit', (e)=>{
   e.preventDefault();
           
    let formData = {
        Firstname: Firstname.value,
        Lastname: Lastname.value,
        email: email.value,
        phonenumber: phonenumber.value,
        Password : password.value
        
  
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Registered');
            Firstname.value = '';
            Lastname.value = '';
            email.value = '';
            phonenumber.value = '';
            password.value='';
        }else{
            alert('something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData));
}) 

 /*

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

import { getDatabase, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
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
 const database = getDatabase(app);





const querySnapshot = await getDocs(collection(database, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

//reference to contactinfo colections
let contactInfo = firebase.database().ref("infos");
//listen for a submit
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    //get input values
   let name = document.querySelector(".name").value; 
   let email = document.querySelector(".email").value;
   let phonenumber = document.querySelector(".phonenumber").value; 
   
   saveContactinfo(name,email,phonenumber);

   document.querySelector(".contact-form").reset();

   sendEmail(name,email,phonenumber);
}

//Save info to Firebase
function saveContactinfo(name,email,phonenumber){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        phonenumber: phonenumber,
    });
    retrieveInfos();
}

//retrive info
function retrieveInfos(){
    let ref = firebase.database().ref("infos");
    ref.on("value",gotData);
}

function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);

    for(let i=0; i < keys.length; i++){
        let infoData = keys[i];
        let name  = info[infoData].name;
        let email = info[infoData].email;
        let phonenumber = info[infoData].phonenumber;
        console.log(name,email,phonenumber);

        let infoResults = document.querySelector(".infoResults");

        infoResults.innerHTML += `<div>
            <p><strong>Name: </strong>${name} <br/>
            <a><strong>Email: </strong>${email}</a><br/>
            <a><strong>phonenumber: </strong>${phonenumber}</a>
            </p>
        </div>`
    }
}

retrieveInfos();



//send email info
function sendEmail(name,email,phonenumber){
    Email.send({

    Host: "smtp.gmail.com",
    Username: "vijayusa146@gmail.com",
    Password: "lttxyztmboyeewcn",
    To:"vijaythevarma@gmail.com",
    From: "vijayusa146@gmail.com",
    email:`${name}  sent you a phonenumber`,
    Body: `${name} <br/> Email: ${email} <br/> phonenumber: ${phonenumber}` ,  
  }).then((phonenumber) => alert("mail sent successfully"));
} */v