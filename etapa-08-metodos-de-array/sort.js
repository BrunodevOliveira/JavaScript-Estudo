//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                     método sort()                                     //
//                                                                                      //
//--------------------------------------------------------------------------------------//

// Ordenando strings
const names = ['Christian', 'Alfredo', 'Edson']

names.sort() //['Alfredo', 'Christian', 'Edson']


// ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

// scores.sort() //Dessa forma o sort irá ordenar os números baseado no primeiro algarismo de cada item

scores.sort((score1, score2) => score2 - score1) //[70, 50, 45, 35, 20, 10, 5]


// Ordenando Objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => item2.score - item1.score)
// console.log(theBigFamily)

// * Forma verbosa de escrever a função de comparação:
// theBigFamily.sort((item1, item2) => {
//   if(item1.score > item2.score) {
//     return -1
//   } else if(item2.score > item1.score) {
//     return 1
//   }

//   return 0
// })