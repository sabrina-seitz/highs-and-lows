//Function: Update Icon (current weather)

function swapWeatherIcon(code) {
  if (code === "01d") {
    return "fas fa-sun";
  } else if (code === "01n") {
    return "fas fa-moon";
  } else if (code === "02d") {
    return "fas fa-cloud-sun";
  } else if (code === "02n") {
    return "fas fa-cloud-moon";
  } else if (
    code === "03d" ||
    code === "03n" ||
    code === "04d" ||
    code === "04n"
  ) {
    return "fas fa-cloud";
  } else if (code === "09d" || code === "09n") {
    return "fas fa-cloud-showers-heavy";
  } else if (code === "10d") {
    return "fas fa-cloud-sun-rain";
  } else if (code === "10n") {
    return "fas fa-cloud-moon-rain";
  } else if (code === "11d" || code === "11n") {
    return "fas fa-bolt";
  } else if (code === "13d" || code === "13n") {
    return "fas fa-snowflake";
  } else {
    return "fas fa-smog";
  }
}

//Function: Show Forecast

function showForecastCelsius(event) {
  forecastElement.innerHTML = null;

  for (let index = 1; index < 6; index++) {
    forecast = forecastGlobal[index];
    forecastElement.innerHTML += `
    <div class="col text-center">
      <div class="forecast-temp">${Math.round(forecast.temp.min)}°/${Math.round(
      forecast.temp.max
    )}°</div>
      <i class= "forecast-icon ${swapWeatherIcon(
        forecast.weather[0].icon
      )}"> </i>
      <div class="forecast-day">${formatDay(forecast.dt * 1000).substring(0, 3)}
      </div>
      </div>`;
  }
}

function showForecastFahrenheit(event) {
  forecastElement.innerHTML = null;

  for (let index = 1; index < 6; index++) {
    forecast = forecastGlobal[index];
    forecastElement.innerHTML += `
    <div class="col text-center">
      <div class="forecast-temp">${Math.round(
        (forecast.temp.min * 9) / 5 + 32
      )}°/${Math.round((forecast.temp.max * 9) / 5 + 32)}°</div>
      <i class= "forecast-icon ${swapWeatherIcon(
        forecast.weather[0].icon
      )}"> </i>
      <div class="forecast-day">${formatDay(forecast.dt * 1000).substring(0, 3)}
      </div>
      </div>`;
  }
}

function showForecast(response) {
  forecastGlobal = response.data.daily;

  showForecastCelsius();
}

// Function: Update Song & Description (Player)

function updatePlayer(code) {
  let musicPlayerElement = document.querySelector("#music-player");
  let spotifyLink = "https://open.spotify.com/embed/track/";
  let textPlayerElement = document.querySelector("#text-player");

  if (code === "01d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}4Fe4a65JErIRywwlm2x5ob`
    );
    textPlayerElement.innerHTML =
      "What a beautiful sunny day! Get inspired by this soundtrack for today’s wild adventures:";
  } else if (code === "01n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}3hRV0jL3vUpRrcy398teAU`
    );
    textPlayerElement.innerHTML =
      "What a crystal-clear, cloudless sky! Here's the perfect soundtrack for looking at the stars:";
  } else if (code === "02d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}2k4qxMwA8PmA8OOY5cCSnr`
    );
    textPlayerElement.innerHTML =
      "Yeehaw, there’re only a few clouds in the sky! Listen to the perfect soundtrack for this wonderful day:";
  } else if (code === "02n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}2PQNABElbdO5wXhEWbF6gg`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the clouds hiding the stars! Here's the perfect track for gloomy nights:";
  } else if (code === "03d" || code === "04d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}1fu7I8XhF0Yk4qlwTf2Do1`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the grey sky! Here's the perfect soundtrack for cloudy days:";
  } else if (code === "03n" || code === "04n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}1fu7I8XhF0Yk4qlwTf2Do1`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the clouds! Here's the perfect soundtrack for starless nights:";
  } else if (code === "09d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}7sqOLGaoAUBxPUL5w1mUZv`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the rain! Here's the perfect soundtrack for grey days:";
  } else if (code === "09n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}7sqOLGaoAUBxPUL5w1mUZv`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the rain! Here's the perfect soundtrack for starless nights:";
  } else if (code === "10d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}0ecM7uGyjgJnBliXS2fPP9`
    );
    textPlayerElement.innerHTML =
      "It's raining cats and dogs! Here's the perfect soundtrack for singing in the rain and forgetting about the grey:";
  } else if (code === "10n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}6EarBwcaOb0gj12jqrJk2G`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the rain! Here's the perfect soundtrack for starless nights:";
  } else if (code === "11d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}6L9pR4PhEuTfjE33nTQdgn`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the thunder! Here's the perfect soundtrack for stormy days:";
  } else if (code === "11n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}6L9pR4PhEuTfjE33nTQdgn`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the thunder! Here's the perfect soundtrack for scary nights:";
  } else if (code === "13d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}7Gogd7R68UpTsQle3bqYv5`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the cold! Here's a heartwarming track for snowy days:";
  } else if (code === "13n") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}7Gogd7R68UpTsQle3bqYv5`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the cold! Here's a heartwarming track for snowy nights:";
  } else if (code === "50d") {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}7Gogd7R68UpTsQle3bqYv5`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the mist! Here's the perfect soundtrack for gloomy days:";
  } else {
    musicPlayerElement.setAttribute(
      "src",
      `${spotifyLink}6oAxXy1ShGGk4XBXGKuPmB`
    );
    textPlayerElement.innerHTML =
      "Turn up the music and forget about the mist! Here's the perfect soundtrack for starless nights:";
  }
}

