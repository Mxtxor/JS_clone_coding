const API_KEY = '7d80db251d01007470b13589c1d565fb';

function onGeoSuccess(position){
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("div#weather span:first-child");
      const weather = document.querySelector("div#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoFail(){
  alert("sorry, no weather info for you haha!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);