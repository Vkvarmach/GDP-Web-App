
const contactForm = document.querySelector('.AddBike');
let bikeid = document.getElementById("bikeid"); 
let bikelocation = document.getElementById("bikelocation");
   

contactForm.addEventListener('submit', (e)=>{
   e.preventDefault();       
    let formData = {
        bikeid: bikeid.value,
        bikelocation: bikelocation.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Added');
            bikeid.value = '';
            bikelocation.value = '';
        }else{
            alert('something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData));
}) 
