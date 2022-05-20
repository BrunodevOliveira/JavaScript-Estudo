const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const newArr = [0 ,...arr1, 3.5, ...arr2, 7]

console.log(newArr) //[0, 1, 2, 3, 3.5, 4, 5, 6, 7]

const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop4: 4 }
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3) //{prop1: 1, prop2: 2, prop3: 3, prop4: 4}


// Ao invés de utilizar o método split para converter a string em um array, posso utilizar o spread operator

const getReversedString = string => [...string].reverse().join('')

console.log(getReversedString('123')) //321

//quero descobrir qual desses números é o maior e menor
//Math.min e MAth.max => são funções variádicas, ou seja, podem receber uma quantidade infinita de argumentos(dvem ser números)
const numbers = [7,3,5, 3.1, 9]


console.log(Math.min(...numbers))// 3
console.log(Math.max(...numbers))// 9