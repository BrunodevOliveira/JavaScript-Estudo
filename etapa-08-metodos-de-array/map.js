//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                     método map()                                     //
//                                                                                      //
//--------------------------------------------------------------------------------------//
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
  if(product.price >= 30) {
    //  product.price = product.price / 2 => Dessa forma irá modificar nos dois arrays (products e saleProducts)
    //  pois estou referenciando o valor e não fzd uma copia dele
      //^ para evitar que isso aconteça devo retornar um novo objeto
    return { name: product.name, price: product.price / 2 }
  }

  return product
})
// console.log(products)
// console.log(saleProducts)

const saleProductsForEach = []

products.forEach(product => {
  if(product.price >= 30) {
    return saleProductsForEach.push({ name: product.name, price: product.price / 2 }) 
  }
  return saleProductsForEach.push(product)
})
