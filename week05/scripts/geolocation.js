let elLocate = document.getElementById("locate");
elLocate.addEventListener("click",function(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(){
            let elLat = document.getElementById("lat");
            let elLong = document.getElementById("long")

            elLat.innerHTML = "Latitude : " + CaretPosition.coords.latitude;
            elLong.innerHTML = "Longitude : " + CaretPosition.coords.longitude;
         });
    } else {
        alert("Geolocation is not supported by this browser.")
    }
});