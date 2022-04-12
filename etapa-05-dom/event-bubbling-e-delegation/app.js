const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    ul.prepend(li)
})

// no lugar de associar o event listener diretamente as lis de uma lista, associamos na ul pai. O event.target irá mostrar a li que for clicada
ul.addEventListener('click', event => {
    const clickedElement = event.target

    // Verifica se o elemento clicado é uma LI
    if(clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})
    


/** Remove o item clicado da lista sem o uso de Event Delegation
 * const lis = document.querySelectorAll('li')

 *  lis.forEach(li => {
        li.addEventListener('click', event => {
            const clickedElement = event.target
            console.log('clicou na LI');

            event.stopPropagation()
            clickedElement.remove()
        })
    })
*/