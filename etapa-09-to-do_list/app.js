const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  
  const newTodo = document.createElement('li')

  const inputValue = event.target.add.value.trim()

  if(inputValue.length) {
    newTodo.innerHTML =  `<span>${inputValue}</span> <i class="far fa-trash-alt delete"></i>`
    newTodo.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    todosContainer.prepend(newTodo)  
    event.target.reset()
  }
})