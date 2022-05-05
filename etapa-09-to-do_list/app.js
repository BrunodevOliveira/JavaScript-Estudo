const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()
  
  const newTodo = document.createElement('li')

  const inputValue = event.target.add.value.trim()

  if(inputValue.length) {
    newTodo.innerHTML =  `<span>${inputValue}</span> <i class="far fa-trash-alt delete"></i>`
    newTodo.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    todosContainer.append(newTodo)  
    event.target.reset()
  }
})

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  const classDeleteExist = [...clickedElement.classList].includes('delete')

  if(classDeleteExist){
    clickedElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue)) //As que não contem o valor do input
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('d-none')
    })
  
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue)) //As que contém o valor do input
    .forEach(todo => {
      todo.classList.remove('d-none')
      todo.classList.add('d-flex')
    })
})