function getRandomUser(){
    let xhttp = XMLHttpRequest(); //create request obj

    xhttp.onreadystatechange = function(){
       if(this.readystate == 4 && this.status == 200){
           let data = JSON.parse(this.response);
           let elFirstName = document.getElementById("firstName");
           let elLastName = document.getElementById("lastName");
           let elJsonResult = document.getElementById("jsonResult");
           let elUserImage = document.getElementById("userImage");
           let elPhone = document.getElementById("phone");
           let elEmail = document.getElementById("email");

           elJsonResult.innerHTML = this.response;
       } 
    }

    xhttp.open("GET","https://randomuser.me.api/",true);
    xhttp.send();
}