// import * as ELEMENT from './elements.js'
import { APP_ID } from './env.js'
import {
   ELEMENT_LOADING_TEXT,
   ELEMENT_SEARCHED_CITY,
   ELEMENT_SEARCH_BUTTON,
   ELEMENT_WEATHER_BOX,
   ELEMENT_WEATHER_CITY,
   ELEMENT_WEATHER_DESCRIPTION,
   ELEMENT_WEATHER_TEMPERATURE,
} from './elements.js'
import { Http } from './http.js'
import { WeatherData, weatherProxyHander } from './weatherData.js'

const updatedWeather = (weatherData) => {
   ELEMENT_LOADING_TEXT.style.display = 'none'
   ELEMENT_WEATHER_BOX.style.display = 'block'

   ELEMENT_WEATHER_CITY.textContent = weatherData.cityName
   ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description
   ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature
}

const searchWeather = () => {
   const cityName = ELEMENT_SEARCHED_CITY.value.trim()
   if (!cityName) return alert('Please enter city name')

   const url =
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&units=metric&appid=' +
      APP_ID

   ELEMENT_LOADING_TEXT.style.display = 'block'
   ELEMENT_WEATHER_BOX.style.display = 'none'

   Http.fetchData(url)
      .then((response) => {
         const weatherData = new WeatherData(
            cityName,
            response.weather[0].description.toUpperCase()
         )
         const weatherProxy = new Proxy(weatherData, weatherProxyHander)
         weatherProxy.temperature = response.main.temp

         updatedWeather(weatherData)
      })
      .catch((error) => alert(error))
}

ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather)
