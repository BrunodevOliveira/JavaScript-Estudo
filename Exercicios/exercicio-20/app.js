/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/

/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/
const logMessage = message => {
  console.log(message)
}
const message = 'Um segundo e meio se passaram desde que a página foi carregada'
// setTimeout(logMessage, 1500, message)
setTimeout(console.log, 1500, message)

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')
const h1 = document.querySelector('h1')
const div = document.querySelector('.teste')

let timerID
const startCount = () => {
  const countId = setInterval(() => {
    const incrementedCounter = Number(h1.textContent) + 1
    h1.textContent = incrementedCounter
  }, 1000);

  timerID = countId
}

const stopCount = () => {
  clearInterval(timerID)
  h1.textContent = 0
}

buttonInitCounter.addEventListener('click', startCount)
buttonStopCounter.addEventListener('click', stopCount)

// div.addEventListener('click', event => {
//   const clickedElement = event.target.outerText
 
//   let counter = 1

//   const timerID = setInterval(() => {
//     h1.textContent = counter
//     counter++
//   }, 1000);
  
//   if(clickedElement === 'Parar contador') {
//     clearInterval(timerID)
//     h1.textContent = 0
//   }
// })



/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/

/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
