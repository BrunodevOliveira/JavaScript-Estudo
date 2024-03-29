/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

const getPokemon = (porkemon, callback) => {
  const request = new XMLHttpRequest()
  
  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if(isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, `Pokémon obtido: ${data.types[0].type.name}`)
      return
    }
  
    if(isRequestNotOk) {
      callback('Não foi possível obter o Pokémon', null)
    }
  })
  
  request.open('GET', `https://pokeapi.co/api/v2/pokemon/${porkemon}`)
  request.send()
  
}

// getPokemon('bulbasaur', (error, data) => {
//   console.log(data || error)
//   getPokemon('charmander', (error, data) => {
//     console.log(data || error)
//     getPokemon('squirtlez', (error, data) => {
//       console.log(data || error)
//     })
//   })
// })

/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
  
  Reforço: este tipo de exercício será frequente em etapas mais avançadas do 
  curso, onde falaremos sobre TDD. Vá se aquecendo =)
*/

const map = (array, func) => {
  let newArray = []

  const addNewItemToNewArray = item => {
    const newItem = func(item)
    newArray.push(newItem)
  }

  array.forEach(addNewItemToNewArray)
  return newArray
}

// console.log(map([1,2,3], number => number * 2))
// console.log(map([4,5,6], number => number * 10))

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
  name: 'Roger',
  getName () {
    return this.name
  } ,
  getNameArrow: () => person.name //preciso referenciar o objetoperson para que consiga acessar as suas propriedades sem utilizar o this
}

// console.log(person.getName())

/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x'
const getX = () => {
  const x= 'y'
  return x
}
// console.log(x, getX())

/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/

const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`

console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
const convertToHex = color => {
  const colors = [
    {
      colorName: 'red',
      hex: '#E04556'
    },
    {
      colorName: 'blue',
      hex: '#1A1E3C'
    },
    {
      colorName: 'green',
      hex: '#33C122'
    },
    {
      colorName: 'yelow',
      hex: '#FADD21'
    },
    {
      colorName: 'gray',
      hex: '#181A1B'
    }
  ]
  const colorHex = colors.filter(({ colorName }) => colorName === color)

  if(colorHex.length) {
    const  {colorName, hex} =  colorHex[0]
    return`O hexadecimal para a cor ${colorName} é ${hex}`
  }

  return `Não temos o equivalente hexadecimal para ${color}`
}

const colors = ['red', 'blue', 'green', 'yelow', 'gray', 'black', 'white', 'pink']
// colors.forEach(color => console.log(convertToHex(color)))


/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
  { id: 5 , name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9 , name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]
const agesFrequency = people.reduce((acc, person) => {
  acc[person.age] = acc[person.age] + 1 || 1
  return acc
}, {})

console.log(agesFrequency) //{18: 3, 19: 2, 20: 1}