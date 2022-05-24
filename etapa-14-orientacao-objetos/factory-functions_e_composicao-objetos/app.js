class User {
  #counter = 0 //Propriedade privada

  constructor(name, email) {
    this.name = name
    this.email = email
  }

  incrementCounter () {
    return ++this.#counter
  }
}

// ^ Objeto criado por factory functions
const createUser = (name, email) => {
  let counter = 0 //prorpiedade privada - não pode ser acessada diretamente por algum código de fora da função

  return {
    name,
    email,
    incrementCounter: () => ++counter
  }
}

const user = new User ('Bruno', 'bruno@gmail.com')
const user2 = createUser('Bruno', 'bruno@gmail.com')
const user3 = createUser('Bruno 2', 'bruno2@gmail.com')

console.log(user, user2)

console.log(user.incrementCounter())
console.log(user.incrementCounter())
console.log(user2.incrementCounter())
console.log(user2.incrementCounter())
console.log(user3.incrementCounter())
console.log(user3.incrementCounter() === user2.incrementCounter())

/**
 * Clousures
 * é a combinação de uma função com o seu escopo léxico
 * escopo léxico é tudo que envolve a declaração da arrow function
 */