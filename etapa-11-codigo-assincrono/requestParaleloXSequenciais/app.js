
//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                   Request Paralelo                                   //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const getPokemons = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtel = fetch('https://pokeapi.co/api/v2/pokemon/7')

  // Recebe um array de primose e quando todas as promises desse array forem resolvidas, ele retorna uma única promise que contem os valores das promises resolvidas. 
  // Se uma das promises que o Promise.all() recebeu for rejeitada,a promise retornada será uma de rejeição que contém a msg e o erro que causou a rejeição. 
  const result = await Promise.all([bulbasaur, charmander, squirtel])

  result.forEach( async response => console.log(await response.json()))
}

getPokemons()
