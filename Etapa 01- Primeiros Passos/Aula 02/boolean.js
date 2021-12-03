// Booleans e comparações
// console.log(true, false, "true", "false")


// Métodos podem retornar booleans
const email = "bruno@gmail.com.br"
const includes = email.includes('@')
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('bruno')
// console.log(arrayIncludes)

// Operadores de comparação
const age = 31
// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 35)
// console.log(age > 30)
// console.log(age < 31)
// console.log(age <= 31)
// console.log(age >= 31)


const nome = 'bruno'
// console.log(nome == 'bruno')
// console.log(nome > 'amanda')
// console.log(nome < 'amanda')//Isso acontece pq o JS compara a letra inicial de cada string e verifica sua posição no alfabeto
// console.log(nome > 'Bruno')//O resultado é true porque, para o JS, uma letra minúscla é maior que uma maiúscula
// console.log(nome > 'Amanda')// "b" continua sendo maior mesmo com "A" maiúsculo pois sua posição no alfabeto é maior


//Igual a e diferente de
console.log(age == 31)
console.log(age == '31')
console.log(age != 31)
console.log(age != '31')