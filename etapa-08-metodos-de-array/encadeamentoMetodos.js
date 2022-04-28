const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
  .filter(({ price }) => price > 20) //filtra o array
  .map(({ name, price }) => `O preço do livro "${name}" caiu para ${price} reais`) //Transforma o array de obj em array de string
  .reduce((acc, book) => `${acc}- ${book} \n`, '' ) //Transforma o array em string

  // console.log(booksOnSale)