//create weather object with icon class, Spotify song Id & track description

let customWeatherData = {
  "01d": {
    // clear sky, day
    iconClass: "fa-sun",
    spotifyId: "4Fe4a65JErIRywwlm2x5ob",
    trackDescription:
      "What a beautiful sunny day! Get inspired by this soundtrack for today’s wild adventures:",
  },
  "01n": {
    // clear sky, night
    iconClass: "fa-moon",
    spotifyId: "3hRV0jL3vUpRrcy398teAU",
    trackDescription:
      "What a crystal-clear, cloudless sky! Here's the perfect soundtrack for looking at the stars:",
  },
  "02d": {
    // few clouds, day
    iconClass: "fa-cloud-sun",
    spotifyId: "2k4qxMwA8PmA8OOY5cCSnr",
    trackDescription:
      "Yeehaw, there’re only a few clouds in the sky! Listen to the perfect soundtrack for this wonderful day:",
  },
  "02n": {
    // few clouds, night
    iconClass: "fa-cloud-moon",
    spotifyId: "2PQNABElbdO5wXhEWbF6gg",
    trackDescription:
      "Turn up the music and forget about the clouds hiding the stars! Here's the perfect track for gloomy nights:",
  },
  "03d": {
    // scattered clouds, day
    iconClass: "fa-cloud",
    spotifyId: "1fu7I8XhF0Yk4qlwTf2Do1",
    trackDescription:
      "Turn up the music and forget about the grey sky! Here's the perfect soundtrack for cloudy days:",
  },
  "03n": {
    // scattered clouds, night
    iconClass: "fa-cloud",
    spotifyId: "6HPZo9krwjbhMGKbqVkkDQ",
    trackDescription:
      "Turn up the music and forget about the clouds! Here's the perfect soundtrack for starless nights:",
  },
  "04d": {
    // broken clouds, day
    iconClass: "fa-cloud",
    spotifyId: "2jgO1U79PZt7giXGV1dbd7",
    trackDescription:
      "Turn up the music and forget about the grey sky! Here's the perfect soundtrack for cloudy days:",
  },
  "04n": {
    // broken clouds, night
    iconClass: "fa-cloud",
    spotifyId: "0cAo4yYl8sVoabZs27gwN2",
    trackDescription:
      "Turn up the music and forget about the clouds! Here's the perfect soundtrack for starless nights:",
  },
  "09d": {
    // shower rain, day
    iconClass: "fa-cloud-showers-heavy",
    spotifyId: "2YG3fktEoHQAUlXP9VtmRN",
    trackDescription:
      "Turn up the music and forget about the rain! Here's the perfect soundtrack for grey days:",
  },
  "09n": {
    // shower rain, night
    iconClass: "fa-cloud-showers-heavy",
    spotifyId: "7sqOLGaoAUBxPUL5w1mUZv",
    trackDescription:
      "Turn up the music and forget about the rain! Here's the perfect soundtrack for starless nights:",
  },
  "10d": {
    // rain, day
    iconClass: "fa-cloud-sun-rain",
    spotifyId: "0ecM7uGyjgJnBliXS2fPP9",
    trackDescription:
      "It's raining cats and dogs! Here's the perfect soundtrack for singing in the rain and forgetting about the grey:",
  },
  "10n": {
    // rain, night
    iconClass: "fa-cloud-moon-rain",
    spotifyId: "6EarBwcaOb0gj12jqrJk2G",
    trackDescription:
      "Turn up the music and forget about the rain! Here's the perfect soundtrack for starless nights:",
  },
  "11d": {
    // thunderstorm, day
    iconClass: "fa-bolt",
    spotifyId: "6L9pR4PhEuTfjE33nTQdgn",
    trackDescription:
      "Turn up the music and drown out the thunder! Here's the perfect soundtrack for stormy days:",
  },
  "11n": {
    // thunderstorm, night
    iconClass: "fa-bolt",
    spotifyId: "0GQeRhpKjPwEnOwskqtveD",
    trackDescription:
      "Turn up the music and drown out the thunder! Here's the perfect soundtrack for scary nights:",
  },
  "13d": {
    // snow, day
    iconClass: "fa-snowflake",
    spotifyId: "7Gogd7R68UpTsQle3bqYv5",
    trackDescription:
      "Turn up the music and forget about the cold! Here's a heartwarming track for snowy days:",
  },
  "13n": {
    // snow, night
    iconClass: "fa-snowflake",
    spotifyId: "31wS6gEaj89kOZhDw0xMNw",
    trackDescription:
      "Turn up the music and forget about the cold! Here's a heartwarming track for snowy nights:",
  },
  "50d": {
    // mist, day
    iconClass: "fa-smog",
    spotifyId: "6oAxXy1ShGGk4XBXGKuPmB",
    trackDescription:
      "Turn up the music and forget about the mist! Here's the perfect soundtrack for gloomy days:",
  },
  "50n": {
    // mist, night
    iconClass: "fa-smog",
    spotifyId: "5XXsoXGSO43Nt2pZ4JjWzF",
    trackDescription:
      "Turn up the music and forget about the mist! Here's the perfect soundtrack for starless nights:",
  },
  default: {
    // if we get an unusual code
    iconClass: "fa-question",
    spotifyId: "4CbV2ZD2OsnRGGDWibv0Wn",
    trackDescription:
      "You seem to have weird weather! Get weirded out some more with this track:",
  },
};

