const present = new Date()
console.log(present)
console.log('getFullYear:', present.getFullYear()) // 2022
console.log('getMonth:', present.getMonth()) // mês 4 (considerando Janeiro = 0)
console.log('getDate:', present.getDate()) // Dia do mês (considera o primeiro dia como  1)
console.log('getDay:', present.getDay()) // Dia da semana (considera domingo como 0)
console.log('getHours:', present.getHours()) // Retorna a hora (considerando 0)
console.log('getMinutes:', present.getMinutes()) // Retorna os minutos
console.log('getSeconds:', present.getSeconds()) // Retorna os segundos

console.log('timesTamp:', present.getTime()) //Milessegundos que se passaram desde 01/01/1970 até o momento atual

console.log('toDateString:', present.toDateString()) //Retorna a data atua como string
console.log('toTimeString:', present.toTimeString()) //Retorna a hora atual como string
console.log('toLocaleString:', present.toLocaleString()) //Retorna a data atual e as horas