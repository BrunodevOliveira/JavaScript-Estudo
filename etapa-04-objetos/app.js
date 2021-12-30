///////////////////////////Criando objetos literias///////////////////////////
let user = {
    name: 'João',
    age: 31,
    email:'joaocardoso@gmail.com',
    city:'Rio de Janeiro',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
}
/*
    console.log(user.email)
    // user.age = 32
    console.log(user.age)
    console.log(user.blogPosts[1])

    //Uma das vantagens de utilizar a notação de colchetes é poder passar uma variável que armazena a propriedade
    const cidade = 'city'
    console.log(user[cidade])
*/

////////////////////Adicionando métodos ao Objeto User/////////////////////////////
let user1 = {
    name: 'Paulo',
    age: 41,
    email:'Paulogomes@gmail.com',
    city:'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function() {
        console.log('Usuário logado')
    },
    logout: () => {
        console.log('Usuário deslogado')
    }
}
// user1.login()
// user1.logout()


////////////////////Variáveis e Escopo de bloco/////////////////////
const age = 31

if(true) {
    const age = 41
    // console.log(`dentro do 1° bloco de código: ${age}`)
    
    if(true) {
        const age = 51
        var test = 'oi'
        // console.log(`dentro do 2° bloco de código: ${age}`)
    }
}
// console.log(`fora do bloco de código: ${age} ${test}`)

////////////////////////////Palavra-chave This///////////////////////////
let user2 = {
    name: 'Camilo',
    age: 21,
    email:'Camilogomes@gmail.com',
    city:'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login () {
        console.log('Usuário logado')
    },
    logout () {
        console.log('Usuário deslogado')
    },
    logBlogPosts () {
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPosts.forEach(post => console.log(post))
    }
}
// user2.logBlogPosts()

////////////////////////////Objetos em Array///////////////////////////

const posts = [
    {title:'Empadão de frango', likes: 30},
    {title:'4 receitas de purê de batata', likes: 40}
]

let user3 = {
    name: 'Camilo',
    age: 21,
    email:'Camilogomes@gmail.com',
    city:'São Paulo',
    blogPosts: [
        {title:'Empadão de frango', likes: 30},
        {title:'4 receitas de purê de batata', likes: 40}
    ],
    login () {
        console.log('Usuário logado')
    },
    logout () {
        console.log('Usuário deslogado')
    },
    logBlogPosts () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post.title, post.likes)
        })
    }
}
// user3.logBlogPosts()

////////////////////////////Objeto Math///////////////////////////
console.log(Math)
console.log(Math.PI)
console.log(Math.E) //bASE DOS LOGARITIMOS NATURAIS QUE É APROXIMADAMENTE 2718

const area = 7.7

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

//números aleatórios
const randomNumber = Math.random()

console.log(Math.round(randomNumber * 100))//número aleatório de 0 a 100

////////////////////////////Tipos de Referência vs Tipos Primitivos///////////////////////////

let scoreOne = 50
let scoreTwo = scoreOne
console.log(`socreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`socreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)


//Valores de referência
let userOne = {name: 'Bruno', age: 29}
let userTwo = userOne

console.log(userOne, userTwo)

userTwo.age = 32

console.log(userOne, userTwo)