// get the class of the weather icon, needed for dark mode
function getWeatherIconClass(code) {
  if (!(code in customWeatherData)) {
    code = "default";
  }
  return customWeatherData[code].iconClass;
}

// degree conversion from celcius to fahrenheit
function getFahrenheit(temp) {
  return Math.round((temp * 9) / 5 + 32);
}

function getMinMaxForecastTemps(unit, minTemp, maxTemp) {
  if (unit === "fahrenheit") {
    return `${getFahrenheit(minTemp)}°/${getFahrenheit(maxTemp)}°`;
  } else {
    return `${Math.round(minTemp)}°/${Math.round(maxTemp)}°`;
  }
}

// set 5 forecast days, with temperatures, weather icon and weekday
function setForecasts(unit) {
  forecastElement.innerHTML = null;

  for (let index = 1; index <= 5; index++) {
    forecast = forecastGlobal[index];
    forecastElement.innerHTML += `
    <div class="col text-center">
      <div class="forecast-temp">${getMinMaxForecastTemps(
        unit,
        forecast.temp.min,
        forecast.temp.max
      )}</div>
      <i class="forecast-icon fas ${getWeatherIconClass(
        forecast.weather[0].icon
      )}"> </i>
      <div class="forecast-day">${formatDay(forecast.dt * 1000).substring(0, 3)}
      </div>
      </div>`;
  }
}

function convertToFahrenheit(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  celsiusLink.classList.add("inactive");
  fahrenheitLink.classList.add("active");
  fahrenheitLink.classList.remove("inactive");
  document.querySelector("#current-temp").innerHTML = getFahrenheit(
    celsiusTemperature
  );
  let fahrenheitTempTodayMinMax = `${getFahrenheit(
    celsiusTempTodayMin
  )}°/${getFahrenheit(celsiusTempTodayMax)}°`;
  document.querySelector("#today-temp").innerHTML = fahrenheitTempTodayMinMax;

  setForecasts("fahrenheit");
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

  setForecasts("celsius");
}

function showForecast(response) {
  forecastGlobal = response.data.daily;
  setForecasts("celsius");
}

// update song & description in the Spotify player widget
function updatePlayer(code) {
  let musicPlayerElement = document.querySelector("#music-player");
  let textPlayerElement = document.querySelector("#text-player");

  if (!(code in customWeatherData)) {
    code = "default";
  }
  musicPlayerElement.setAttribute(
    "src",
    `https://open.spotify.com/embed/track/${customWeatherData[code].spotifyId}`
  );
  textPlayerElement.innerHTML = customWeatherData[code].trackDescription;
}

// get date & time
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

function showToday(response) {
  document.querySelector("#city").innerHTML = cityName;
  celsiusTemperature = response.data.current.temp;

  document.querySelector("#current-temp").innerHTML = Math.round(
    celsiusTemperature
  );

  celsiusTempTodayMin = Math.round(response.data.daily[0].temp.min);
  celsiusTempTodayMax = Math.round(response.data.daily[0].temp.max);
  let celsiusTempTodayMinMax = `${celsiusTempTodayMin}°/${celsiusTempTodayMax}°`;
  document.querySelector("#today-temp").innerHTML = celsiusTempTodayMinMax;

  let nowIconElement = document.querySelector("#now-icon");

  let iconClass = getWeatherIconClass(response.data.current.weather[0].icon);
  nowIconElement.setAttribute("class", `fas ${iconClass}`);
  updatePlayer(response.data.current.weather[0].icon);

  nowIconElement.setAttribute(
    "alt",
    response.data.current.weather[0].description
  );

  return response;
}

function getLocationInfo(response) {
  cityName = response.data.name;
  latitude = response.data.coord.lat;
  longitude = response.data.coord.lon;
  return response;
}

// process input from form
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  city = city.trim();
  updateFromSearch(city);
}

function getWeatherData() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude=minutely,hourly`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showToday).then(showForecast);
}

function updateFromGeolocation(position) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units}`;
  axios
    .get(`${apiUrl}&appid=${apiKey}`)
    .then(getLocationInfo)
    .then(getWeatherData);
}

// when a user clicks the geolocation button (compass)
function getGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(updateFromGeolocation);
}

// app start & user search
function updateFromSearch(city) {
  if (city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
    axios
      .get(`${apiUrl}&appid=${apiKey}`)
      .then(getLocationInfo)
      .then(getWeatherData);
  } else {
    alert("Please enter a city");
  }
}

// date & time
let now = new Date();
document.querySelector("#date").innerHTML = formatDate(now);

// celsius & fahrenheit
let celsiusTemperature = null;
let celsiusTempTodayMin = null;
let celsiusTempTodayMax = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

// search event listener
document.querySelector("#search-form").addEventListener("submit", handleSubmit);

// get geolocation
document
  .querySelector("#locate-button")
  .addEventListener("click", getGeolocation);

// global variables
let cityName = null;
let latitude = null;
let longitude = null;
let units = "metric";
let apiKey = "e5551b43cbca96dceabb04d6c75c6371";
let forecastGlobal = null;
let forecastElement = document.querySelector("#forecast");

// city for app start
updateFromSearch("Munich");
