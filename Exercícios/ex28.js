// Cálculo de Preço por Unidade
function calcularPrecoporUnidade(precoTotal, quantidade) {
    let unidade = precoTotal / quantidade
    return console.log(`O preço por unidade é ${unidade.toFixed(2)}`)
}
calcularPrecoporUnidade(527, 10)