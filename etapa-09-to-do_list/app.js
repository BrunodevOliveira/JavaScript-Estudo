const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')
const body = document.querySelector('body')

const editbutton = document.querySelector("[data-edit='Assistir Breaking Bad']")
const paragraph = document.createElement('p')

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

  const todoExist = [...todosContainer.children].some(({ outerText }) => outerText === inputValue)
  
  const todoTemplate = `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
    </li>`

  if(inputValue.length) {
    !todoExist ? todosContainer.innerHTML += todoTemplate : createAlertMessage()
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
  insertMessageTodoNotFound(todoToShow)
}

const insertMessageTodoNotFound = ({ length: quantityOfTodos }) => {
  const messageTodoNotExist = 'Não existe nenhum To-do na lista com essa palavra'
  const liTodo = document.querySelectorAll(`[data-todo="${messageTodoNotExist}"]`)
  
  if(!quantityOfTodos){
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${messageTodoNotExist}">
      <span>${messageTodoNotExist}</span>
    </li>`
  } 
  if(quantityOfTodos && liTodo){
    liTodo.forEach( li => li.remove())
  }
}

const createAlertMessage = () => {
  const label = document.querySelector('.msg-error')
  
  paragraph.textContent= `Todo já existe na lista`
  paragraph.classList.add('alert', 'alert-primary')
  paragraph.setAttribute('role', 'alert')
  label.insertAdjacentElement('afterend',paragraph )
  
  body.addEventListener('click', () => {
    document.querySelector('.alert').style.display = 'none'
  })
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


todosContainer.addEventListener('click', event => {
  const clickedElement = event.target
  const editDataValue = clickedElement.dataset.edit
  const contentTodo = clickedElement.parentElement.previousElementSibling
  console.log(editDataValue)
  if(editDataValue) {
    document.querySelector('.popup-wrapper').style.display = 'block'
  }
})

const closePopupEditTodo = document.querySelector(`[data-close]`)

closePopupEditTodo.addEventListener('click', () => {
  document.querySelector('.popup-wrapper').style.display = 'none'
})

const editTodoPopup = document.querySelector(`[data-save]`)

editTodoPopup.addEventListener('click', () => {

  editTodoPopup.previousElementSibling.value
  document.querySelector('.popup-wrapper').style.display = 'none'

})