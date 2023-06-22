const apiKey = "70c9f08fc22e2888747f508ed56d042a";
const weatherDataEl = document.querySelector("#weather-data");
const cityInputEl = document.querySelector("#city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
  
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

    if(!response.ok){
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    console.log(data)
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Temperature max: ${data.main.temp_max}°C`,
      `Temperature min: ${data.main.temp_min}°C`,
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed}m/s`,
      `Pressure : ${data.main.pressure}`
      
    ]

    weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details.map((details) => `<div class="mx-auto w-25 me-3 mb-1 pe-5 ps-5 rounded details-items">${details}</div>`).join("");
  } catch (err) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent = "An error happened, please try again later.";
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}