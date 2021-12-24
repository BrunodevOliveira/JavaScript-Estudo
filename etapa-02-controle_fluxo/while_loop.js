const names = ["Jobs", "Hopper", "Turing"]
let i = 0

while (i < names.length) {
    const HTMLTemplate = `<p>${names[i]}</p>`
    console.log(HTMLTemplate)
    i++ //Para não ficar preso no loop infinito
}

//Exercícios estão na pasta 05