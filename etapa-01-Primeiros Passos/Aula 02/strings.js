//métodos comuns e String
const email = 'laracroft@gmail.com.br'

//Obtem o index da última ocorrência do carácter  que você passar como argumento.
const lastIndexOfA = email.lastIndexOf('a')

//Obtem uma parte da string(a partir de onde pego, a partir de onde descarto).
const emailSlice = email.slice(0, 9)

// Substitui um caractere de uma string por outro(substituído, substituto).
const emailReplace = email.replace('laracroft', 'Tomb_Raider');

// console.log(lastIndexOfA)
// console.log(emailSlice)
// console.log(emailReplace)

//Template Strings/Literals
const postTitle = 'É bolacha ou biscoito'
const postAuthor = 'Bruno oliveira'
const postComments = 15
     //Toda vez que precisamos utilizar aspas dentro de uma string, devemos abrir e fechar a string com aspas simples ou duplas e as aspas internas ser a que não foi utilizada pela string. Ou posso colocar uma contra barra \ antes das aspas.
const postMessage = `O post ${postTitle}, do ${postAuthor}, tem ${postComments} comentários.`
// console.log(postMessage)

//Criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este  post tem ${postComments} comentários </span>
`
console.log(html)