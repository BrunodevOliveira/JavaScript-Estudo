// Código responsável por interagir com a API da AccuEather
//Permite 50 request por dia
const APIKey = 'pHfA7Wr0ZYvQLlPjAyLWJ4x3lGrUACZd'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>  
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => 
  `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`


const fetchData = async endPoint => {
  try {
    const response = await fetch(endPoint)
  
    if(!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    // const [data] = await response.json()
    return await response.json()

  } catch({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = (cityName) => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
  const [cityData] = await getCityData(cityName) 
  const cityWeatherUrl = getWeatherUrl(cityData)

  return await fetchData(cityWeatherUrl)
}

getCityWeather('Rio de Janeiro')
 .then(console.log)