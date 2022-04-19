const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

// Função que recebe o nome por parametro e retorna um boolean do resultado do teste desse nome com o padrão Regex criado
const testUsename = username => /^[a-zA-z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    
    event.preventDefault() //Evita que o form seja enviado

    const userName = event.target.username.value
    const isAValidUserName = testUsename(userName)

    if(isAValidUserName) {
        feedback.textContent = 'username válido =)'
        return
    }
    feedback.textContent = 'O username deve conter 6 a 12 caractéres e deve conter apenas letras'

})

// Acesso o input através de seu ID
form.username.addEventListener('keyup', event => {
    const username = event.target.value
    const isAValidUserName = testUsename(username)

    if(isAValidUserName) {
        form.username.setAttribute('class', 'success')
    } else if(username === ''){
        form.username.removeAttribute('class')
    } else {
        form.username.setAttribute('class', 'error')
    }
})