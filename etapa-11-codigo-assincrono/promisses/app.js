const getPokemon = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOK = request.readyState === 4 && request.status === 200
    const isRequesyNotOk = request.readyState === 4

    if(isRequestOK) {
      const data = JSON.parse(request.responseText)

      resolve(data)
    }

    if(isRequesyNotOk) {
      reject('Não foi possível obter os dados')
    }
  })

  request.open('GET', url)
  request.send()

})

getPokemon('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(pikachu => {
    console.log(pikachu)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander =>{
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(console.log) //Exibe os dados do squirtle
  .catch(error => console.log(error)) 
  //Não preciso escrever um para cada then que implemento se um erro for detectado para o encadeamento dos then

