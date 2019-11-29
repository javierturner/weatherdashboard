var hideInfo = document.getElementById("currentCity");
hideInfo.style.display = "none";

function displayWeather (city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",USA&units=imperial&appid=1f890b05c24ad48ca60b1cd075d3c1e7";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)


        var date = new Date();
        date = moment().format('LL');
        var cityInfo = $("#cityInfo");
        var cityName = $("<h1>").text(response.name);
        var URL = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        var showIcon = $("<img>").attr("src", URL);
        var temperature = $("<p>").text("Temperature: " + response.main.temp + " °F");
        var humidityElement = $("<p>").text("Humidity: " + response.main.humidity + "%");
        var windSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " mph");

        hideInfo.style.display = "block";

        cityName.append(" (" + date + ")");
        cityName.append(showIcon);
        cityInfo.append(cityName, temperature, humidityElement, windSpeed);
        $("#cityInfo").prepend(cityInfo);
        //   showInfo.style.display = "block";
    });
}

$("#submitButton").on("click", function (event) {
    event.preventDefault();
    var inputWeather = $("#citySearched").val().trim();
    displayWeather(inputWeather);
});