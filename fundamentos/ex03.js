// 1000 - 30%
// 500 a 1000 - 20%
// 200 a 500 - 10%
// < 200 - N/A

// O primeiro if deve ser o mais lógico.
compra = 1000
let desconto_30 = compra * 0.3
let desconto_20 = compra * 0.2
let desconto_10 = compra * 0.1


if (compra > 1000) {
    return console.log('Você recebeu 30% de desconto.'), console.log(' O seu desconto foi de R$', desconto_30)
} else if (compra >= 500 && compra <= 1000) {
    return  console.log('Você recebeu 20% de desconto.'), console.log(' O seu desconto foi de R$', desconto_20)
} else if(compra >=200 && compra < 500) {
    return  console.log('Você recebeu 10% de desconto.'), console.log(' O seu desconto foi de R$', desconto_10)
} else {
    return console.log('Compras abaixo de R$200 não ganham desconto.')
}
