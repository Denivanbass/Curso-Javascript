// Exercício 02 - Desconto
function calcularDesconto(precoOriginal, desconto) {
    let porDesconto = desconto / 100
    let precoDesconto = precoOriginal * porDesconto
    return precoOriginal - precoDesconto
}
console.log('O valor com desconto foi: R$', calcularDesconto(1000, 10))