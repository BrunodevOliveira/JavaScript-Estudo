// Código responsável por interagir com a API da AccuEather
//Permite 50 request por dia
const APIKey = 'pHfA7Wr0ZYvQLlPjAyLWJ4x3lGrUACZd'

const getCityUrl = cityName =>  
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const sityUrl = getCityUrl(cityName)
    const response = await fetch(sityUrl)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    const [cityData] = await response.json()
    
    return cityData

  } catch({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityWeather = async cityName => {
  try {
    const { Key } = await getCityData(cityName)
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
    const response = await fetch(cityWeatherUrl)

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    const [cityWeather] = await response.json()
    console.log(cityWeather)
    return cityWeather

  } catch({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

getCityWeather('São Paulo')