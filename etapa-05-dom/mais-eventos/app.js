const paragraph = document.querySelector('.copy-me')

//^ Evento que será disparado quando o usuário copiar algo
paragraph.addEventListener('copy', () => {
    
    console.log('Texto copiado!');

})

const div = document.querySelector('.box')

//^ Evento para quando o usuário movimentar o mouse
div.addEventListener('mousemove', event => {
    // OffsetX e OffsetY => Representam a posição do pixel em que o cursor do mouse está e essa contagem é feita a partir do canto superior esquerdo do elemento
    div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`
})

//^ Evento para quando o usuário rolar a página
document.addEventListener('wheel', event => {
    // pageX e pageY => representam a posição em relação a página do momento em que o usuário fez o scroll

    console.log(event.pageX, event.pageY)
})