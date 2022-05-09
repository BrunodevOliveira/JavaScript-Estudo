const past = new Date('May 1 2021 7:47:00') //Posso inserir a data que quero como parâmetro
const present = new Date()

const difference = present.getTime() - past.getTime() //Compara a diferença em milessegundos entre a data atual e 01 de maio

console.log(difference)

const seconds = Math.round(difference / 1000) //diferença em segundo do momento atual com a data do passado(past)
console.log({ seconds })

const minutes = Math.round(seconds / 60)//diferença em minutos do momento atual com a data do passado(past)
console.log({ minutes })

const hours = Math.round(minutes / 60)//diferença em horas do momento atual com a data do passado(past)
console.log({ hours })

const days = Math.round(hours / 24)//diferença em dias do momento atual com a data do passado(past)
console.log({ days })

console.log(`Escrito há ${days}`)

// Convertendo um timesTamp em objeto de data
const timesTamp = 992261420213
console.log(new Date(timesTamp))