let SignUp = document.getElementById("SignUp");
let SignIn = document.getElementById("SignIn");
let title = document.getElementById("title");
let NameField = document.getElementById("NameField");

SignIn.onclick = function(){
    NameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    SignUp.classList.add("disable");
    SignIn.classList.remove("disable");
}
SignUp.onclick = function(){
    NameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    SignUp.classList.remove("disable");
    SignIn.classList.add("disable");
}