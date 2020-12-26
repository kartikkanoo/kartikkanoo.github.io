function GetBookings() {
    let url = 'https://api.sheety.co/3578597d1c6f5275521223b092a2714d/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
        });
}