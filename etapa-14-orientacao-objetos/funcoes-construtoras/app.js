// class Student {
//   constructor(name, email) {
//     this.name = name
//     this.email = email
//   }

//   coment () {
//     return `${this.name} comentou`
//   }

//   static formatToDatabase (aString) {
//     return aString.toUpperCase().replaceAll(' ', '_')
//   }
// }

function Student (name, email) {
  this.name = name
  this.email = email
}
  
Student.prototype.login = function login () {
  return `${this.name} fez login`
}

Student.prototype.coment = function coment() {
  return `${this.name} comentou`
}

//Método Estático
Student.formatToDatabase = function formatToDatabase (aString) {
  return aString.toUpperCase().replaceAll(' ', '_')
}
    
const grabrielFalho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brunogomes = new Student('Bruno Gomes', 'brunogomes@rogermelo.com.br')

console.log(grabrielFalho, brunogomes)
console.log(grabrielFalho.coment === brunogomes.coment) //true
console.log(Student.formatToDatabase('String para banco de dados')) //STRING_PARA_BANCO_DE_DADOS
console.dir(Student.formatToDatabase.name)