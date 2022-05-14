// fetch('https://jsonplaceholder.typicode.com/users') 
//  .then(response => {
//   console.log('Response', response) 
//   return response.json()
//  })
//  .then(users => console.log(users))
//  .catch(error => console.log(error)) 
 
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users') 
  const users = await response.json() //preciso utilizar await aqui pois response é uma promise com o array de objetos e quando essa promise for resolvida, o await irá atribuir o retorno a var users
  return users 
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users) 
}

console.log(1)
console.log(2)

logUsers() //Promise {<pending>}

console.log(3)
console.log(4)
