$(document).ready(function(){
  //retrieve our location info
  let locationData = $.get('https://ipapi.co/json/');
  //Make sure to declare variables to store data
  locationData.then(function(locationAPI, status){
    // Declare location variables (lat, lon, city, state) then activate api call
    console.log(locationAPI);
    let lat = locationAPI.latitude;
    let lon = locationAPI.longitude;
    let city = locationAPI.city;
    let state = locationAPI.region;
    getWeatherData(lat, lon, city, state);
  });

  function getWeatherData(lat, lon, city, state) {
    var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
    var apiKEY = '8a79b24205ac6c10bde4fb56418cd1c7';
    var weatherData = $.getJSON(`${weatherAPI}lat=${lat}&lon=${lon}&APPID=${apiKEY}`);

    weatherData.then(function(response, status){
      var cityName = document.querySelector(".city");
      cityName.innerText = city;

      var stateName = document.querySelector(".state");
      stateName.innerText = state;

      var temperature = document.querySelector(".temp");
      temperature.innerText = response.main.temp * (9/5) - 459.67;


      // Insert your data into the html! hint: log the api response and see what data is available.
      console.log(response);
    });
   }
});
