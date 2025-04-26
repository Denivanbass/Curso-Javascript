let preco = 250
let desconto = 15 / 100 || 0.15

let valorDesconto = (preco * desconto)
let precoFinal = (preco - valorDesconto)
console.log('valor do desconto : R$', valorDesconto)
console.log('Preço Final : R$', precoFinal)



