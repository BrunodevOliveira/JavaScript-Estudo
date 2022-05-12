const request = new XMLHttpRequest()
const endPoint = 'https://jsonplaceholder.typicode.com/todos'

request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status === 200) {
    console.log(request)
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
