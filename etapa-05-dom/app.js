/////////////////////////Query selector & query selector all/////////////////////////////

function query() {
    const h1 = document.querySelector('body > h1')
    const errors = document.querySelectorAll('.error')

    // console.log(h1)

    // const paragraphs = document.querySelectorAll('p')
    // console.log(Array.from(errors))
    // console.log(errors)
}


/////////////////////////Outras maneiras de fazer Queries no DOM/////////////////////////////

//Obter um elemento através do ID
const title = document.getElementById('title')

// console.log(title)

//Obter elementos através do nome da Classe
// const errors = document.getElementsByClassName('error')
// console.log(errors)

//Obter elementos através do nome da Tag
// const paragraphs = document.getElementsByTagName('p')

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                       Adicionando e modificando conteúdo HTML                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const paragraph = document.querySelector('p')
// console.log(paragraph.innerText);
// paragraph.innerText += ' Texto inserido'

const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//     paragraph.innerText+= ` Novo texto ${index + 1}` 
// })

const div = document.querySelector('.content')

div.innerHTML += '<h2>Novo  H2</h2>'

const people = ['Jonatan', 'Vinicius', 'Diego']

people.forEach( person => {
    div.innerHTML += `<p>${person}</p>`
})

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                           Obtendo e setando atributos HTML                           //
//                                                                                      //
//--------------------------------------------------------------------------------------//
function attributesHTML() {
    const link = document.querySelector('a')
    
    console.log(link.getAttribute('href'));

    link.setAttribute('href', 'https://twitter.com/home')
    link.innerText = 'Twitter'

    const paragraph = document.querySelector('p')

    paragraph.setAttribute('class', 'success')

    paragraph.setAttribute('style', 'color: green;')
}

// attributesHTML()

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                           Modificando estilos CSS (inline)                           //
//                                                                                      //
//--------------------------------------------------------------------------------------//

function modifyCSS() {
    const h1 = document.querySelector('h1')

    console.log(h1.style.color);

    h1.style.margin = '50px;'
    h1.style.color = 'pink;'
    h1.style.fontSize = '50px'
    console.log(h1.style.color);

}

modifyCSS() 