//Function declaration --> Nomeio a função 
// sayHi()
function sayHi () {
    console.log('oi')
}

//Function expression --> atribuo a função à uma variável, o nome dessa função será o nome da variável
const showFood = function () {
    console.log('pizza')
}
// showFood()

//Retornando valores e exercícios
const double = function (number) {
    const doubleResult = number * 2
    return doubleResult
}

double(3)

// console.log(doubleResult) // Resulta em erro pois essa constante so existe dentro do escopo da função

const result = double(3) //Para obter o valor dessa const fora do escopo da função precisamos utilizar o RETURN. Como a função está retornando um valor, a expressão que utilizamos para chamar a função resulta no valor que a função retornou, ou seja, double(3) agora armazena o valor de return.

// Arrow Functions
const double = (number) => {
    return number * 2
}

//forEach e Callbacks


