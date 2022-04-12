const paragraphs = document.querySelectorAll('p')
const paragraph = document.querySelector('p')

// console.log(paragraph.classList);

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

function addClassParagraphs() {

    paragraphs.forEach( p => {
        if(p.textContent.includes('error')){
            p.classList.add('error')
        }
    
        if(p.textContent.includes('error')) {
            p.classList.add('success')
        }
    })
}

// Quando o elemento não tem a classe que especificamos como argumento do método toggles, essa classe é adicionada no elemento
const title = document.querySelector('h1')
title.classList.toggle('test') //Adiciona a classe test
title.classList.toggle('test') // Como já existe essa classe no elemento title, o método irá remove-la
