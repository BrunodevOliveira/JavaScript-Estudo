// Código responsável por interagir com a API da AccuEather
//Permite 50 request por dia
const APIKey = 'pHfA7Wr0ZYvQLlPjAyLWJ4x3lGrUACZd'

const getCityUrl = cityName =>  
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  const sityUrl = getCityUrl(cityName)

  return fetchData(sityUrl)
}

const getCityWeather = async cityName => {
  const { Key } = await getCityData(cityName)
  const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

  return fetchData(cityWeatherUrl)

}

const fetchData = async endPoint => {
  try {
    const response = await fetch(endPoint)
  
    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    const [data] = await response.json()
    return data

  } catch({ name, message }) {
    return alert(`${name}: ${message}`)
  }
}

getCityWeather('São Paulo')