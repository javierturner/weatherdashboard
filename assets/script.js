var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",USA&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
      url: queryURL,
      method: "get"
    }).then(function (response) {
      console.log(response)

    });
