const getUsers = async () => {
  // o fatch fará o request e enquanto a resposta não chegar nenhum código abaixo será executado até que a resposta(promise) seja obtida e armazenada na var response. Essa resposta é uma promise que NÃO CONTEM OS DADOS DA REQUISIÇÃO.
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  //preciso utilizar await aqui pois response é uma promise com o array de objetos e quando essa promise for resolvida, o await irá atribuir o retorno a var users
  const users = await response.json()
  return users 
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users) 
}

console.log(1)
console.log(2)

logUsers()

console.log(3)
console.log(4)
