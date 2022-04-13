const form = document.querySelector('.signup-form')
// const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    
    event.preventDefault() //Evita que o form seja enviado
    console.log(event.target.username.value);
})

const username = 'brunoo'
const pattern = /^[a-z]{6,}$/

//Testa se uma expressão regular atende o padrão estabelecido, retornando um boolean. Test é um método de Regex
// * Mai adequado para testar input de formulários
const isAMatch = pattern.test(username) 

if(isAMatch){
    console.log('o teste da regex passou =)');
} else {
    console.log('o teste da regex não passou');
}

// Testa se uma expressão regular atende o padrão estabelecido. É um método de string e retorna um número inteiro com o index onde o match aconteceu. 
//^ Se retornar -1 é pq não atendeu o padrão
//~ Se retornar outro número, ele irá corresponder ao index que deu match no padrão
const result = username.search(pattern) 

console.log(result);