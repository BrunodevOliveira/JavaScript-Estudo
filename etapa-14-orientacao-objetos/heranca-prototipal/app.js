
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

TeacherAssistant.prototype = Object.create(Student.prototype)

function TeacherAssistant (name, email, scheduledWeekPosts) {
  Student.call(this, name, email)
  this.scheduledWeekPosts = scheduledWeekPosts
}

TeacherAssistant.prototype.giveBadge = function giveBadge ({ name }) {
  return `${this.name} deu uma medalha para ${name}`
}

// const grabrielFalho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brunogomes = new Student('Bruno Gomes', 'brunogomes@rogermelo.com.br')

const arthursouza = new TeacherAssistant('Arthur Souza', 'arthursouza@rogermelo.com.br', false)

console.log(brunogomes, arthursouza)
console.log(arthursouza.giveBadge(brunogomes))