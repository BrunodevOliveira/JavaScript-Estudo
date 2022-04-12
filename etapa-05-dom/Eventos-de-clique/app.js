// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('Clicou no botão');
// })

const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach( li => {
    li.addEventListener('click', event => {
        const clickElement = event.target

        clickElement.remove()
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li') //Cria elemento
    li.textContent = 'Novo item' //Seta o conteúdo desse elemento
    ul.prepend(li) //insiro esse elemento no HTML
})