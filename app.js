// import * as ELEMENT from './elements.js'
import { APP_ID } from './env.js'
import { ELEMENT_SEARCHED_CITY, ELEMENT_SEARCH_BUTTON } from './elements.js'
import { Http } from './http.js'

const searchWeather = () => {
   const cityName = ELEMENT_SEARCHED_CITY.value.trim()
   if (!cityName) return alert('Please enter city name')

   const url =
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&units=metric&appid=' +
      APP_ID
   console.log('url', url)
   Http.fetchData(url)
      .then((response) => console.log('res', response))
      .catch((error) => alert(error))
}

ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather)
