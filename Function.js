let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");


let getWeather = () => {
  let cityValue = cityRef.value;

  if (cityValue.length == 0) {
    result.innerHTML = `Bhopal`;
  }

  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())

      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        ${data.weather[0].main}<br><br>
       ${data.weather[0].description}<br><br>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"><br><br>
        ${data.main.temp} &#176; <br><br>
       ${data.main.temp_min}&#176; <br><br>
           ${data.main.temp_max}&#176;<br><br>
          
        `;
      })

      .catch(() => {
        result.innerHTML = `City not found Surch Again Other City`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);