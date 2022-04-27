// for(let i = 0; i < 5; i++) {
//     console.log(`Dentro do loop: ${i}`)
// }

const names = ["Linus", "Ada", "Bill"]

for(let i = 0; i < names.length; i++) {
    // console.log(i)
    // console.log(names[i])
    const HTMLTemplate = `<p>${names[i]}</p>`
    console.log(HTMLTemplate)
}