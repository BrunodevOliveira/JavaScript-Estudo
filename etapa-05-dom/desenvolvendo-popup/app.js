const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')


// Exibe o popup ao clicar no botão
button.addEventListener('click', () => {
    popup.style.display = 'block'
})


popup.addEventListener('click', event => {
   
    // Armazena a classe que o elemento clicado possui
    const classNameOfClickedElement = event.target.classList[0]
   
    // Se o elemento clicado possuir uma dessas classes, o popup deverá ser fechado.
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']

    // Some()=> irá iterar sobre o array verificando se pelo menos UM de seus elementos atende as condições que especificamos. Se atender retorna true, se não false
    const shouldClosePopup = classNames.some(className =>
        className === classNameOfClickedElement)

    if(shouldClosePopup){
        popup.style.display = 'none'
    }
})