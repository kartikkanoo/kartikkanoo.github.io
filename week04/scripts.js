function transformUppercase(){
    let a = document.getElementById("namaPenguna");
    a.value = a.value.toUpperCase(); 
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup", transformUppercase);
