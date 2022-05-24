
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
    
const grabrielFalho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brunogomes = new Student('Bruno Gomes', 'brunogomes@rogermelo.com.br')

