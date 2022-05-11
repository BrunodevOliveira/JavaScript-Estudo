console.log(1)
console.log(2)

// é um codigo assíncrono
setTimeout(() => { 
  console.log('função de callback executada')
}, 2000)

console.log(3)
console.log(4)