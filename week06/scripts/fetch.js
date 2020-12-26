function GetBookings() {
    let url = 'https://api.sheety.co/3578597d1c6f5275521223b092a2714d/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
            let bookingList = document.getElementById("getbookingList");
            bookingList.innerHTML = "";

            let jsonDiv = document.getElementById("json");
            jsonDiv.innerHTML = "",
                jsonDiv.innerHTML = json.bookings;

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " + gEmail + ", pax:" + gPax + "<br>";
            }
        });
}

let getBookingBtn = document.getElementById("getBooking"); getBookingBtn.addEventListener("click", function () {
    GetBookings();
});