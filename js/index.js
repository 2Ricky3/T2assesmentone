

reg = () => {
 let name = document.getElementById("sur").value;
 let email = document.getElementById("email").value;
 let number = +document.getElementById("number").value;
 let subject = document.getElementById("subject").value;
 let password = document.getElementById("password").value;

let  check = document.getElementById("check").checked
if (check){
 alert("Welcome " + sur + "! Thank you for interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number)
} else {alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + sur + "!  If you want to sign up, you better CHECK that newsletter box!")
}

 document.getElementById("form").reset();
}