const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const removeTodo = event => {
  const clickedElement = event.target
  const trashDataValue = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if(trashDataValue){
    todo.remove()
  }
}

const addTodo = event => {
  event.preventDefault()
  const inputValue = event.target.add.value.trim()

  if(inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>
    `
    event.target.reset()
  }
}

const filterTodos = (todos, inputValue, returnMatchedTodos) => todos
  .filter(todo => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTodos ? matchedTodos : !matchedTodos
  })

const manipulateClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach(todo => {
    todo.classList.remove(classToRemove)
    todo.classList.add(classToAdd)
  })
}

const hideTodos = (todos, inputValue) => {
  // Deixa os Todos que não dão match com o valor pesquisado invisíveis
  const todoToHide = filterTodos(todos, inputValue, false)
  manipulateClasses(todoToHide, 'd-none', 'd-flex')
}

const showTodos = (todos, inputValue) => {
  // Deixa os Todos que dão match com o valor pesquisado visíveis
  const todoToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todoToShow, 'd-flex', 'd-none')
}

const searchTodo = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  hideTodos(todos, inputValue)
  showTodos(todos, inputValue)
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
inputSearchTodo.addEventListener('input', searchTodo)