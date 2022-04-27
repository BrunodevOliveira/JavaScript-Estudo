//Inteiros e decimais
const radius = 10
const pi = 3.14

// console.log(radius, pi)

//Operadores aritméticos
const area = pi * radius ** 2 

//Ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2

    // console.log(crazyOperation)
    // 1 parênteses
    // 2 expoentes ou raízes
    // 3 multiplicação e divisão
    // 4 adição e subtração

// Operadores de incremento e decremento
let postLikes = 10

postLikes++
postLikes--

    // console.log(postLikes)

//Operadores adition, subtraction, multiplication e division assignment
postLikes*= 10
    // console.log(postLikes) 

// NaN - not a number
console.log(7 / 'oi')
    //Quando tentamos fazer alguma operação que não resulta e um numero

//Concatenação de string com número
    //O resultado e uma concatenação entre número e string gera uma string
const likesMessage = 'O post tem ' + postLikes + ' likes.'
console.log(likesMessage)
