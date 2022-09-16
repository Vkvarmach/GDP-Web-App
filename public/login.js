function validate()
{
 var username=document.getElementById("username").value;
 var password=document.getElementById("password").value;   
 if(username=="admin" && password=="user")
 {
    window.location.assign("index.html");
    alert("Login succesfully");
    return false;

 }
 else
 {
    alert("Login failed");
 }
}