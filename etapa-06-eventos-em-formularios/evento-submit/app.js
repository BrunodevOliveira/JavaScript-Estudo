const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    
    event.preventDefault() //Evita que o form seja enviado
    
    console.log(userNameInput.value) 
    console.log(form.username.value) //utilizando a propiedade ID
    console.log(form.username.value) //utilizando a propiedade name
    console.log(event.target.username.value) //utilizando o objeto event
})