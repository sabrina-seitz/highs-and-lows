//Function: Update Icon (current weather)
function updateNowIcon(code) {
  let nowIconElement = document.querySelector("#now-icon");

  if (code === "01d") {
    nowIconElement.setAttribute("class", "fas fa-sun");
  } else if (code === "01n") {
    nowIconElement.setAttribute("class", "fas fa-moon");
  } else if (code === "02d") {
    nowIconElement.setAttribute("class", "fas fa-cloud-sun");
  } else if (code === "02n") {
    nowIconElement.setAttribute("class", "fas fa-cloud-moon");
  } else if (
    code === "03d" ||
    code === "03n" ||
    code === "04d" ||
    code === "04n"
  ) {
    nowIconElement.setAttribute("class", "fas fa-cloud");
  } else if (code === "09d" || code === "09n") {
    nowIconElement.setAttribute("class", "fas fa-cloud-showers-heavy");
  } else if (code === "10d") {
    nowIconElement.setAttribute("class", "fas fa-cloud-sun-rain");
  } else if (code === "10n") {
    nowIconElement.setAttribute("class", "fas fa-cloud-moon-rain");
  } else if (code === "11f" || code === "11n") {
    nowIconElement.setAttribute("class", "fas fa-bolt");
  } else if (code === "13d" || code === "13n") {
    nowIconElement.setAttribute("class", "fas fa-snowflake");
  } else {
    nowIconElement.setAttribute("class", "fas fa-smog");
  }
}

// Function: Show Temp

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;

  celsiusTemperature = response.data.main.temp;

  document.querySelector("#current-temp").innerHTML = Math.round(
    celsiusTemperature
  );

  let tempTodayMin = Math.round(response.data.main.temp_min);
  let tempTodayMax = Math.round(response.data.main.temp_max);
  let tempTodayMinMax = `${tempTodayMin}°/${tempTodayMax}°`;
  document.querySelector("#today-temp").innerHTML = tempTodayMinMax;

  updateNowIcon(response.data.weather[0].icon);

  document
    .querySelector("#now-icon")
    .setAttribute("alt", response.data.weather[0].description);
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
}

// Function: Search city

function searchCity(city) {
  if (city) {
    let apiKey = "e5551b43cbca96dceabb04d6c75c6371";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;

    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  } else {
    alert("Please enter a city");
  }
}

// Function: Date & Time

function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekDay = weekDays[date.getDay()];

  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${weekDay}, ${hours}:${minutes}`;
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
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";

  let apiKey = "e5551b43cbca96dceabb04d6c75c6371";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function getGeolocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

// Date & Time

let now = new Date();
document.querySelector("#date-time").innerHTML = formatDate(now);

// Celsius & Fahrenheit

let celsiusTemperature = null;

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

// Weather API Munich

searchCity("Munich");
