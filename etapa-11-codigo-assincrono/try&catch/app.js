const introdutionTryCatch = () => {
  try {
    console.log(oi) 
    //Se o código dentro do try lançar algum erro, esse erro é passado como parâmetro do catch
    
  } catch (error) {
    if(error.name === 'ReferenceError' &&  error.message === 'oi is not defined') {
      const oi = 'const oi criada'
      console.log(oi)
    }
    //Em Js todo objeto de erro tem as propriedades name e message que armazenam o nome e a mensagem de erro
  }
  console.log('oi')
}

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!response.ok) {
      throw new Error('Não foi possível obter os dados') 
      /**
       * Lança um objeto de erro.
       *^ - Todo código que vier a baixo da linha do lançamento de erro vai ser ignorado, 
       *    o obj de erro que o throw lançou é recebido como parâmetro do catch e o bloco do catch é executado.
       *~ - A única semelhança con o "return" é que o código abaixo é ignorado, THROW NÃO RETORNA NADA 
       * Sempre que lançamos um erro no código, precisamos ter um catch para tratar esse erro
      */
    }

    return response.json()
  } catch(error) {
    console.log(error.message)
  }

}


const logUsers = async () => {
  const users = await getUsers()
  console.log(users) 
}

logUsers()