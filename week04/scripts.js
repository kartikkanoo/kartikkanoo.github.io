function transformUppercase() {
    let a = document.getElementById("namaPenguna");
    a.value = a.value.toUpperCase(); 
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup", transformUppercase);

function checkPasswordLength(){
    let password = document.getElementById("katalaluan").value;
    if(password.length < 5) {
        alert("Password must be more than 5 characters");
    } else {
        alert("Password accepted!")
    }
}

let elPassword = document.getElementById("kataLaluan");
elPassword.onblur = checkPasswordLength;