// Function: Date & Time

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${formatDay(timestamp)} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return day;
}

// Function: Show Temp

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;

  celsiusTemperature = response.data.main.temp;

  document.querySelector("#current-temp").innerHTML = Math.round(
    celsiusTemperature
  );

  celsiusTempTodayMin = Math.round(response.data.main.temp_min);
  celsiusTempTodayMax = Math.round(response.data.main.temp_max);
  let celsiusTempTodayMinMax = `${celsiusTempTodayMin}°/${celsiusTempTodayMax}°`;
  document.querySelector("#today-temp").innerHTML = celsiusTempTodayMinMax;

  let nowIconElement = document.querySelector("#now-icon");

  let icon = swapWeatherIcon(response.data.weather[0].icon);
  nowIconElement.setAttribute("class", `${icon}`);
  updatePlayer(response.data.weather[0].icon);

  nowIconElement.setAttribute("alt", response.data.weather[0].description);

  latitude = response.data.coord.lat;
  longitude = response.data.coord.lon;

  searchLocationForecast();
}

// Function: Celsius & Fahrenheit

function convertToFahrenheit(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  celsiusLink.classList.add("inactive");
  fahrenheitLink.classList.add("active");
  fahrenheitLink.classList.remove("inactive");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  document.querySelector("#current-temp").innerHTML = Math.round(
    fahrenheitTemperature
  );
  let fahrenheitTempTodayMin = Math.round((celsiusTempTodayMin * 9) / 5 + 32);
  let fahrenheitTempTodayMax = Math.round((celsiusTempTodayMax * 9) / 5 + 32);
  let fahrenheitTempTodayMinMax = `${fahrenheitTempTodayMin}°/${fahrenheitTempTodayMax}°`;
  document.querySelector("#today-temp").innerHTML = fahrenheitTempTodayMinMax;

  showForecastFahrenheit();
}

function convertToCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  celsiusLink.classList.remove("inactive");
  fahrenheitLink.classList.remove("active");
  fahrenheitLink.classList.add("inactive");
  document.querySelector("#current-temp").innerHTML = Math.round(
    celsiusTemperature
  );
  document.querySelector(
    "#today-temp"
  ).innerHTML = `${celsiusTempTodayMin}°/${celsiusTempTodayMax}°`;

  showForecastCelsius();
}

// Function: Search city

function searchCity(city) {
  if (city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;

    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  } else {
    alert("Please enter a city");
  }
}

// Function: handleSubmit

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  city = city.trim();
  searchCity(city);
}

// Function: Geolocation

function searchLocation(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}`;
  searchLocationForecast();
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function searchLocationForecast(position) {
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude=hourly,current,minutely,hourly`;
  axios.get(`${apiUrlForecast}&appid=${apiKey}`).then(showForecast);
}

function getGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

// Date & Time

let now = new Date();
document.querySelector("#date").innerHTML = formatDate(now);

// Celsius & Fahrenheit

let celsiusTemperature = null;
let celsiusTempTodayMin = null;
let celsiusTempTodayMax = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

// Search

document.querySelector("#search-form").addEventListener("submit", handleSubmit);

// Geolocation

document
  .querySelector("#locate-button")
  .addEventListener("click", getGeolocation);

// Global variables

let latitude = null;
let longitude = null;
let units = "metric";
let apiKey = "e5551b43cbca96dceabb04d6c75c6371";
let forecastGlobal = null;
let forecastElement = document.querySelector("#forecast");

// Weather API Munich

searchCity("Munich");
