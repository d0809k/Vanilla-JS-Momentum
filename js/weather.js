const API_KEY = "8875b14d534844b506cbf8300bfe6607";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}도`;
    });
}
function oneGeoError() {
  alert("Can't find you. No wether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, oneGeoError);
