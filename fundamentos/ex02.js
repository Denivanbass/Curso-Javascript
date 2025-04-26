let compra = 600
let compraMinima = 500

let desconto = 0.20 || 20 / 100

let elegivel = compraMinima < compra 
// console.log (elegivel)

let valorDesconto = compra * desconto
let valorFinal = compra - valorDesconto
let faltaComprar = compraMinima - compra

// condição if/else
/* if (compraMinima <= compra) {
    return console.log('Você é elegível ao desconto.'), console.log('O seu desconto foi de : R$', valorDesconto)    
} else{
    console.log('Não elegível.'),console.log('Compre mais: R$', faltaComprar , 'para ganhar o desconto.')
} */

//Operador Ternário
compra >= compraMinima ? console.log('Ganhou desconto') : console.log('Não ganhou desconto.')