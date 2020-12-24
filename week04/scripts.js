function transformUppercase(){
    let a = document.getElementById("namaPenggguna");
    a.value = a.value.toUpperCase(); 
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup", transformUppercase);
