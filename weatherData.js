export class WeatherData {
   constructor(cityName, description) {
      this.cityName = cityName
      this.description = description
      this.temperature = ''
   }
}

export const weatherProxyHander = {
   get: (target, property) => {
      return Reflect.get(target, property)
   },
   set: (target, property, value) => {
      const valueInFer = (value * 1.8 + 32).toFixed(2) + 'F'
      return Reflect.set(target, property, valueInFer)
   },
}
