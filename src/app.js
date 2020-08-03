// Show Temp

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );

  let tempTodayMin = Math.round(response.data.main.temp_min);
  let tempTodayMax = Math.round(response.data.main.temp_max);
  let tempTodayMinMax = `${tempTodayMin}°/${tempTodayMax}°`;
  document.querySelector("#today-temp").innerHTML = tempTodayMinMax;
}

// Celsius & Fahrenheit

function convertToCelsius(event) {
  document.querySelector("#current-temp").innerHTML = 23;
}

function convertToFahrenheit(event) {
  document.querySelector("#current-temp").innerHTML = 73;
}

// Search city

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

// Functions: Date & Time

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

// Functions: handleSubmit

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  city = city.trim();
  searchCity(city);
}

// Functions: Geolocation

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

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

// Search

document.querySelector("#search-form").addEventListener("submit", handleSubmit);

// Geolocation

document
  .querySelector("#locate-button")
  .addEventListener("click", getGeolocation);

// Weather API Munich

searchCity("Munich");
