const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, d: 6 },
]

localStorage.setItem('myArray', JSON.stringify(myArray))

const JSONFromLocalStorage = localStorage.getItem('myArray') //Recebe o JSON armazenado no localStorage
const myConvertdArray = JSON.parse(JSONFromLocalStorage) //método que recebe um JSON como argumento e retorna esse JSON parseado em obj Javascript

console.log( typeof myConvertdArray, typeof JSONFromLocalStorage) // Object, String
