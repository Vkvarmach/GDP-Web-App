
const contactForm = document.querySelector('.contact-form');

let full_name = document.getElementById("full_name"); 
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message"); 
   

contactForm.addEventListener('submit', (e)=>{
   e.preventDefault();
           
   let formData = {
        full_name: full_name.value,
        email: email.value,
        subject: subject.value,
        message: message.value

    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            full_name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))
 })