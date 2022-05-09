const present = new Date()

console.log(dateFns.format(present, 'MMMM')) //Mês por extenso => May
console.log(dateFns.format(present, 'DD/MM/YYYY')) // Data => 09/05/2022
console.log(dateFns.format(present, 'YY')) // Ano => 22
console.log(dateFns.format(present, 'dddd')) // Dia da semana => Monday
console.log(dateFns.format(present, 'Do')) // Dia do mês (ordinal) => 9th

const past = new Date('April 7 2019 17:00:00')

// Retorna a distância entre as datas que receber como argumento
console.log(dateFns.distanceInWords(present, past, { addSuffix: true })) 