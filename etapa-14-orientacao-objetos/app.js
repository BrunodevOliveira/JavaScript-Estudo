class User {
  constructor (name, email) {
    this.name = name,
    this.email = email
    this.points = 0 //todo objeto que a classe criar terá uma propriedade chamada points que armazena 0
  }

  login() {
    console.log(`${this.name} logou na aplicação`)
    return this
  }

  logout() {
    return `${this.name} deslogou da aplicação`
  }

  addPoint() {
    this.points++
    return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
  }
}

const user = new User('Bruno', 'brunodevoliveira@gmail.com') 
const user2 = new User('Barbara', 'bm.ufrj@gmail.com')

user.login().addPoint()

console.log(user) 