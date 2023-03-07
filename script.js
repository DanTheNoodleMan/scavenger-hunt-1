let password = "meeting";

function passCheck(){
    let pass = document.getElementById("password").value;
    if (pass === password){
        alert('Correct Password!'); 
        window.location.replace='home.html';
    }
}