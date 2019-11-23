//TO DO////////////////////////////////////////////////////////////
//build weather dashboard with search functionality to find current    weather conditions and future weather outlook for multiple cities
//OpenWeather API (How To Start in documentation https://openweathermap.org/api)
//Use AJAX to hook into the API and retrieve data in JSON format
//JQUERY!!!


//DISPLAY REQUIREMENTS///////////////////////////////////////////////
//Current Weather Conditions
//City
//Date
//Icon Image (visual representation of weather conditions)
//Temperature
//Humidity
//Wind Speed
//5 Day Forecast
//Date
//Icon Image
//Temp
//Humidity
//Search History (users can access past search terms. 
//Clicking on the city name will perform an updated search with     current and future conditions)


//HINTS////////////////////////////////////////////////////////////
//Create multiple functions within app to handle diff parts of the dashboard
//Current conditions
//5-day forecast
//Search history
//UV Index
//Make more than one AJAX call
//Hardcode some parameters in the API's URL
//User input will determine some of the other parameters
//Use LOCALSTORAGE 


///BONUS///////////////////////////////////////////////////////////
//Use Geolocation API to add user's current location to the initial landing page
//Add app to portfolio


// var APPID = "1f890b05c24ad48ca60b1cd075d3c1e7";


// var qSearch = $("<input>").text;

function buildQueryURL(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1f890b05c24ad48ca60b1cd075d3c1e7";


    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) { 
            console.log(queryURL);
            console.log(response);



            $(".cityName").html("<h1>" + response.name + " Weather Details</h1>");
            $(".windSpeed").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);



        });
}

$("#searchBar").on("click", function(event) {
    event.preventDefault();
    var citySearched = $(".citySearched").val().trim();
    console.log(citySearched);

    buildQueryURL(citySearched);

});






//     function buildQueryURL () {
//     var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=";

//     var queryParams = {"APPID": "1f890b05c24ad48ca60b1cd075d3c1e7"};

//     queryParams.q = $()
// }